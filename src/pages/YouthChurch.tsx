import { Layout } from "@/components/layout/Layout";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { SEO } from "@/components/SEO";
import {
  ChevronRight,
  Calendar,
  Clock,
  MapPin,
  Users,
  Heart,
  Star,
  Zap,
  BookOpen,
  Music,
  Globe,
  Trophy,
  HandHeart,
  Flame,
} from "lucide-react";

import youthHero from "@/assets/youthchurh(2).jpg";
import youthFellowship1 from "@/assets/youth-fellowship.jpg";
import youthFellowship2 from "@/assets/youth-mentorship.jpg";
import youthGroup from "@/assets/youthchurch.jpeg";
import youthGroup2 from "@/assets/youthchurch(3).jpeg";
import youthPastor from "@/assets/youth-pastor.jpeg";
import patron from "@/assets/patron.jpg";

const programs = [
  {
    icon: Trophy,
    title: "Sports Activities",
    description:
      "Organized sports twice a year uniting 75%+ of registered youth. Building teamwork, fitness, inclusivity and breaking social barriers.",
    frequency: "Twice a year",
    color: "bg-orange-500",
  },
  {
    icon: Star,
    title: "Mentorship & Coaching",
    description:
      "Four structured mentorship programs annually covering personal growth, career guidance, financial literacy, mental health and spiritual maturity.",
    frequency: "4× Annually",
    color: "bg-purple-500",
  },
  {
    icon: Music,
    title: "Talent Shows & Skills",
    description:
      "Annual talent show engaging 70%+ of youth. Identifying and nurturing talents, enhancing confidence, creativity and skill development.",
    frequency: "Annually",
    color: "bg-pink-500",
  },
  {
    icon: HandHeart,
    title: "Community Service",
    description:
      "Two organized community service initiatives annually demonstrating social responsibility, empathy and active citizenship.",
    frequency: "Twice a year",
    color: "bg-green-500",
  },
  {
    icon: Globe,
    title: "College & School Outreach",
    description:
      "Annual outreach to colleges, universities and high schools creating mentorship opportunities and deeper community connections.",
    frequency: "Annually",
    color: "bg-blue-500",
  },
  {
    icon: Users,
    title: "Weekly Fellowships",
    description:
      "Every Saturday 4:00 PM – 6:00 PM. A space for belonging, deeper faith understanding, personal growth and biblical literacy.",
    frequency: "Every Saturday",
    color: "bg-accent",
    highlight: true,
  },
  {
    icon: Heart,
    title: "Prayer Practices",
    description:
      "Continuous prayer teaching and annual visits to a prayer center engaging 60%+ of youth. Building consistent prayerful habits.",
    frequency: "Weekly + Annual",
    color: "bg-red-500",
  },
  {
    icon: Flame,
    title: "Youth Camp & Retreat",
    description:
      "Annual three-day retreat renewing spiritual energy, enabling networking, self-reflection and creating lasting memories.",
    frequency: "Annually",
    color: "bg-yellow-500",
  },
  {
    icon: Zap,
    title: "Y-Summit",
    description:
      "Annual Nakuru West Presbytery Y-Summit participation for mentorship, spiritual growth and networking across parishes.",
    frequency: "Annually",
    color: "bg-indigo-500",
  },
];

