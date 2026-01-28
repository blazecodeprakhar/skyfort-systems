import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import ReactMarkdown from 'react-markdown';
import { ArrowLeft, CheckCircle2, Mail, ArrowRight, Shield, Radar, Satellite, Radio, Lock, Crosshair } from 'lucide-react';
import Layout from '@/components/layout/Layout';
import { getProductById, products } from '@/data/products';
import { Button } from '@/components/ui/button';
import ProductCard from '@/components/common/ProductCard';
import { cn } from '@/lib/utils';

const subcategoryIcons: Record<string, React.ElementType> = {
  'Electronic Warfare': Radio,
  'C-UAS': Shield,
  'UAS': Satellite,
  'Firing Ranges': Crosshair,
  'Shoot Houses': Crosshair,
  'AI Software': Radar,
};

const ProductDetail = () => {
  const { id } = useParams<{ id: string }>();
  const product = getProductById(id || '');

  if (!product) {
    return (
      <Layout>
        <div className="min-h-screen flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-2xl font-bold mb-4">Product Not Found</h1>
            <Link to="/products">
              <Button variant="outline">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Products
              </Button>
            </Link>
          </div>
        </div>
      </Layout>
    );
  }

  const Icon = subcategoryIcons[product.subcategory] || Shield;

  // Get related products
  const relatedProducts = products
    .filter(p => p.id !== product.id && (p.subcategory === product.subcategory || p.category === product.category))
    .slice(0, 3);

  return (
    <Layout>
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-navy-600 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-10" />
        <div className="container mx-auto px-4 relative z-10">
          {/* Breadcrumb */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-8"
          >
            <Link
              to="/products"
              className="inline-flex items-center gap-2 text-white/60 hover:text-accent transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Products
            </Link>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
            >
              <span className={cn(
                'inline-block px-4 py-1.5 text-xs font-semibold uppercase tracking-wider rounded-full mb-4',
                product.category === 'Electronic Warfare & C-UAS'
                  ? 'bg-accent/20 text-accent'
                  : 'bg-highlight/20 text-highlight'
              )}>
                {product.subcategory}
              </span>
              <h1 className="font-heading font-bold text-3xl md:text-4xl lg:text-5xl text-white mb-6">
                {product.name}
              </h1>
              <p className="text-white/70 text-lg mb-8">
                {product.shortDescription}
              </p>
              <Link to="/contact">
                <Button variant="hero" size="xl">
                  <Mail className="w-5 h-5 mr-2" />
                  Request Information
                </Button>
              </Link>
            </motion.div>

            {/* Icon Display */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="flex justify-center"
            >
              <div className="relative">
                <div className="absolute inset-0 bg-accent/20 rounded-full blur-3xl" />
                <div className={cn(
                  'relative w-48 h-48 md:w-64 md:h-64 rounded-3xl flex items-center justify-center',
                  'bg-white/10 backdrop-blur-sm border border-white/20'
                )}>
                  <Icon className={cn(
                    'w-24 h-24 md:w-32 md:h-32',
                    product.category === 'Electronic Warfare & C-UAS' ? 'text-accent' : 'text-highlight'
                  )} />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Product Details */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* Description */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-16"
            >
              <h2 className="font-heading font-bold text-2xl md:text-3xl mb-6 text-foreground">
                Overview
              </h2>
              <div className="prose prose-lg dark:prose-invert max-w-none">
                <ReactMarkdown
                  components={{
                    h3: ({ node, ...props }) => <h3 className="text-xl md:text-2xl font-heading font-bold text-navy-900 mt-8 mb-4 border-b border-border pb-2" {...props} />,
                    p: ({ node, ...props }) => <p className="text-muted-foreground mb-4 leading-relaxed" {...props} />,
                    ul: ({ node, ...props }) => <ul className="list-none space-y-2 mb-6" {...props} />,
                    li: ({ node, ...props }) => (
                      <li className="flex items-start gap-2 text-muted-foreground" {...props}>
                        <span className="mt-2 w-1.5 h-1.5 rounded-full bg-accent flex-shrink-0" />
                        <span>{props.children}</span>
                      </li>
                    ),
                    strong: ({ node, ...props }) => <strong className="font-semibold text-navy-800" {...props} />
                  }}
                >
                  {product.fullDescription}
                </ReactMarkdown>
              </div>
            </motion.div>

            {/* Features & Use Cases Grid */}
            <div className="grid md:grid-cols-2 gap-8">
              {/* Features */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-card rounded-2xl border border-border p-8"
              >
                <h3 className="font-heading font-bold text-xl mb-6 text-foreground flex items-center gap-2">
                  <div className="w-8 h-8 rounded-lg bg-accent/10 flex items-center justify-center">
                    <CheckCircle2 className="w-5 h-5 text-accent" />
                  </div>
                  Key Features
                </h3>
                <ul className="space-y-4">
                  {product.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <div className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0" />
                      <span className="text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>

              {/* Use Cases */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="bg-card rounded-2xl border border-border p-8"
              >
                <h3 className="font-heading font-bold text-xl mb-6 text-foreground flex items-center gap-2">
                  <div className="w-8 h-8 rounded-lg bg-highlight/10 flex items-center justify-center">
                    <Shield className="w-5 h-5 text-highlight" />
                  </div>
                  Use Cases
                </h3>
                <ul className="space-y-4">
                  {product.useCases.map((useCase, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <div className="w-2 h-2 rounded-full bg-highlight mt-2 flex-shrink-0" />
                      <span className="text-muted-foreground">{useCase}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mt-12 text-center"
            >
              <p className="text-muted-foreground mb-4">
                Interested in learning more about {product.name}?
              </p>
              <Link to="/contact">
                <Button variant="navy" size="lg">
                  Contact Our Team
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Related Products */}
      {relatedProducts.length > 0 && (
        <section className="py-20 bg-muted/50">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="font-heading font-bold text-2xl md:text-3xl text-foreground mb-4">
                Related Products
              </h2>
              <p className="text-muted-foreground">
                Explore other solutions in our portfolio
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {relatedProducts.map((product, index) => (
                <ProductCard key={product.id} product={product} index={index} />
              ))}
            </div>
          </div>
        </section>
      )}
    </Layout>
  );
};

export default ProductDetail;
