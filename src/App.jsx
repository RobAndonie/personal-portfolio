import './App.css';
import { Element } from 'react-scroll';
import Hero from './sections/Hero';
import Projects from './sections/Projects';
import Experience from './sections/Experience';
import Footer from './sections/Footer';
import ContactBar from './components/ContactBar';

function App() {
  return (
    <div className="bg-background">
      <Element name="home" className="section">
        <Hero />
      </Element>
      <Element name="projects" className="section">
        <Projects />
      </Element>
      <Element name="experience" className="section">
        <Experience />
      </Element>
      <Element name="contact" className="section">
        <Footer />
      </Element>
      <ContactBar />
    </div>
  );
}

export default App;
