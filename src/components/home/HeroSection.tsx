import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Play, Shield, CheckCircle2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import heroBg from '@/assets/hero-bg.jpg';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={heroBg}
          alt="Defense Technology"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-navy-600/95 via-navy-600/80 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-navy-600/90 via-transparent to-navy-600/60" />
      </div>

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 bg-grid-pattern opacity-10" />

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10 pt-24">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-accent/20 backdrop-blur-sm border border-accent/30 rounded-full text-accent text-sm font-medium mb-6">
              <Shield className="w-4 h-4" />
              Trusted by 40+ Nations Worldwide
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-heading font-bold text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-white leading-tight mb-6"
          >
            Advanced Defense &{' '}
            <span className="text-gradient">Intelligence</span>{' '}
            Solutions
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg md:text-xl text-white/80 mb-8 max-w-2xl"
          >
            Securing nations with cutting-edge surveillance, reconnaissance, 
            and defense systems. From satellite monitoring to cyber intelligence, 
            we deliver mission-critical solutions.
          </motion.p>

          {/* Trust Indicators */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-wrap gap-4 mb-10"
          >
            {[
              '15+ Years Experience',
              '120+ Defense Projects',
              'NATO Compliant',
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-2 text-white/70 text-sm">
                <CheckCircle2 className="w-4 h-4 text-accent" />
                <span>{item}</span>
              </div>
            ))}
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-wrap gap-4"
          >
            <Link to="/contact">
              <Button variant="hero" size="xl">
                Schedule a Call
                <ArrowRight className="w-5 h-5" />
              </Button>
            </Link>
            <Link to="/capabilities">
              <Button variant="heroOutline" size="xl">
                <Play className="w-5 h-5" />
                Discover More
              </Button>
            </Link>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.6 }}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        >
          <div className="flex flex-col items-center gap-2">
            <span className="text-white/50 text-sm">Scroll to explore</span>
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
              className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center pt-2"
            >
              <div className="w-1.5 h-3 bg-accent rounded-full" />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
