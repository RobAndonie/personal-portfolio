import Tag from '../components/Tag';
import experience from '../data/experience';

const Experience = () => {
  return (
    <div className="flex flex-col gap-4 px-20 pb-10 pt-32 text-white md:flex-row lg:px-32">
      <h1 className="font-variant-small-caps text-4xl font-bold md:w-1/2 lg:text-6xl xl:text-7xl">
        Professional Experience
      </h1>
      <div className="flex flex-col md:w-1/2">
        {experience.map((exp, index) => (
          <div key={index} className="mb-6">
            <div className="flex flex-col justify-between gap-2 text-base text-[#C0C0C0] lg:flex-row">
              <div className="lg:w-2/5">
                <h4>{exp.duration}</h4>
              </div>
              <div className="flex flex-col lg:w-3/5">
                <h3 className="font-variant-small-caps font-medium text-white">
                  {exp.position} - {exp.company}
                </h3>
                <p className="mb-2">{exp.description}</p>
                <div className="flex flex-wrap gap-2 text-xs">
                  {exp.tags.map((tag, index) => (
                    <span className="font-roboto" key={index}>
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;
