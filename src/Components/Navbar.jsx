import { useState } from "react";
import { Link } from "react-router-dom";
import { FaHome, FaUserTie, FaBriefcase } from "react-icons/fa";
import { MdClose, MdEmail } from "react-icons/md";
import { CgMenuMotion } from "react-icons/cg";
import svg from "../assets/pic2.svg"

function Nav() {
  const [menu, setMenu] = useState(false);
  return (
    <nav
      className={`flex flex-row md:px-12 lg:px-0 h-auto fixed z-10 top-0 bg-gradient-to-r from-sub via-mid to-primary lg:backdrop-blur-3xl lg:justify-between w-screen text-white/80 py-4 lg:pt-8 md:py-6`}
    >
      <section className='lg:basis-2/4 container mx-auto basis-full lg:block flex lg:px-0 md:px-10 px-4 justify-between text-lg lg:text-2xl font-bold'>
        <Link
          to={"/"}
          className='blackpast text-2xl text-transparent bg-gradient-to-r from-lime-50 via-lime-100 to-lime-200 bg-clip-text lg:text-3xl lg:ml-24'
        >
          Ony3dika
        </Link>

        <div>
          <CgMenuMotion
            size={"2rem"}
            className={`lg:hidden mt-1 ${menu ? "hidden" : "block"}`}
            onClick={() => setMenu(true)}
          />
        </div>
      </section>

      <section className='lg:basis-2/4 lg:flex lg:flex-row flex-col hidden justify-between mr-24 font-thin'>
        <button className='px-4 py-2 my-3 lg:my-0 hover:bg-primaryDark hover:rounded-lg hover:text-lime-200 transition-all duration-300 ease-linear flex'>
          <a className='flex' href='#home'>
            <FaHome size={"1.3rem"} className='mr-2' />
            Home
          </a>
        </button>

        <button className='px-4 py-2 my-3 lg:my-0 hover:bg-primaryDark hover:rounded-lg hover:text-lime-200 transition-all duration-300 ease-linear flex'>
          <a href='#about' className='flex'>
            <FaUserTie size={"1.3rem"} className='mr-2' />
            About
          </a>
        </button>

        <button className='px-4 py-2 my-4 lg:my-0 hover:bg-primaryDark hover:rounded-lg hover:text-lime-200 transition-all duration-300 ease-linear flex'>
          <a className='flex' href='#project'>
            <FaBriefcase size={"1.3rem"} className='mr-2' />
            Projects
          </a>
        </button>

        <button className='my-3 lg:my-0 hover:bg-primaryDark hover:rounded-lg hover:text-lime-200 rounded-lg transition-all duration-300 ease-linear px-4 py-2'>
          <a
            href='https://www.linkedin.com/in/onyedikachukwu-akpa-127360248'
            rel='noreferrer'
            target={"_blank"}
            className='flex'
          >
            <MdEmail size={"1.3rem"} className='mr-2' />
            Contact
          </a>
        </button>
      </section>

      {/* Sidebar */}
      <section
        className={`flex-col justify-around md:pl-14 isolate md:pt-5 lg:hidden font-thin rounded-r-xl h-screen w-3/4 backdrop-blur-3xl bg-gradient-to-b from-sub/30 to-primary/90 fixed left-0 top-0 z-10 transition-all duration-300 ${
          menu ? "left-0" : "left-[-100%]"
        } `}
      >
        <img className='absolute -z-10 object-cover h-full w-full' src={svg} alt='' />
        <div className='flex my-5 px-4 justify-between'>
          <Link
            to={"/"}
            className='text-lg font-bold blackpast text-transparent bg-gradient-to-r from-lime-50 via-lime-100 to-lime-200 bg-clip-text'
          >
            Ony3dika
          </Link>
          <div>
            <MdClose
              size={"1.5rem"}
              className='lg:hidden mt-1'
              onClick={() => setMenu(false)}
            />
          </div>
        </div>
        <button className='mx-4 mb-5 rounded-lg px-3 flex'>
          <a
            className='flex hover:px-6 py-3 hover:border-2 border-lime-200 hover:text-lime-200 hover:rounded-lg transition-all duration-300 ease-linear'
            href='#home'
          >
            <FaHome size={"1.3rem"} className='mr-2' />
            Home
          </a>
        </button>
        <button className='mx-4 my-5 rounded-lg px-3 flex'>
          <a
            className='flex hover:px-6 py-3 hover:border-2 border-lime-200 hover:text-lime-200 hover:rounded-lg transition-all duration-300 ease-linear'
            href='#about'
          >
            <FaUserTie size={"1.3rem"} className='mr-2' />
            About
          </a>
        </button>
        <button className='mx-4 my-5 rounded-lg px-3 flex'>
          <a
            className='flex hover:px-6 py-3 hover:border-2 border-lime-200 hover:text-lime-200 hover:rounded-lg transition-all duration-300 ease-linear'
            href='#project'
          >
            <FaBriefcase size={"1.3rem"} className='mr-2' />
            Projects
          </a>
        </button>
        <button className='mx-4 my-5 rounded-lg px-3 flex'>
          <a
            className='flex hover:px-6 py-3 hover:border-2 border-lime-200 focus:text-lime-200 hover:rounded-lg transition-all duration-300 ease-linear'
            href='#contact'
          >
            <MdEmail size={"1.3rem"} className='mr-2' />
            Contact
          </a>
        </button>
        <p className='px-4 text-white/80 fixed bottom-10'>
          Developed by{" "}
          <span className='blackpast text-transparent bg-gradient-to-r from-lime-50 via-lime-100 to-lime-200 bg-clip-text'>
            Ony3dika
          </span>
        </p>
      </section>
    </nav>
  );
}

export default Nav;
