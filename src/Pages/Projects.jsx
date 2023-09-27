import React from "react";
import img from "../assets/pro1.png";
import img2 from "../assets/pro2.png";
import img3 from "../assets/pro3.png";
import img4 from "../assets/pro4.png";
import img5 from "../assets/pro5.png";
import { FaGithub, FaHtml5 } from "react-icons/fa";
import { InView } from "react-intersection-observer";
import {
  SiTailwindcss,
  SiCss3,
  SiJavascript,
  SiBootstrap,
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
        <InView triggerOnce={true} threshold={1}>
          {({ inView, ref }) => (
            <p
              ref={ref}
              className={`text-center lg:text-8xl mt-10 lg:mt-5 text-4xl font-extrabold leading-tight bg-clip-text text-transparent bg-gradient-to-r from-icon via-sub about-text to-primaryDark pt-14 opacity-0 ${
                inView ? "animate-slideupsmooth" : ""
              }`}
            >
              MY PROJECTS
            </p>
          )}
        </InView>

        {/* Cinematrix */}
        <InView triggerOnce={true} threshold={0.3}>
          {({ inView, ref }) => (
            <div
              ref={ref}
              className={`flex flex-col lg:flex-row lg:h-96 mt-5 border-2 border-icon/20 rounded-lg p-5 opacity-0 ${
                inView ? "animate-slideupsmooth" : "opacity-0"
              }`}
            >
              <div className='basis-full overflow-hidden rounded-xl lg:basis-2/4'>
                <img
                  src={img4}
                  className='object-cover hover:scale-110 hover:cursor-pointer transition-all duration-300 ease-linear w-full h-full rounded-xl'
                  alt=''
                />
              </div>

              <div className='basis-full lg:basis-2/4 p-1 lg:p-5 lg:pl-10'>
                <div className='flex justify-between items-center mt-3 lg:mt-0'>
                  <p className='lg:text-3xl text-xl text-lime-200 font-bold'>
                    Cinematrix
                  </p>

                  <div className='flex'>
                    <SiReact size={"1.5rem"} className='text-sky-400' />
                    <SiTailwindcss
                      size={"1.5rem"}
                      className='text-sky-500 ml-4'
                    />
                  </div>
                </div>

                <p className='text-white/80 mt-5 text-base leading-loose'>
                  Cinematrix is a movie recommendation and search website built
                  using Tailwind CSS, Jotai and ReactJS. It provider users a
                  source to discover and search for movies and TV series
                  depending on their desires.
                  <br />
                  TheMovieDB was used to efficiently gather the vast amount of
                  data associated with the movies and TV series.
                </p>

                <div className='mt-5 flex'>
                  <button className='bg-primaryDark text-lime-200 hover:text-lime-300 transition-all duration-300 ease-linear px-6 lg:px-10 rounded-md py-3'>
                    <a
                      href='https://github.com/Ony3dika/Cinematrix'
                      rel='noreferrer'
                      target='_blank'
                      className='flex'
                    >
                      Github <FaGithub className='ml-2' size={"1.5rem"} />
                    </a>
                  </button>

                  <button className='bg-primaryDark text-lime-200 hover:text-lime-300 transition-all duration-300 ease-linear ml-4 px-6 lg:px-10 rounded-md py-3'>
                    <a
                      href='https://cinematrix.ony3dika.vercel.app/'
                      rel='noreferrer'
                      target='_blank'
                      className='flex'
                    >
                      Visit{" "}
                      <BsBoxArrowUpRight className='ml-2' size={"1.5rem"} />
                    </a>
                  </button>
                </div>
              </div>
            </div>
          )}
        </InView>

        {/* getLinked */}
        <InView triggerOnce={true} threshold={0.3}>
          {({ inView, ref }) => (
            <div
              ref={ref}
              className={`flex flex-col lg:flex-row lg:h-96 mt-5 border-2 border-icon/20 rounded-lg p-5 opacity-0 ${
                inView ? "animate-slideupsmooth" : "opacity-0"
              }`}
            >
              <div className='basis-full overflow-hidden rounded-xl lg:basis-2/4'>
                <img
                  src={img5}
                  className='object-cover hover:scale-110 hover:cursor-pointer transition-all duration-300 ease-linear w-full h-full rounded-xl'
                  alt=''
                />
              </div>

              <div className='basis-full lg:basis-2/4 p-1 lg:p-5 lg:pl-10'>
                <div className='flex justify-between items-center mt-3 lg:mt-0'>
                  <p className='lg:text-3xl text-xl text-lime-200 font-bold'>
                    getLinked
                  </p>

                  <div className='flex'>
                    <SiReact size={"1.5rem"} className='text-sky-400' />
                    <SiTailwindcss
                      size={"1.5rem"}
                      className='text-sky-500 ml-4'
                    />
                  </div>
                </div>

                <p className='text-white/80 mt-5 text-base leading-loose'>
                  Participated in a hackathon organized by getLinked.ai. <br />
                  The challenge involves creating a landing page, a contact page
                  and register page which has API endpoints for communication
                  with the backend.
                </p>

                <div className='mt-5 flex'>
                  <button className='bg-primaryDark text-lime-200 hover:text-lime-300 transition-all duration-300 ease-linear px-6 lg:px-10 rounded-md py-3'>
                    <a
                      href='https://github.com/Ony3dika/getLinked'
                      rel='noreferrer'
                      target='_blank'
                      className='flex'
                    >
                      Github <FaGithub className='ml-2' size={"1.5rem"} />
                    </a>
                  </button>

                  <button className='bg-primaryDark text-lime-200 hover:text-lime-300 transition-all duration-300 ease-linear ml-4 px-6 lg:px-10 rounded-md py-3'>
                    <a
                      href='https://get-linked-ruddy.vercel.app/'
                      rel='noreferrer'
                      target='_blank'
                      className='flex'
                    >
                      Visit{" "}
                      <BsBoxArrowUpRight className='ml-2' size={"1.5rem"} />
                    </a>
                  </button>
                </div>
              </div>
            </div>
          )}
        </InView>

        {/* NxtGaming */}
        <InView triggerOnce={true} threshold={0.3}>
          {({ inView, ref }) => (
            <div
              ref={ref}
              className={`flex flex-col lg:flex-row lg:h-96 mt-5 border-2 border-icon/20 rounded-lg p-5 opacity-0 ${
                inView ? "animate-slideupsmooth" : "opacity-0"
              }`}
            >
              <div className='basis-full overflow-hidden rounded-xl lg:basis-2/4'>
                <img
                  src={img}
                  className='object-cover hover:scale-110 hover:cursor-pointer transition-all duration-300 ease-linear w-full h-full rounded-xl'
                  alt=''
                />
              </div>

              <div className='basis-full lg:basis-2/4 p-1 lg:p-5 lg:pl-10'>
                <div className='flex justify-between items-center mt-3 lg:mt-0'>
                  <p className='lg:text-3xl text-xl text-lime-200 font-bold'>
                    NXTGaming
                  </p>

                  <div className='flex'>
                    <SiReact size={"1.5rem"} className='text-sky-400' />
                    <SiTailwindcss
                      size={"1.5rem"}
                      className='text-sky-500 ml-4'
                    />
                  </div>
                </div>

                <p className='text-white/80 mt-5 text-base leading-loose'>
                  NXTGaming is a gaming collection web app built using Tailwind
                  CSS and ReactJS. The project aimed to provide gamers with a
                  platform to explore and discover games.
                  <br />
                  RAWG API was used to efficiently manage the vast amount of
                  data associated with gaming collections.
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
                      Visit{" "}
                      <BsBoxArrowUpRight className='ml-2' size={"1.5rem"} />
                    </a>
                  </button>
                </div>
              </div>
            </div>
          )}
        </InView>

        {/* Tic Tac Toe*/}
        <InView threshold={0.3} triggerOnce={true}>
          {({ ref, inView }) => (
            <div
              ref={ref}
              className={`flex flex-col lg:flex-row lg:h-96 mt-5 border-2 border-icon/20 rounded-lg p-5 opacity-0 ${
                inView ? "animate-slideupsmooth" : "opacity-0"
              }`}
            >
              <div className='basis-full overflow-hidden rounded-xl lg:basis-2/4'>
                <img
                  src={img3}
                  className='object-cover hover:scale-110 hover:cursor-pointer transition-all duration-300 ease-linear w-full h-full rounded-xl'
                  alt=''
                />
              </div>

              <div className='basis-full lg:flex lg:flex-col justify-between lg:basis-2/4 p-1 lg:p-5 lg:pl-10'>
                <div>
                  <div className='flex justify-between items-center mt-3 lg:mt-0'>
                    <p className='lg:text-3xl text-xl text-lime-200 font-bold'>
                      Tic Tac Toe
                    </p>

                    <div className='flex'>
                      <FaHtml5 size={"1.5rem"} className='text-orange-600' />
                      <SiCss3 size={"1.5rem"} className='text-blue-600 ml-4' />
                      <SiJavascript
                        size={"1.5rem"}
                        className='text-yellow-400 ml-4'
                      />
                      <SiBootstrap
                        size={"1.5rem"}
                        className='text-purple-500 ml-4'
                      />
                    </div>
                  </div>

                  <p className='text-white/80 mt-5 text-base leading-loose'>
                    This project explores the development of a Tic Tac Toe game
                    using HTML, CSS, JavaScript, and Bootstrap. The project aims
                    to create an interactive and engaging gaming experience for
                    users to enjoy the classic game of Tic Tac Toe online.
                  </p>
                </div>

                <div className='mt-5 flex'>
                  <button className='bg-primaryDark text-lime-200 hover:text-lime-300 transition-all duration-300 ease-linear px-6 lg:px-10 rounded-md py-3'>
                    <a
                      href='https://github.com/Ony3dika/Tic-Tac-Toe'
                      rel='noreferrer'
                      target='_blank'
                      className='flex'
                    >
                      Github <FaGithub className='ml-2' size={"1.5rem"} />
                    </a>
                  </button>

                  <button className='bg-primaryDark text-lime-200 hover:text-lime-300 transition-all duration-300 ease-linear ml-4 px-6 lg:px-10 rounded-md py-3'>
                    <a
                      href='https://tic-tac-toe-coral-chi.vercel.app/'
                      rel='noreferrer'
                      target='_blank'
                      className='flex'
                    >
                      Visit{" "}
                      <BsBoxArrowUpRight className='ml-2' size={"1.5rem"} />
                    </a>
                  </button>
                </div>
              </div>
            </div>
          )}
        </InView>

        {/* Le Roi Noir */}
        <InView threshold={0.3} triggerOnce={true}>
          {({ inView, ref }) => (
            <div
              ref={ref}
              className={`flex flex-col lg:flex-row lg:h-96 mt-5 border-2 border-icon/20 rounded-lg p-5 opacity-0 ${
                inView ? "animate-slideupsmooth" : "opacity-0"
              }`}
            >
              <div className='basis-full overflow-hidden rounded-xl lg:basis-2/4'>
                <img
                  src={img2}
                  className='object-cover hover:scale-105 hover:cursor-pointer transition-all duration-300 ease-linear w-full h-full rounded-xl'
                  alt=''
                />
              </div>

              <div className='basis-full lg:flex lg:flex-col justify-between lg:basis-2/4 p-1 lg:p-5 lg:pl-10'>
                <div>
                  <div className='flex justify-between items-center mt-3 lg:mt-0'>
                    <p className='lg:text-3xl text-xl text-lime-200 font-bold'>
                      Le Roi Noir
                    </p>

                    <div className='flex'>
                      <FaHtml5 size={"1.5rem"} className='text-orange-600' />
                      <SiCss3 size={"1.5rem"} className='text-blue-600 ml-4' />
                      <SiJavascript
                        size={"1.5rem"}
                        className='text-yellow-400 ml-4'
                      />
                      <SiBootstrap
                        size={"1.5rem"}
                        className='text-purple-500 ml-4'
                      />
                    </div>
                  </div>

                  <p className='text-white/80 mt-5 text-base leading-loose'>
                    Le Roi Noir, an e-commerce store explores the development of
                    a men&apos;s clothing website using HTML, CSS, JavaScript,
                    and Bootstrap. The project aims to create an interactive and
                    visually appealing online platform for users to browse and
                    purchase clothing items.
                  </p>
                </div>

                <div className='mt-5 flex'>
                  <button className='bg-primaryDark text-lime-200 hover:text-lime-300 transition-all duration-300 ease-linear px-6 lg:px-10 rounded-md py-3'>
                    <a
                      href='https://github.com/Ony3dika/Le-Roi-Noir'
                      rel='noreferrer'
                      target='_blank'
                      className='flex'
                    >
                      Github <FaGithub className='ml-2' size={"1.5rem"} />
                    </a>
                  </button>

                  <button className='bg-primaryDark text-lime-200 hover:text-lime-300 transition-all duration-300 ease-linear ml-4 px-6 lg:px-10 rounded-md py-3'>
                    <a
                      href='https://le-roi-noir.vercel.app/'
                      rel='noreferrer'
                      target='_blank'
                      className='flex'
                    >
                      Visit{" "}
                      <BsBoxArrowUpRight className='ml-2' size={"1.5rem"} />
                    </a>
                  </button>
                </div>
              </div>
            </div>
          )}
        </InView>
      </section>
    </React.Fragment>
  );
}

export default Projects;
