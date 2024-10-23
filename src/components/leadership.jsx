import React from 'react';
import { LEADERSHIP} from "../constants";

const Leadership = () => {
  return (
    <div className='border-b border-neutral-900 pb-4 lg:mb-35'>
        <h1 className='my-20 text-center text-4xl text-black'>Leadership</h1>
      <div>
           {LEADERSHIP.map((leadership, index) => (
            <div key={index} className='mb-8 flex flex-wrap lg:justify-center'>
                <div className='w-full lg:w-1/4 text-gray-700'>
                    <p>{leadership.year}</p>
                </div>

                <div className='w-full max-w-xl lg:w-3/4'>
                    <h6 className='mb-2 font-semibold text-gray-700'>
                        {leadership.role}- <span className='text-sm text-gray-500'>
                            {leadership.company}
                        </span>
                    </h6>
                    <p className='mb-4 text-gray-500'>{leadership.description}</p>
                </div>
            </div>
           ))}
      </div>
    </div>
  )
}

export default Leadership;
