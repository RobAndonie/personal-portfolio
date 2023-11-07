import Tag from '../components/Tag';
import stuffIEnjoy from '../data/stuffIEnjoy';

function Hero() {
  return (
    <div>
      <div className="mx-72 pb-20">
        <div className="pb-44 pt-32">
          <div className="mb-6">
            <h1 className="font-variant-small-caps text-8xl font-bold text-white">
              Roberto Andonie
            </h1>
            <h2 className="text-2xl font-medium text-lightgray">
              Crafting software that goes beyond code - prioritizing users,
              empowering leaders, and upholding values.
            </h2>
          </div>
          <div>
            <h3 className="font-variant-small-caps mb-2.5 text-xl font-normal leading-normal text-white">
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
          <button className="flex rounded-full border border-white p-2 px-3 text-white">
            <span className="material-symbols-outlined text-2xl">
              arrow_downward
            </span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Hero;
