import React from 'react';
import { PROJECTS } from "../constants"; // Make sure PROJECTS is an array of objects with image and title

const Projects = () => {
  return (
    <div className='border-b border-neutral-900 pb-4'>
      <h1 className='my-20 text-center text-4xl text-black'>Projects</h1>
      <div className='flex flex-col items-center'>
        {PROJECTS.map((project, index) => (
          <div key={index} className='mb-8 w-full max-w-4xl'>
            <div className='flex flex-col lg:flex-row'>
              <div className='w-full lg:w-1/4'>
                <img 
                  src={project.image}  // Corrected image source reference
                  width={150}
                  height={150}
                  alt={project.title}  // Corrected alt text reference
                  className='mb-6 rounded'
                />
              </div>
              <div className='w-full lg:w-3/4'>
                <h6 className='mb-2 font-semibold text-gray-700'>{project.title}</h6>
                <p className='mb-4 text-gray-500'>{project.description}</p> 
                <div className='flex flex-wrap'>
                  {project.technologies.map((tech, index) => (
                    <span key={index} className='mr-2 mb-2 rounded bg-purple-600 px-2 py-1 text-sm font-medium text-white-800'>
                      {tech}
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

export default Projects;
