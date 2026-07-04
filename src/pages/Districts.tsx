import { useState } from "react";
import { Layout } from "@/components/layout/Layout";
import { MapPin, Church, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { SEO } from "@/components/SEO";

const districts = [
  {
    id: "milimani",
    name: "Milimani",
    description: "The heart of our parish, hosting our main worship center and administrative offices.",
    color: "from-primary to-primary/80",
  },
  {
    id: "london",
    name: "London",
    description: "A vibrant community known for its active youth programs and community outreach.",
    color: "from-accent to-accent/80",
  },
  {
    id: "medical",
    name: "Medical",
    description: "Serving healthcare professionals and families in the medical quarters with specialized ministry.",
    color: "from-emerald-600 to-emerald-700",
  },
  {
    id: "section-58",
    name: "Section 58",
    description: "A growing district with strong fellowship bonds and active home cell groups.",
    color: "from-amber-600 to-amber-700",
  },
  {
    id: "crater",
    name: "Crater",
    description: "Known for passionate worship and dedicated community service initiatives.",
    color: "from-rose-600 to-rose-700",
  },
  {
    id: "mt-olive",
    name: "Mt Olive",
    description: "A peaceful community fostering spiritual growth through Bible study and prayer.",
    color: "from-teal-600 to-teal-700",
  },
  {
    id: "rehoboth",
    name: "Rehoboth",
    description: "Named after the place of spaciousness, embracing all with open arms and hospitality.",
    color: "from-indigo-600 to-indigo-700",
  },
  {
    id: "jerusalem",
    name: "Jerusalem",
    description: "One of the founding districts, preserving our rich heritage while embracing modern ministry.",
    color: "from-purple-600 to-purple-700",
  },
  {
    id: "central",
    name: "Central",
    description: "A central fellowship of believers committed to discipleship, prayer, and community transformation.",
    color: "from-sky-600 to-sky-700",
  },
  {
    id: "baraka",
    name: "Baraka",
    description: "A district named after God's blessings, fostering unity and fellowship among members.",
    color: "from-orange-600 to-orange-700",
  },
  {
    id: "zaburi",
    name: "Zaburi",
    description: "Inspired by the Psalms, this district is passionate about worship, prayer, and praise.",
    color: "from-fuchsia-600 to-fuchsia-700",
  },
  {
    id: "diaspora",
    name: "Diaspora",
    description: "Serving members who are away from the church locality, staying connected through fellowship and digital platforms.",
    color: "from-cyan-600 to-cyan-700",
  },
];

export default function Districts() {
  const [activeDistrict, setActiveDistrict] = useState<string | null>(null);

  return (
    <Layout>
      <SEO title="Our 12 Districts | PCEA St. Ninians Nakuru" description="Discover the 12 districts of PCEA St. Ninians Millimani Parish, their meeting times and how to join fellowship near you." path="/districts" />
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-primary/10 via-secondary to-background overflow-hidden">
        <div className="absolute inset-0 bg-[url('/placeholder.svg')] opacity-5" />
        <div className="container-church relative z-10">
          <div className="text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6">
              <MapPin className="w-4 h-4" />
              Our Community
            </div>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              Explore Our <span className="text-primary">Districts</span>
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              PCEA St. Ninians Milimani Parish is organized into vibrant districts, 
              each with its own unique character and community. Hover over or tap to discover more about each district.
            </p>
          </div>
        </div>
      </section>

      {/* Districts Grid */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container-church">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {districts.map((district) => (
              <div
                key={district.id}
                className={cn(
                  "group relative rounded-2xl overflow-hidden cursor-pointer transition-all duration-500",
                  "bg-card border border-border hover:border-primary/50",
                  "hover:shadow-strong hover:-translate-y-2",
                  activeDistrict === district.id && "ring-2 ring-primary shadow-strong -translate-y-2"
                )}
                onMouseEnter={() => setActiveDistrict(district.id)}
                onMouseLeave={() => setActiveDistrict(null)}
                onTouchStart={() => setActiveDistrict(activeDistrict === district.id ? null : district.id)}
              >
                {/* Gradient Header */}
                <div className={cn(
                  "h-24 bg-gradient-to-br transition-all duration-500",
                  district.color,
                  "group-hover:h-28"
                )}>
                  <div className="absolute top-4 right-4 w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                    <Church className="w-6 h-6 text-white" />
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h2 className="font-serif text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                    {district.name}
                  </h2>
                  
                  <p className={cn(
                    "text-sm text-muted-foreground leading-relaxed transition-all duration-300",
                    "line-clamp-2 group-hover:line-clamp-none"
                  )}>
                    {district.description}
                  </p>


                  {/* Arrow indicator */}
                  <div className={cn(
                    "absolute bottom-4 right-4 w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center",
                    "opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-2 group-hover:translate-x-0"
                  )}>
                    <ArrowRight className="w-4 h-4 text-primary" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-br from-primary to-primary/90">
        <div className="container-church text-center">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
            Find Your Community
          </h2>
          <p className="text-primary-foreground/90 text-lg mb-8 max-w-2xl mx-auto">
            Each district holds regular fellowship meetings, prayer sessions, and community activities. 
            Connect with your local district and grow together in faith.
          </p>
          <a
            href="/contact"
            className="inline-flex items-center gap-2 bg-white text-primary px-8 py-4 rounded-full font-semibold hover:bg-white/90 transition-colors shadow-lg"
          >
            <MapPin className="w-5 h-5" />
            Contact Us to Learn More
          </a>
        </div>
      </section>
    </Layout>
  );
}
