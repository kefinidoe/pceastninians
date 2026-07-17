import { Layout } from "@/components/layout/Layout";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Smartphone, HandCoins, Heart, ChevronRight, CheckCircle } from "lucide-react";
import { SEO } from "@/components/SEO";

const givingOptions = [
  {
    icon: Smartphone,
    title: "M-Pesa",
    description: "The quickest way to give using your mobile phone.",
    details: [
      { label: "Paybill Number", value: "326377" },
      { label: "Account Options", value: "Offering, Tithe, Thanksgiving," },
    ],
    steps: [
      "Go to M-Pesa on your phone",
      "Select Lipa na M-Pesa",
      "Select Pay Bill",
      "Enter Business Number: 326377",
      "Enter Account Name (e.g., Offering, Tithe, or Thanksgiving, District Name)",
      "Enter Amount",
      "Enter your M-Pesa PIN",
      "Confirm and send",
    ],
  },
  {
    icon: HandCoins,
    title: "In-Person Giving",
    description: "Give during Sunday services or at the church office.",
    details: [
      { label: "During Services", value: "Offering baskets during worship" },
      { label: "Church Office", value: "Open Mon-Fri, 9 AM - 5 PM" },
    ],
  },
];

const impactAreas = [
  "Worship services and programs",
  "Children and youth ministry",
  "Community outreach and missions",
  "Church maintenance and facilities",
  "Support for the needy in our community",
  "Training and equipping of leaders",
];

export default function Giving() {
  return (
    <Layout>
      <SEO title="Give & Tithe | PCEA St. Ninians Nakuru (M-Pesa Paybill 326377)" description="Support the work of PCEA St. Ninians Nakuru through M-Pesa Paybill 326377 — for offerings, tithes and thanksgiving." path="/giving" />
      {/* Hero */}
      <section className="relative py-24 md:py-32 bg-primary overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-white rounded-full blur-3xl" />
        </div>
        <div className="container-church relative z-10">
          <div className="max-w-3xl animate-fade-up">
            <p className="text-accent font-semibold text-sm uppercase tracking-wider mb-4">
              Support Our Ministry
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-primary-foreground mb-6">
              Giving & Donations
            </h1>
            <p className="text-xl text-white/85 leading-relaxed">
              Your generous giving enables us to spread the Gospel, serve our community, 
              and grow God's kingdom here in Nakuru and beyond.
            </p>
          </div>
        </div>
      </section>

      {/* Scripture */}
      <section className="py-12 bg-secondary/30">
        <div className="container-church">
          <blockquote className="max-w-3xl mx-auto text-center animate-fade-up">
            <p className="text-xl md:text-2xl font-serif italic text-foreground mb-4">
              "Each of you should give what you have decided in your heart to give, 
              not reluctantly or under compulsion, for God loves a cheerful giver."
            </p>
            <footer className="text-primary font-semibold">— 2 Corinthians 9:7</footer>
          </blockquote>
        </div>
      </section>

      {/* Giving Options */}
      <section className="section-padding bg-background">
        <div className="container-church">
          <div className="text-center max-w-2xl mx-auto mb-12 animate-fade-up">
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-foreground mb-4">
              Ways to Give
            </h2>
            <p className="text-muted-foreground">
              Choose the giving method that's most convenient for you.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {givingOptions.map((option, index) => (
              <div
                key={option.title}
                className="bg-card rounded-2xl p-8 shadow-soft animate-fade-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="w-14 h-14 bg-accent/10 rounded-xl flex items-center justify-center mb-6">
                  <option.icon className="w-7 h-7 text-accent" />
                </div>
                <h3 className="text-xl font-serif font-bold text-foreground mb-3">
                  {option.title}
                </h3>
                <p className="text-muted-foreground mb-6">{option.description}</p>

                {/* Details */}
                <div className="space-y-3 mb-6">
                  {option.details.map((detail) => (
                    <div key={detail.label} className="flex justify-between text-sm">
                      <span className="text-muted-foreground">{detail.label}:</span>
                      <span className="font-semibold text-foreground text-right">{detail.value}</span>
                    </div>
                  ))}
                </div>

                {/* M-Pesa Steps */}
                {option.steps && (
                  <div className="bg-secondary/50 rounded-xl p-5">
                    <h4 className="font-semibold text-foreground mb-3">How to Give via M-Pesa:</h4>
                    <ol className="space-y-2">
                      {option.steps.map((step, stepIndex) => (
                        <li key={stepIndex} className="flex items-start gap-2 text-sm text-muted-foreground">
                          <span className="w-5 h-5 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-xs flex-shrink-0">
                            {stepIndex + 1}
                          </span>
                          {step}
                        </li>
                      ))}
                    </ol>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Impact */}
      <section className="section-padding bg-secondary/30">
        <div className="container-church">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-up">
              <p className="text-accent font-semibold text-sm uppercase tracking-wider mb-3">
                Your Impact
              </p>
              <h2 className="text-3xl sm:text-4xl font-serif font-bold text-foreground mb-6">
                Where Your Giving Goes
              </h2>
              <p className="text-muted-foreground mb-8">
                Your generous contributions support the work of the Gospel and help us 
                make a difference in our community. Here's how your giving is used:
              </p>
              <div className="space-y-3">
                {impactAreas.map((area) => (
                  <div key={area} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                    <span className="text-foreground">{area}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="animate-fade-up animation-delay-200">
              <div className="bg-primary rounded-2xl p-8 text-primary-foreground">
                <Heart className="w-12 h-12 mb-6" />
                <h3 className="text-2xl font-serif font-bold mb-4">
                  Thank You for Your Generosity
                </h3>
                <p className="text-white/85 mb-6">
                  We are grateful for every gift, no matter the size. Your faithful giving 
                  is an act of worship and enables us to fulfill our mission to share 
                  Christ's love with the world.
                </p>
                <p className="text-white/70 text-sm">
                  For any questions about giving or to receive a giving statement, 
                  please contact the church office.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-background">
        <div className="container-church">
          <div className="text-center max-w-2xl mx-auto animate-fade-up">
            <h2 className="text-3xl font-serif font-bold text-foreground mb-4">
              Have Questions?
            </h2>
            <p className="text-muted-foreground mb-8">
              If you have any questions about giving or need assistance, 
              our church office is happy to help.
            </p>
            <Link to="/contact">
              <Button variant="outline" size="lg" className="group">
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
