import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Play, ChevronRight, Calendar, Eye, Loader2 } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";

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

export function SermonPreview() {
  const [videos, setVideos] = useState<YouTubeVideo[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchYouTubeVideos();
  }, []);

  const fetchYouTubeVideos = async () => {
    try {
      setLoading(true);
      
      const { data, error } = await supabase.functions.invoke('youtube-videos', {
        body: {},
      });

      if (error) {
        console.error('Error fetching videos:', error);
        return;
      }

      if (data?.success && data?.videos) {
        // Only show first 3 videos on homepage
        setVideos(data.videos.slice(0, 3));
      }
    } catch (err) {
      console.error('Error:', err);
    } finally {
      setLoading(false);
    }
  };

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
    <section className="section-padding bg-secondary/30">
      <div className="container-church">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-6 mb-12">
          <div className="animate-fade-up">
            <p className="text-accent font-semibold text-sm uppercase tracking-wider mb-3">
              Watch & Listen
            </p>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-foreground">
              Latest Sermons
            </h2>
          </div>
          <Link to="/sermons" className="animate-fade-up animation-delay-200">
            <Button variant="outline" className="group">
              View All Sermons
              <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </div>

        {/* Sermons Grid */}
        {loading ? (
          <div className="flex items-center justify-center py-16">
            <Loader2 className="w-8 h-8 animate-spin text-primary" />
            <span className="ml-3 text-muted-foreground">Loading sermons...</span>
          </div>
        ) : videos.length > 0 ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {videos.map((video, index) => (
              <a
                key={video.id}
                href={`https://www.youtube.com/watch?v=${video.id}`}
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-card rounded-xl overflow-hidden shadow-soft hover:shadow-strong transition-all duration-300 animate-fade-up hover-lift"
                style={{ animationDelay: `${index * 100}ms` }}
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
              </a>
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <p className="text-muted-foreground">No sermons available at the moment.</p>
          </div>
        )}

        {/* Livestream Notice */}
        <div className="mt-12 bg-card rounded-xl p-6 md:p-8 shadow-soft animate-fade-up animation-delay-400">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-4">
              <div className="w-3 h-3 bg-accent rounded-full animate-pulse-gentle" />
              <div>
                <h3 className="font-semibold text-foreground">Watch Live Every Sunday</h3>
                <p className="text-sm text-muted-foreground">
                  Join our 10:30 AM service livestream on YouTube
                </p>
              </div>
            </div>
            <a
              href="https://www.youtube.com/@PCEAST.NINIANSCHURCHNAKURU"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button variant="cta">
                Watch Live
              </Button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
