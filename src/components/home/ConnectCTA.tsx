import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ChevronRight, Mail, Phone, MapPin } from "lucide-react";

export function ConnectCTA() {
  return (
    <section className="section-padding bg-secondary/50">
      <div className="container-church">
        <div className="bg-white rounded-3xl shadow-strong p-8 md:p-12 lg:p-16">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            {/* Content */}
            <div className="space-y-6">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-foreground">
                We'd love to connect with you
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed">
                Whether you have a question, need prayer, or just want to learn more 
                about our church family, feel free to reach out. PCEA St. Ninians is 
                here for you — let's grow together in faith and fellowship.
              </p>

              {/* Quick Contact */}
              <div className="grid sm:grid-cols-2 gap-4 pt-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-secondary rounded-full flex items-center justify-center flex-shrink-0">
                    <Phone className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Call Us</p>
                    <p className="font-semibold text-foreground">+254 700 000 000</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-secondary rounded-full flex items-center justify-center flex-shrink-0">
                    <Mail className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Email Us</p>
                    <p className="font-semibold text-foreground">info@stNinians.org</p>
                  </div>
                </div>
              </div>

              <div className="flex flex-wrap gap-4 pt-4">
                <Link to="/contact">
                  <Button variant="cta" size="lg" className="group">
                    Reach Out
                    <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
                <Link to="/prayer-request">
                  <Button variant="outline" size="lg" className="group">
                    Submit Prayer Request
                    <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
              </div>
            </div>

            {/* Map Preview */}
            <div className="relative">
              <div className="bg-secondary rounded-2xl overflow-hidden h-80 lg:h-96">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1994.878!2d36.0628028!3d-0.2808719!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x18298da34d9df0c7%3A0xcde904eb7b8e83a6!2sPCEA%20St%20Ninians%20Church!5e0!3m2!1sen!2ske!4v1707000000000"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="PCEA St. Ninians Church Location"
                />
              </div>
              
              {/* Location Badge */}
              <div className="absolute -bottom-4 left-4 right-4 sm:left-auto sm:right-4 sm:max-w-xs bg-white rounded-xl shadow-strong p-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-accent rounded-full flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground text-sm">Near Showgrounds</p>
                    <p className="text-xs text-muted-foreground">Millimani, Nakuru, Kenya</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
