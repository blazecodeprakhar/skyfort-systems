import { Link } from 'react-router-dom';
import { Shield, Mail, Phone, MapPin, Linkedin, Twitter, Youtube } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: 'Home', href: '/' },
    { name: 'Who We Are', href: '/about' },
    { name: 'Our Capabilities', href: '/capabilities' },
    { name: 'Products', href: '/products' },
    { name: 'Contact Us', href: '/contact' },
  ];

  const productLinks = [
    { name: 'ISR Solutions', href: '/products?category=ISR' },
    { name: 'Cyber Intelligence', href: '/products?category=Cyber Intelligence' },
    { name: 'Electronic Warfare', href: '/products?category=Electronic Warfare' },
    { name: 'Radar Systems', href: '/products?category=Radars' },
    { name: 'C4IS Platforms', href: '/products?category=C4IS' },
  ];

  return (
    <footer className="bg-navy-600 text-white">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Company Info */}
          <div className="space-y-6">
            <Link to="/" className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-lg bg-accent flex items-center justify-center">
                <Shield className="w-6 h-6 text-accent-foreground" />
              </div>
              <span className="font-heading font-bold text-xl">
                AegisTech<span className="text-accent">.</span>
              </span>
            </Link>
            <p className="text-white/70 text-sm leading-relaxed">
              AegisTech Systems is a global leader in defense technology, providing advanced intelligence, surveillance, and reconnaissance solutions to governments and defense organizations worldwide.
            </p>
            <div className="flex gap-3">
              <a
                href="#"
                className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center hover:bg-accent transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center hover:bg-accent transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center hover:bg-accent transition-colors"
                aria-label="YouTube"
              >
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-heading font-semibold text-lg mb-6 text-accent">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-white/70 hover:text-accent transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Products */}
          <div>
            <h3 className="font-heading font-semibold text-lg mb-6 text-accent">Products</h3>
            <ul className="space-y-3">
              {productLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-white/70 hover:text-accent transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-heading font-semibold text-lg mb-6 text-accent">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                <span className="text-white/70 text-sm">
                  AegisTech Systems HQ<br />
                  1200 Defense Boulevard<br />
                  Arlington, VA 22202, USA
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-accent flex-shrink-0" />
                <a href="tel:+1-800-AEGIS-01" className="text-white/70 hover:text-accent text-sm transition-colors">
                  +1-800-AEGIS-01
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-accent flex-shrink-0" />
                <a href="mailto:info@aegistech.com" className="text-white/70 hover:text-accent text-sm transition-colors">
                  info@aegistech.com
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-white/50 text-sm text-center md:text-left">
              © {currentYear} AegisTech Systems. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm">
              <Link to="#" className="text-white/50 hover:text-accent transition-colors">
                Privacy Policy
              </Link>
              <Link to="#" className="text-white/50 hover:text-accent transition-colors">
                Terms of Service
              </Link>
              <Link to="#" className="text-white/50 hover:text-accent transition-colors">
                Security
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
