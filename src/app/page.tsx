import HeroSection from '@/components/home/HeroSection';
import FeaturedCategories from '@/components/home/FeaturedCategories';
import ValueProps from '@/components/home/ValueProps';
import Recommendations from '@/components/home/Recommendations';
import Testimonials from '@/components/home/Testimonials';
import InstagramFeed from '@/components/home/InstagramFeed';

export default function Home() {
  return (
    <div className="flex flex-col">
      <HeroSection />
      <ValueProps />
      <FeaturedCategories />
      <Recommendations />
      <Testimonials />
      <InstagramFeed />
    </div>
  );
}
