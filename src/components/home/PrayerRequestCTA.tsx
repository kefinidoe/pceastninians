import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { HandHeart, ChevronRight } from "lucide-react";

export function PrayerRequestCTA() {
  return (
    <section className="section-padding bg-background">
      <div className="container-church">
        <div className="bg-secondary/50 rounded-2xl p-8 md:p-12 relative overflow-hidden animate-fade-up">
          {/* Background Accent */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
          
          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="flex items-start gap-5 max-w-2xl">
              <div className="w-14 h-14 bg-primary rounded-xl flex items-center justify-center flex-shrink-0">
                <HandHeart className="w-7 h-7 text-primary-foreground" />
              </div>
              <div>
                <h2 className="text-2xl sm:text-3xl font-serif font-bold text-foreground mb-3">
                  How Can We Pray For You?
                </h2>
                <p className="text-muted-foreground">
                  We believe in the power of prayer. Share your prayer request with us, 
                  and our prayer team will lift you up before the Lord. You can submit 
                  anonymously if you prefer.
                </p>
              </div>
            </div>
            <Link to="/prayer-request">
              <Button variant="cta" size="lg" className="group whitespace-nowrap">
                Submit Prayer Request
                <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
