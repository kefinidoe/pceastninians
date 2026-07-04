const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

const CHANNEL_HANDLE = '@PCEAST.NINIANSCHURCHNAKURU';
const CACHE_TTL = 5 * 60 * 1000; // 5 minutes cache
const MAX_RESULTS_LIMIT = 50; // Maximum allowed videos per request
const DEFAULT_MAX_RESULTS = 6;

// In-memory cache for rate limiting and reducing API calls
interface CacheEntry {
  data: any;
  timestamp: number;
}
const cache = new Map<string, CacheEntry>();

Deno.serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const apiKey = Deno.env.get('YOUTUBE_API_KEY');
    if (!apiKey) {
      console.error('YOUTUBE_API_KEY not configured');
      return new Response(
        JSON.stringify({ success: false, error: 'Service temporarily unavailable' }),
        { status: 503, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    // Parse and validate maxResults parameter
    const { searchParams } = new URL(req.url);
    const rawMaxResults = searchParams.get('maxResults');
    let maxResults = DEFAULT_MAX_RESULTS;
    
    if (rawMaxResults !== null) {
      const parsed = parseInt(rawMaxResults, 10);
      if (isNaN(parsed) || parsed < 1) {
        console.warn('Invalid maxResults parameter:', rawMaxResults);
        return new Response(
          JSON.stringify({ success: false, error: 'Invalid request parameter' }),
          { status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
        );
      }
      // Clamp to maximum allowed value
      maxResults = Math.min(parsed, MAX_RESULTS_LIMIT);
    }

    // Check cache first
    const cacheKey = `videos_${maxResults}`;
    const cached = cache.get(cacheKey);
    if (cached && Date.now() - cached.timestamp < CACHE_TTL) {
      console.log('Returning cached response for', maxResults, 'videos');
      return new Response(
        JSON.stringify(cached.data),
        { headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    console.log('Fetching channel info for:', CHANNEL_HANDLE);

    // First, get the channel ID from the handle
    const channelResponse = await fetch(
      `https://www.googleapis.com/youtube/v3/channels?part=contentDetails&forHandle=${CHANNEL_HANDLE.replace('@', '')}&key=${apiKey}`
    );
    
    const channelData = await channelResponse.json();
    console.log('Channel data:', JSON.stringify(channelData));

    if (!channelData.items || channelData.items.length === 0) {
      console.error('Channel not found for handle:', CHANNEL_HANDLE);
      return new Response(
        JSON.stringify({ success: false, error: 'Unable to load videos. Please try again later.' }),
        { status: 503, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    const uploadsPlaylistId = channelData.items[0].contentDetails.relatedPlaylists.uploads;
    console.log('Uploads playlist ID:', uploadsPlaylistId);

    // Get the latest videos from the uploads playlist
    const videosResponse = await fetch(
      `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet,contentDetails&playlistId=${uploadsPlaylistId}&maxResults=${maxResults}&key=${apiKey}`
    );

    const videosData = await videosResponse.json();
    console.log('Videos fetched:', videosData.items?.length || 0);

    if (!videosData.items) {
      const emptyResult = { success: true, videos: [] };
      cache.set(cacheKey, { data: emptyResult, timestamp: Date.now() });
      return new Response(
        JSON.stringify(emptyResult),
        { headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    // Get video statistics (views, likes) for each video
    const videoIds = videosData.items.map((item: any) => item.contentDetails.videoId).join(',');
    
    const statsResponse = await fetch(
      `https://www.googleapis.com/youtube/v3/videos?part=statistics,contentDetails&id=${videoIds}&key=${apiKey}`
    );
    const statsData = await statsResponse.json();

    // Create a map of video stats
    const statsMap = new Map();
    statsData.items?.forEach((item: any) => {
      statsMap.set(item.id, {
        viewCount: item.statistics.viewCount,
        likeCount: item.statistics.likeCount,
        duration: item.contentDetails.duration,
      });
    });

    // Format the videos data
    const videos = videosData.items.map((item: any) => {
      const videoId = item.contentDetails.videoId;
      const stats = statsMap.get(videoId) || {};
      
      // Parse ISO 8601 duration to readable format
      const duration = stats.duration || 'PT0M0S';
      const match = duration.match(/PT(?:(\d+)H)?(?:(\d+)M)?(?:(\d+)S)?/);
      const hours = match?.[1] ? parseInt(match[1]) : 0;
      const minutes = match?.[2] ? parseInt(match[2]) : 0;
      const seconds = match?.[3] ? parseInt(match[3]) : 0;
      const durationStr = hours > 0 
        ? `${hours}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`
        : `${minutes}:${seconds.toString().padStart(2, '0')}`;

      return {
        id: videoId,
        title: item.snippet.title,
        description: item.snippet.description,
        thumbnail: item.snippet.thumbnails.high?.url || item.snippet.thumbnails.medium?.url || item.snippet.thumbnails.default?.url,
        publishedAt: item.snippet.publishedAt,
        channelTitle: item.snippet.channelTitle,
        viewCount: stats.viewCount,
        likeCount: stats.likeCount,
        duration: durationStr,
      };
    });

    console.log('Returning', videos.length, 'videos');

    const result = { success: true, videos };
    
    // Cache the result
    cache.set(cacheKey, { data: result, timestamp: Date.now() });

    return new Response(
      JSON.stringify(result),
      { headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );
  } catch (error) {
    console.error('Error fetching YouTube videos:', error instanceof Error ? error.message : error);
    return new Response(
      JSON.stringify({ success: false, error: 'Unable to load videos. Please try again later.' }),
      { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );
  }
});
