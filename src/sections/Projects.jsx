import FProjects from '../components/FProjects';
import Tag from '../components/Tag';
import projects from '../data/projects';

const Projects = () => {
  return (
    <div className="px-20 pt-32 lg:px-32">
      <div className="flex flex-col gap-10 text-white md:flex-row">
        <div className="flex flex-col gap-4 md:w-2/4 lg:w-1/4">
          <h1 className="font-variant-small-caps text-7xl font-bold">
            My Work
          </h1>
          <p className="pb-4 font-roboto">
            I thrive at the intersection of aesthetics and functionality,
            leveraging Front-End and design tools and technologies like React,
            Tailwind CSS, and Figma.
          </p>
          <p className="font-roboto">
            As I embark into the world of native app development, my passion for
            User Experience remains at the forefront of my work.
          </p>
        </div>
        <div className="flex flex-col gap-6 md:w-2/4 lg:w-3/4">
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
                  <p key={index} className="pb-px text-sm text-[#C0C0C0]">
                    {paragraph}
                  </p>
                ))}
              </div>
              <div className="flex flex-wrap gap-2 pt-4">
                {project.tags.map((tag, index) => (
                  <Tag key={index} text={tag} />
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
