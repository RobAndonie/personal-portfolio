const featuredProjects = [
  {
    title: 'Software Engineering',
    description:
      'Experienced in Web development. Proficient with Front and Back End tools like React, JavaScript, HTML, CSS, Tailwind CSS, MySQL, MongoDB, Node, Express, and other libraries.',
  },
  {
    title: 'UX Design',
    description:
      "Passionate about User Experience. Skilled in Wireframing and Prototyping with Figma for Web Design. Familiar with UX Research & Usability Testing. Working on Google's UX Professional Certificate.",
  },
];

function FProjects() {
  return (
    <div>
      {featuredProjects.map((project, index) => (
        <div key={index} className="flex flex-col gap-4">
          <div className="flex items-center gap-4">
            {project.title === 'Software Engineering' ? (
              <span className="material-symbols-outlined text-6xl">code</span>
            ) : (
              <span className="material-symbols-outlined text-6xl">person</span>
            )}
            <h1 className="font-variant-small-caps text-3xl font-semibold">
              {project.title}
            </h1>
          </div>
          <p className="pb-4 font-roboto">{project.description}</p>
        </div>
      ))}
    </div>
  );
}

export default FProjects;
