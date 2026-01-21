import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown, Shield } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '@/lib/utils';

const intelligenceProducts = [
  { name: 'ISR', href: '/products?category=ISR' },
  { name: 'Satellite Monitoring', href: '/products?category=Satellite Monitoring' },
  { name: 'Cellular Monitoring', href: '/products?category=Cellular Monitoring' },
  { name: 'Lawful Interception', href: '/products?category=Lawful Interception' },
  { name: 'Radio Monitoring & Signal Analysis', href: '/products?category=Radio Monitoring' },
  { name: 'Cyber Intelligence', href: '/products?category=Cyber Intelligence' },
  { name: 'Dark Web Intelligence', href: '/products?category=Cyber Intelligence' },
  { name: 'Network Intelligence System', href: '/products?category=Network Intelligence' },
];

const defenseProducts = [
  { name: 'Electronic Warfare', href: '/products?category=Electronic Warfare' },
  { name: 'RCIED Jammer', href: '/products?category=Electronic Warfare' },
  { name: 'RF Jammer', href: '/products?category=Electronic Warfare' },
  { name: 'High Resolution Satellite Imagery', href: '/products?category=Satellite Imagery' },
  { name: 'Communication Security', href: '/products?category=Communication Security' },
  { name: 'Defense Communication Solutions', href: '/products?category=Communication Security' },
  { name: 'Radars & Fire Control Systems', href: '/products?category=Radars' },
  { name: 'C4IS', href: '/products?category=C4IS' },
  { name: 'Air Defense', href: '/products?category=Air Defense' },
];

const navLinks = [
  { name: 'Home', href: '/' },
  { name: 'Who We Are', href: '/about' },
  { name: 'Our Capabilities', href: '/capabilities' },
  { name: 'Products', href: '/products', hasDropdown: true },
  { name: 'Contact Us', href: '/contact' },
];

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isProductsOpen, setIsProductsOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
    setIsProductsOpen(false);
  }, [location]);

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        isScrolled
          ? 'bg-navy-600/95 backdrop-blur-md shadow-lg py-2'
          : 'bg-transparent py-4'
      )}
    >
      <div className="container mx-auto px-4">
        <nav className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group">
            <div className="w-10 h-10 rounded-lg bg-accent flex items-center justify-center transition-transform group-hover:scale-110">
              <Shield className="w-6 h-6 text-accent-foreground" />
            </div>
            <span className="font-heading font-bold text-xl text-white">
              AegisTech<span className="text-accent">.</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <div
                key={link.name}
                className="relative"
                onMouseEnter={() => link.hasDropdown && setIsProductsOpen(true)}
                onMouseLeave={() => link.hasDropdown && setIsProductsOpen(false)}
              >
                <Link
                  to={link.href}
                  className={cn(
                    'px-4 py-2 text-sm font-medium transition-colors relative group flex items-center gap-1',
                    location.pathname === link.href
                      ? 'text-accent'
                      : 'text-white/90 hover:text-accent'
                  )}
                >
                  {link.name}
                  {link.hasDropdown && <ChevronDown className="w-4 h-4" />}
                  <span className="absolute bottom-0 left-4 right-4 h-0.5 bg-accent scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
                </Link>

                {/* Mega Dropdown */}
                {link.hasDropdown && (
                  <AnimatePresence>
                    {isProductsOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        transition={{ duration: 0.2 }}
                        className="absolute top-full left-1/2 -translate-x-1/2 pt-4 w-[600px]"
                      >
                        <div className="bg-navy-600 rounded-xl shadow-2xl border border-white/10 p-6 grid grid-cols-2 gap-6">
                          {/* Intelligence Column */}
                          <div>
                            <h3 className="text-accent font-heading font-semibold text-sm mb-3 flex items-center gap-2">
                              <div className="w-2 h-2 rounded-full bg-accent" />
                              Intelligence & Law Enforcement
                            </h3>
                            <ul className="space-y-1">
                              {intelligenceProducts.map((item) => (
                                <li key={item.name}>
                                  <Link
                                    to={item.href}
                                    className="block px-3 py-1.5 text-sm text-white/70 hover:text-accent hover:bg-white/5 rounded transition-colors"
                                  >
                                    {item.name}
                                  </Link>
                                </li>
                              ))}
                            </ul>
                          </div>

                          {/* Defense Column */}
                          <div>
                            <h3 className="text-highlight font-heading font-semibold text-sm mb-3 flex items-center gap-2">
                              <div className="w-2 h-2 rounded-full bg-highlight" />
                              Defense & Military
                            </h3>
                            <ul className="space-y-1">
                              {defenseProducts.map((item) => (
                                <li key={item.name}>
                                  <Link
                                    to={item.href}
                                    className="block px-3 py-1.5 text-sm text-white/70 hover:text-highlight hover:bg-white/5 rounded transition-colors"
                                  >
                                    {item.name}
                                  </Link>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                )}
              </div>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <Link to="/contact">
              <Button variant="hero" size="lg">
                Schedule a Call
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="lg:hidden p-2 text-white"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </nav>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-navy-600 border-t border-white/10"
          >
            <div className="container mx-auto px-4 py-4">
              <div className="flex flex-col gap-2">
                {navLinks.map((link) => (
                  <div key={link.name}>
                    {link.hasDropdown ? (
                      <div>
                        <button
                          onClick={() => setIsProductsOpen(!isProductsOpen)}
                          className="w-full flex items-center justify-between px-4 py-3 text-white/90 hover:text-accent transition-colors"
                        >
                          {link.name}
                          <ChevronDown className={cn('w-4 h-4 transition-transform', isProductsOpen && 'rotate-180')} />
                        </button>
                        <AnimatePresence>
                          {isProductsOpen && (
                            <motion.div
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: 'auto' }}
                              exit={{ opacity: 0, height: 0 }}
                              className="pl-4 space-y-4 py-2"
                            >
                              <div>
                                <h4 className="text-accent text-xs font-semibold mb-2 px-4">Intelligence</h4>
                                {intelligenceProducts.slice(0, 4).map((item) => (
                                  <Link
                                    key={item.name}
                                    to={item.href}
                                    className="block px-4 py-2 text-sm text-white/70 hover:text-accent"
                                  >
                                    {item.name}
                                  </Link>
                                ))}
                              </div>
                              <div>
                                <h4 className="text-highlight text-xs font-semibold mb-2 px-4">Defense</h4>
                                {defenseProducts.slice(0, 4).map((item) => (
                                  <Link
                                    key={item.name}
                                    to={item.href}
                                    className="block px-4 py-2 text-sm text-white/70 hover:text-highlight"
                                  >
                                    {item.name}
                                  </Link>
                                ))}
                              </div>
                              <Link
                                to="/products"
                                className="block px-4 py-2 text-sm text-accent font-medium"
                              >
                                View All Products →
                              </Link>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    ) : (
                      <Link
                        to={link.href}
                        className={cn(
                          'block px-4 py-3 transition-colors',
                          location.pathname === link.href
                            ? 'text-accent'
                            : 'text-white/90 hover:text-accent'
                        )}
                      >
                        {link.name}
                      </Link>
                    )}
                  </div>
                ))}
                <div className="pt-4 px-4">
                  <Link to="/contact" className="block">
                    <Button variant="hero" className="w-full">
                      Schedule a Call
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
