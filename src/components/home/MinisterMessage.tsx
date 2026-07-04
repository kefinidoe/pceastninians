import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ChevronRight, Quote } from "lucide-react";
import revFredrickKirathi from "@/assets/rev-fredrick-kirathi.jpg";

export function MinisterMessage() {
  return (
    <section className="section-padding bg-primary text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />
      </div>

      <div className="container-church relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Image */}
          <div className="relative order-2 lg:order-1">
            <div className="relative max-w-md mx-auto lg:mx-0">
              {/* Decorative Frame */}
              <div className="absolute -inset-4 bg-white/10 rounded-3xl -rotate-3" />
              <div className="absolute -inset-4 bg-white/10 rounded-3xl rotate-3" />
              
              {/* Image Container */}
              <div className="relative rounded-2xl overflow-hidden shadow-strong aspect-[3/4]">
                <img
                  src={revFredrickKirathi}
                  alt="Rev. Fredrick Kirathi - Parish Minister"
                  className="w-full h-full object-cover object-top"
                />
                {/* Subtle gradient overlay at bottom */}
                <div className="absolute inset-x-0 bottom-0 h-1/4 bg-gradient-to-t from-primary/60 to-transparent" />
              </div>
              
              {/* Name Badge */}
              <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 bg-accent text-primary px-6 py-3 rounded-xl shadow-lg">
                <p className="font-serif font-bold text-center whitespace-nowrap">Rev. Fredrick Kirathi</p>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="space-y-6 order-1 lg:order-2">
            <div className="inline-flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full">
              <span className="text-accent text-sm font-semibold uppercase tracking-wider">
                Message from Our Minister
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold leading-tight">
              A Warm Welcome to Our Church Family
            </h2>

            <div className="relative">
              <Quote className="absolute -top-2 -left-2 w-8 h-8 text-accent opacity-50" />
              <p className="text-white/85 text-lg leading-relaxed pl-8">
                What a joy it is to welcome you to PCEA St. Ninian's Millimani Parish! 
                Whether you're visiting for the first time or looking for a church home, 
                we invite you to experience the warmth of our congregation and the 
                transforming power of God's love.
              </p>
            </div>

            <p className="text-white/75 leading-relaxed">
              Our church is more than a building — it's a community of believers committed 
              to growing in faith, serving one another, and reaching out to our community 
              with the Gospel of Jesus Christ. We believe every person has a purpose and 
              a place in God's family.
            </p>

            <div className="pt-4">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-1 h-16 bg-accent rounded-full" />
                <div>
                  <p className="font-serif font-bold text-xl">Rev. Fredrick Kirathi</p>
                  <p className="text-white/70">Parish Minister, PCEA St. Ninian's Millimani</p>
                </div>
              </div>

              <Link to="/about">
                <Button 
                  variant="outline" 
                  size="lg" 
                  className="bg-white text-primary hover:bg-white/90 border-0 group"
                >
                  Learn More About Us
                  <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}