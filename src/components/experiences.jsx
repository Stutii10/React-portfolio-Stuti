import React from 'react';
import { EXPERIENCES } from "../constants";

const Experiences = () => {
  return (
    <div className='border-b border-neutral-900 pb-4 lg:mb-35'>
        <h1 className='my-20 text-center text-4xl text-black'>Experiences</h1>
      <div>
           {EXPERIENCES.map((experience, index) => (
            <div key={index} className='mb-8 flex flex-wrap lg:justify-center'>
                <div className='w-full lg:w-1/4 text-gray-700'>
                    <p>{experience.year}</p>
                </div>

                <div className='w-full max-w-xl lg:w-3/4'>
                    <h6 className='mb-2 font-semibold text-gray-700'>
                        {experience.role}- <span className='text-sm text-gray-500'>
                            {experience.company}
                        </span>
                    </h6>
                    <p className='mb-4 text-gray-500'>{experience.description}</p>
                </div>
            </div>
           ))}
      </div>
    </div>
  )
}

export default Experiences;
