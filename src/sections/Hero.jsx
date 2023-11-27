import { Link } from 'react-scroll';
import NavigationBar from './NavigationBar';
import Tag from '../components/Tag';
import stuffIEnjoy from '../data/stuffIEnjoy';
import heroBackground from '../assets/heroBackground.jpg';

function Hero() {
  return (
    <div
      className="flex h-screen flex-col bg-cover bg-center"
      style={{
        backgroundImage: `url(${heroBackground})`,
      }}
    >
      <NavigationBar />
      <div className="my-auto px-4 md:px-20 lg:px-60 xl:px-72">
        <div>
          <div className="mb-6">
            <h1 className="font-variant-small-caps text-5xl font-bold text-white md:text-6xl lg:text-7xl xl:text-8xl">
              Roberto Andonie
            </h1>
            <h2 className="text-lg font-medium text-lightgray md:text-xl lg:text-2xl">
              Crafting software that goes beyond code - prioritizing users,
              empowering leaders, and upholding values.
            </h2>
          </div>
          <div className="hidden lg:block">
            <h3 className="font-variant-small-caps mb-2.5 text-lg font-normal leading-normal text-white md:text-xl">
              Stuff I enjoy
            </h3>
            <div className="flex flex-wrap gap-2">
              {stuffIEnjoy.map((tag) => (
                <Tag key={tag} text={tag} />
              ))}
            </div>
          </div>
        </div>
        <div className="flex justify-center">
          <Link to="projects" smooth={true} duration={500}>
            <button className="flex rounded-full border border-white p-2 px-3 text-white">
              <span className="material-symbols-outlined text-2xl">
                arrow_downward
              </span>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Hero;
