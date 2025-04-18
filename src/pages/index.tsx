import Navbar from '../components/Navbar/Navbar';
import Hero from '../components/Hero/Hero';
import About from '../components/About/About';
import Skills from '../components/Skills/Skills';
import Resume from '../components/Resume/Resume';
import Contact from '../components/Contact/Contact';
import Footer from '../components/Footer/Footer';
import AnimateOnScroll from '../components/AnimateOnScroll/AnimateOnScroll';

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <AnimateOnScroll>
        <About />
      </AnimateOnScroll>
      <AnimateOnScroll>
        <Skills />
      </AnimateOnScroll>
      <AnimateOnScroll>
        <Resume />
      </AnimateOnScroll>
      <AnimateOnScroll>
        <Contact />
      </AnimateOnScroll>
      <AnimateOnScroll>
        <Footer />
      </AnimateOnScroll>
    </>
  );
}