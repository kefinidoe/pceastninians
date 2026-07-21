import { Layout } from "@/components/layout/Layout";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ChevronRight, Target, Eye, BookOpen, Heart, Cross, HandHeart, ShieldCheck, Sparkles, Users2, Crown, Megaphone, Scale } from "lucide-react";
import pastorPreaching from "@/assets/pastor-preaching.jpg";
import { SEO } from "@/components/SEO";
import churchExterior from "@/assets/church-exterior.jpg";
// Import the background image


const beliefs = [
  {
    title: "The Holy Scriptures",
    description: "We believe the Bible is the inspired Word of God and the supreme authority in all matters of faith and conduct.",
  },
  {
    title: "The Trinity",
    description: "We believe in one God, eternally existing in three persons: Father, Son, and Holy Spirit.",
  },
  {
    title: "Jesus Christ",
    description: "We believe in the deity of our Lord Jesus Christ, His virgin birth, His sinless life, His miracles, His atoning death, His bodily resurrection, and His ascension.",
  },
  {
    title: "Salvation by Grace",
    description: "We believe that salvation is by grace through faith in Jesus Christ alone, not by works.",
  },
  {
    title: "The Church",
    description: "We believe in the universal Church as the body of Christ and the local church as a community of believers called to worship, fellowship, and service.",
  },
  {
    title: "The Sacraments",
    description: "We observe two sacraments: Baptism and the Lord's Supper, as ordained by Christ.",
  },
];

