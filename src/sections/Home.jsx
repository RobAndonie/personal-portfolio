import NavigationBar from './NavigationBar';
import Hero from './Hero';
import heroBackground from '../assets/heroBackground.jpg';

function Home() {
  return (
    <div>
      <div
        className="bg-cover bg-center"
        style={{
          backgroundImage: `url(${heroBackground})`,
        }}
      >
        <NavigationBar />
        <Hero />
      </div>
    </div>
  );
}

export default Home;
