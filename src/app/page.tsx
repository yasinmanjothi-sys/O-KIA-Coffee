import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Intro from '@/components/Intro';
import About from '@/components/About';
import PrimaryCarousel from '@/components/PrimaryCarousel';
import LocationCarousel from '@/components/LocationCarousel';
import SecondaryCarousel from '@/components/SecondaryCarousel';
import MenuGrid from '@/components/MenuGrid';
import ReviewSlider from '@/components/ReviewSlider';
import WavyDivider from '@/components/WavyDivider';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="relative flex flex-col items-center justify-between w-full h-full">
      <Navbar />
      <Hero />
      <WavyDivider className="rotate-180 bg-[#F5F3E5] mt-[-1px] relative z-20" />
      <Intro />
      <About />
      <PrimaryCarousel />
      <WavyDivider className="rotate-180 bg-[#6E0D31] mt-[-1px] relative z-20" />
      <LocationCarousel />
      <SecondaryCarousel />
      <WavyDivider className="rotate-180 bg-[#F5F3E5] mt-[-1px] relative z-20" />
      <MenuGrid />
      <ReviewSlider />
      <WavyDivider className="bg-[#E84596] mb-[-1px] relative z-20" />
      <Footer />
    </main>
  );
}