export default function YouthChurch() {
  return (
    <Layout>
      <SEO
        title="Youth Church | PCEA St. Ninians Nakuru"
        description="PCEA St. Ninians Youth Church — a vibrant community for young people aged 18–35. Sunday service 9:00 AM–11:00 AM & Saturday fellowship 4:00–6:00 PM."
        path="/youth-church"
      />

      {/* Hero */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={youthHero}
            alt="PCEA St. Ninians Youth Church"
            className="w-full h-full object-cover scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/50 to-black/30" />
        </div>

        <div className="container-church relative z-10 py-32">
          <div className="max-w-3xl">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-accent/90 backdrop-blur-sm px-5 py-2 rounded-full mb-6">
              <Flame className="w-4 h-4 text-accent-foreground" />
              <span className="text-accent-foreground text-xs font-bold uppercase tracking-widest">
                Ages 18 – 35
              </span>
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif font-bold text-white leading-tight mb-6 drop-shadow-lg">
              PCEA St. Ninians
              <span className="block text-accent">Youth Church</span>
            </h1>

            <p className="text-xl text-white/90 leading-relaxed mb-4 max-w-2xl">
              A generation on fire for God. We are a vibrant community of young
              people aged 18–35, rooted in faith, growing in purpose, and
              making an impact in Nakuru and beyond.
            </p>

            <p className="text-accent font-semibold text-lg mb-8 italic">
              "Don't let anyone look down on you because you are young." —
              1 Timothy 4:12
            </p>

            <div className="flex flex-wrap gap-4">
              <Link to="/contact">
                <Button variant="cta" size="lg" className="group shadow-lg">
                  Join Us This Sunday
                  <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <a href="#programs">
                <Button variant="hero" size="lg">
                  Our Programs
                </Button>
              </a>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 text-white/60">
          <span className="text-xs uppercase tracking-widest">Scroll</span>
          <div className="w-0.5 h-8 bg-white/30 animate-pulse" />
        </div>
      </section>

      {/* Quick Info Bar */}
      <section className="bg-primary text-primary-foreground py-6">
        <div className="container-church">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-3">
              <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0">
                <Clock className="w-5 h-5" />
              </div>
              <div>
                <p className="font-bold text-sm">Sunday Service</p>
                <p className="text-white/80 text-xs">9:00 AM – 11:00 AM</p>
              </div>
            </div>
            <div className="flex items-center justify-center md:justify-start gap-3">
              <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0">
                <Calendar className="w-5 h-5" />
              </div>
              <div>
                <p className="font-bold text-sm">Weekly Fellowship</p>
                <p className="text-white/80 text-xs">Every Saturday 4:00 PM – 6:00 PM</p>
              </div>
            </div>
            <div className="flex items-center justify-center md:justify-start gap-3">
              <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <p className="font-bold text-sm">Location</p>
                <p className="text-white/80 text-xs">Near Showgrounds, Millimani, Nakuru</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Youth Church */}
      <section className="section-padding bg-background">
        <div className="container-church">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="animate-fade-up">
              <p className="text-accent font-semibold text-sm uppercase tracking-wider mb-3">
                Who We Are
              </p>
              <h2 className="text-3xl sm:text-4xl font-serif font-bold text-foreground mb-6">
                A Generation Rooted in Faith & Purpose
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                PCEA St. Ninians Youth Church is a thriving community of young
                people between the ages of 18 and 35, dedicated to growing in
                faith, developing their God-given potential, and making a
                meaningful difference in society.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-6">
                We believe that young people are not just the church of
                tomorrow — we are the church of today. Through worship,
                fellowship, mentorship, and service, we are building a
                generation that knows God, stands strong, and does exploits.
              </p>

              <div className="grid grid-cols-3 gap-4">
                {[
                  { number: "18–35", label: "Age Group" },
                  { number: "9+", label: "Programs" },
                  { number: "Every Sat", label: "Fellowship" },
                ].map((stat) => (
                  <div
                    key={stat.label}
                    className="bg-secondary rounded-xl p-4 text-center"
                  >
                    <p className="font-serif font-bold text-2xl text-primary">
                      {stat.number}
                    </p>
                    <p className="text-xs text-muted-foreground mt-1">
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Photo Grid */}
            <div className="grid grid-cols-2 gap-4 animate-fade-up animation-delay-200">
              <div className="rounded-2xl overflow-hidden shadow-strong row-span-2">
                <img
                  src={youthFellowship1}
                  alt="Youth in prayer"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="rounded-2xl overflow-hidden shadow-soft">
                <img
                  src={youthGroup}
                  alt="Youth group"
                  className="w-full h-48 object-cover"
                />
              </div>
              <div className="rounded-2xl overflow-hidden shadow-soft">
                <img
                  src={youthFellowship2}
                  alt="Youth mentorship"
                  className="w-full h-48 object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Camp Announcement */}
      <section className="section-padding bg-gradient-to-br from-accent via-accent/90 to-primary relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl" />
        </div>
        <div className="container-church relative z-10">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-10">
              <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full mb-4">
                <Flame className="w-4 h-4 text-white" />
                <span className="text-white text-xs font-bold uppercase tracking-widest">
                  Upcoming Event
                </span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-serif font-bold text-white mb-2">
                🏕️ Youth Camp 2026
              </h2>
              <p className="text-white/80 text-lg">
                5 Days, 4 Nights of Word, Worship, Fun & Purpose
              </p>
            </div>

            <div className="bg-white/15 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                {[
                  {
                    icon: "📍",
                    label: "Venue",
                    value: "Kabarnet Rehabilitation Center",
                    sub: "Baringo County",
                  },
                  {
                    icon: "📅",
                    label: "Dates",
                    value: "11th – 15th August 2026",
                    sub: "5 Days, 4 Nights",
                  },
                  {
                    icon: "💰",
                    label: "Charges",
                    value: "Ksh 2,000",
                    sub: "All inclusive",
                  },
                  {
                    icon: "✅",
                    label: "Covers",
                    value: "Meals & Accommodation",
                    sub: "Materials & Transport",
                  },
                ].map((item) => (
                  <div
                    key={item.label}
                    className="text-center bg-white/10 rounded-xl p-4"
                  >
                    <span className="text-3xl mb-2 block">{item.icon}</span>
                    <p className="text-white/70 text-xs uppercase tracking-wider mb-1">
                      {item.label}
                    </p>
                    <p className="text-white font-bold text-sm">{item.value}</p>
                    <p className="text-white/70 text-xs">{item.sub}</p>
                  </div>
                ))}
              </div>

              <div className="bg-white/10 rounded-xl p-6 mb-6">
                <h3 className="text-white font-bold text-lg mb-3">
                  📋 How to Register
                </h3>
                <p className="text-white/90 text-sm leading-relaxed">
                  Pay <strong>Ksh 2,000</strong> to register for the Youth
                  Camp. Payment covers meals, accommodation, materials, and
                  transport within the camp. Contact the Youth Church
                  leadership for payment details.
                </p>
              </div>

              <div className="text-center">
                <Link to="/contact">
                  <Button
                    size="lg"
                    className="bg-white text-primary hover:bg-white/90 font-bold shadow-lg group"
                  >
                    Register Now — Ksh 2,000
                    <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Programs */}
      <section id="programs" className="section-padding bg-background">
        <div className="container-church">
          <div className="text-center max-w-2xl mx-auto mb-14 animate-fade-up">
            <p className="text-accent font-semibold text-sm uppercase tracking-wider mb-3">
              What We Do
            </p>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-foreground mb-4">
              Our Programs
            </h2>
            <p className="text-muted-foreground">
              Nine intentional programs designed to develop every dimension of
              a young person — spiritually, mentally, socially, and physically.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {programs.map((program, index) => (
              <div
                key={program.title}
                className={`relative bg-card rounded-2xl p-6 shadow-soft hover:shadow-medium transition-all duration-300 hover:-translate-y-1 animate-fade-up overflow-hidden group ${
                  program.highlight
                    ? "border-2 border-accent ring-2 ring-accent/20"
                    : "border border-border/50"
                }`}
                style={{ animationDelay: `${index * 60}ms` }}
              >
                {program.highlight && (
                  <div className="absolute top-4 right-4 bg-accent text-accent-foreground text-xs font-bold px-2 py-1 rounded-full">
                    Weekly ⭐
                  </div>
                )}

                <div
                  className={`w-12 h-12 ${program.color} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}
                >
                  <program.icon className="w-6 h-6 text-white" />
                </div>

                <div className="inline-block bg-secondary text-xs font-semibold text-primary px-2 py-0.5 rounded-full mb-3">
                  {program.frequency}
                </div>

                <h3 className="font-serif font-bold text-lg text-foreground mb-2">
                  {program.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {program.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="section-padding bg-secondary/30">
        <div className="container-church">
          <div className="text-center max-w-2xl mx-auto mb-14 animate-fade-up">
            <p className="text-accent font-semibold text-sm uppercase tracking-wider mb-3">
              Our Leadership
            </p>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-foreground mb-4">
              Meet the Team
            </h2>
            <p className="text-muted-foreground">
              Dedicated leaders walking alongside the youth with faith,
              passion, and purpose.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {/* Youth Pastor */}
            <div className="bg-card rounded-2xl overflow-hidden shadow-soft hover:shadow-medium transition-all duration-300 hover:-translate-y-1 animate-fade-up text-center">
              <div className="h-64 overflow-hidden">
                <img
                  src={youthPastor}
                  alt="Evangelist Kangethe — Youth Pastor"
                  className="w-full h-full object-cover object-top"
                />
              </div>
              <div className="p-6">
                <div className="inline-block bg-accent/10 text-accent text-xs font-bold px-3 py-1 rounded-full mb-3 uppercase tracking-wider">
                  Youth Pastor
                </div>
                <h3 className="font-serif font-bold text-xl text-foreground mb-1">
                  Evangelist Kangethe
                </h3>
                <p className="text-muted-foreground text-sm">
                  Leading the youth with passion, purpose, and the Word of God.
                </p>
              </div>
            </div>

            {/* Patron */}
            <div className="bg-card rounded-2xl overflow-hidden shadow-soft hover:shadow-medium transition-all duration-300 hover:-translate-y-1 animate-fade-up animation-delay-100 text-center">
              <div className="h-64 overflow-hidden">
                <img
                  src={patron}
                  alt="Elder Jaramba — Youth Patron"
                  className="w-full h-full object-cover object-top"
                />
              </div>
              <div className="p-6">
                <div className="inline-block bg-primary/10 text-primary text-xs font-bold px-3 py-1 rounded-full mb-3 uppercase tracking-wider">
                  Youth Patron
                </div>
                <h3 className="font-serif font-bold text-xl text-foreground mb-1">
                  Elder Jaramba
                </h3>
                <p className="text-muted-foreground text-sm">
                  Providing guidance, wisdom, and spiritual covering for the youth ministry.
                </p>
              </div>
            </div>

            {/* Chairperson */}
            <div className="bg-card rounded-2xl overflow-hidden shadow-soft hover:shadow-medium transition-all duration-300 hover:-translate-y-1 animate-fade-up animation-delay-200 text-center">
              <div className="h-64 bg-gradient-to-br from-accent/20 to-primary/20 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-24 h-24 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Users className="w-12 h-12 text-accent" />
                  </div>
                  <p className="text-muted-foreground text-sm">Photo Coming Soon</p>
                </div>
              </div>
              <div className="p-6">
                <div className="inline-block bg-green-100 text-green-700 text-xs font-bold px-3 py-1 rounded-full mb-3 uppercase tracking-wider">
                  Chairperson
                </div>
                <h3 className="font-serif font-bold text-xl text-foreground mb-1">
                  Victoria
                </h3>
                <p className="text-muted-foreground text-sm">
                  Championing youth programs and fostering a united, purpose-driven community.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Youth Groups */}
<section className="section-padding bg-secondary/30">
  <div className="container-church">
    <div className="text-center max-w-2xl mx-auto mb-14 animate-fade-up">
      <p className="text-accent font-semibold text-sm uppercase tracking-wider mb-3">
        Our Community
      </p>
      <h2 className="text-3xl sm:text-4xl font-serif font-bold text-foreground mb-4">
        Youth Groups
      </h2>
      <p className="text-muted-foreground">
        Eight dynamic groups within our Youth Church — each with a unique identity,
        united by one faith and one purpose.
      </p>
    </div>

    <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-5 max-w-5xl mx-auto">
      {[
        {
          name: "The Hype House",
          number: "01",
          emoji: "🔥",
          color: "from-orange-500 to-red-500",
          description: "Bringing energy, excitement and passion to every gathering.",
        },
        {
          name: "Sons of Grace",
          number: "02",
          emoji: "✝️",
          color: "from-blue-600 to-indigo-600",
          description: "Walking in God's grace, strength and divine purpose.",
        },
        {
          name: "The Anchored",
          number: "03",
          emoji: "⚓",
          color: "from-teal-500 to-cyan-600",
          description: "Firmly rooted, unwavering in faith through every storm.",
        },
        {
          name: "AS — Arise & Shine",
          number: "04",
          emoji: "⭐",
          color: "from-yellow-500 to-amber-500",
          description: "Rising up and shining bright for the glory of God.",
        },
        {
          name: "HAVOC",
          number: "05",
          emoji: "⚡",
          color: "from-purple-600 to-violet-600",
          description: "Making a bold, powerful impact for the Kingdom of God.",
        },
        {
          name: "Rooted",
          number: "06",
          emoji: "🌿",
          color: "from-green-500 to-emerald-600",
          description: "Deeply grounded in the Word, growing in faith daily.",
        },
        {
          name: "Paragons of Christ",
          number: "07",
          emoji: "👑",
          color: "from-rose-500 to-pink-600",
          description: "Setting the highest standard as examples of Christ's love.",
        },
        {
          name: "Christ With Us",
          number: "08",
          emoji: "🙏",
          color: "from-sky-500 to-blue-500",
          description: "Emmanuel — God is always with us, in every moment.",
        },
      ].map((group, index) => (
        <div
          key={group.name}
          className="group relative bg-card rounded-2xl overflow-hidden shadow-soft hover:shadow-strong transition-all duration-300 hover:-translate-y-2 animate-fade-up cursor-pointer"
          style={{ animationDelay: `${index * 70}ms` }}
        >
          {/* Gradient top bar */}
          <div className={`h-2 w-full bg-gradient-to-r ${group.color}`} />

          <div className="p-5">
            {/* Number + Emoji */}
            <div className="flex items-center justify-between mb-4">
              <span className="text-xs font-bold text-muted-foreground">
                {group.number}
              </span>
              <span className="text-3xl group-hover:scale-125 transition-transform duration-300">
                {group.emoji}
              </span>
            </div>

            {/* Name */}
            <h3 className={`font-serif font-bold text-base text-foreground mb-2 bg-gradient-to-r ${group.color} bg-clip-text text-transparent leading-tight`}>
              {group.name}
            </h3>

            {/* Description */}
            <p className="text-muted-foreground text-xs leading-relaxed">
              {group.description}
            </p>
          </div>

          {/* Hover overlay */}
          <div className={`absolute inset-0 bg-gradient-to-br ${group.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`} />
        </div>
      ))}
    </div>

    {/* Bottom note */}
    <div className="mt-12 text-center animate-fade-up">
      <div className="inline-flex items-center gap-3 bg-card border border-border/50 rounded-full px-6 py-3 shadow-soft">
        <span className="text-xl">🤝</span>
        <p className="text-sm text-muted-foreground">
          <span className="font-semibold text-foreground">8 groups, one family.</span>{" "}
          United by faith, driven by purpose.
        </p>
      </div>
    </div>
  </div>
</section>

      {/* Gallery */}
      <section className="section-padding bg-background">
        <div className="container-church">
          <div className="text-center max-w-2xl mx-auto mb-12 animate-fade-up">
            <p className="text-accent font-semibold text-sm uppercase tracking-wider mb-3">
              Our Moments
            </p>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-foreground mb-4">
              Life at Youth Church
            </h2>
            <p className="text-muted-foreground">
              Snapshots of faith, fellowship, fun, and purpose.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            <div className="rounded-2xl overflow-hidden shadow-soft col-span-2 md:col-span-1 row-span-2">
              <img
                src={youthGroup2}
                alt="Youth church group"
                className="w-full h-full object-cover min-h-[300px]"
              />
            </div>
            <div className="rounded-2xl overflow-hidden shadow-soft">
              <img
                src={youthFellowship1}
                alt="Youth in prayer"
                className="w-full h-48 object-cover"
              />
            </div>
            <div className="rounded-2xl overflow-hidden shadow-soft">
              <img
                src={youthGroup}
                alt="Youth group photo"
                className="w-full h-48 object-cover"
              />
            </div>
            <div className="rounded-2xl overflow-hidden shadow-soft">
              <img
                src={youthFellowship2}
                alt="Youth mentorship"
                className="w-full h-48 object-cover"
              />
            </div>
            <div className="rounded-2xl overflow-hidden shadow-soft">
              <img
                src={youthHero}
                alt="Youth worship"
                className="w-full h-48 object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-primary relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl" />
        </div>
        <div className="container-church relative z-10">
          <div className="text-center max-w-2xl mx-auto text-primary-foreground animate-fade-up">
            <Flame className="w-14 h-14 text-accent mx-auto mb-6" />
            <h2 className="text-3xl sm:text-4xl font-serif font-bold mb-4">
              Ready to Be Part of Something Greater?
            </h2>
            <p className="text-white/85 mb-8 text-lg leading-relaxed">
              Whether you're new to faith or looking for a community that
              understands your season of life — you belong here. Join us this
              Sunday at 9:00 AM.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/contact">
                <Button variant="cta" size="lg" className="group shadow-lg">
                  Get in Touch
                  <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Link to="/services">
                <Button variant="hero" size="lg">
                  View All Services
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}