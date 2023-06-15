import { Hero } from './components/Hero';
import { Navbar } from './components/Navbar';
import { Content } from './components/Content';
import { Testimonials } from './components/Testimonials';
import { ImageGallery } from './components/ImageGallery';
import { Footer } from './components/Footer';
const Sunnyside = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Content />
      <Testimonials />
      <ImageGallery />
      <Footer />
    </>
  );
};

export default Sunnyside;
