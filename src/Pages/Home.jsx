import Intro from "./Intro";
import Navbar from "../Components/Navbar";
import About from "./About";
import Projects from "./Projects";
function Home() {
  return (
    <div className='bg-gradient-to-r from-sub via-mid to-primary min-h-screen h-auto box-border w-full'>
      <Navbar />
      <Intro />
      <About/>
      <Projects/>
    </div>
  );
}

export default Home;
