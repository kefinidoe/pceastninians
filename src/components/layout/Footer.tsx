import { Link } from "react-router-dom";
import { MapPin, Phone, Mail, Clock, Facebook, Youtube } from "lucide-react";

const quickLinks = [
  { name: "About Us", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Ministries", href: "/ministries" },
  { name: "Events", href: "/events" },
  { name: "Sermons", href: "/sermons" },
  { name: "Contact", href: "/contact" },
];

const ministryLinks = [
  { name: "Youth Fellowship", href: "/ministries#youth" },
  { name: "Women's Guild", href: "/ministries#womens-guild" },
  { name: "Men's Fellowship", href: "/ministries#mens-fellowship" },
  { name: "Children's Ministry", href: "/ministries#children" },
  { name: "Choir", href: "/ministries#choir" },
];

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      {/* Main Footer */}
      <div className="container-church section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Church Info */}
          <div className="space-y-6">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center">
                  <span className="text-white font-serif font-bold text-xl">✝</span>
                </div>
                <div>
                  <h3 className="font-serif font-semibold text-xl">PCEA St. Ninians</h3>
                  <p className="text-sm text-white/70">Millimani Parish</p>
                </div>
              </div>
              <p className="text-white/80 text-sm leading-relaxed">
                A welcoming community of faith near Showgrounds in Nakuru, Kenya. 
                Join us as we grow together in Christ's love.
              </p>
            </div>
            <div className="flex gap-4">
              <a
                href="https://www.facebook.com/st.ninins/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visit our Facebook page"
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="https://www.youtube.com/@PCEAST.NINIANSCHURCHNAKURU"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visit our YouTube channel"
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors"
              >
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-serif font-semibold text-lg mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-white/80 hover:text-white transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Ministries */}
          <div>
            <h4 className="font-serif font-semibold text-lg mb-6">Ministries</h4>
            <ul className="space-y-3">
              {ministryLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-white/80 hover:text-white transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-serif font-semibold text-lg mb-6">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 mt-0.5 text-white/60 flex-shrink-0" />
                <span className="text-white/80 text-sm">
                  Near Showgrounds, Millimani<br />
                  Nakuru, Kenya
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-white/60 flex-shrink-0" />
                <a href="tel:+254700000000" className="text-white/80 hover:text-white text-sm">
                  +254 700 000 000
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-white/60 flex-shrink-0" />
                <a href="mailto:info@stNinians.org" className="text-white/80 hover:text-white text-sm">
                  info@stNinians.org
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Clock className="w-5 h-5 mt-0.5 text-white/60 flex-shrink-0" />
                <div className="text-white/80 text-sm">
                  <p>Sunday Services:</p>
                  <p>8:00 AM & 10:30 AM</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="container-church py-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-white/60 text-sm text-center md:text-left">
            © {new Date().getFullYear()} PCEA St. Ninians Millimani Parish. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link to="/privacy" className="text-white/60 hover:text-white text-sm">
              Privacy Policy
            </Link>
            <Link to="/terms" className="text-white/60 hover:text-white text-sm">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
