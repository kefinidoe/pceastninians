import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Heart, Smartphone, HandCoins } from "lucide-react";

export function GivingCTA() {
  return (
    <section className="section-padding bg-primary relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />
      </div>

      <div className="container-church relative z-10">
        <div className="max-w-4xl mx-auto text-center text-primary-foreground">
          <div className="animate-fade-up">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-accent rounded-2xl mb-6">
              <Heart className="w-8 h-8 text-accent-foreground" />
            </div>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold mb-4">
              Support Our Ministry
            </h2>
            <p className="text-lg text-white/85 mb-8 max-w-2xl mx-auto">
              Your generous giving enables us to spread the Gospel, support our community, 
              and maintain our church programs. Every contribution makes a difference.
            </p>
          </div>

          {/* Giving Options */}
          <div className="grid sm:grid-cols-2 gap-6 mb-10 max-w-2xl mx-auto animate-fade-up animation-delay-200">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/10">
              <Smartphone className="w-8 h-8 mx-auto mb-3" />
              <h3 className="font-semibold mb-2">M-Pesa</h3>
              <p className="text-sm text-white/70 mb-2">Paybill Number</p>
              <p className="text-2xl font-bold">326377</p>
              <p className="text-xs text-white/60 mt-2">
                Account: Offering, Tithe, or Thanksgiving
              </p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/10">
              <HandCoins className="w-8 h-8 mx-auto mb-3" />
              <h3 className="font-semibold mb-2">In-Person</h3>
              <p className="text-sm text-white/70">During Sunday services or at the church office</p>
            </div>
          </div>

          {/* CTA Button */}
          <div className="animate-fade-up animation-delay-300">
            <Link to="/giving">
              <Button variant="cta" size="xl" className="shadow-strong">
                Learn More About Giving
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
