import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Shield, Radar, Satellite, Radio, Lock, Crosshair } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Product } from '@/data/products';
import { cn } from '@/lib/utils';

interface ProductCardProps {
  product: Product;
  index?: number;
}

const subcategoryIcons: Record<string, React.ElementType> = {
  'ISR': Satellite,
  'Satellite Monitoring': Satellite,
  'Cellular Monitoring': Radio,
  'Lawful Interception': Lock,
  'Radio Monitoring': Radio,
  'Cyber Intelligence': Shield,
  'Network Intelligence': Shield,
  'Electronic Warfare': Crosshair,
  'Radars': Radar,
  'Fire Control': Crosshair,
  'Air Defense': Shield,
  'C4IS': Shield,
  'Communication Security': Lock,
  'Satellite Imagery': Satellite,
};

const ProductCard = ({ product, index = 0 }: ProductCardProps) => {
  const Icon = subcategoryIcons[product.subcategory] || Shield;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group"
    >
      <div className={cn(
        'relative h-full bg-card rounded-xl border border-border overflow-hidden',
        'transition-all duration-300',
        'hover:shadow-card-hover hover:border-accent/30 hover:-translate-y-1'
      )}>
        {/* Category Badge */}
        <div className="absolute top-4 right-4 z-10">
          <span className={cn(
            'px-3 py-1 text-xs font-semibold rounded-full',
            product.category === 'intelligence'
              ? 'bg-accent/20 text-accent'
              : 'bg-highlight/20 text-highlight'
          )}>
            {product.subcategory}
          </span>
        </div>

        {/* Icon Section */}
        <div className="relative h-48 bg-gradient-to-br from-navy-600 to-secondary flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 bg-grid-pattern opacity-20" />
          <div className="relative">
            <div className={cn(
              'w-20 h-20 rounded-2xl flex items-center justify-center',
              'bg-white/10 backdrop-blur-sm border border-white/20',
              'group-hover:scale-110 transition-transform duration-300'
            )}>
              <Icon className="w-10 h-10 text-accent" />
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="p-6">
          <h3 className="font-heading font-semibold text-xl mb-2 text-foreground group-hover:text-accent transition-colors">
            {product.name}
          </h3>
          <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
            {product.shortDescription}
          </p>

          {/* Features Preview */}
          <div className="flex flex-wrap gap-2 mb-4">
            {product.features.slice(0, 3).map((feature, i) => (
              <span
                key={i}
                className="px-2 py-1 text-xs bg-muted text-muted-foreground rounded"
              >
                {feature.split(' ').slice(0, 2).join(' ')}
              </span>
            ))}
          </div>

          <Link to={`/products/${product.id}`}>
            <Button variant="ghost" className="w-full group/btn">
              View Details
              <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

export default ProductCard;
