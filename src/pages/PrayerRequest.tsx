import { useState } from "react";
import emailjs from "@emailjs/browser";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { HandHeart, Send, CheckCircle, Loader2 } from "lucide-react";
import { SEO } from "@/components/SEO";

export default function PrayerRequest() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    request: "",
    anonymous: false,
    shareWithPrayerTeam: true,
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      await emailjs.send(
        "service_v1kuml3",
        "template_n2j3lfw",
        {
          from_name: formData.anonymous ? "Anonymous" : formData.name || "Not provided",
          from_email: formData.anonymous ? "Anonymous" : formData.email || "Not provided",
          phone: formData.anonymous ? "Anonymous" : formData.phone || "Not provided",
          request: formData.request,
          anonymous: formData.anonymous ? "Yes" : "No",
          share_with_team: formData.shareWithPrayerTeam ? "Yes" : "No",
          date: new Date().toLocaleString("en-KE", {
            dateStyle: "full",
            timeStyle: "short",
          }),
        },
        "pJOPcdbjoMYBbgNg_"
      );
      setSubmitted(true);
    } catch (err) {
      setError("Failed to submit prayer request. Please try again or call us directly.");
    } finally {
      setLoading(false);
    }
  };

  if (submitted) {
    return (
      <Layout>
        <SEO title="Submit a Prayer Request | PCEA St. Ninians Nakuru" description="Share your prayer request with the PCEA St. Ninians Nakuru prayer team. We will pray with you in confidence." path="/prayer-request" />
        <section className="section-padding bg-background min-h-[60vh] flex items-center">
          <div className="container-church">
            <div className="max-w-lg mx-auto text-center animate-fade-up">
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle className="w-10 h-10 text-green-600" />
              </div>
              <h1 className="text-3xl font-serif font-bold text-foreground mb-4">
                Prayer Request Received
              </h1>
              <p className="text-muted-foreground mb-8">
                Thank you for sharing your prayer request with us. Our prayer team will lift you
                up before the Lord. May God's peace and comfort be with you.
              </p>
              <p className="text-sm text-muted-foreground italic mb-8">
                "Do not be anxious about anything, but in every situation, by prayer and petition,
                with thanksgiving, present your requests to God." - Philippians 4:6
              </p>
              <Button
                variant="default"
                onClick={() => {
                  setSubmitted(false);
                  setFormData({
                    name: "",
                    email: "",
                    phone: "",
                    request: "",
                    anonymous: false,
                    shareWithPrayerTeam: true,
                  });
                }}
              >
                Submit Another Request
              </Button>
            </div>
          </div>
        </section>
      </Layout>
    );
  }

  return (
    <Layout>
      <SEO title="Submit a Prayer Request | PCEA St. Ninians Nakuru" description="Share your prayer request with the PCEA St. Ninians Nakuru prayer team. We will pray with you in confidence." path="/prayer-request" />
      {/* Hero */}
      <section className="relative py-24 md:py-32 bg-primary overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-white rounded-full blur-3xl" />
        </div>
        <div className="container-church relative z-10">
          <div className="max-w-3xl animate-fade-up">
            <p className="text-accent font-semibold text-sm uppercase tracking-wider mb-4">
              We're Here For You
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-primary-foreground mb-6">
              Prayer Request
            </h1>
            <p className="text-xl text-white/85 leading-relaxed">
              Share your prayer needs with us. Our dedicated prayer team will intercede
              on your behalf before our loving Heavenly Father.
            </p>
          </div>
        </div>
      </section>

      {/* Form Section */}
      <section className="section-padding bg-background">
        <div className="container-church">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Form */}
            <div className="lg:col-span-2 animate-fade-up">
              <div className="bg-card rounded-2xl p-8 shadow-soft">

                {error && (
                  <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg text-red-600 text-sm">
                    {error}
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Anonymous Checkbox */}
                  <div className="flex items-center gap-3">
                    <input
                      type="checkbox"
                      id="anonymous"
                      checked={formData.anonymous}
                      onChange={(e) => setFormData({ ...formData, anonymous: e.target.checked })}
                      className="w-5 h-5 rounded border-border text-primary focus:ring-primary"
                    />
                    <label htmlFor="anonymous" className="text-foreground">
                      Submit anonymously
                    </label>
                  </div>

                  {/* Contact Info (hidden if anonymous) */}
                  {!formData.anonymous && (
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                          Your Name
                        </label>
                        <input
                          type="text"
                          id="name"
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                          placeholder="John Doe"
                        />
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                          Email Address
                        </label>
                        <input
                          type="email"
                          id="email"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                          placeholder="john@example.com"
                        />
                      </div>
                      <div className="md:col-span-2">
                        <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2">
                          Phone Number (Optional)
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                          placeholder="+254 700 000 000"
                        />
                      </div>
                    </div>
                  )}

                  {/* Prayer Request */}
                  <div>
                    <label htmlFor="request" className="block text-sm font-medium text-foreground mb-2">
                      Your Prayer Request *
                    </label>
                    <textarea
                      id="request"
                      value={formData.request}
                      onChange={(e) => setFormData({ ...formData, request: e.target.value })}
                      rows={6}
                      required
                      className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary resize-none"
                      placeholder="Share your prayer needs..."
                    />
                  </div>

                  {/* Share with prayer team */}
                  <div className="flex items-center gap-3">
                    <input
                      type="checkbox"
                      id="shareWithPrayerTeam"
                      checked={formData.shareWithPrayerTeam}
                      onChange={(e) => setFormData({ ...formData, shareWithPrayerTeam: e.target.checked })}
                      className="w-5 h-5 rounded border-border text-primary focus:ring-primary"
                    />
                    <label htmlFor="shareWithPrayerTeam" className="text-foreground">
                      Share with the prayer team for additional intercession
                    </label>
                  </div>

                  {/* Submit Button */}
                  <Button type="submit" variant="cta" size="lg" className="w-full group" disabled={loading}>
                    {loading ? (
                      <>
                        <Loader2 className="w-5 h-5 animate-spin" />
                        Submitting...
                      </>
                    ) : (
                      <>
                        Submit Prayer Request
                        <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                      </>
                    )}
                  </Button>
                </form>
              </div>
            </div>

            {/* Sidebar */}
            <div className="animate-fade-up animation-delay-200">
              <div className="bg-secondary/50 rounded-2xl p-8 sticky top-24">
                <div className="w-14 h-14 bg-primary rounded-xl flex items-center justify-center mb-6">
                  <HandHeart className="w-7 h-7 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-serif font-bold text-foreground mb-4">
                  The Power of Prayer
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                  We believe in the power of prayer. Your requests are treated with complete
                  confidentiality and care by our dedicated prayer team.
                </p>
                <div className="space-y-4 text-sm">
                  <blockquote className="border-l-4 border-primary pl-4 italic text-muted-foreground">
                    "The prayer of a righteous person is powerful and effective."
                    <footer className="mt-1 not-italic font-medium">— James 5:16</footer>
                  </blockquote>
                  <blockquote className="border-l-4 border-primary pl-4 italic text-muted-foreground">
                    "Cast all your anxiety on him because he cares for you."
                    <footer className="mt-1 not-italic font-medium">— 1 Peter 5:7</footer>
                  </blockquote>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}