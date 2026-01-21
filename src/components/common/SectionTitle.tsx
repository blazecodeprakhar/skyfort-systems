import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface SectionTitleProps {
  badge?: string;
  title: string;
  subtitle?: string;
  centered?: boolean;
  light?: boolean;
}

const SectionTitle = ({ badge, title, subtitle, centered = true, light = false }: SectionTitleProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className={cn('mb-12', centered && 'text-center')}
    >
      {badge && (
        <span className={cn(
          'inline-block px-4 py-1.5 text-xs font-semibold uppercase tracking-wider rounded-full mb-4',
          light 
            ? 'bg-accent/20 text-accent' 
            : 'bg-accent/10 text-accent'
        )}>
          {badge}
        </span>
      )}
      <h2 className={cn(
        'font-heading font-bold text-3xl md:text-4xl lg:text-5xl mb-4',
        light ? 'text-white' : 'text-foreground'
      )}>
        {title}
      </h2>
      {subtitle && (
        <p className={cn(
          'text-lg max-w-3xl',
          centered && 'mx-auto',
          light ? 'text-white/70' : 'text-muted-foreground'
        )}>
          {subtitle}
        </p>
      )}
    </motion.div>
  );
};

export default SectionTitle;