const timeline = [
  {
    year: "1979",
    event: "The Eldama Ravine Mission area and Highlands Parish were combined to form Rongai Parish, bringing together 18 congregations including PCEA St. Ninians, PCEA Kiamunyi, PCEA Olrongai, PCEA Menengai, PCEA Kampi ya Moto, PCEA Rongai, PCEA Kandutura, PCEA Maji Mazuri Forest, PCEA Umoja, PCEA Igure, PCEA Munyaka, PCEA Lengenet, PCEA Naithuit, PCEA Ravine, PCEA Marigu, PCEA Narasha Forest, PCEA Deloraine, and Esageri Forest.",
  },
  {
    year: "1992–1997",
    event: "During the election violence of 1992 and 1997, four congregations — PCEA Narasha Forest, PCEA Deloraine, PCEA Esageri Forest, and PCEA Sabatia Forest — were burnt down and ceased to exist, marking a painful chapter in the parish's history.",
  },
  {
    year: "June 3, 2007",
    event: "Rongai Parish was subdivided into 3 parishes in a ceremony led by Rt. Rev Dr David M Githii, Moderator of the 18th General Assembly. The three new parishes established were: Milimani Parish, Rongai Parish, and Menengai (Belacha) Parish. Milimani Parish was headquartered at PCEA St. Ninians and comprised 8 congregations: PCEA St. Ninians, PCEA Kiamunyi, PCEA Olrongai, PCEA Eldama Ravine, PCEA Maji Mazuri, PCEA Rugongo, PCEA Marigu, and PCEA Igure.",
  },
  {
    year: "April 30, 2023",
    event: "Milimani Parish was further subdivided into 2 parishes in a ceremony led by Very Rev Dr Jesse M Kamau, Moderator of the 15th and 16th General Assembly. Current PCEA Milimani Parish — headquartered at PCEA St. Ninians — became a one-church congregation, with PCEA Kiamunyi Shalom established as a separate parish headquartered at PCEA Kiamunyi.",
  },
  {
    year: "2023–Present",
    event: "Under the leadership of Rev. Fredrick Waweru Kirathi as Moderator, PCEA St. Ninians Milimani Parish continues to grow as a vibrant, Christ-centered congregation. The church is led by Church Chairman Elder Michael Njaramba, with Elder Beatrice Kamau serving as Registrar and Ms. Lilian Gitau as Treasurer.",
  },
];
export default function About() {
  return (
    <Layout>
      <SEO title="About PCEA St. Ninians Nakuru | Our Vision, Mission & Core Values" description="Learn about PCEA St. Ninians Millimani Parish in Nakuru — our vision, mission, core values, and beliefs grounded in Scripture." path="/about" />
      {/* Hero */}
      {/* Hero Section */}
<section className="relative py-24 md:py-32 overflow-hidden bg-gray-900 text-white">
  {/* Background Image with Overlay for Readability */}
  <div className="absolute inset-0 z-0">
    <img 
      src={churchExterior} 
      alt="P.C.E.A St. Ninian's Church exterior" 
      className="w-full h-full object-cover object-center"
    />
    {/* Black overlay with opacity to improve text contrast, professional and readable */}
    <div className="absolute inset-0 bg-black/60 z-1" />
  </div>

  {/* Content */}
  <div className="container-church relative z-10">
    <div className="max-w-3xl animate-fade-up">
      <p className="text-accent font-semibold text-sm uppercase tracking-wider mb-4">
        About Us
      </p>
      <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold mb-6">
        Our Story & Mission
      </h1>
      <p className="text-xl text-white/90 leading-relaxed">
        Learn about our parish history, vision, and the beliefs that guide us 
        as we serve God and our community in Nakuru.
      </p>
    </div>
  </div>
</section>
      {/* Vision & Mission */}
      <section className="section-padding bg-background">
        <div className="container-church">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
            <div className="space-y-8 animate-fade-up">
              <div className="flex items-start gap-5">
                <div className="w-14 h-14 bg-accent/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Eye className="w-7 h-7 text-accent" />
                </div>
                <div>
                  <h2 className="text-2xl font-serif font-bold text-foreground mb-4">Our Vision</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    To Transform Lives Through Christ's Love.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-5">
                <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Target className="w-7 h-7 text-primary" />
                </div>
                <div>
                  <h2 className="text-2xl font-serif font-bold text-foreground mb-4">Our Mission</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    To nurture an accountable, Christ-centered church through evangelism, 
                    discipleship, pastoral care, social responsibility, sustainability, 
                    and technology for holistic transformation.
                  </p>
                </div>
              </div>
            </div>

            <div className="animate-fade-up animation-delay-200">
              <div className="relative rounded-2xl overflow-hidden shadow-strong">
                <img
                  src={pastorPreaching}
                  alt="Pastor preaching at PCEA St. Ninians"
                  className="w-full h-[400px] object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values - CHRISTLE */}
      <section className="section-padding bg-secondary/30">
        <div className="container-church">
          <div className="text-center max-w-2xl mx-auto mb-12 animate-fade-up">
            <p className="text-accent font-semibold text-sm uppercase tracking-wider mb-3">
              CHRISTLE
            </p>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-foreground mb-4">
              Our Core Values
            </h2>
            <p className="text-muted-foreground">
              The principles that shape our identity and guide everything we do as a parish.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { letter: "C", title: "Christ-Centered", icon: Cross, description: "We honor Christ as the foundation and head of the Church." },
              { letter: "H", title: "Hospitality", icon: HandHeart, description: "We create a welcoming and loving environment for all." },
              { letter: "R", title: "Responsibility", icon: ShieldCheck, description: "Combining accountability and stewardship — we faithfully manage resources and remain answerable in all we do." },
              { letter: "I", title: "Integrity", icon: Sparkles, description: "We uphold honesty, transparency, and Godly character." },
              { letter: "S", title: "Servanthood", icon: Heart, description: "We lead and serve with humility, following Christ's example." },
              { letter: "T", title: "Togetherness", icon: Users2, description: "Representing unity and inclusivity — we promote harmony, diversity, and mutual respect." },
              { letter: "L", title: "Leadership Availability", icon: Crown, description: "We ensure accessible, approachable, and supportive leadership." },
              { letter: "E", title: "Evangelism", icon: Megaphone, description: "We actively share the Gospel and disciple believers." },
            ].map((value, index) => (
              <div
                key={value.letter}
                className="bg-card rounded-xl p-6 shadow-soft hover:shadow-medium transition-shadow animate-fade-up relative overflow-hidden"
                style={{ animationDelay: `${index * 80}ms` }}
              >
                <span className="absolute -top-2 -right-2 text-7xl font-serif font-bold text-primary/5 select-none">
                  {value.letter}
                </span>
                <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center mb-4 relative z-10">
                  <value.icon className="w-5 h-5 text-primary" />
                </div>
                <div className="flex items-baseline gap-2 mb-2 relative z-10">
                  <span className="font-serif font-bold text-accent text-lg">{value.letter}</span>
                  <h3 className="font-serif font-semibold text-foreground">{value.title}</h3>
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed relative z-10">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* History */}

<section className="section-padding bg-background">
  <div className="container-church">
    <div className="text-center max-w-2xl mx-auto mb-16 animate-fade-up">
      <p className="text-accent font-semibold text-sm uppercase tracking-wider mb-3">
        Our Journey
      </p>
      <h2 className="text-3xl sm:text-4xl font-serif font-bold text-foreground mb-4">
        Parish History
      </h2>
      <p className="text-muted-foreground">
        From the formation of Rongai Parish in 1979 to the thriving congregation 
        of PCEA St. Ninians today — over four decades of faithful ministry in Nakuru.
      </p>
    </div>

    {/* Timeline */}
    <div className="max-w-4xl mx-auto">
      <div className="relative">
        {/* Timeline line */}
        <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-border md:-translate-x-0.5" />

        {timeline.map((item, index) => (
          <div
            key={item.year}
            className={`relative flex items-start gap-6 mb-10 animate-fade-up ${
              index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
            }`}
            style={{ animationDelay: `${index * 100}ms` }}
          >
            <div className={`flex-1 ${index % 2 === 0 ? "md:text-right" : "md:text-left"} hidden md:block`}>
              <div className={`bg-card rounded-xl p-6 shadow-soft border border-border/50 ${index % 2 === 0 ? "md:mr-10" : "md:ml-10"}`}>
                <p className="font-serif font-bold text-primary text-lg mb-2">{item.year}</p>
                <p className="text-muted-foreground text-sm leading-relaxed">{item.event}</p>
              </div>
            </div>

            {/* Dot */}
            <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center flex-shrink-0 z-10 shadow-md">
              <div className="w-3 h-3 bg-primary-foreground rounded-full" />
            </div>

            {/* Mobile view */}
            <div className="flex-1 md:hidden">
              <div className="bg-card rounded-xl p-6 shadow-soft border border-border/50">
                <p className="font-serif font-bold text-primary text-lg mb-2">{item.year}</p>
                <p className="text-muted-foreground text-sm leading-relaxed">{item.event}</p>
              </div>
            </div>

            <div className="flex-1 hidden md:block" />
          </div>
        ))}
      </div>
    </div>

    {/* Ministers Section */}
    <div className="mt-20 animate-fade-up">
      <div className="text-center max-w-2xl mx-auto mb-10">
        <p className="text-accent font-semibold text-sm uppercase tracking-wider mb-3">
          Faithful Shepherds
        </p>
        <h3 className="text-2xl sm:text-3xl font-serif font-bold text-foreground mb-4">
          Ministers Since Establishment
        </h3>
        <p className="text-muted-foreground text-sm">
          Men and women of God who have faithfully served PCEA Rongai and Milimani Parish since 1973.
        </p>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl mx-auto">
        {[
          { name: "Rev. Plawson Kuria", period: "1973 – 1974" },
          { name: "Rev. Timothy Kabuga", period: "1974 – 1979" },
          { name: "Rev. J M Kariuki", period: "1979 – 1981" },
          { name: "Rev. Sawuel Wahogo", period: "1981 – 1985" },
          { name: "Rev. Dr. David M Githii", period: "1986 – 1987" },
          { name: "Rev. James W. Mbugua", period: "1988 – 1997" },
          { name: "Rev. Johnson M Muhia", period: "1998 – 1999" },
          { name: "Rev. Joshua G Nganga", period: "2000 – 2001" },
          { name: "Rev. Peter M Muchai", period: "2002 – 2003" },
          { name: "Rev. Joseph Kirimi", period: "2004 – 2007" },
          { name: "Rev. Barnabas K Kamau", period: "2008 – 2009" },
          { name: "Rev. Moses Muriu", period: "2010 – 2014" },
          { name: "Rev. Vasco Muraguri", period: "2014 – 2019" },
          { name: "Rev. Jane Ruhiu", period: "2020 – 2023" },
          { name: "Rev. Fredrick W. Kirathi", period: "2023 – to date" },
        ].map((minister, index) => (
          <div
            key={minister.name}
            className="bg-card rounded-xl p-4 shadow-soft border border-border/50 flex items-center gap-4 animate-fade-up"
            style={{ animationDelay: `${index * 50}ms` }}
          >
            <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
              <span className="text-primary font-bold text-sm">{index + 1}</span>
            </div>
            <div>
              <p className="font-semibold text-foreground text-sm">{minister.name}</p>
              <p className="text-muted-foreground text-xs">{minister.period}</p>
            </div>
          </div>
        ))}
      </div>
    </div>

    {/* Current Leadership */}
    <div className="mt-20 animate-fade-up">
      <div className="text-center max-w-2xl mx-auto mb-10">
        <p className="text-accent font-semibold text-sm uppercase tracking-wider mb-3">
          Current Leadership
        </p>
        <h3 className="text-2xl sm:text-3xl font-serif font-bold text-foreground mb-4">
          Parish Leadership Since 2023
        </h3>
        <p className="text-muted-foreground text-sm">
          Serving PCEA St. Ninians Milimani Parish with dedication and faithfulness.
        </p>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
        {[
          { role: "Moderator", name: "Rev. Fredrick Waweru Kirathi" },
          { role: "Session Clerk", name: "Elder Samuel G Maina" },
          { role: "Treasurer", name: "Elder Zipporah Kiongo (2025 – to date)" },
          { role: "Finance Committee Chairman", name: "Elder Johana Mundia" },
          { role: "Co-Clerk", name: "Elder Felistas Kamau" },
          { role: "Evangelist", name: "Elder Paul Kangethe" },
          { role: "Office Secretary", name: "Tabitha Karanja" },
          { role: "Church Chairman", name: "Elder Michael Njaramba" },
          { role: "Registrar", name: "Elder Beatrice Kamau (2025 – to date)" },
          { role: "Church Treasurer", name: "Ms. Lilian Gitau (2026 – to date)" },
          { role: "Retired Minister", name: "Rev. John Muriithi Mutahi" },
        ].map((leader, index) => (
          <div
            key={leader.role}
            className="bg-card rounded-xl p-5 shadow-soft border border-border/50 text-center animate-fade-up"
            style={{ animationDelay: `${index * 60}ms` }}
          >
            <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
              <Crown className="w-5 h-5 text-primary" />
            </div>
            <p className="text-xs text-accent font-semibold uppercase tracking-wider mb-1">{leader.role}</p>
            <p className="font-semibold text-foreground text-sm">{leader.name}</p>
          </div>
        ))}
      </div>
    </div>
  </div>
</section>

      {/* Core Beliefs */}
      <section className="section-padding bg-background">
        <div className="container-church">
          <div className="text-center max-w-2xl mx-auto mb-12 animate-fade-up">
            <p className="text-accent font-semibold text-sm uppercase tracking-wider mb-3">
              What We Believe
            </p>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-foreground mb-4">
              Core Beliefs
            </h2>
            <p className="text-muted-foreground">
              Rooted in Scripture and the Great Commission given by Jesus in Matthew 28:19 — 
              "Go therefore and make disciples of all nations."
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {beliefs.map((belief, index) => (
              <div
                key={belief.title}
                className="bg-card rounded-xl p-6 shadow-soft hover:shadow-medium transition-shadow animate-fade-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="w-10 h-10 bg-secondary rounded-lg flex items-center justify-center mb-4">
                  <BookOpen className="w-5 h-5 text-primary" />
                </div>
                <h3 className="font-serif font-semibold text-lg text-foreground mb-3">
                  {belief.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {belief.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-secondary/30">
        <div className="container-church">
          <div className="text-center max-w-2xl mx-auto animate-fade-up">
            <Heart className="w-12 h-12 text-accent mx-auto mb-6" />
            <h2 className="text-3xl font-serif font-bold text-foreground mb-4">
              Come Worship With Us
            </h2>
            <p className="text-muted-foreground mb-8">
              We'd love to welcome you to our church family. Join us for Sunday worship 
              and experience the warmth of our community.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/services">
                <Button variant="cta" size="lg" className="group">
                  Plan Your Visit
                  <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Link to="/contact">
                <Button variant="outline" size="lg">
                  Contact Us
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
