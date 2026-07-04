import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Clock, MapPin, ChevronRight } from "lucide-react";
import heroImage from "@/assets/hero-congregation.jpg";

export function HeroSection() {
  return (
    <section className="relative min-h-[90vh] flex items-center">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="PCEA St. Ninians Congregation during Sunday worship"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/70 to-primary/50" />
      </div>

      {/* Content */}
      <div className="container-church relative z-10 py-20">
        <div className="max-w-2xl space-y-8 animate-fade-up">
          {/* Welcome Badge */}
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full border border-white/20">
            <span className="w-2 h-2 bg-accent rounded-full animate-pulse-gentle" />
            <span className="text-white/90 text-sm font-medium">Welcome to Our Church Family</span>
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif font-bold text-white leading-tight">
            A Place of Faith,{" "}
            <span className="text-white/90">Hope & Community</span>
          </h1>

          {/* Subtitle */}
          <p className="text-lg sm:text-xl text-white/85 leading-relaxed max-w-xl">
            Join our warm and welcoming congregation at PCEA St. Ninians Millimani Parish, 
            where we grow together in God's love and grace.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-4 pt-2">
            <Link to="/services">
              <Button variant="cta" size="xl" className="group">
                Join Us This Sunday
                <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
            <Link to="/about">
              <Button variant="hero" size="xl">
                Learn More
              </Button>
            </Link>
          </div>
        </div>
      </div>

      {/* Quick Info Bar */}
      <div className="absolute bottom-0 left-0 right-0 bg-white/95 backdrop-blur-md border-t border-border">
        <div className="container-church py-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {/* Service Times */}
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-secondary rounded-xl flex items-center justify-center flex-shrink-0">
                <Clock className="w-6 h-6 text-primary" />
              </div>
              <div>
                <p className="font-semibold text-foreground">Sunday Services</p>
                <p className="text-sm text-muted-foreground">8:00 AM & 10:30 AM</p>
              </div>
            </div>

            {/* Location */}
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-secondary rounded-xl flex items-center justify-center flex-shrink-0">
                <MapPin className="w-6 h-6 text-primary" />
              </div>
              <div>
                <p className="font-semibold text-foreground">Near Showgrounds</p>
                <p className="text-sm text-muted-foreground">Millimani, Nakuru</p>
              </div>
            </div>

            {/* Quick Link */}
            <div className="flex items-center md:justify-end">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 text-primary font-semibold hover:underline underline-offset-4"
              >
                Get Directions
                <ChevronRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
