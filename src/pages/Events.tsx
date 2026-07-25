import { Layout } from "@/components/layout/Layout";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Calendar, Clock, MapPin, ChevronRight, Filter, Ticket, Gift } from "lucide-react";
import { useState } from "react";
import youthWeekTicket from "@/assets/youth-week-ticket.jpeg";
import { SEO } from "@/components/SEO";

const events = [
  {
    id: 100,
    title: "Youth Week 2026",
    date: "2026-04-19",
    endDate: "2026-04-26",
    time: "All Week",
    location: "PCEA St. Ninian's Church",
    category: "Youth",
    description:
      "Our Youth Week began on Sunday 19th April and runs through to 26th April 2026. Join the youth as they fellowship, serve, and celebrate. Support the week by purchasing a raffle ticket — stand a chance to win KSh 5,000 Naivas Shopping Vouchers (3 lucky winners, total prizes KSh 15,000). Theme verse: Genesis 39:12b.",
    featured: true,
  },
  {
    id: 1,
    title: "Annual General Meeting",
    date: "2026-01-26",
    time: "After 10:30 AM Service",
    location: "Main Sanctuary",
    category: "Church",
    description: "All members are invited to attend the AGM to discuss parish matters, review the budget, and hold elections for church leadership.",
    featured: true,
  },
  {
    id: 2,
    title: "Youth Fellowship Retreat",
    date: "2026-02-14",
    endDate: "2026-02-16",
    time: "Full Weekend",
    location: "Lake Naivasha",
    category: "Youth",
    description: "A spiritual retreat for youth ages 13-35. Theme: 'Rooted in Christ'. Registration open now.",
    featured: true,
  },
  {
    id: 3,
    title: "Sunday School Teacher Training",
    date: "2026-01-25",
    time: "3:00 PM - 5:00 PM",
    location: "Church Hall",
    category: "Training",
    description: "Equipping our Sunday School teachers with new teaching methods and materials.",
  },
  {
    id: 4,
    title: "woman's Guild Bible Study",
    date: "2026-01-22",
    time: "2:00 PM - 4:00 PM",
    location: "Fellowship Hall",
    category: "Women",
    description: "Weekly Bible study for all women. New series on the Book of Esther.",
    recurring: "Every Wednesday",
  },
  {
    id: 5,
    title: "Choir Practice",
    date: "2026-01-24",
    time: "5:00 PM - 7:00 PM",
    location: "Main Sanctuary",
    category: "Choir",
    description: "Regular choir practice. New members welcome!",
    recurring: "Every Friday",
  },
  {
    id: 6,
    title: "Men's Fellowship Meeting",
    date: "2026-01-25",
    time: "4:00 PM - 6:00 PM",
    location: "Church Hall",
    category: "Men",
    description: "Monthly meeting for all men. Topic: Family Leadership.",
  },
  {
    id: 7,
    title: "Community Outreach",
    date: "2026-02-01",
    time: "8:00 AM - 2:00 PM",
    location: "Nakuru Town",
    category: "Outreach",
    description: "Monthly community outreach - food distribution and evangelism.",
  },
  {
    id: 8,
    title: "Easter Cantata",
    date: "2026-04-05",
    time: "10:30 AM Service",
    location: "Main Sanctuary",
    category: "Choir",
    description: "Annual Easter musical presentation by the church choir.",
    featured: true,
  },
];

const categories = ["All", "Church", "Youth", "Women", "Men", "Choir", "Training", "Outreach"];

