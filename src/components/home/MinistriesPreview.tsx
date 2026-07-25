import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";
import youthFellowship from "@/assets/youth-fellowship.jpg";
import childrenMinistry from "@/assets/children-ministry.jpg";

const ministries = [
  {
    id: "youth",
    title: "Youth Fellowship",
    description: "Empowering young people to grow in faith through fellowship, service, and leadership.",
    image: youthFellowship,
    schedule: "Saturdays at 3:00 PM",
  },
  {
    id: "children",
    title: "Children's Ministry",
    description: "Nurturing young hearts with biblical teaching, fun activities, and a loving environment.",
    image: childrenMinistry,
    schedule: "Sundays during services",
  },
  {
    id: "womens-guild",
    title: "woman's Guild",
    description: "United in faith, service, and sisterhood through Bible study and community outreach.",
    schedule: "Wednesdays at 2:00 PM",
  },
  {
    id: "mens-fellowship",
    title: "Men's Fellowship (PCMF)",
    description: "Building godly men through prayer, accountability, and service to the community.",
    schedule: "Saturdays at 4:00 PM",
  },
  {
    id: "choir",
    title: "Church Choir",
    description: "Leading worship through music and praising God with voices united in harmony.",
    schedule: "Fridays at 5:00 PM",
  },
  {
    id: "evangelism",
    title: "Evangelism & Outreach",
    description: "Sharing the Good News and serving our community through various mission activities.",
    schedule: "Monthly outreaches",
  },
];

export function MinistriesPreview() {
  return (
    <section className="section-padding bg-background">
      <div className="container-church">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 animate-fade-up">
          <p className="text-accent font-semibold text-sm uppercase tracking-wider mb-3">
            Get Involved
          </p>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-foreground mb-4">
            Our Ministries
          </h2>
          <p className="text-muted-foreground">
            Discover how you can grow, serve, and connect with others through our various ministries.
          </p>
        </div>

        {/* Featured Ministries with Images */}
        <div className="grid md:grid-cols-2 gap-8 mb-8">
          {ministries.slice(0, 2).map((ministry, index) => (
            <Link
              key={ministry.id}
              to={`/ministries#${ministry.id}`}
              className="group relative rounded-2xl overflow-hidden shadow-soft hover:shadow-strong transition-all duration-300 animate-fade-up hover-lift"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={ministry.image}
                  alt={ministry.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/40 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <h3 className="font-serif font-semibold text-xl mb-2">{ministry.title}</h3>
                <p className="text-white/80 text-sm mb-3 line-clamp-2">{ministry.description}</p>
                <p className="text-white/60 text-xs flex items-center gap-1">
                  {ministry.schedule}
                </p>
              </div>
            </Link>
          ))}
        </div>

        {/* Other Ministries Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
          {ministries.slice(2).map((ministry, index) => (
            <Link
              key={ministry.id}
              to={`/ministries#${ministry.id}`}
              className="group bg-card rounded-xl p-6 shadow-soft hover:shadow-medium transition-all duration-300 animate-fade-up hover-lift"
              style={{ animationDelay: `${(index + 2) * 100}ms` }}
            >
              <h3 className="font-serif font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                {ministry.title}
              </h3>
              <p className="text-muted-foreground text-sm mb-3 line-clamp-2">{ministry.description}</p>
              <p className="text-xs text-primary font-medium">{ministry.schedule}</p>
            </Link>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center animate-fade-up animation-delay-500">
          <Link to="/ministries">
            <Button variant="default" size="lg" className="group">
              Explore All Ministries
              <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
