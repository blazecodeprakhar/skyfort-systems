import { useState, useMemo } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Search, Filter, Grid, List } from 'lucide-react';
import Layout from '@/components/layout/Layout';
import ProductCard from '@/components/common/ProductCard';
import { products, getProductsByCategory } from '@/data/products';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

const subcategories = {
  intelligence: [
    'All',
    'ISR',
    'Satellite Monitoring',
    'Cellular Monitoring',
    'Lawful Interception',
    'Radio Monitoring',
    'Cyber Intelligence',
    'Network Intelligence',
  ],
  defense: [
    'All',
    'Electronic Warfare',
    'Radars',
    'Fire Control',
    'Air Defense',
    'C4IS',
    'Communication Security',
    'Satellite Imagery',
  ],
};

const Products = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState<'all' | 'intelligence' | 'defense'>('all');
  const [activeSubcategory, setActiveSubcategory] = useState('All');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');

  // Get category from URL if present
  const urlCategory = searchParams.get('category');

  const filteredProducts = useMemo(() => {
    let result = [...products];

    // Filter by main category
    if (activeCategory !== 'all') {
      result = getProductsByCategory(activeCategory);
    }

    // Filter by subcategory
    if (activeSubcategory !== 'All') {
      result = result.filter(p => p.subcategory === activeSubcategory);
    }

    // Filter by URL category parameter
    if (urlCategory) {
      result = result.filter(p => 
        p.subcategory.toLowerCase().includes(urlCategory.toLowerCase())
      );
    }

    // Filter by search query
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      result = result.filter(p =>
        p.name.toLowerCase().includes(query) ||
        p.shortDescription.toLowerCase().includes(query) ||
        p.subcategory.toLowerCase().includes(query)
      );
    }

    return result;
  }, [activeCategory, activeSubcategory, searchQuery, urlCategory]);

  const handleCategoryChange = (category: 'all' | 'intelligence' | 'defense') => {
    setActiveCategory(category);
    setActiveSubcategory('All');
    setSearchParams({});
  };

  return (
    <Layout>
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-navy-600 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-10" />
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl mx-auto text-center"
          >
            <span className="inline-block px-4 py-1.5 text-xs font-semibold uppercase tracking-wider rounded-full bg-accent/20 text-accent mb-4">
              Products
            </span>
            <h1 className="font-heading font-bold text-4xl md:text-5xl lg:text-6xl text-white mb-6">
              Defense Solutions
            </h1>
            <p className="text-white/70 text-lg md:text-xl mb-8">
              Explore our comprehensive portfolio of intelligence and defense systems
            </p>

            {/* Search Bar */}
            <div className="max-w-xl mx-auto relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-muted-foreground" />
              <Input
                type="text"
                placeholder="Search products..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-12 h-14 bg-white/10 border-white/20 text-white placeholder:text-white/50 focus:bg-white/20"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Filters */}
      <section className="py-8 bg-background border-b border-border sticky top-16 z-30">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-4">
            {/* Category Tabs */}
            <div className="flex flex-wrap gap-2">
              {(['all', 'intelligence', 'defense'] as const).map((cat) => (
                <button
                  key={cat}
                  onClick={() => handleCategoryChange(cat)}
                  className={cn(
                    'px-4 py-2 rounded-lg text-sm font-medium transition-all',
                    activeCategory === cat
                      ? 'bg-accent text-accent-foreground'
                      : 'bg-muted text-muted-foreground hover:bg-muted/80'
                  )}
                >
                  {cat === 'all' ? 'All Products' : cat === 'intelligence' ? 'Intelligence' : 'Defense'}
                </button>
              ))}
            </div>

            {/* View Toggle */}
            <div className="flex items-center gap-2">
              <span className="text-sm text-muted-foreground mr-2">
                {filteredProducts.length} products
              </span>
              <button
                onClick={() => setViewMode('grid')}
                className={cn(
                  'p-2 rounded-lg transition-colors',
                  viewMode === 'grid' ? 'bg-accent text-accent-foreground' : 'bg-muted'
                )}
              >
                <Grid className="w-4 h-4" />
              </button>
              <button
                onClick={() => setViewMode('list')}
                className={cn(
                  'p-2 rounded-lg transition-colors',
                  viewMode === 'list' ? 'bg-accent text-accent-foreground' : 'bg-muted'
                )}
              >
                <List className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Subcategory Filters */}
          {activeCategory !== 'all' && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              className="flex flex-wrap gap-2 mt-4 pt-4 border-t border-border"
            >
              {subcategories[activeCategory].map((sub) => (
                <button
                  key={sub}
                  onClick={() => setActiveSubcategory(sub)}
                  className={cn(
                    'px-3 py-1.5 rounded-full text-xs font-medium transition-all',
                    activeSubcategory === sub
                      ? activeCategory === 'intelligence'
                        ? 'bg-accent/20 text-accent border border-accent/30'
                        : 'bg-highlight/20 text-highlight border border-highlight/30'
                      : 'bg-muted text-muted-foreground hover:bg-muted/80'
                  )}
                >
                  {sub}
                </button>
              ))}
            </motion.div>
          )}
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          {filteredProducts.length > 0 ? (
            <div className={cn(
              viewMode === 'grid'
                ? 'grid md:grid-cols-2 lg:grid-cols-3 gap-8'
                : 'space-y-4'
            )}>
              {filteredProducts.map((product, index) => (
                viewMode === 'grid' ? (
                  <ProductCard key={product.id} product={product} index={index} />
                ) : (
                  <motion.div
                    key={product.id}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.05 }}
                  >
                    <Link
                      to={`/products/${product.id}`}
                      className="flex items-center gap-6 p-6 bg-card rounded-xl border border-border hover:border-accent/30 hover:shadow-card transition-all group"
                    >
                      <div className={cn(
                        'w-16 h-16 rounded-xl flex items-center justify-center flex-shrink-0',
                        product.category === 'intelligence' ? 'bg-accent/10' : 'bg-highlight/10'
                      )}>
                        <Filter className={cn(
                          'w-8 h-8',
                          product.category === 'intelligence' ? 'text-accent' : 'text-highlight'
                        )} />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className="font-heading font-semibold text-lg text-foreground group-hover:text-accent transition-colors">
                          {product.name}
                        </h3>
                        <p className="text-muted-foreground text-sm truncate">
                          {product.shortDescription}
                        </p>
                      </div>
                      <span className={cn(
                        'px-3 py-1 text-xs font-medium rounded-full flex-shrink-0',
                        product.category === 'intelligence'
                          ? 'bg-accent/10 text-accent'
                          : 'bg-highlight/10 text-highlight'
                      )}>
                        {product.subcategory}
                      </span>
                    </Link>
                  </motion.div>
                )
              ))}
            </div>
          ) : (
            <div className="text-center py-20">
              <p className="text-muted-foreground text-lg">No products found matching your criteria.</p>
              <Button
                variant="outline"
                className="mt-4"
                onClick={() => {
                  setSearchQuery('');
                  setActiveCategory('all');
                  setActiveSubcategory('All');
                  setSearchParams({});
                }}
              >
                Clear Filters
              </Button>
            </div>
          )}
        </div>
      </section>
    </Layout>
  );
};

export default Products;
