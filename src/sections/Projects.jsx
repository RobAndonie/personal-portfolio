import FProjects from '../components/FProjects';
import SmallTag from '../components/SmallTag';
import projects from '../data/projects';

const Projects = () => {
  return (
    <div className="px-20 pt-32 lg:px-32">
      <div className="flex flex-col gap-16 text-white md:flex-row">
        <div className="flex flex-col gap-4 md:w-2/4">
          <h1 className="font-variant-small-caps text-7xl font-bold">
            My Work
          </h1>
          <p className="pb-4 font-roboto">
            From my coding beginnings, I discovered a passion at the
            intersection of Software Engineering and User Experience. As I
            worked on my skills in Web Development, I also found myself drawn to
            the creative process of designing and building digital experiences.
          </p>
          <p className="font-roboto">
            I have worked on a variety of projects, from personal websites to
            full-stack applications. I am always looking for new opportunities
            to learn and grow as a developer and UX designer.
          </p>
        </div>
        <div className="border border-white"></div>
        <div className="flex flex-col gap-6 md:w-2/4">
          <FProjects />
        </div>
      </div>
      <div className="flex flex-wrap items-stretch justify-center gap-6 pt-16">
        {projects.map((project) => (
          <div
            key={project.id}
            className="max-w-sm transform overflow-hidden rounded bg-[#1C1C1C] shadow-lg transition duration-300 ease-in-out hover:-translate-y-1 hover:scale-105"
          >
            <img className="w-full" src={project.image} alt={project.title} />
            <div className="px-6 py-4">
              <div className="font-variant-small-caps mb-2 text-xl font-medium text-white">
                {project.title}
              </div>
              <div>
                {project.description.map((paragraph, index) => (
                  <p key={index} className="pb-2 text-sm text-[#C0C0C0]">
                    {paragraph}
                  </p>
                ))}
              </div>
              <div className="flex flex-wrap gap-2 pt-4">
                {project.tags.map((tag, index) => (
                  <SmallTag key={index} text={tag} />
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
