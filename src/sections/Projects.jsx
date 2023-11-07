import React from 'react';
import fproject1 from '../assets/fproject1.png';

const Projects = () => {
  const projects = [
    {
      title: 'Project 1',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      image: 'https://via.placeholder.com/150',
      link: 'https://github.com',
    },
    {
      title: 'Project 2',
      description:
        'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      image: 'https://via.placeholder.com/150',
      link: 'https://github.com',
    },
    {
      title: 'Project 3',
      description:
        'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      image: 'https://via.placeholder.com/150',
      link: 'https://github.com',
    },
  ];

  return (
    <div>
      <div className="flex flex-row gap-3 px-40 py-20 text-white">
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
        <div className="w-3/4">
          <div className="flex flex-row">
            <div className="flex w-2/5 flex-col gap-4 border p-4">
              <div className="flex flex-row items-center gap-4">
                <span className="material-symbols-outlined text-7xl">
                  computer
                </span>
                <h2 className="text-3xl font-medium">Web Development</h2>
              </div>
              <ul>
                <li>Experienced in HTML, CSS, JS, React.js, Tailwind CSS</li>
                <li>Passionate about User Experience, skilled with Figma</li>
                <li>Currently learning Next.js, TypeScript</li>
              </ul>
            </div>
            <div className="w-3/5 border">
              <img src={fproject1} alt="Featured Project #1" className="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
