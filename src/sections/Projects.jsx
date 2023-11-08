import React from 'react';
import FProject from '../components/FProject';
import fproject1 from '../assets/fproject1.png';

const Projects = () => {
  return (
    <div>
      <div className="flex flex-row gap-10 px-32 py-20 text-white">
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
          <FProject />
        </div>
      </div>
    </div>
  );
};

export default Projects;
