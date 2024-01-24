import fproject1 from '../assets/fproject1.png';

const featuredProjects = [
  {
    title: 'Software Engineering',
    description:
      'Experience in Web development. Proficient with Front and Back End tools like React, Tailwind CSS, MySQL, MongoDB, Node, Express, and other libraries.',
    image: fproject1,
  },
  {
    title: 'UX Design',
    description:
      'Passionate about User Experience. Skilled in Wireframing and Prototyping with Figma for Web Design. Familiar with UX Research & Usability Testing.',
    image: fproject1,
  },
];

function FProjects() {
  return (
    <div>
      {featuredProjects.map((project, index) => (
        <div key={index} className="flex flex-row lg:mb-6">
          <div className="w-5/5 flex flex-col border p-4 lg:w-2/5">
            <div className="flex flex-col items-center gap-4 lg:flex-row">
              {project.title === 'Software Engineering' ? (
                <span className="material-symbols-outlined hidden text-5xl md:block">
                  computer
                </span>
              ) : (
                <span className="material-symbols-outlined hidden text-5xl md:block">
                  smartphone
                </span>
              )}
              <h2 className="font-variant-small-caps text-xl font-medium xl:text-2xl">
                {project.title}
              </h2>
            </div>
            <div className="font-roboto text-sm">
              <p className="hidden xl:block">{'<p>'}</p>
              <p className="pt-1 xl:pb-1 xl:pl-4">{project.description}</p>
              <p className="hidden xl:block">{'</p>'}</p>
            </div>
          </div>
          <div
            className="hidden w-0 border bg-cover lg:block lg:w-3/5"
            style={{ backgroundImage: `url(${fproject1})` }}
          >
            <div
              className="p-4"
              style={{
                backgroundImage:
                  'linear-gradient(180deg, rgba(28, 28, 28, 0.50) 0%, rgba(28, 28, 28, 0.00) 100%)',
              }}
            >
              <h1 className="font-variant-small-caps text-3xl font-semibold">
                {project.title}
              </h1>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default FProjects;
