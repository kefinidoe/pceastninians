import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ChevronRight, Heart, Users, BookOpen } from "lucide-react";
import churchInterior from "@/assets/church-interior.jpg";

const values = [
  {
    icon: Heart,
    title: "Love & Compassion",
    description: "Serving our community with Christ's love",
  },
  {
    icon: Users,
    title: "Family & Fellowship",
    description: "Building lasting relationships in faith",
  },
  {
    icon: BookOpen,
    title: "Biblical Teaching",
    description: "Grounded in Scripture and Reformed tradition",
  },
];

export function AboutSnapshot() {
  return (
    <section className="section-padding bg-background">
      <div className="container-church">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Image */}
          <div className="relative animate-fade-up">
            <div className="relative rounded-2xl overflow-hidden shadow-strong">
              <img
                src={churchInterior}
                alt="Inside PCEA St. Ninians Church sanctuary"
                className="w-full h-[400px] lg:h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent" />
            </div>
            {/* Floating Card */}
            <div className="absolute -bottom-6 -right-6 bg-white rounded-xl shadow-strong p-6 max-w-[200px] hidden md:block">
              <p className="text-4xl font-serif font-bold text-primary">50+</p>
              <p className="text-sm text-muted-foreground">Years of faithful ministry in Nakuru</p>
            </div>
          </div>

          {/* Content */}
          <div className="space-y-8 animate-fade-up animation-delay-200">
            <div className="space-y-4">
              <p className="text-accent font-semibold text-sm uppercase tracking-wider">
                About Our Parish
              </p>
              <h2 className="text-3xl sm:text-4xl font-serif font-bold text-foreground">
                Welcome to PCEA St. Ninians Millimani Parish
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Located near Showgrounds in Nakuru, Kenya, we are a vibrant Presbyterian 
                congregation committed to spreading the Gospel and serving our community. 
                Our doors are open to all who seek to know God and grow in faith.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                As part of the Presbyterian Church of East Africa (PCEA), we uphold the 
                Reformed tradition while embracing modern expressions of worship and ministry.
              </p>
            </div>

            {/* Values */}
            <div className="grid sm:grid-cols-3 gap-6">
              {values.map((value, index) => (
                <div key={value.title} className="space-y-2">
                  <div className="w-10 h-10 bg-secondary rounded-lg flex items-center justify-center">
                    <value.icon className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="font-semibold text-foreground text-sm">{value.title}</h3>
                  <p className="text-xs text-muted-foreground">{value.description}</p>
                </div>
              ))}
            </div>

            <Link to="/about">
              <Button variant="outline" size="lg" className="group">
                Learn More About Us
                <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
