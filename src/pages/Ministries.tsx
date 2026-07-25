import { Layout } from "@/components/layout/Layout";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Users, Heart, Music, BookOpen, Globe, Tent, ChevronRight, Clock, Calendar, Stethoscope, Sparkles } from "lucide-react";
import youthFellowship from "@/assets/youth-fellowship.jpg";
import childrenMinistry from "@/assets/children-ministry.jpg";
import womensGuild from "@/assets/womens-guild.jpg";
import mensFellowship from "@/assets/mens-fellowship.jpg";
import brigadeImage from "@/assets/brigade.jpg";
import churchLeaders from "@/assets/church-leaders.jpg";
import choirImage from "@/assets/choir.jpg";
import jprcImage from "@/assets/jprc.jpg";
import healthBoardImage from "@/assets/health-board.jpg";
import evangelismImage from "@/assets/evangelism-outreach.jpg";
import ministriesHero from "@/assets/ministries-hero.jpg";
import { SEO } from "@/components/SEO";

const ministries = [
  {
    id: "session",
    icon: Users,
    title: "Session Office",
    description: "The Session is the governing body of our congregation, comprising ordained elders who provide spiritual leadership, oversight, and guidance to the church. They work alongside the minister to ensure the spiritual welfare of the congregation.",
    schedule: "Monthly meetings",
    activities: ["Spiritual oversight", "Church governance", "Pastoral care", "Communion services", "Membership matters"],
    mentorship: "Leadership mentorship for aspiring elders and church leaders",
    image: churchLeaders,
  },
  {
    id: "jprc",
    icon: Users,
    title: "Justice, Peace, Reconciliation, and Creation (JPRC)",
    description: "The JPRC promotes justice, peace, reconciliation, and care for creation within our congregation and community. We advocate for social justice, foster peaceful relationships, facilitate reconciliation, and encourage environmental stewardship as expressions of our Christian faith.",
    schedule: "Monthly meetings",
    activities: ["Social justice advocacy", "Peace building initiatives", "Conflict resolution", "Environmental stewardship", "Community reconciliation"],
    mentorship: "Mentorship in advocacy, conflict resolution, and community leadership",
    image: jprcImage,
  },
  {
    id: "health-board",
    icon: Stethoscope,
    title: "Health Board",
    description: "The Health Board promotes health awareness and wellness within our congregation. We organize health campaigns, first aid training, and support members during health challenges, ensuring the physical well-being of our church family.",
    schedule: "Monthly meetings",
    activities: ["Health campaigns", "First aid services", "Hospital visitation", "Health education",],
    mentorship: "Health mentorship program for wellness champions in each district",
    image: healthBoardImage,
  },
  {
    id: "youth",
    icon: Users,
    title: "Youth Fellowship",
    description: "Our youth ministry empowers young people aged 18-35 to grow in faith through dynamic worship, Bible study, leadership development, and community service. We create a space where young believers can explore their faith, build lasting friendships, and discover their purpose in Christ.",
    schedule: "Every Saturday 4:00 - 6:00 PM",
    activities: ["Weekly Bible studies", "Worship nights", "Outreach programs", "Annual retreats", "Sports & recreation"],
    mentorship: "Youth mentorship program pairing young members with experienced mentors for spiritual and personal growth",
    image: youthFellowship,
  },
  {
    id: "children",
    icon: Heart,
    title: "Children's Ministry",
    description: "We nurture children and young teens aged 3-17 through age-appropriate biblical teaching, creative activities, and a loving environment. This ministry encompasses Church School, where children learn foundational Christian teachings, and the Boys' & Girls' Brigade, which builds discipline, leadership, and spiritual character. Our trained teachers and brigade leaders help young people develop a strong foundation of faith through interactive lessons, songs, memory verses, and brigade activities.",
    schedule: "Every Sunday during services",
    activities: ["Church School classes", "Boys' & Girls' Brigade", "Children's choir", "Holiday programs", "Bible memory challenges"],
    mentorship: "Children's mentorship through dedicated Church School teachers and Brigade leaders nurturing faith and character",
    image: brigadeImage,
  },
  {
    id: "womans-guild",
    icon: Users,
    title: "Woman's Guild",
    description: "A ministry for women of all ages to grow spiritually, serve the church and community, and build meaningful relationships. Through fellowship and outreach, we support one another in our walk with Christ.",
    schedule: "Wednesdays at 2:00 PM",
    activities: ["Community outreach", "woman's conferences", "Mentorship programs", "Fellowship gatherings", "Charitable initiatives"],
    mentorship: "Woman's mentorship program nurturing spiritual mothers and emerging women leaders",
    image: womensGuild,
  },
  {
    id: "mens-fellowship",
    icon: Users,
    title: "Presbyterian Church Men's Fellowship (PCMF)",
    description: "Building godly men through fellowship, accountability, and service. We gather to study God's Word, support one another, and serve our families, church, and community with integrity and purpose.",
    schedule: "Every second sunday of the month from 6:30am to 7:30am",
    activities: ["Bible study", "Prayer breakfasts", "Family seminars", "Community service", "Sports fellowship"],
    mentorship: "Men's mentorship program for discipleship, family leadership, and career guidance",
    image: mensFellowship,
  },
  {
    id: "choir",
    icon: Music,
    title: "Church Choir & Praise and Worship",
    description: "Our choir and praise team lead the congregation in worship through beautiful music and praise. We welcome all who love to sing and want to use their musical gifts to glorify God and inspire others.",
    schedule: "Practice: Saturdays at 2:00 PM and on sundays at 2:00 PM",
    activities: ["Sunday worship leading", "Special music presentations", "Music festivals", "Choir retreats", "Christmas cantatas"],
    mentorship: "Music mentorship for aspiring vocalists and instrumentalists",
    image: choirImage,
  },
  {
    id: "evangelism",
    icon: Globe,
    title: "Evangelism & Outreach",
    description: "Committed to sharing the Good News of Jesus Christ with our community and beyond. We organize outreach events, door-to-door evangelism, and mission trips to spread God's love.",
    schedule: "Monthly outreach activities",
    activities: ["Street evangelism", "Hospital visits", "Prison ministry", "Community crusades", "Door to Door ministry", "Mission support"],
    mentorship: "Evangelism mentorship training for effective witness and community engagement",
    image: evangelismImage,
  },
];

