import React from 'react';
import Navbar from './components/navbar'; // Adjust the path if necessary
import Hero from './components/hero';
import Technologies from './components/technologies';
import Experiences from './components/experiences';
import Projects from './components/projects';
import Leadership from './components/leadership';

const App = () => {
  return (
    <div className='overflow-x-hidden text-neutral-300 antialiased selection:bg-pink-300 selection:text-purple-900 min-h-screen relative'>
      <div className="absolute inset-0 -z-10 w-full h-full bg-white bg-[radial-gradient(60%_120%_at_50%_50%,hsla(0,0%,100%,0)_0,rgba(252,205,238,.5)_100%)]"></div>
      <div className='container mx-auto px-8'>
        <Navbar />
        <Hero /> 
        <Technologies />
        <Experiences />
        <Projects />
        <Leadership />
      </div>
    </div>
  );
};

export default App;
