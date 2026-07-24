import { Layout } from "@/components/layout/Layout";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Clock, MapPin, Car, Baby, Music, Heart, ChevronRight, Users, BookOpen } from "lucide-react";
import { SEO } from "@/components/SEO";

const serviceTimes = [
  {
    name: "English Service",
    time: "8:00 AM - 10:30 AM",
    description: "Our English service featuring traditional hymns, liturgy, and inspiring sermons.",
    style: "English",
    color: "bg-primary",
    emoji: "🙏",
  },
  {
    name: "Youth Church",
    time: "9:00 AM - 11:00 AM",
    description: "A vibrant, energetic service designed for the youth — featuring contemporary worship, relevant preaching, and fellowship. Every Sunday at the Youth Church.",
    style: "Youth",
    color: "bg-accent",
    emoji: "🔥",
  },
  {
    name: "Kiswahili Service",
    time: "10:30 AM - 12:30 PM",
    description: "Huduma yetu ya Kiswahili with vibrant worship, full choir, and children's programs.",
    style: "Kiswahili",
    color: "bg-primary",
    emoji: "🌟",
  },
];

const whatToExpect = [
  {
    icon: Music,
    title: "Worship & Praise",
    description: "A beautiful blend of traditional hymns and contemporary praise, led by our talented choir and praise team.",
  },
  {
    icon: BookOpen,
    title: "Biblical Preaching",
    description: "Engaging, scripture-based sermons that speak to everyday life and inspire spiritual growth.",
  },
  {
    icon: Baby,
    title: "Children's Church",
    description: "Children's church runs during the main service for ages 3-12 with age-appropriate teaching. Nursery available.",
  },
  {
    icon: Users,
    title: "Warm Fellowship",
    description: "Experience genuine community as we greet and connect with one another before and after services.",
  },
  {
    icon: Heart,
    title: "Prayer Ministry",
    description: "Our prayer team is available to pray with you for any needs during and after services.",
  },
  {
    icon: Car,
    title: "Parking & Accessibility",
    description: "Free parking available within the church compound. Ushers will warmly welcome and guide you.",
  },
];

export default function Services() {
  return (
    <Layout>
      <SEO title="Sunday Services in Nakuru | English & Kiswahili Worship" description="Join our Sunday worship services in Nakuru: English at 8:30 AM and Kiswahili at 10:30 AM. Everyone is welcome — see what to expect." path="/services" />
      {/* Hero */}
      <section className="relative py-24 md:py-32 bg-primary overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-white rounded-full blur-3xl" />
        </div>
        <div className="container-church relative z-10">
          <div className="max-w-3xl animate-fade-up">
            <p className="text-accent font-semibold text-sm uppercase tracking-wider mb-4">
              Worship With Us
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-primary-foreground mb-6">
              Sunday Services
            </h1>
            <p className="text-xl text-white/85 leading-relaxed">
              Join us every Sunday for worship, fellowship, and the study of God's Word. 
              All are welcome!
            </p>
          </div>
        </div>
      </section>

      {/* Service Times */}
      <section className="section-padding bg-background">
        <div className="container-church">
          <div className="text-center max-w-2xl mx-auto mb-12 animate-fade-up">
            <p className="text-accent font-semibold text-sm uppercase tracking-wider mb-3">
              When We Meet
            </p>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-foreground mb-4">
              Service Times
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
  {serviceTimes.map((service, index) => (
    <div
      key={service.name}
      className={`relative bg-card rounded-2xl p-8 shadow-soft hover:shadow-medium transition-all duration-300 hover:-translate-y-1 animate-fade-up overflow-hidden ${
        service.style === "Youth" ? "border-2 border-accent" : ""
      }`}
      style={{ animationDelay: `${index * 100}ms` }}
    >
      {/* Youth badge */}
      {service.style === "Youth" && (
        <div className="absolute top-4 right-4 bg-accent text-accent-foreground text-xs font-bold px-2 py-1 rounded-full">
          NEW ✨
        </div>
      )}

      {/* Background emoji watermark */}
      <span className="absolute -bottom-4 -right-2 text-8xl opacity-5 select-none">
        {service.emoji}
      </span>

      <div className="flex items-center gap-3 mb-4">
        <div className={`w-12 h-12 ${service.color} rounded-xl flex items-center justify-center text-2xl`}>
          {service.emoji}
        </div>
        <div>
          <h3 className="font-serif font-semibold text-xl text-foreground">
            {service.name}
          </h3>
          <span className={`text-xs font-bold uppercase ${
            service.style === "Youth" ? "text-accent" : "text-primary"
          }`}>
            {service.style}
          </span>
        </div>
      </div>

      <p className={`text-2xl font-bold mb-3 ${
        service.style === "Youth" ? "text-accent" : "text-primary"
      }`}>
        {service.time}
      </p>
      <p className="text-muted-foreground text-sm leading-relaxed">{service.description}</p>

      <div className="mt-4 flex items-center gap-2 text-xs text-muted-foreground">
        <Clock className="w-3 h-3" />
        <span>Every Sunday</span>
      </div>
    </div>
  ))}
</div>

          {/* Location */}
          <div className="mt-12 bg-secondary/50 rounded-2xl p-8 max-w-4xl mx-auto animate-fade-up animation-delay-300">
            <div className="flex flex-col md:flex-row items-center gap-6">
              <div className="w-16 h-16 bg-primary rounded-xl flex items-center justify-center flex-shrink-0">
                <MapPin className="w-8 h-8 text-primary-foreground" />
              </div>
              <div className="text-center md:text-left flex-grow">
                <h3 className="font-serif font-semibold text-xl text-foreground mb-2">
                  Our Location
                </h3>
                <p className="text-muted-foreground">
                  PCEA St. Ninians Millimani Parish<br />
                  Near Showgrounds, Millimani, Nakuru, Kenya
                </p>
              </div>
              <Link to="/contact">
                <Button variant="outline" className="group">
                  Get Directions
                  <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* What to Expect */}
      <section className="section-padding bg-secondary/30">
        <div className="container-church">
          <div className="text-center max-w-2xl mx-auto mb-12 animate-fade-up">
            <p className="text-accent font-semibold text-sm uppercase tracking-wider mb-3">
              First Time?
            </p>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-foreground mb-4">
              What to Expect
            </h2>
            <p className="text-muted-foreground">
              Whether you're visiting for the first time or looking for a church home, 
              here's what you can look forward to on Sunday.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {whatToExpect.map((item, index) => (
              <div
                key={item.title}
                className="bg-card rounded-xl p-6 shadow-soft hover:shadow-medium transition-all duration-300 hover:-translate-y-1 animate-fade-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-serif font-semibold text-lg text-foreground mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-primary">
        <div className="container-church">
          <div className="text-center max-w-2xl mx-auto text-primary-foreground animate-fade-up">
            <h2 className="text-3xl font-serif font-bold mb-4">
              We Can't Wait to Meet You!
            </h2>
            <p className="text-white/85 mb-8">
              Whether you're visiting Nakuru or looking for a church home, 
              we'd love to welcome you this Sunday.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/contact">
                <Button variant="cta" size="lg" className="group">
                  Get in Touch
                  <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Link to="/ministries">
                <Button variant="hero" size="lg">
                  Explore Ministries
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