export default function Ministries() {
  return (
    <Layout>
      <SEO title="Our Ministries | PCEA St. Ninians Nakuru" description="Explore our church ministries in Nakuru — youth, woman's guild, men's fellowship, children, choir, brigade, evangelism and more." path="/ministries" />
      {/* Hero */}
      <section className="relative py-24 md:py-32 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img 
            src={ministriesHero} 
            alt="Church ministries" 
            className="w-full h-full object-cover"
          />
          {/* Minimized gradient: very soft fade on the left for text, completely clear on the right */}
          <div className="absolute inset-0 bg-gradient-to-r from-primary/50 via-primary/20 to-transparent" />
        </div>
        <div className="container-church relative z-10">
          <div className="max-w-3xl animate-fade-up">
            <p className="text-accent font-semibold text-sm uppercase tracking-wider mb-4">
              Get Involved
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-primary-foreground mb-6">
              Our Ministries
            </h1>
            <p className="text-xl text-white/85 leading-relaxed">
              Discover your place to serve, grow, and connect with others 
              through our vibrant ministry programs.
            </p>
          </div>
        </div>
      </section>

      {/* Ministries List */}
      <section className="section-padding bg-background">
        <div className="container-church">
          <div className="space-y-16">
            {ministries.map((ministry, index) => (
              <div
                key={ministry.id}
                id={ministry.id}
                className={`grid lg:grid-cols-2 gap-8 lg:gap-12 items-center animate-fade-up ${
                  index % 2 === 1 ? "lg:grid-flow-dense" : ""
                }`}
                style={{ animationDelay: `${index * 50}ms` }}
              >
                {/* Image */}
                <div className={index % 2 === 1 ? "lg:col-start-2" : ""}>
                  <div className="rounded-2xl overflow-hidden shadow-strong">
                    <img
                      src={ministry.image}
                      alt={ministry.title}
                      className="w-full h-[300px] md:h-[400px] object-cover"
                    />
                  </div>
                </div>

                {/* Content */}
                <div className="space-y-6">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center">
                      <ministry.icon className="w-6 h-6 text-primary-foreground" />
                    </div>
                    <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground">
                      {ministry.title}
                    </h2>
                  </div>

                  <p className="text-muted-foreground leading-relaxed">
                    {ministry.description}
                  </p>

                  <div className="flex items-center gap-2 text-primary font-semibold">
                    <Clock className="w-5 h-5" />
                    {ministry.schedule}
                  </div>

                  <div className="bg-card rounded-xl p-5 shadow-soft">
                    <h4 className="font-semibold text-foreground mb-3">Activities:</h4>
                    <ul className="grid sm:grid-cols-2 gap-2">
                      {ministry.activities.map((activity) => (
                        <li key={activity} className="flex items-center gap-2 text-sm text-muted-foreground">
                          <div className="w-1.5 h-1.5 bg-accent rounded-full" />
                          {activity}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Mentorship Program */}
                  <div className="bg-accent/10 rounded-xl p-4 flex items-start gap-3 border border-accent/20">
                    <Sparkles className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-semibold text-foreground text-sm mb-1">Mentorship Program</h4>
                      <p className="text-sm text-muted-foreground">{ministry.mentorship}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-secondary/30">
        <div className="container-church">
          <div className="text-center max-w-2xl mx-auto animate-fade-up">
            <h2 className="text-3xl font-serif font-bold text-foreground mb-4">
              Ready to Get Involved?
            </h2>
            <p className="text-muted-foreground mb-8">
              We'd love to help you find the right ministry where you can use your gifts 
              and grow in your faith. Contact us to learn more.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/contact">
                <Button variant="cta" size="lg" className="group">
                  Contact Us
                  <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Link to="/services">
                <Button variant="outline" size="lg">
                  Join Us Sunday
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
