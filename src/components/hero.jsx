import { HERO_CONTENT } from "../constants";
import ProfilePic from "../assets/mypic4.jpg";

const Hero = () => {
  return (
    <div className="pb-2 lg:mb-32">
      <div className="flex flex-wrap">
        <div className="w-full lg:w-1/2">
          <div className="flex flex-col items-center lg:items-start">
            <h1 className="pb-12 text-6xl font-bold tracking-tight lg:mt-17 text-gray-700">Stuti Goyal</h1>
            <span className="bg-gradient-to-r from-blue-900 via-blue-500 to-blue-900 bg-clip-text text-4xl tracking-tight text-transparent">Software Engineer</span>
            <p className="my-2 max-w-xl py-6 font-light text-lg text-[#6B7AA1]">{HERO_CONTENT}</p>
          </div>
        </div>

        <div className="w-full lg:w-1/2 lg:p-8">
          <div className="flex justify-center lg:justify-start lg:ml-15"> {/* Slightly shift image right */}
          <img src={ProfilePic} alt="Stuti" style={{ width: '350px', height: 'auto' }} className="rounded-lg shadow-lg" />

          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
