import { Globe, Monitor, Camera } from "lucide-react";
import congregationWorship from "@/assets/congregation-worship.jpg";

const features = [
  {
    icon: Globe,
    title: "Worldwide Range",
    description: "What a joy it is to introduce you to PCEA St. Ninian's, a vibrant church with a global heartbeat, reaching the world with love and purpose.",
  },
  {
    icon: Monitor,
    title: "The Church Online",
    description: "Welcome to PCEA St. Ninian's, a dynamic online church where you can connect, worship, and grow in faith from wherever you are.",
  },
  {
    icon: Camera,
    title: "Faith Through Lens",
    description: "Through the lens, we share faith, hope, and love with the world. Tune in, worship with us, and be part of something greater.",
  },
];

export function MissionSection() {
  return (
    <section className="section-padding bg-secondary/30">
      <div className="container-church">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-accent font-semibold text-sm uppercase tracking-wider mb-3">
            Our Mission
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-foreground mb-4">
            The Mission and Service of Our Church
          </h2>
          <p className="text-muted-foreground text-lg">
            Guiding Our Community with Love, Faith, and Service through the Mission of the Church
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Image with Overlay */}
          <div className="relative">
            <div className="relative rounded-3xl overflow-hidden shadow-strong">
              <img
                src={congregationWorship}
                alt="PCEA St. Ninian's congregation in worship"
                className="w-full h-[400px] lg:h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/40 to-transparent" />
            </div>
            {/* Floating Badge */}
            <div className="absolute -bottom-6 left-6 right-6 md:left-auto md:right-6 md:max-w-xs bg-white rounded-2xl shadow-strong p-6">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 bg-accent rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-2xl">🙏</span>
                </div>
                <div>
                  <p className="font-serif font-bold text-foreground text-lg">In Prayer</p>
                  <p className="text-sm text-muted-foreground">With all the brethren</p>
                </div>
              </div>
            </div>
          </div>

          {/* Features */}
          <div className="space-y-8 lg:pl-8">
            {features.map((feature, index) => (
              <div
                key={feature.title}
                className="flex gap-5 group animate-fade-up"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="w-16 h-16 bg-white rounded-2xl shadow-soft flex items-center justify-center flex-shrink-0 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                  <feature.icon className="w-7 h-7 text-primary group-hover:text-white transition-colors duration-300" />
                </div>
                <div className="space-y-2">
                  <h3 className="font-serif font-semibold text-xl text-foreground">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
