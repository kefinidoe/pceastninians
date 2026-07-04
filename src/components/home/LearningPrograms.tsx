import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { BookOpen, Users, Award, ChevronRight, GraduationCap } from "lucide-react";
import cbrProgram from "@/assets/cbr-program.jpg";
import youthMentorship from "@/assets/youth-mentorship.jpg";

const programs = [
  {
    id: "cbr",
    title: "Consistency Bible Reading (CBR)",
    subtitle: "Deepening Faith Through Scripture",
    description:
      "Our CBR program equips believers with a systematic approach to studying God's Word. Participants engage in daily Bible reading, group discussions, and receive certificates upon completion. This transformative journey builds spiritual discipline and biblical literacy.",
    image: cbrProgram,
    highlights: [
      "Daily structured Bible reading plan",
      "Weekly small group discussions",
      "Certificate upon completion",
      "All ages welcome",
    ],
  },
  {
    id: "youth-mentorship",
    title: "Youth Mentorship Program",
    subtitle: "Empowering the Next Generation",
    description:
      "We invest in our young people through intentional mentorship, leadership training, and life skills development. Our youth mentorship program pairs experienced church members with young adults, fostering spiritual growth and preparing them for future leadership.",
    image: youthMentorship,
    highlights: [
      "One-on-one mentorship sessions",
      "Leadership development training",
      "Career guidance & life skills",
      "Annual graduation ceremony",
    ],
  },
];

export function LearningPrograms() {
  return (
    <section className="section-padding bg-secondary/30 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 right-0 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />

      <div className="container-church relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-up">
          <div className="inline-flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full mb-4">
            <GraduationCap className="w-4 h-4 text-primary" />
            <span className="text-primary text-sm font-semibold uppercase tracking-wider">
              Learning & Discipleship
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-foreground mb-4">
            Growing Together in Faith & Knowledge
          </h2>
          <p className="text-muted-foreground text-lg">
            At PCEA St. Ninian's, we believe in continuous spiritual formation.
            Our learning programs are designed to deepen your understanding of
            Scripture and equip you for a life of purpose and service.
          </p>
        </div>

        {/* Programs */}
        <div className="space-y-20">
          {programs.map((program, index) => (
            <div
              key={program.id}
              className={`grid lg:grid-cols-2 gap-10 lg:gap-16 items-center animate-fade-up`}
              style={{ animationDelay: `${index * 150}ms` }}
            >
              {/* Image */}
              <div
                className={`relative ${index % 2 === 1 ? "lg:order-2" : ""}`}
              >
                <div className="relative">
                  {/* Decorative frame */}
                  <div className="absolute -inset-4 bg-gradient-to-br from-primary/20 to-accent/20 rounded-3xl -rotate-2" />
                  <div className="absolute -inset-4 bg-gradient-to-tr from-accent/10 to-primary/10 rounded-3xl rotate-2" />

                  {/* Main image */}
                  <div className="relative rounded-2xl overflow-hidden shadow-strong">
                    <img
                      src={program.image}
                      alt={program.title}
                      className="w-full h-auto object-cover aspect-[4/3]"
                    />
                    {/* Gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-primary/30 via-transparent to-transparent" />
                  </div>

                  {/* Floating badge */}
                  <div className="absolute -bottom-4 -right-4 bg-primary text-white px-6 py-3 rounded-xl shadow-lg">
                    <div className="flex items-center gap-2">
                      <Award className="w-5 h-5" />
                      <span className="font-semibold text-sm">Certified Program</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className={`space-y-6 ${index % 2 === 1 ? "lg:order-1" : ""}`}>
                <div>
                  <p className="text-accent font-semibold text-sm uppercase tracking-wider mb-2">
                    {program.subtitle}
                  </p>
                  <h3 className="text-2xl sm:text-3xl font-serif font-bold text-foreground">
                    {program.title}
                  </h3>
                </div>

                <p className="text-muted-foreground leading-relaxed">
                  {program.description}
                </p>

                {/* Highlights */}
                <div className="grid sm:grid-cols-2 gap-3">
                  {program.highlights.map((highlight, i) => (
                    <div
                      key={i}
                      className="flex items-center gap-3 bg-background rounded-lg px-4 py-3 shadow-soft"
                    >
                      <div className="w-2 h-2 bg-accent rounded-full flex-shrink-0" />
                      <span className="text-sm text-foreground">{highlight}</span>
                    </div>
                  ))}
                </div>

                <Link to="/ministries" className="inline-block">
                  <Button variant="default" size="lg" className="group">
                    Learn More
                    <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-20 text-center animate-fade-up animation-delay-500">
          <div className="bg-gradient-to-r from-primary via-primary to-primary/90 rounded-3xl p-8 sm:p-12 text-white relative overflow-hidden">
            {/* Decorative elements */}
            <div className="absolute top-0 right-0 w-40 h-40 bg-white/10 rounded-full blur-2xl" />
            <div className="absolute bottom-0 left-0 w-32 h-32 bg-white/10 rounded-full blur-2xl" />

            <div className="relative z-10 max-w-2xl mx-auto">
              <BookOpen className="w-12 h-12 mx-auto mb-4 text-accent" />
              <h3 className="text-2xl sm:text-3xl font-serif font-bold mb-4">
                Ready to Grow in Your Faith?
              </h3>
              <p className="text-white/80 mb-6">
                Join one of our learning programs and embark on a transformative
                journey of spiritual growth and biblical understanding.
              </p>
              <Link to="/contact">
                <Button
                  variant="outline"
                  size="lg"
                  className="bg-white text-primary hover:bg-white/90 border-0"
                >
                  Enroll Today
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
