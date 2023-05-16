import React from "react";
import {
  SiTailwindcss,
  SiCss3,
  SiJavascript,
  SiBootstrap,
  SiReact,
} from "react-icons/si";
import { FaHtml5, FaGithub, FaLinkedin } from "react-icons/fa";
import { InView } from "react-intersection-observer";

function About() {
  return (
    <React.Fragment>
      <section
        className='container mx-auto lg:mt-0 lg:px-10 lg:pt-8 px-5 md:px-10'
        id='about'
      >
        <InView triggerOnce={true} threshold={1}>
          {({ inView, ref }) => (
            <p
              ref={ref}
              className={`text-center lg:text-8xl text-4xl font-extrabold leading-tight bg-clip-text text-transparent bg-gradient-to-r from-icon via-sub about-text to-primaryDark opacity-0 pt-16 ${
                inView ? "animate-slideupsmooth" : ""
              }`}
            >
              ABOUT ME
            </p>
          )}
        </InView>
        <div className='lg:flex flex-row justify-between min-h-[70vh]'>
          {/* Segment 1 */}
          <InView threshold={0.4} triggerOnce={true}>
            {({ inView, ref }) => (
              <div
                ref={ref}
                className={`basis-[48%] p-5 mt-5 rounded-2xl border-2 relative isolate opacity-0 border-icon/20 ${
                  inView ? "animate-aboutOne" : "opacity-0"
                }`}
              >
                <p className='lg:text-3xl text-xl text-lime-200 lg:font-medium'>
                  Akpa Onyedikachukwu
                </p>

                <p className='text-white/80 mt-5 text-base leading-loose'>
                  Welcome to my website! My name is Akpa Onyedikachukwu, and
                  I&apos;m a student of Computer Science with a passion for
                  front-end web development and currently based in Nigeria.
                  <br />
                  <br />
                  Whether I&apos;m working on a personal project or
                  collaborating with a team, I always strive to write clean,
                  maintainable code that adheres to best practices and industry
                  standards. I believe that attention to detail is key to
                  creating successful websites that engage and delight users.
                </p>

                <div className='flex mt-5'>
                  <button className='hover:bg-primary text-lime-200 transition-all duration-300 ease-in rounded-full'>
                    <a
                      target='_blank'
                      rel='noreferrer'
                      href='https://github.com/Ony3dika'
                    >
                      <FaGithub size={"2rem"} />
                    </a>
                  </button>

                  <button className='mx-4 hover:bg-primary text-lime-200 transition-all duration-300 ease-in rounded-full'>
                    <a target='_blank'
                      rel='noreferrer'
                      href='https://www.linkedin.com/in/onyedikachukwu-akpa-127360248'>
                      <FaLinkedin size={"2rem"} />
                    </a>
                  </button>
                </div>
              </div>
            )}
          </InView>

          {/* Segment 2 */}
          <InView threshold={0.4} triggerOnce={true}>
            {({ inView, ref }) => (
              <div
                ref={ref}
                className={`basis-1/4 mt-5 relative rounded-2xl shape lg:h-auto h-[50vh] opacity-0 border-2 border-icon/20 ${
                  inView ? "animate-aboutTwo" : " "
                }`}
              >
                <div className='lg:h-4/5  p-5 w-full rounded-t-3xl backdrop-blur-3xl bg-gradient-to-b from-sub/70 to-primary rounded-b-2xl fixed bottom-0'>
                  <p className='leading-loose uppercase text-lime-200'>
                    Bringing your digital vision to life, one line of code at a
                    time
                  </p>

                  <p className='mt-5 text-white/80 text-base leading-loose'>
                    I will bring your digital vision to life using my technical
                    expertise to transform every detail of your design into a
                    user-friendly and visually appealing online experience.
                  </p>
                </div>
              </div>
            )}
          </InView>

          {/* Segment 3 */}
          <InView threshold={0.4} triggerOnce={true}>
            {({ inView, ref }) => (
              <div
                ref={ref}
                className={`basis-1/4  p-5 mt-5 rounded-2xl border-2 opacity-0 border-icon/20 ${
                  inView ? "animate-aboutThree" : " "
                }`}
              >
                <p className='text-lime-200'>MY TECH STACK</p>

                <div className='flex justify-between bg-gradient-to-r from-primary text-white/80 to-sub my-3 px-3 border-2 border-sub rounded-md py-3'>
                  <p>HTML</p>
                  <FaHtml5 size={"1.5rem"} className='text-orange-600' />
                </div>

                <div className='flex justify-between bg-gradient-to-r from-primary text-white/80 to-sub my-3 px-3 border-2 border-sub rounded-md py-3'>
                  <p>CSS</p>
                  <SiCss3 size={"1.5rem"} className='text-blue-600' />
                </div>

                <div className='flex justify-between bg-gradient-to-r from-primary text-white/80 to-sub my-3 px-3 border-2 border-sub rounded-md py-3'>
                  <p>JavaScript</p>
                  <SiJavascript size={"1.5rem"} className='text-yellow-400' />
                </div>

                <div className='flex justify-between bg-gradient-to-r from-primary text-white/80 to-sub my-3 px-3 border-2 border-sub rounded-md py-3'>
                  <p>React.js</p>
                  <SiReact size={"1.5rem"} className='text-sky-400' />
                </div>

                <div className='flex justify-between bg-gradient-to-r from-primary text-white/80 to-sub my-3 px-3 border-2 border-sub rounded-md py-3'>
                  <p>Bootstrap</p>
                  <SiBootstrap size={"1.5rem"} className='text-purple-500' />
                </div>

                <div className='flex justify-between bg-gradient-to-r from-primary text-white/80 to-sub my-3 px-3 border-2 border-sub rounded-md py-3'>
                  <p>Tailwind CSS</p>
                  <SiTailwindcss size={"1.5rem"} className='text-sky-500' />
                </div>
              </div>
            )}
          </InView>
        </div>
      </section>
    </React.Fragment>
  );
}

export default About;
