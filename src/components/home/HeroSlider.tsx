import { useState, useEffect, useCallback } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ChevronRight, ChevronLeft } from "lucide-react";
import pastorPreaching from "@/assets/pastor-preaching.jpg";
import congregationWorship from "@/assets/congregation-worship.jpg";
import churchExterior from "@/assets/church-exterior.jpg";

const slides = [
  {
    image: pastorPreaching,
    badge: "2026 Theme",
    title: "KNOW YOUR GOD, BE STRONG, DO EXPLOITS",
    subtitle: "But the people that do know their God shall be strong, and do exploits.",
    verse: "Daniel 11:32",
    primaryCta: { text: "Join Us This Sunday", href: "/services" },
    secondaryCta: { text: "Our Ministries", href: "/ministries" },
  },
  {
    image: congregationWorship,
    badge: "Welcome",
    title: "A PLACE OF HOPE & PURPOSE",
    subtitle: "Visit and become a part of something bigger — a movement that is changing lives through faith and fellowship.",
    verse: "",
    primaryCta: { text: "About Us", href: "/about" },
    secondaryCta: { text: "Contact Us", href: "/contact" },
  },
  {
    image: churchExterior,
    badge: "Visit Us",
    title: "PCEA ST. NINIAN'S CHURCH",
    subtitle: "Located near Showgrounds in Millimani, Nakuru. Our doors are always open to welcome you into God's family.",
    verse: "",
    primaryCta: { text: "Get Directions", href: "/contact" },
    secondaryCta: { text: "Service Times", href: "/services" },
  },
];

export function HeroSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const nextSlide = useCallback(() => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentSlide((prev) => (prev + 1) % slides.length);
    setTimeout(() => setIsTransitioning(false), 600);
  }, [isTransitioning]);

  const prevSlide = useCallback(() => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    setTimeout(() => setIsTransitioning(false), 600);
  }, [isTransitioning]);

  useEffect(() => {
    const timer = setInterval(nextSlide, 4000);
    return () => clearInterval(timer);
  }, [nextSlide]);

  const slide = slides[currentSlide];

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Images */}
      {slides.map((s, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-700 ${
            index === currentSlide ? "opacity-100" : "opacity-0"
          }`}
        >
          <img
            src={s.image}
            alt=""
            loading={index === 0 ? "eager" : "lazy"}
            fetchPriority={index === 0 ? "high" : "auto"}
            decoding="async"
            className="w-full h-full object-cover scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-black/20 to-transparent" />
        </div>
      ))}

      {/* Content */}
      <div className="container-church relative z-10 py-20 flex items-center justify-center">
        <div className="max-w-3xl space-y-5 text-center flex flex-col items-center">
          {/* Badge */}
          <div
            className={`inline-flex items-center gap-2 bg-accent/90 backdrop-blur-sm px-5 py-2 rounded-full transition-opacity duration-500 ease-in-out ${
              isTransitioning ? "opacity-0" : "opacity-100"
            }`}
          >
            <span className="w-1.5 h-1.5 bg-accent-foreground rounded-full" />
            <span className="text-accent-foreground text-xs font-semibold uppercase tracking-widest">
              {slide.badge}
            </span>
          </div>

          {/* Title (h2 - page already has an h1 for SEO) */}
          <h2
            className={`text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-serif font-bold text-white leading-tight drop-shadow-lg transition-all duration-500 ease-in-out delay-75 ${
              isTransitioning ? "opacity-0 translate-y-3" : "opacity-100 translate-y-0"
            }`}
          >
            {slide.title}
          </h2>

          {/* Subtitle */}
          <p
            className={`text-lg sm:text-xl text-white/90 leading-relaxed max-w-2xl drop-shadow-md transition-all duration-500 ease-in-out delay-150 ${
              isTransitioning ? "opacity-0 translate-y-3" : "opacity-100 translate-y-0"
            }`}
          >
            {slide.subtitle}
            {slide.verse && (
              <span className="block mt-3 text-accent font-semibold text-lg">{slide.verse}</span>
            )}
          </p>

          {/* CTA Buttons */}
          <div
            className={`flex flex-wrap justify-center gap-4 pt-4 transition-all duration-500 ease-in-out delay-200 ${
              isTransitioning ? "opacity-0 translate-y-3" : "opacity-100 translate-y-0"
            }`}
          >
            <Link to={slide.primaryCta.href}>
              <Button variant="cta" size="xl" className="group shadow-lg">
                {slide.primaryCta.text}
                <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
            <Link to={slide.secondaryCta.href}>
              <Button variant="hero" size="xl">
                {slide.secondaryCta.text}
              </Button>
            </Link>
          </div>
        </div>
      </div>

      {/* Side Arrows - vertically centered on slide content, above info bar */}
      <button
        onClick={prevSlide}
        className="hidden sm:flex absolute left-4 md:left-6 top-1/2 -translate-y-[60%] z-20 w-11 h-11 md:w-12 md:h-12 rounded-full bg-white/15 hover:bg-white/30 backdrop-blur-sm items-center justify-center text-white transition-colors shadow-lg"
        aria-label="Previous slide"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>
      <button
        onClick={nextSlide}
        className="hidden sm:flex absolute right-4 md:right-6 top-1/2 -translate-y-[60%] z-20 w-11 h-11 md:w-12 md:h-12 rounded-full bg-white/15 hover:bg-white/30 backdrop-blur-sm items-center justify-center text-white transition-colors shadow-lg"
        aria-label="Next slide"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Slide Dots - centered above info bar */}
      <div className="absolute bottom-32 md:bottom-28 left-1/2 -translate-x-1/2 z-20 flex items-center gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              if (!isTransitioning) {
                setIsTransitioning(true);
                setCurrentSlide(index);
                setTimeout(() => setIsTransitioning(false), 600);
              }
            }}
            className={`h-2 rounded-full transition-all duration-300 ${
              index === currentSlide
                ? "w-8 bg-accent"
                : "w-2 bg-white/50 hover:bg-white/70"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Quick Info Bar */}
      <div className="absolute bottom-0 left-0 right-0 bg-white border-t border-border">
        <div className="container-church py-5">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8 text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-3">
              <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                <span className="text-white font-bold">⏰</span>
              </div>
              <div>
                <p className="font-semibold text-foreground text-sm">English Service: 8:30 AM</p>
                <p className="text-xs text-muted-foreground">Kiswahili Service: 10:30 AM • Every Sunday</p>
              </div>
            </div>
            <div className="flex items-center justify-center md:justify-start gap-3">
              <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                <span className="text-white font-bold">📍</span>
              </div>
              <div>
                <p className="font-semibold text-foreground text-sm font-bold">Near Showgrounds</p>
                <p className="text-xs text-muted-foreground">Millimani, Nakuru</p>
              </div>
            </div>
            <div className="flex items-center justify-center md:justify-end">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 text-primary font-semibold text-sm hover:underline underline-offset-4"
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
