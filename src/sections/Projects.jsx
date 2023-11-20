import React from 'react';
import FProjects from '../components/FProjects';
import Tag from '../components/Tag';
import projects from '../data/projects';

const Projects = () => {
  return (
    <div className="px-32 pt-32">
      <div className="flex flex-row gap-10 text-white">
        <div className="flex w-1/4 flex-col gap-4">
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
        <div className="flex w-3/4 flex-col gap-6">
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
              <p className="text-base text-white">{project.platform}</p>
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
