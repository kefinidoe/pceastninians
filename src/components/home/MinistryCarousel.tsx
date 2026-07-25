import { useRef } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ChevronRight, ChevronLeft } from "lucide-react";
import churchSchool from "@/assets/church-school.jpg";
import womensGuild from "@/assets/womens-guild.jpg";
import mensFellowship from "@/assets/mens-fellowship.jpg";
import brigade from "@/assets/brigade.jpg";
import churchLeaders from "@/assets/church-leaders.jpg";
import youthFellowship from "@/assets/youth-fellowship.jpg";
import choir from "@/assets/choir.jpg";
import evangelism from "@/assets/evangelism-outreach.jpg";

const ministries = [
  {
    id: "session",
    title: "Session Office",
    image: churchLeaders,
  },
  {
    id: "womens-guild",
    title: "woman's Guild",
    image: womensGuild,
  },
  {
    id: "children",
    title: "Church School",
    image: churchSchool,
  },
  {
    id: "pcmf",
    title: "PCMF",
    image: mensFellowship,
  },
  {
    id: "brigade",
    title: "Brigade",
    image: brigade,
  },
  {
    id: "youth",
    title: "Youth Fellowship",
    image: youthFellowship,
  },
  {
    id: "choir",
    title: "Church Choir",
    image: choir,
  },
  {
    id: "evangelism",
    title: "Evangelism",
    image: evangelism,
  },
];

export function MinistryCarousel() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const scrollAmount = 320;
      scrollRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="section-padding bg-background overflow-hidden">
      <div className="container-church">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-10">
          <div>
            <p className="text-accent font-semibold text-sm uppercase tracking-wider mb-2">
              Get Involved
            </p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-foreground">
              Our Ministries
            </h2>
          </div>
          
          {/* Navigation Arrows */}
          <div className="flex gap-2">
            <button
              onClick={() => scroll("left")}
              className="w-12 h-12 rounded-full border-2 border-primary/20 flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-colors"
              aria-label="Scroll left"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={() => scroll("right")}
              className="w-12 h-12 rounded-full border-2 border-primary/20 flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-colors"
              aria-label="Scroll right"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>

      {/* Carousel */}
      <div
        ref={scrollRef}
        className="flex gap-6 overflow-x-auto scrollbar-hide px-4 sm:px-6 lg:px-8 pb-4 snap-x snap-mandatory"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        {/* Add left padding for container alignment */}
        <div className="flex-shrink-0 w-[calc((100vw-1280px)/2)] max-w-[calc((100vw-1280px)/2)] min-w-0 hidden xl:block" />
        
        {ministries.map((ministry) => (
          <Link
            key={ministry.id}
            to={`/ministries#${ministry.id}`}
            className="flex-shrink-0 w-72 group snap-start"
          >
            <div className="relative h-80 rounded-2xl overflow-hidden shadow-soft hover:shadow-strong transition-all duration-300">
              <img
                src={ministry.image}
                alt={ministry.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              
              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <h3 className="font-serif font-bold text-xl text-white group-hover:text-accent transition-colors">
                  {ministry.title}
                </h3>
                <div className="flex items-center gap-2 mt-2 text-white/70 group-hover:text-white transition-colors">
                  <span className="text-sm">Learn more</span>
                  <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </div>
          </Link>
        ))}
        
        {/* Add right padding for container alignment */}
        <div className="flex-shrink-0 w-[calc((100vw-1280px)/2)] max-w-[calc((100vw-1280px)/2)] min-w-0 hidden xl:block" />
      </div>

      {/* CTA */}
      <div className="container-church mt-10 text-center">
        <Link to="/ministries">
          <Button variant="default" size="lg" className="group">
            View All Ministries
            <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Button>
        </Link>
      </div>
    </section>
  );
}
