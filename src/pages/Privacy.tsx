import { Layout } from "@/components/layout/Layout";
import { SEO } from "@/components/SEO";
import { Shield, Lock, Eye, Mail, Phone } from "lucide-react";

export default function Privacy() {
  return (
    <Layout>
      <SEO
        title="Privacy Policy | PCEA St. Ninians Millimani Parish"
        description="Read the privacy policy of PCEA St. Ninians Millimani Parish, Nakuru. Learn how we collect, use, and protect your personal information."
        path="/privacy"
      />

      {/* Hero */}
      <section className="relative py-20 md:py-28 bg-primary overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-white rounded-full blur-3xl" />
        </div>
        <div className="container-church relative z-10">
          <div className="max-w-3xl animate-fade-up">
            <p className="text-accent font-semibold text-sm uppercase tracking-wider mb-4">
              Legal
            </p>
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-primary-foreground mb-6">
              Privacy Policy
            </h1>
            <p className="text-lg text-white/85 leading-relaxed">
              Your privacy matters to us. This policy explains how we handle your personal information when you visit our website or interact with PCEA St. Ninians Millimani Parish.
            </p>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="section-padding bg-background">
        <div className="container-church max-w-4xl">
          <div className="space-y-12 animate-fade-up">
            {/* Introduction */}
            <div className="bg-card rounded-xl p-8 shadow-soft">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Shield className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h2 className="text-xl font-serif font-bold text-foreground mb-3">Introduction</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    PCEA St. Ninians Millimani Parish is committed to protecting your privacy. This Privacy Policy describes how we collect, use, store, and safeguard your personal information when you use our website, contact us, or participate in church activities.
                  </p>
                </div>
              </div>
            </div>

            {/* Information We Collect */}
            <div>
              <h2 className="text-2xl font-serif font-bold text-foreground mb-6">Information We Collect</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-card rounded-xl p-6 shadow-soft">
                  <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center mb-4">
                    <Eye className="w-5 h-5 text-accent" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-2">Information You Provide</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    When you fill out contact forms, prayer requests, or event registrations, we may collect your name, email address, phone number, and any message you choose to share.
                  </p>
                </div>
                <div className="bg-card rounded-xl p-6 shadow-soft">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <Lock className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-2">Automatically Collected</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Our website may collect standard log information such as your IP address, browser type, pages visited, and time spent on the site to help us improve our services.
                  </p>
                </div>
              </div>
            </div>

            {/* How We Use Information */}
            <div className="bg-secondary/30 rounded-xl p-8">
              <h2 className="text-2xl font-serif font-bold text-foreground mb-6">How We Use Your Information</h2>
              <ul className="space-y-4 text-muted-foreground">
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0" />
                  <span>To respond to your inquiries, prayer requests, and feedback.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0" />
                  <span>To provide information about church services, events, and ministries.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0" />
                  <span>To improve our website and ensure it meets the needs of our congregation.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0" />
                  <span>To comply with legal obligations and protect the rights of our parish.</span>
                </li>
              </ul>
            </div>

            {/* Data Protection */}
            <div>
              <h2 className="text-2xl font-serif font-bold text-foreground mb-6">Data Protection</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                We take reasonable precautions to protect your personal information from unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the internet is completely secure, and we cannot guarantee absolute security.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                We do not sell, trade, or rent your personal information to third parties. We may share information only when required by law or to protect our rights and safety.
              </p>
            </div>

            {/* Contact */}
            <div className="bg-card rounded-xl p-8 shadow-soft">
              <h2 className="text-2xl font-serif font-bold text-foreground mb-4">Contact Us</h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                If you have any questions about this Privacy Policy or how we handle your data, please reach out to us.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="mailto:info@pceastninians.co.ke"
                  className="flex items-center gap-3 text-primary instructions. text-primary hover:underline"
                >
                  <Mail className="w-5 h-5" />
                  info@pceastninians.co.ke
                </a>
                <a
                  href="tel:+254721514531"
                  className="flex items-center gap-3 text-sm text-primary hover:underline"
                >
                  <Phone className="w-5 h-5" />
                  0721 514 531
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
