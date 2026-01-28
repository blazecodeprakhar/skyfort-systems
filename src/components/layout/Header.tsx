import { useState, useEffect, useCallback } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '@/lib/utils';

const ewProducts = [
  { name: 'Electronic Warfare', href: '/products?category=Electronic Warfare' },
  { name: 'C-UAS', href: '/products?category=C-UAS' },
  { name: 'UAS', href: '/products?category=UAS' },
];

const trainingProducts = [
  { name: 'Firing Ranges', href: '/products?category=Firing Ranges' },
  { name: 'Shoot Houses', href: '/products?category=Shoot Houses' },
  { name: 'AI Software', href: '/products?category=AI Software' },
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

  // Handle scroll detection
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    handleScroll(); // Check initial state
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
    setIsProductsOpen(false);
  }, [location.pathname]);

  // Prevent body scroll when mobile menu is open
  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      const scrollY = window.scrollY;
      document.body.style.top = `-${scrollY}px`;
      document.body.style.position = 'fixed';
      document.body.style.width = '100%';
      document.body.style.overflow = 'hidden';
    } else {
      const scrollY = document.body.style.top;
      document.body.style.position = '';
      document.body.style.top = '';
      document.body.style.width = '';
      document.body.style.overflow = '';
      if (scrollY) {
        window.scrollTo(0, parseInt(scrollY || '0') * -1);
      }
    }

    return () => {
      const scrollY = document.body.style.top;
      document.body.style.position = '';
      document.body.style.top = '';
      document.body.style.width = '';
      document.body.style.overflow = '';
      if (scrollY) {
        window.scrollTo(0, parseInt(scrollY || '0') * -1);
      }
    };
  }, [isMobileMenuOpen]);

  const toggleMobileMenu = useCallback(() => {
    setIsMobileMenuOpen(prev => !prev);
    setIsProductsOpen(false);
  }, []);

  const closeMobileMenu = useCallback(() => {
    setIsMobileMenuOpen(false);
    setIsProductsOpen(false);
  }, []);

  const toggleProducts = useCallback(() => {
    setIsProductsOpen(prev => !prev);
  }, []);

  const handleLogoClick = useCallback((e: React.MouseEvent) => {
    // If already on homepage, scroll to top
    if (location.pathname === '/') {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
    closeMobileMenu();
  }, [location.pathname, closeMobileMenu]);

  return (
    <>
      {/* Header */}
      <header
        className={cn(
          'fixed top-0 left-0 right-0 transition-all duration-300',
          'z-[9999]', // Extremely high z-index for header
          isScrolled
            ? 'bg-navy-600/95 backdrop-blur-md shadow-lg py-2'
            : 'bg-transparent py-4'
        )}
      >
        <div className="container mx-auto px-4">
          <nav className="flex items-center justify-between">
            {/* Logo */}
            <Link
              to="/"
              className="flex items-center gap-2 group relative z-[10001]"
              onClick={handleLogoClick}
            >
              <div className="w-10 h-10 rounded-lg bg-accent flex items-center justify-center transition-transform group-hover:scale-110 overflow-hidden">
                <img
                  src="/logo.png"
                  alt="RAVVIK Logo"
                  className="w-full h-full object-cover"
                />
              </div>
              <span className="font-heading font-bold text-xl text-white">
                RAVVIK<span className="text-accent">.</span>
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

                  {/* Desktop Mega Dropdown */}
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
                            <div>
                              <h3 className="text-accent font-heading font-semibold text-sm mb-3 flex items-center gap-2">
                                <div className="w-2 h-2 rounded-full bg-accent" />
                                Electronic Warfare & C-UAS
                              </h3>
                              <ul className="space-y-1">
                                {ewProducts.map((item) => (
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
                            <div>
                              <h3 className="text-highlight font-heading font-semibold text-sm mb-3 flex items-center gap-2">
                                <div className="w-2 h-2 rounded-full bg-highlight" />
                                Tactical Training
                              </h3>
                              <ul className="space-y-1">
                                {trainingProducts.map((item) => (
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

            {/* Desktop CTA Button */}
            <div className="hidden lg:block">
              <Link to="/contact">
                <Button variant="hero" size="lg">
                  Schedule a Call
                </Button>
              </Link>
            </div>

            {/* Mobile Menu Toggle Button */}
            <button
              onClick={toggleMobileMenu}
              className={cn(
                'lg:hidden relative',
                'w-12 h-12 flex items-center justify-center',
                'bg-accent/10 hover:bg-accent/20 active:bg-accent/30',
                'border border-accent/30 rounded-lg',
                'transition-all duration-200',
                'z-[10001]', // Higher than everything
                'touch-none select-none' // Prevent touch issues
              )}
              aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={isMobileMenuOpen}
              type="button"
            >
              <AnimatePresence mode="wait" initial={false}>
                <motion.div
                  key={isMobileMenuOpen ? 'close' : 'open'}
                  initial={{ opacity: 0, rotate: -180, scale: 0.5 }}
                  animate={{ opacity: 1, rotate: 0, scale: 1 }}
                  exit={{ opacity: 0, rotate: 180, scale: 0.5 }}
                  transition={{ duration: 0.2, ease: 'easeInOut' }}
                  className="absolute inset-0 flex items-center justify-center"
                >
                  {isMobileMenuOpen ? (
                    <X className="w-6 h-6 text-white" strokeWidth={2.5} />
                  ) : (
                    <Menu className="w-6 h-6 text-white" strokeWidth={2.5} />
                  )}
                </motion.div>
              </AnimatePresence>
            </button>
          </nav>
        </div>
      </header>

      {/* Mobile Menu Overlay - Completely Separate Portal */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="lg:hidden fixed inset-0 bg-black/60 backdrop-blur-sm z-[9998]"
              onClick={closeMobileMenu}
            />

            {/* Mobile Menu Panel */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 30, stiffness: 300 }}
              className={cn(
                'lg:hidden fixed right-0 bottom-0 w-[85vw] max-w-sm',
                'bg-navy-900/98 backdrop-blur-xl',
                'border-l border-white/10',
                'shadow-2xl',
                'overflow-y-auto overflow-x-hidden',
                'z-[9999]',
                isScrolled ? 'top-[56px]' : 'top-[72px]'
              )}
            >
              <div className="flex flex-col h-full p-6">
                {/* Navigation Links */}
                <nav className="flex-1 space-y-2">
                  {navLinks.map((link) => (
                    <div key={link.name}>
                      {link.hasDropdown ? (
                        <div className="space-y-2">
                          <button
                            onClick={toggleProducts}
                            className="w-full flex items-center justify-between px-4 py-3 text-white font-heading font-medium text-lg rounded-lg hover:bg-white/5 transition-colors"
                            type="button"
                          >
                            <span>{link.name}</span>
                            <ChevronDown
                              className={cn(
                                'w-5 h-5 text-accent transition-transform duration-300',
                                isProductsOpen && 'rotate-180'
                              )}
                            />
                          </button>

                          <AnimatePresence>
                            {isProductsOpen && (
                              <motion.div
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: 'auto', opacity: 1 }}
                                exit={{ height: 0, opacity: 0 }}
                                transition={{ duration: 0.2 }}
                                className="overflow-hidden"
                              >
                                <div className="pl-4 pr-2 py-2 space-y-4">
                                  {/* EW Products */}
                                  <div>
                                    <h4 className="text-accent text-xs font-bold uppercase tracking-wider mb-2 px-3">
                                      Electronic Warfare
                                    </h4>
                                    <div className="space-y-1">
                                      {ewProducts.map((item) => (
                                        <Link
                                          key={item.name}
                                          to={item.href}
                                          onClick={closeMobileMenu}
                                          className="block px-3 py-2 text-white/70 hover:text-white hover:bg-white/5 rounded-lg transition-colors text-sm"
                                        >
                                          {item.name}
                                        </Link>
                                      ))}
                                    </div>
                                  </div>

                                  {/* Training Products */}
                                  <div>
                                    <h4 className="text-highlight text-xs font-bold uppercase tracking-wider mb-2 px-3">
                                      Tactical Training
                                    </h4>
                                    <div className="space-y-1">
                                      {trainingProducts.map((item) => (
                                        <Link
                                          key={item.name}
                                          to={item.href}
                                          onClick={closeMobileMenu}
                                          className="block px-3 py-2 text-white/70 hover:text-white hover:bg-white/5 rounded-lg transition-colors text-sm"
                                        >
                                          {item.name}
                                        </Link>
                                      ))}
                                    </div>
                                  </div>

                                  <Link
                                    to="/products"
                                    onClick={closeMobileMenu}
                                    className="block px-3 py-2 text-accent font-medium text-sm hover:underline"
                                  >
                                    View All Products →
                                  </Link>
                                </div>
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </div>
                      ) : (
                        <Link
                          to={link.href}
                          onClick={closeMobileMenu}
                          className={cn(
                            'block px-4 py-3 font-heading font-medium text-lg rounded-lg transition-colors',
                            location.pathname === link.href
                              ? 'text-accent bg-accent/10'
                              : 'text-white hover:bg-white/5'
                          )}
                        >
                          {link.name}
                        </Link>
                      )}
                    </div>
                  ))}
                </nav>

                {/* Mobile Menu Footer */}
                <div className="pt-6 space-y-4 border-t border-white/10 mt-6">
                  <Link to="/contact" onClick={closeMobileMenu}>
                    <Button variant="hero" size="lg" className="w-full text-base font-semibold">
                      Schedule a Consultation
                    </Button>
                  </Link>

                  <div className="grid grid-cols-2 gap-3">
                    <div className="bg-white/5 rounded-lg p-3 text-center">
                      <span className="block text-xl font-bold text-accent mb-1">24/7</span>
                      <span className="text-xs text-white/50 uppercase tracking-wider">Support</span>
                    </div>
                    <div className="bg-white/5 rounded-lg p-3 text-center">
                      <span className="block text-xl font-bold text-white mb-1">Make in India</span>
                      <span className="text-xs text-white/50 uppercase tracking-wider">Initiative</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;
