import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Calendar, ChevronRight, Clock, MapPin } from "lucide-react";

const announcements = [
  {
    id: 1,
    title: "Annual General Meeting",
    date: "January 26, 2026",
    time: "After 10:30 AM Service",
    description: "All members are invited to attend the AGM to discuss parish matters and elections.",
    type: "Important",
  },
  {
    id: 2,
    title: "Youth Fellowship Retreat",
    date: "February 14-16, 2026",
    time: "Full Weekend",
    description: "Join the youth for a spiritual retreat at Lake Naivasha. Registration now open.",
    type: "Event",
  },
  {
    id: 3,
    title: "woman's Guild Bible Study",
    date: "Every Wednesday",
    time: "2:00 PM",
    description: "Weekly Bible study for all women. New series on the Book of Esther begins this week.",
    type: "Regular",
  },
];

const upcomingEvents = [
  {
    id: 1,
    title: "Sunday School Teacher Training",
    date: "Jan 25",
    time: "3:00 PM",
  },
  {
    id: 2,
    title: "Choir Practice",
    date: "Jan 24",
    time: "5:00 PM",
  },
  {
    id: 3,
    title: "Men's Fellowship Meeting",
    date: "Jan 27",
    time: "4:00 PM",
  },
  {
    id: 4,
    title: "Prayer Meeting",
    date: "Jan 28",
    time: "6:00 PM",
  },
];

export function Announcements() {
  return (
    <section className="section-padding bg-secondary/30">
      <div className="container-church">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 animate-fade-up">
          <p className="text-accent font-semibold text-sm uppercase tracking-wider mb-3">
            Stay Connected
          </p>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-foreground mb-4">
            Announcements & Events
          </h2>
          <p className="text-muted-foreground">
            Stay updated with the latest news and upcoming activities in our parish.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Announcements */}
          <div className="lg:col-span-2 space-y-6">
            {announcements.map((item, index) => (
              <div
                key={item.id}
                className="bg-card rounded-xl p-6 shadow-soft hover:shadow-medium transition-shadow animate-fade-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex flex-wrap items-start justify-between gap-4 mb-3">
                  <span
                    className={`text-xs font-semibold px-3 py-1 rounded-full ${
                      item.type === "Important"
                        ? "bg-accent/10 text-accent"
                        : item.type === "Event"
                        ? "bg-primary/10 text-primary"
                        : "bg-secondary text-secondary-foreground"
                    }`}
                  >
                    {item.type}
                  </span>
                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      {item.date}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      {item.time}
                    </span>
                  </div>
                </div>
                <h3 className="font-serif font-semibold text-lg text-foreground mb-2">
                  {item.title}
                </h3>
                <p className="text-muted-foreground text-sm">{item.description}</p>
              </div>
            ))}

            <div className="text-center pt-4">
              <Link to="/events">
                <Button variant="outline" className="group">
                  View All Announcements
                  <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </div>
          </div>

          {/* Upcoming Events Sidebar */}
          <div className="animate-fade-up animation-delay-300">
            <div className="bg-primary rounded-xl p-6 text-primary-foreground">
              <h3 className="font-serif font-semibold text-xl mb-6 flex items-center gap-2">
                <Calendar className="w-5 h-5" />
                This Week
              </h3>
              <div className="space-y-4">
                {upcomingEvents.map((event) => (
                  <div
                    key={event.id}
                    className="flex items-center gap-4 p-3 bg-white/10 rounded-lg hover:bg-white/15 transition-colors"
                  >
                    <div className="text-center min-w-[50px]">
                      <p className="text-sm font-medium text-white/70">{event.date.split(" ")[0]}</p>
                      <p className="text-lg font-bold">{event.date.split(" ")[1]}</p>
                    </div>
                    <div className="flex-grow">
                      <p className="font-medium text-sm">{event.title}</p>
                      <p className="text-xs text-white/70">{event.time}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-6 pt-4 border-t border-white/20">
                <Link to="/events" className="text-sm font-medium hover:underline flex items-center gap-1">
                  Full Calendar
                  <ChevronRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
