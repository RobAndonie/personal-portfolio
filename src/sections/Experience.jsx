import Tag from '../components/Tag';
import experience from '../data/experience';

const Experience = () => {
  return (
    <div className="flex w-full flex-row px-32 pb-10 pt-32 text-white">
      <h1 className="font-variant-small-caps w-3/5 text-7xl font-bold">
        Professional Experience
      </h1>
      <div className="flex w-3/5 flex-col">
        {experience.map((exp, index) => (
          <div key={index} className="mb-6">
            <div className="flex flex-row justify-between text-base text-[#C0C0C0]">
              <h4 className="w-2/5">{exp.duration}</h4>
              <div className="flex w-3/5 flex-col">
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
