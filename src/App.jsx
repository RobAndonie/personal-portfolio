import './App.css';
import NavigationBar from './sections/NavigationBar';
import Hero from './sections/Hero';
import Projects from './sections/Projects';
import heroBackground from './assets/heroBackground.jpg';

function App() {
  return (
    <div className="bg-background">
      <div
        className="bg-cover"
        style={{ backgroundImage: `url(${heroBackground})` }}
      >
        <NavigationBar />
        <Hero />
      </div>
      <Projects />
    </div>
  );
}

export default App;
