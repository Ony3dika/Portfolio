import React from "react";
import img from "../assets/pro1.png";
import { FaGithub } from "react-icons/fa";
import {
  SiTailwindcss,

  SiReact,
} from "react-icons/si";
import { BsBoxArrowUpRight } from "react-icons/bs";

function Projects() {
  return (
    <React.Fragment>
      <section
        className='container mx-auto lg:mt-0 lg:px-10 lg:pt-8 px-5 md:px-10'
        id='project'
      >
        <p className='text-center lg:text-8xl mt-10 lg:mt-5 text-4xl font-extrabold leading-tight bg-clip-text text-transparent bg-gradient-to-r from-icon via-sub about-text to-primaryDark'>
          MY PROJECTS
        </p>

        {/* NxtGaming */}
        <div className='flex flex-col lg:flex-row lg:h-96 mt-5 border-2 border-icon/20 rounded-lg p-5'>
          <div className='basis-full lg:basis-2/4'>
            <img
              src={img}
              className='object-cover w-full h-full rounded-xl'
              alt=''
            />
          </div>

          <div className='basis-full lg:basis-2/4 p-1 lg:p-5 lg:pl-10'>
            <div className='flex justify-between items-center mt-3 lg:mt-0'>
              <p className='lg:text-3xl text-xl text-lime-200 font-bold'>
                NXTGaming
              </p>

              <div className="flex">
                <SiReact size={"1.5rem"} className='text-sky-400' />
                <SiTailwindcss size={"1.5rem"} className='text-sky-500 ml-4' />
              </div>
            </div>

            <p className='text-white/80 mt-5 text-sm md:text-base leading-loose'>
              NXTGaming is a gaming collection web app built using Tailwind CSS
              and ReactJS. The project aimed to provide gamers with a platform
              to explore and discover games.
              <br />
              <br />
              RAWG API was used to efficiently manage the vast amount of data
              associated with gaming collections. The result is a robust and
              user-friendly web app that showcases the possibilities of Tailwind
              CSS and ReactJS.
            </p>

            <div className='mt-5 flex'>
              <button className='bg-primaryDark text-lime-200 hover:text-lime-300 transition-all duration-300 ease-linear px-6 lg:px-10 rounded-md py-3'>
                <a
                  href='https://github.com/Ony3dika/NXTGmn'
                  rel='noreferrer'
                  target='_blank'
                  className='flex'
                >
                  Github <FaGithub className='ml-2' size={"1.5rem"} />
                </a>
              </button>

              <button className='bg-primaryDark text-lime-200 hover:text-lime-300 transition-all duration-300 ease-linear ml-4 px-6 lg:px-10 rounded-md py-3'>
                <a
                  href='https://nxt-gmn.vercel.app/'
                  rel='noreferrer'
                  target='_blank'
                  className='flex'
                >
                  Visit <BsBoxArrowUpRight className='ml-2' size={"1.5rem"} />
                </a>
              </button>
            </div>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
}

export default Projects;
