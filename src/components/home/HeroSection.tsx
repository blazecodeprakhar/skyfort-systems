import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Play, Shield, CheckCircle2 } from 'lucide-react';
import { Button } from '@/components/ui/button';


const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 w-full h-full">
        <video
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          className="w-full h-full object-cover"
        >
          <source src="/hero.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-r from-navy-600/75 via-navy-600/60 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-navy-600/70 via-transparent to-navy-600/40" />
      </div>

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 bg-grid-pattern opacity-10" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pt-28 sm:pt-32 lg:pt-36 pb-16 lg:pb-24 h-full flex flex-col justify-center">
        <div className="max-w-5xl">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1.5 sm:px-4 sm:py-2 bg-accent/10 hover:bg-accent/20 backdrop-blur-md border border-accent/20 rounded-full text-accent text-xs sm:text-sm font-medium mb-6 sm:mb-8 transition-colors cursor-default">
              <Shield className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
              <span>Advanced Indigenous Defence Technology</span>
            </div>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-heading font-bold text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-white leading-[1.1] tracking-tight mb-6 max-w-4xl break-words"
          >
            Advanced <span className="text-white">Indigenous</span> <br className="hidden sm:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent via-accent to-highlight">Defence</span> Solutions
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-base sm:text-lg md:text-xl text-white/80 mb-8 sm:mb-10 max-w-2xl leading-relaxed"
          >
            RAVVIK Global Solutions: Empowering armed forces with indigenous, technologically advanced EW, C-UAS, and tactical training solutions.
          </motion.p>

          {/* Trust Indicators */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-wrap gap-x-6 gap-y-3 mb-8 sm:mb-12"
          >
            {[
              'Deep Tech Expertise',
              'Indigenous Innovation',
              'Mission Critical Systems',
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-2 text-white/80 text-sm sm:text-base font-medium">
                <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-accent flex-shrink-0" />
                <span>{item}</span>
              </div>
            ))}
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto"
          >
            <Link to="/contact" className="w-full sm:w-auto">
              <Button variant="hero" size="xl" className="w-full sm:w-auto h-12 sm:h-14 text-base font-semibold px-8 shadow-lg shadow-accent/20">
                Schedule a Call
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>
            <Link to="/capabilities" className="w-full sm:w-auto">
              <Button variant="heroOutline" size="xl" className="w-full sm:w-auto h-12 sm:h-14 text-base font-semibold px-8 hover:bg-white/5">
                <Play className="w-5 h-5 mr-2" />
                Discover More
              </Button>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