export default function Events() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredEvents = events.filter(
    (event) => selectedCategory === "All" || event.category === selectedCategory
  );

  const featuredEvents = events.filter((event) => event.featured);
  const upcomingEvents = filteredEvents.filter((event) => !event.featured);

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", { weekday: "short", month: "short", day: "numeric", year: "numeric" });
  };

  return (
    <Layout>
      <SEO title="Church Events & Calendar | PCEA St. Ninians Nakuru" description="Stay up to date with upcoming events, Youth Week 2026, fellowships and announcements at PCEA St. Ninians Nakuru." path="/events" />
      {/* Hero */}
      <section className="relative py-24 md:py-32 bg-primary overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-white rounded-full blur-3xl" />
        </div>
        <div className="container-church relative z-10">
          <div className="max-w-3xl animate-fade-up">
            <p className="text-accent font-semibold text-sm uppercase tracking-wider mb-4">
              What's Happening
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-primary-foreground mb-6">
              Events & Calendar
            </h1>
            <p className="text-xl text-white/85 leading-relaxed">
              Stay connected with upcoming church activities, programs, and special events.
            </p>
          </div>
        </div>
      </section>

      {/* Youth Week Highlight */}
      <section className="section-padding bg-background">
        <div className="container-church">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <div className="animate-fade-up order-2 lg:order-1">
              <div className="inline-flex items-center gap-2 bg-accent/10 text-accent px-4 py-1.5 rounded-full mb-4">
                <Ticket className="w-4 h-4" />
                <span className="text-xs font-bold uppercase tracking-wider">Happening Now</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-4">
                Youth Week 2026
              </h2>
              <p className="text-muted-foreground text-lg mb-6 leading-relaxed">
                Our Youth Week kicked off on <strong className="text-foreground">Sunday, 19th April 2026</strong> and runs through to <strong className="text-foreground">Sunday, 26th April 2026</strong>. A full week of fellowship, worship, service and celebration led by our youth.
              </p>

              <div className="bg-card border border-border rounded-xl p-6 mb-6 shadow-soft">
                <div className="flex items-start gap-3 mb-4">
                  <div className="w-10 h-10 rounded-full bg-accent/15 flex items-center justify-center flex-shrink-0">
                    <Gift className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-serif font-semibold text-lg text-foreground mb-1">
                      Support the Youth — Win a Naivas Voucher
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      Buy a raffle ticket to help fundraise for Youth Week and stand a chance to win.
                    </p>
                  </div>
                </div>
                <div className="grid grid-cols-3 gap-3 text-center">
                  <div className="bg-secondary/50 rounded-lg p-3">
                    <p className="text-xs text-muted-foreground uppercase tracking-wider">Ticket</p>
                    <p className="font-bold text-foreground text-lg">KSh 200</p>
                  </div>
                  <div className="bg-secondary/50 rounded-lg p-3">
                    <p className="text-xs text-muted-foreground uppercase tracking-wider">Per Winner</p>
                    <p className="font-bold text-foreground text-lg">KSh 5,000</p>
                  </div>
                  <div className="bg-accent/10 rounded-lg p-3">
                    <p className="text-xs text-muted-foreground uppercase tracking-wider">Winners</p>
                    <p className="font-bold text-accent text-lg">3 Lucky</p>
                  </div>
                </div>
                <div className="mt-4 pt-4 border-t border-border space-y-1 text-sm">
                  <p className="text-muted-foreground"><strong className="text-foreground">Draw Date:</strong> 26th April 2026</p>
                  <p className="text-muted-foreground"><strong className="text-foreground">Tickets:</strong> Available at the church desk</p>
                  <p className="text-muted-foreground italic mt-2">
                    Theme verse: Genesis 39:12b — "But he left his garment in her hand, and fled, ran outside."
                  </p>
                </div>
              </div>

              <Link to="/contact">
                <Button variant="cta" size="lg" className="group">
                  Get Your Ticket
                  <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </div>

            <div className="animate-fade-up order-1 lg:order-2 flex justify-center">
              <div className="relative max-w-md w-full">
                <div className="absolute -inset-4 bg-gradient-to-br from-accent/20 to-primary/20 rounded-3xl blur-2xl" />
                <img
                  src={youthWeekTicket}
                  alt="PCEA St. Ninian's Youth Week 2026 raffle ticket — win KSh 5,000 Naivas vouchers"
                  className="relative rounded-2xl shadow-strong w-full h-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Events */}
      {featuredEvents.length > 0 && (
        <section className="section-padding bg-secondary/30">
          <div className="container-church">
            <h2 className="text-2xl font-serif font-bold text-foreground mb-8 animate-fade-up">
              Featured Events
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {featuredEvents.map((event, index) => (
                <div
                  key={event.id}
                  className="bg-card rounded-xl overflow-hidden shadow-soft hover:shadow-medium transition-shadow animate-fade-up"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="bg-accent p-4 text-accent-foreground">
                    <span className="text-sm font-semibold uppercase">{event.category}</span>
                  </div>
                  <div className="p-6">
                    <h3 className="font-serif font-semibold text-xl text-foreground mb-3">
                      {event.title}
                    </h3>
                    <div className="space-y-2 mb-4">
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Calendar className="w-4 h-4 text-primary" />
                        {formatDate(event.date)}
                        {event.endDate && ` - ${formatDate(event.endDate)}`}
                      </div>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Clock className="w-4 h-4 text-primary" />
                        {event.time}
                      </div>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <MapPin className="w-4 h-4 text-primary" />
                        {event.location}
                      </div>
                    </div>
                    <p className="text-muted-foreground text-sm line-clamp-3">
                      {event.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Category Filter */}
      <section className="py-8 bg-background border-b border-border">
        <div className="container-church">
          <div className="flex items-center gap-4 overflow-x-auto pb-2">
            <Filter className="w-5 h-5 text-muted-foreground flex-shrink-0" />
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-lg text-sm font-medium whitespace-nowrap transition-colors ${
                  selectedCategory === category
                    ? "bg-primary text-primary-foreground"
                    : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* All Events */}
      <section className="section-padding bg-background">
        <div className="container-church">
          <h2 className="text-2xl font-serif font-bold text-foreground mb-8 animate-fade-up">
            All Upcoming Events
          </h2>

          <div className="space-y-4">
            {upcomingEvents.map((event, index) => (
              <div
                key={event.id}
                className="flex flex-col md:flex-row gap-6 bg-card rounded-xl p-6 shadow-soft hover:shadow-medium transition-shadow animate-fade-up"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                {/* Date Badge */}
                <div className="flex-shrink-0 text-center md:w-24">
                  <div className="bg-primary text-primary-foreground rounded-lg p-3">
                    <p className="text-sm font-medium uppercase">
                      {new Date(event.date).toLocaleDateString("en-US", { month: "short" })}
                    </p>
                    <p className="text-3xl font-bold">
                      {new Date(event.date).getDate()}
                    </p>
                  </div>
                  {event.recurring && (
                    <p className="text-xs text-muted-foreground mt-2">{event.recurring}</p>
                  )}
                </div>

                {/* Content */}
                <div className="flex-grow">
                  <div className="flex flex-wrap items-start justify-between gap-4 mb-2">
                    <h3 className="font-serif font-semibold text-lg text-foreground">
                      {event.title}
                    </h3>
                    <span className="text-xs font-medium px-3 py-1 rounded-full bg-secondary text-secondary-foreground">
                      {event.category}
                    </span>
                  </div>
                  <div className="flex flex-wrap gap-4 text-sm text-muted-foreground mb-3">
                    <span className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      {event.time}
                    </span>
                    <span className="flex items-center gap-1">
                      <MapPin className="w-4 h-4" />
                      {event.location}
                    </span>
                  </div>
                  <p className="text-muted-foreground text-sm">{event.description}</p>
                </div>
              </div>
            ))}
          </div>

          {upcomingEvents.length === 0 && (
            <div className="text-center py-16">
              <p className="text-muted-foreground text-lg">No events found in this category.</p>
              <Button
                variant="outline"
                className="mt-4"
                onClick={() => setSelectedCategory("All")}
              >
                View All Events
              </Button>
            </div>
          )}
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-secondary/30">
        <div className="container-church">
          <div className="text-center max-w-2xl mx-auto animate-fade-up">
            <h2 className="text-3xl font-serif font-bold text-foreground mb-4">
              Don't Miss Out!
            </h2>
            <p className="text-muted-foreground mb-8">
              Subscribe to our announcements to receive updates about upcoming events and programs.
            </p>
            <Link to="/contact">
              <Button variant="cta" size="lg" className="group">
                Contact Us
                <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
}
