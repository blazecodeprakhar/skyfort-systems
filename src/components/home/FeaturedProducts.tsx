import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { products } from '@/data/products';
import ProductCard from '@/components/common/ProductCard';
import SectionTitle from '@/components/common/SectionTitle';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const FeaturedProducts = () => {
  // Get 6 featured products (mix of EW and Training)
  const featuredProducts = [
    ...products.filter(p => p.category === 'Electronic Warfare & C-UAS').slice(0, 3),
    ...products.filter(p => p.category === 'Tactical Training').slice(0, 3),
  ];

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <SectionTitle
          badge="Our Products"
          title="Defense Solutions Portfolio"
          subtitle="Explore our comprehensive range of surveillance and defense systems"
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredProducts.map((product, index) => (
            <ProductCard key={product.id} product={product} index={index} />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Link to="/products">
            <Button variant="navy" size="lg">
              View All Products
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
