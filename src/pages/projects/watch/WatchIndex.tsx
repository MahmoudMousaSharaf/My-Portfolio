import Header from '@/components/watch/Header';
import HeroSection from '@/components/watch/HeroSection';
import ProductGrid from '@/components/watch/ProductGrid';
import WatchFeaturesSection from '@/components/watch/WatchFeaturesSection';
import BlogSection from '@/components/watch/BlogSection';
import WatchBlogSection from '@/components/watch/WatchBlogSection';
import Footer from '@/components/watch/Footer';

const WatchIndex = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <HeroSection />
      <ProductGrid />
      <WatchFeaturesSection />
      <WatchBlogSection />
      <BlogSection />
      <Footer />
    </div>
  );
};

export default WatchIndex;
