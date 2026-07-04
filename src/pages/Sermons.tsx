import { useState, useEffect } from "react";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Play, Calendar, Clock, Search, Youtube, Eye, Loader2 } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { SEO } from "@/components/SEO";

interface YouTubeVideo {
  id: string;
  title: string;
  description: string;
  thumbnail: string;
  publishedAt: string;
  channelTitle: string;
  viewCount: string;
  likeCount: string;
  duration: string;
}

export default function Sermons() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedVideo, setSelectedVideo] = useState<YouTubeVideo | null>(null);
  const [videos, setVideos] = useState<YouTubeVideo[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchYouTubeVideos();
  }, []);

  const fetchYouTubeVideos = async () => {
    try {
      setLoading(true);
      setError(null);
      
      const { data, error: fnError } = await supabase.functions.invoke('youtube-videos', {
        body: {},
      });

      if (fnError) {
        console.error('Error fetching videos:', fnError);
        setError('Failed to load videos. Please try again later.');
        return;
      }

      if (data?.success && data?.videos) {
        setVideos(data.videos);
        // Auto-select the first video for the featured player
        if (data.videos.length > 0 && !selectedVideo) {
          setSelectedVideo(data.videos[0]);
        }
      } else {
        setError(data?.error || 'Failed to load videos');
      }
    } catch (err) {
      console.error('Error:', err);
      setError('Failed to load videos. Please try again later.');
    } finally {
      setLoading(false);
    }
  };

  const filteredVideos = videos.filter((video) =>
    video.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };

  const formatViewCount = (count: string) => {
    const num = parseInt(count);
    if (num >= 1000000) return `${(num / 1000000).toFixed(1)}M views`;
    if (num >= 1000) return `${(num / 1000).toFixed(1)}K views`;
    return `${num} views`;
  };

  return (
    <Layout>
      <SEO title="Sermons & Messages | PCEA St. Ninians Nakuru" description="Watch recent sermons and worship messages from PCEA St. Ninians Church Nakuru on our YouTube channel." path="/sermons" />
      {/* Hero */}
      <section className="relative py-24 md:py-32 bg-primary overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-white rounded-full blur-3xl" />
        </div>
        <div className="container-church relative z-10">
          <div className="max-w-3xl animate-fade-up">
            <p className="text-accent font-semibold text-sm uppercase tracking-wider mb-4">
              Watch & Listen
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-primary-foreground mb-6">
              Sermons
            </h1>
            <p className="text-xl text-white/85 leading-relaxed">
              Catch up on messages you may have missed or revisit your favorites. 
              Be encouraged by the Word of God.
            </p>
          </div>
        </div>
      </section>

      {/* Livestream Banner */}
      <section className="bg-accent py-4">
        <div className="container-church">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-accent-foreground">
            <div className="flex items-center gap-3">
              <div className="w-3 h-3 bg-white rounded-full animate-pulse-gentle" />
              <span className="font-semibold">Watch Live Every Sunday at 8:30 AM</span>
            </div>
            <a
              href="https://www.youtube.com/@PCEAST.NINIANSCHURCHNAKURU"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-white text-accent px-4 py-2 rounded-lg font-semibold hover:bg-white/90 transition-colors"
            >
              <Youtube className="w-5 h-5" />
              Watch on YouTube
            </a>
          </div>
        </div>
      </section>

      {/* Search */}
      <section className="py-8 bg-background border-b border-border">
        <div className="container-church">
          <div className="relative max-w-xl">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
            <input
              type="text"
              placeholder="Search sermons by title..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-3 rounded-lg border border-border bg-card text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>
        </div>
      </section>

      {/* Featured Video Player */}
      {selectedVideo && (
        <section className="section-padding bg-secondary/30">
          <div className="container-church">
            <div className="max-w-5xl mx-auto animate-fade-up">
              <div className="bg-card rounded-2xl overflow-hidden shadow-strong">
                <div className="aspect-video">
                  <iframe
                    width="100%"
                    height="100%"
                    src={`https://www.youtube.com/embed/${selectedVideo.id}`}
                    title={selectedVideo.title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="w-full h-full"
                  />
                </div>
                <div className="p-6">
                  <h2 className="text-2xl font-serif font-bold text-foreground mb-3">
                    {selectedVideo.title}
                  </h2>
                  <div className="flex flex-wrap items-center gap-4 text-muted-foreground mb-4">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      {formatDate(selectedVideo.publishedAt)}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      {selectedVideo.duration}
                    </span>
                    {selectedVideo.viewCount && (
                      <span className="flex items-center gap-1">
                        <Eye className="w-4 h-4" />
                        {formatViewCount(selectedVideo.viewCount)}
                      </span>
                    )}
                  </div>
                  {selectedVideo.description && (
                    <p className="text-muted-foreground line-clamp-3">
                      {selectedVideo.description}
                    </p>
                  )}
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Videos Grid */}
      <section className="section-padding bg-background">
        <div className="container-church">
          <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-6 mb-12">
            <div className="animate-fade-up">
              <p className="text-accent font-semibold text-sm uppercase tracking-wider mb-3">
                From Our YouTube Channel
              </p>
              <h2 className="text-3xl sm:text-4xl font-serif font-bold text-foreground">
                Latest Videos
              </h2>
            </div>
            <a
              href="https://www.youtube.com/@PCEAST.NINIANSCHURCHNAKURU"
              target="_blank"
              rel="noopener noreferrer"
              className="animate-fade-up animation-delay-200"
            >
              <Button variant="outline" className="gap-2">
                <Youtube className="w-4 h-4" />
                Subscribe on YouTube
              </Button>
            </a>
          </div>

          {loading ? (
            <div className="flex items-center justify-center py-16">
              <Loader2 className="w-8 h-8 animate-spin text-primary" />
              <span className="ml-3 text-muted-foreground">Loading videos...</span>
            </div>
          ) : error ? (
            <div className="text-center py-16">
              <p className="text-muted-foreground text-lg mb-4">{error}</p>
              <Button variant="outline" onClick={fetchYouTubeVideos}>
                Try Again
              </Button>
            </div>
          ) : (
            <>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredVideos.map((video, index) => (
                  <div
                    key={video.id}
                    className={`group bg-card rounded-xl overflow-hidden shadow-soft hover:shadow-strong transition-all duration-300 animate-fade-up cursor-pointer hover-lift ${
                      selectedVideo?.id === video.id ? 'ring-2 ring-primary' : ''
                    }`}
                    style={{ animationDelay: `${index * 50}ms` }}
                    onClick={() => setSelectedVideo(video)}
                  >
                    {/* Thumbnail */}
                    <div className="relative aspect-video overflow-hidden">
                      <img
                        src={video.thumbnail}
                        alt={video.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-primary/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                        <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center shadow-strong">
                          <Play className="w-6 h-6 text-accent-foreground ml-1" />
                        </div>
                      </div>
                      <div className="absolute top-3 right-3 bg-primary/80 text-primary-foreground text-xs px-2 py-1 rounded">
                        {video.duration}
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-5">
                      <h3 className="font-serif font-semibold text-lg text-foreground mb-3 line-clamp-2 group-hover:text-primary transition-colors">
                        {video.title}
                      </h3>
                      <div className="flex items-center gap-4 text-sm text-muted-foreground">
                        <span className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          {formatDate(video.publishedAt)}
                        </span>
                      </div>
                      {video.viewCount && (
                        <div className="flex items-center gap-1 text-xs text-muted-foreground mt-2">
                          <Eye className="w-3 h-3" />
                          {formatViewCount(video.viewCount)}
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {filteredVideos.length === 0 && (
                <div className="text-center py-16">
                  <p className="text-muted-foreground text-lg">No videos found matching your search.</p>
                  <Button
                    variant="outline"
                    className="mt-4"
                    onClick={() => setSearchQuery("")}
                  >
                    Clear Search
                  </Button>
                </div>
              )}
            </>
          )}
        </div>
      </section>
    </Layout>
  );
}
