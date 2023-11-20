import NavigationBar from './NavigationBar';
import Hero from './Hero';
import heroBackground from '../assets/heroBackground.jpg';

function Home() {
  return (
    <div
      className="h-screen bg-cover"
      style={{
        backgroundImage: `url(${heroBackground})`,
      }}
    >
      <NavigationBar />
      <Hero />
    </div>
  );
}

export default Home;
