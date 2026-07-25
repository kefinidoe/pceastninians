import { useState } from "react";
import { Layout } from "@/components/layout/Layout";
import { MapPin, Church, Calendar, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { SEO } from "@/components/SEO";

const districts = [
  {
    id: "milimani",
    name: "Milimani",
    description: "The heart of our parish, hosting our main worship center and administrative offices.",
    color: "from-primary to-primary/80",
    meetingDay: "Thursday",
    meetingIcon: "🏛️",
  },
  {
    id: "baraka",
    name: "Baraka",
    description: "A district named after God's blessings, fostering unity and fellowship among members.",
    color: "from-orange-600 to-orange-700",
    meetingDay: "Thursday",
    meetingIcon: "🌟",
  },
  {
    id: "diaspora",
    name: "Diaspora",
    description: "Serving members away from the church locality, staying connected through fellowship and digital platforms.",
    color: "from-cyan-600 to-cyan-700",
    meetingDay: "Thursday",
    meetingIcon: "🌍",
  },
  {
    id: "london",
    name: "London",
    description: "A vibrant community known for its active youth programs and community outreach.",
    color: "from-accent to-accent/80",
    meetingDay: "Sunday",
    meetingIcon: "🏘️",
  },
  {
    id: "medical",
    name: "Medical",
    description: "Serving healthcare professionals and families in the medical quarters with specialized ministry.",
    color: "from-emerald-600 to-emerald-700",
    meetingDay: "Sunday",
    meetingIcon: "🏥",
  },
  {
    id: "section-58",
    name: "Section 58",
    description: "A growing district with strong fellowship bonds and active home cell groups.",
    color: "from-amber-600 to-amber-700",
    meetingDay: "Sunday",
    meetingIcon: "🏠",
  },
  {
    id: "crater",
    name: "Crater",
    description: "Known for passionate worship and dedicated community service initiatives.",
    color: "from-rose-600 to-rose-700",
    meetingDay: "Tuesday",
    meetingIcon: "⛰️",
  },
  {
    id: "rehoboth",
    name: "Rehoboth",
    description: "Named after the place of spaciousness, embracing all with open arms and hospitality.",
    color: "from-indigo-600 to-indigo-700",
    meetingDay: "Tuesday",
    meetingIcon: "🕊️",
  },
  {
    id: "mt-olive",
    name: "Mt Olive",
    description: "A peaceful community fostering spiritual growth through Bible study and prayer.",
    color: "from-teal-600 to-teal-700",
    meetingDay: "Friday",
    meetingIcon: "🌿",
  },
  {
    id: "zaburi",
    name: "Zaburi",
    description: "Inspired by the Psalms, this district is passionate about worship, prayer, and praise.",
    color: "from-fuchsia-600 to-fuchsia-700",
    meetingDay: "Friday",
    meetingIcon: "🎵",
  },
  {
    id: "jerusalem",
    name: "Jerusalem",
    description: "One of the founding districts, preserving our rich heritage while embracing modern ministry.",
    color: "from-purple-600 to-purple-700",
    meetingDay: "Sunday",
    meetingIcon: "✝️",
  },
  {
    id: "central",
    name: "Central",
    description: "A central fellowship of believers committed to discipleship, prayer, and community transformation.",
    color: "from-sky-600 to-sky-700",
    meetingDay: "Saturday",
    meetingIcon: "🏙️",
  },
];

const dayColors: Record<string, string> = {
  Thursday: "bg-blue-100 text-blue-700",
  Sunday: "bg-purple-100 text-purple-700",
  Tuesday: "bg-rose-100 text-rose-700",
  Friday: "bg-green-100 text-green-700",
  Saturday: "bg-amber-100 text-amber-700",
};

// Group districts by meeting day
const meetingDays = ["Sunday", "Tuesday", "Thursday", "Friday", "Saturday"];

export default function Districts() {
  const [activeDistrict, setActiveDistrict] = useState<string | null>(null);

  return (
    <Layout>
      <SEO
        title="Our 12 Districts | PCEA St. Ninians Nakuru"
        description="Discover the 12 districts of PCEA St. Ninians Millimani Parish, their meeting times and how to join fellowship near you."
        path="/districts"
      />

      {/* Hero Section */}
      <section className="relative py-24 md:py-32 bg-primary overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-white rounded-full blur-3xl" />
        </div>
        <div className="container-church relative z-10">
          <div className="max-w-3xl animate-fade-up">
            <p className="text-accent font-semibold text-sm uppercase tracking-wider mb-4">
              Our Community
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-primary-foreground mb-6">
              Our Districts
            </h1>
            <p className="text-xl text-white/85 leading-relaxed">
              PCEA St. Ninians Millimani Parish is organized into 12 vibrant
              districts, each with its own unique character, community, and
              weekly fellowship meeting.
            </p>
          </div>
        </div>
      </section>

      {/* Meeting Schedule Summary */}
      <section className="bg-secondary/50 py-10 border-b border-border">
        <div className="container-church">
          <div className="text-center mb-8 animate-fade-up">
            <p className="text-accent font-semibold text-sm uppercase tracking-wider mb-2">
              Weekly Schedule
            </p>
            <h2 className="text-2xl font-serif font-bold text-foreground">
              District Meeting Days
            </h2>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 max-w-4xl mx-auto">
            {meetingDays.map((day) => {
              const dayDistricts = districts.filter((d) => d.meetingDay === day);
              return (
                <div
                  key={day}
                  className="bg-card rounded-xl p-4 text-center shadow-soft border border-border/50 animate-fade-up"
                >
                  <div className={cn("inline-block text-xs font-bold px-3 py-1 rounded-full mb-3", dayColors[day])}>
                    {day}
                  </div>
                  <div className="space-y-1">
                    {dayDistricts.map((d) => (
                      <p key={d.id} className="text-xs text-muted-foreground flex items-center justify-center gap-1">
                        <span>{d.meetingIcon}</span>
                        <span>{d.name}</span>
                      </p>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Districts Grid */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container-church">
          <div className="text-center max-w-2xl mx-auto mb-12 animate-fade-up">
            <p className="text-accent font-semibold text-sm uppercase tracking-wider mb-3">
              All Districts
            </p>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-foreground mb-4">
              Find Your District
            </h2>
            <p className="text-muted-foreground">
              Hover over or tap a district card to learn more. Join the fellowship
              nearest to you and grow together in faith.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {districts.map((district, index) => (
              <div
                key={district.id}
                className={cn(
                  "group relative rounded-2xl overflow-hidden cursor-pointer transition-all duration-500",
                  "bg-card border border-border hover:border-primary/50",
                  "hover:shadow-strong hover:-translate-y-2 animate-fade-up",
                  activeDistrict === district.id &&
                    "ring-2 ring-primary shadow-strong -translate-y-2"
                )}
                style={{ animationDelay: `${index * 60}ms` }}
                onMouseEnter={() => setActiveDistrict(district.id)}
                onMouseLeave={() => setActiveDistrict(null)}
                onTouchStart={() =>
                  setActiveDistrict(
                    activeDistrict === district.id ? null : district.id
                  )
                }
              >
                {/* Gradient Header */}
                <div
                  className={cn(
                    "h-24 bg-gradient-to-br transition-all duration-500 relative",
                    district.color,
                    "group-hover:h-28"
                  )}
                >
                  {/* Emoji icon */}
                  <div className="absolute top-4 left-4 text-3xl">
                    {district.meetingIcon}
                  </div>
                  {/* Church icon */}
                  <div className="absolute top-4 right-4 w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                    <Church className="w-5 h-5 text-white" />
                  </div>
                </div>

                {/* Content */}
                <div className="p-5">
                  <h2 className="font-serif text-xl font-bold text-foreground mb-1 group-hover:text-primary transition-colors">
                    {district.name}
                  </h2>

                  {/* Meeting Day Badge */}
                  <div className="flex items-center gap-1.5 mb-3">
                    <Calendar className="w-3.5 h-3.5 text-muted-foreground" />
                    <span className={cn("text-xs font-bold px-2 py-0.5 rounded-full", dayColors[district.meetingDay])}>
                      Meets {district.meetingDay}s
                    </span>
                  </div>

                  <p
                    className={cn(
                      "text-sm text-muted-foreground leading-relaxed transition-all duration-300",
                      "line-clamp-2 group-hover:line-clamp-none"
                    )}
                  >
                    {district.description}
                  </p>

                  {/* Arrow indicator */}
                  <div
                    className={cn(
                      "absolute bottom-4 right-4 w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center",
                      "opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-2 group-hover:translate-x-0"
                    )}
                  >
                    <ArrowRight className="w-4 h-4 text-primary" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-primary relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl" />
        </div>
        <div className="container-church relative z-10 text-center">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
            Find Your Community
          </h2>
          <p className="text-primary-foreground/90 text-lg mb-8 max-w-2xl mx-auto">
            Each district holds regular fellowship meetings, prayer sessions,
            and community activities. Connect with your local district and grow
            together in faith.
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