import { Layout } from "@/components/layout/Layout";
import { SEO } from "@/components/SEO";
import { FileText, Globe, AlertCircle, Mail, Phone } from "lucide-react";

export default function Terms() {
  return (
    <Layout>
      <SEO
        title="Terms of Service | PCEA St. Ninians Millimani Parish"
        description="Read the Terms of Service for using the PCEA St. Ninians Millimani Parish website. By accessing our site, you agree to these terms."
        path="/terms"
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
              Terms of Service
            </h1>
            <p className="text-lg text-white/85 leading-relaxed">
              These terms govern your use of the PCEA St. Ninians Millimani Parish website. By accessing or using our site, you agree to be bound by these terms.
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
                  <FileText className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h2 className="text-xl font-serif font-bold text-foreground mb-3">Acceptance of Terms</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    By accessing and using the PCEA St. Ninians Millimani Parish website, you accept and agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our website.
                  </p>
                </div>
              </div>
            </div>

            {/* Use of Website */}
            <div>
              <h2 className="text-2xl font-serif font-bold text-foreground mb-6">Use of Our Website</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-card rounded-xl p-6 shadow-soft">
                  <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center mb-4">
                    <Globe className="w-5 h-5 text-accent" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-2">Permitted Use</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    You may use our website for lawful purposes only. This includes viewing content, submitting prayer requests, contacting us, and accessing information about our church services and events.
                  </p>
                </div>
                <div className="bg-card rounded-xl p-6 shadow-soft">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <AlertCircle className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-2">Prohibited Use</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    You may not use this site in any way that causes damage, is unlawful, fraudulent, or harmful, or in connection with any unlawful purpose.
                  </p>
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="bg-secondary/30 rounded-xl p-8">
              <h2 className="text-2xl font-serif font-bold text-foreground mb-6">Content and Intellectual Property</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                All content on this website, including text, images, logos, and graphics, is the property of PCEA St. Ninians Millimani Parish or used with permission. You may not reproduce, distribute, or create derivative works without our prior written consent.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Sermons, articles, and other teaching materials may be shared for personal and non-commercial use, provided proper attribution is given.
              </p>
            </div>

            {/* External Links */}
            <div>
              <h2 className="text-2xl font-serif font-bold text-foreground mb-4">External Links</h2>
              <p className="text-muted-foreground leading-relaxed">
                Our website may contain links to external websites, such as our Facebook and YouTube pages. We are not responsible for the content, privacy practices, or terms of service of any third-party websites.
              </p>
            </div>

            {/* Disclaimer */}
            <div>
              <h2 className="text-2xl font-serif font-bold text-foreground mb-4">Disclaimer</h2>
              <p className="text-muted-foreground leading-relaxed">
                The information on this website is provided for general information purposes only. While we strive to keep information accurate and up to date, we make no representations or warranties of any kind, express or implied, about the completeness, accuracy, reliability, or availability of the website or its content.
              </p>
            </div>

            {/* Changes to Terms */}
            <div>
              <h2 className="text-2xl font-serif font-bold text-foreground mb-4">Changes to These Terms</h2>
              <p className="text-muted-foreground leading-relaxed">
                We reserve the right to modify these Terms of Service at any time. Changes will be effective immediately upon posting to this page. Your continued use of the website after any changes constitutes acceptance of the new terms.
              </p>
            </div>

            {/* Contact */}
            <div className="bg-card rounded-xl p-8 shadow-soft">
              <h2 className="text-2xl font-serif font-bold text-foreground mb-4">Contact Us</h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                If you have any questions about these Terms of Service, please contact us.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="mailto:info@pceastninians.co.ke"
                  className="flex items-center gap-3 text-sm text-primary hover:underline"
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
