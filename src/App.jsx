import Navbar from './components/Navbar';
import Hero from './sections/Hero';
import About from './sections/About';
import Services from './sections/Services';
import Projects from './sections/Projects';
import WhyChooseUs from './sections/WhyChooseUs';
import Contact from './sections/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App scroll-smooth">
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Projects />
      <WhyChooseUs />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;

