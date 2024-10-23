import React from 'react';

import { RiReactjsLine } from 'react-icons/ri';
import { FaPython } from 'react-icons/fa';
import { FaJava } from 'react-icons/fa';
import { FaLinux } from 'react-icons/fa';
import { SiApachehadoop } from 'react-icons/si';
import { SiC } from 'react-icons/si';

const Technologies = () => {
  return (
    <div className='border-b border-neutral-800 pb-16'>
      <h1 className='my-8 text-center text-4xl text-black'>Technologies</h1>
      <div className='flex flex-wrap items-center justify-center gap-4'>
        <div className='rounded-2xl border-4 border-neutral-800 p-4'>
          <RiReactjsLine className='text-2xl text-cyan-400'/>
        </div>

        <div className='rounded-2xl border-4 border-neutral-800 p-4'>
          <FaPython className='text-2xl' style={{ color: '#306998' }}/> {/* Python blue */}
        </div>
        <div className='rounded-2xl border-4 border-neutral-800 p-4'>
          <SiC className='text-2xl' style={{ color: '#A8B9CC' }}/> {/* C Language Cyan */}
        </div>

        <div className='rounded-2xl border-4 border-neutral-800 p-4'>
          <FaJava className='text-2xl' style={{ color: '#007396' }}/> {/* Java Blue */}
        </div>

        <div className='rounded-2xl border-4 border-neutral-800 p-4'>
          <FaLinux className='text-2xl' style={{ color: '#FCC624' }}/> {/* Linux Yellow */}
        </div>

        <div className='rounded-2xl border-4 border-neutral-800 p-4'>
          <SiApachehadoop className='text-2xl' style={{ color: '#FFDC00' }}/> {/* Hadoop Yellow */}
        </div>
      </div>
    </div>
  );
}

export default Technologies;
