import Navbar from '../components/Navbar/Navbar';
import Hero from '../components/Hero/Hero';
import About from '../components/About/About';
import Skills from '../components/Skills/Skills';
import Resume from '../components/Resume/Resume';
import Contact from '../components/Contact/Contact';
import Footer from '../components/Footer/Footer';

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Resume />
      <Contact />
      <Footer />
    </>
  );
}