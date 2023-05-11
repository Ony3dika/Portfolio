import profile from "../assets/pic1.jpeg";
import { FaTwitter, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import { InView } from "react-intersection-observer";

function Intro() {
  return (
    <section
      className='container mx-auto relative isolate lg:min-h-screen overflow-hidden lg:px-10 pt-20 md:pt-28 px-5 md:px-10'
      id='home'
    >
      <svg
        className='absolute -z-10 '
        xmlns='http://www.w3.org/2000/svg'
        version='1.1'
        // xmlns:xlink='http://www.w3.org/1999/xlink'
        // xmlns:svgjs='http://svgjs.dev/svgjs'
        viewBox='0 0 800 800'
      >
        <defs>
          <linearGradient
            x1='50%'
            y1='0%'
            x2='50%'
            y2='100%'
            id='ggglitch-grad'
          >
            <stop stopColor='#0a1d42' stopOpacity='1' offset='45%'></stop>
            <stop stopColor='#0b192f' stopOpacity='1' offset='100%'></stop>
          </linearGradient>
          <clipPath id='SvgjsClipPath1848'>
            <rect width='57.142857142857146' height='800' x='0' y='0'></rect>
            <rect
              width='57.142857142857146'
              height='800'
              x='114.28571428571429'
              y='0'
            ></rect>
            <rect
              width='57.142857142857146'
              height='800'
              x='228.57142857142858'
              y='0'
            ></rect>
            <rect
              width='57.142857142857146'
              height='800'
              x='342.8571428571429'
              y='0'
            ></rect>
            <rect
              width='57.142857142857146'
              height='800'
              x='457.14285714285717'
              y='0'
            ></rect>
            <rect
              width='57.142857142857146'
              height='800'
              x='571.4285714285714'
              y='0'
            ></rect>
            <rect
              width='57.142857142857146'
              height='800'
              x='685.7142857142858'
              y='0'
            ></rect>
            <rect width='57.142857142857146' height='800' x='800' y='0'></rect>
            <rect
              width='57.142857142857146'
              height='800'
              x='914.2857142857143'
              y='0'
            ></rect>
            <rect
              width='57.142857142857146'
              height='800'
              x='1028.5714285714287'
              y='0'
            ></rect>
            <rect
              width='57.142857142857146'
              height='800'
              x='1142.857142857143'
              y='0'
            ></rect>
            <rect
              width='57.142857142857146'
              height='800'
              x='1257.142857142857'
              y='0'
            ></rect>
            <rect
              width='57.142857142857146'
              height='800'
              x='1371.4285714285716'
              y='0'
            ></rect>
            <rect
              width='57.142857142857146'
              height='800'
              x='1485.7142857142858'
              y='0'
            ></rect>
            <rect width='57.142857142857146' height='800' x='1600' y='0'></rect>
          </clipPath>
          <clipPath id='SvgjsClipPath1849'>
            <rect
              width='57.142857142857146'
              height='800'
              x='57.142857142857146'
              y='0'
            ></rect>
            <rect
              width='57.142857142857146'
              height='800'
              x='171.42857142857144'
              y='0'
            ></rect>
            <rect
              width='57.142857142857146'
              height='800'
              x='285.7142857142857'
              y='0'
            ></rect>
            <rect width='57.142857142857146' height='800' x='400' y='0'></rect>
            <rect
              width='57.142857142857146'
              height='800'
              x='514.2857142857143'
              y='0'
            ></rect>
            <rect
              width='57.142857142857146'
              height='800'
              x='628.5714285714287'
              y='0'
            ></rect>
            <rect
              width='57.142857142857146'
              height='800'
              x='742.8571428571429'
              y='0'
            ></rect>
            <rect
              width='57.142857142857146'
              height='800'
              x='857.1428571428572'
              y='0'
            ></rect>
            <rect
              width='57.142857142857146'
              height='800'
              x='971.4285714285716'
              y='0'
            ></rect>
            <rect
              width='57.142857142857146'
              height='800'
              x='1085.7142857142858'
              y='0'
            ></rect>
            <rect width='57.142857142857146' height='800' x='1200' y='0'></rect>
            <rect
              width='57.142857142857146'
              height='800'
              x='1314.2857142857144'
              y='0'
            ></rect>
            <rect
              width='57.142857142857146'
              height='800'
              x='1428.5714285714287'
              y='0'
            ></rect>
            <rect
              width='57.142857142857146'
              height='800'
              x='1542.857142857143'
              y='0'
            ></rect>
          </clipPath>
        </defs>
        <g strokeWidth='46' stroke='url(#ggglitch-grad)' fill='none'>
          <polygon
            points='-23,23 23,-23 823,777 777,823'
            stroke='none'
            fill='url(#ggglitch-grad)'
            clipPath='url("#SvgjsClipPath1848")'
            opacity='0.39'
            transform='translate(0 -671)'
          ></polygon>
          <polygon
            points='-23,23 23,-23 823,777 777,823'
            stroke='none'
            fill='url(#ggglitch-grad)'
            clipPath='url("#SvgjsClipPath1849")'
            transform='translate(0 -694)'
          ></polygon>
          <polygon
            points='-23,23 23,-23 823,777 777,823'
            stroke='none'
            fill='url(#ggglitch-grad)'
            clipPath='url("#SvgjsClipPath1848")'
            opacity='0.39'
            transform='translate(0 -551)'
          ></polygon>
          <polygon
            points='-23,23 23,-23 823,777 777,823'
            stroke='none'
            fill='url(#ggglitch-grad)'
            clipPath='url("#SvgjsClipPath1849")'
            transform='translate(0 -574)'
          ></polygon>
          <polygon
            points='-23,23 23,-23 823,777 777,823'
            stroke='none'
            fill='url(#ggglitch-grad)'
            clipPath='url("#SvgjsClipPath1848")'
            opacity='0.39'
            transform='translate(0 -431)'
          ></polygon>
          <polygon
            points='-23,23 23,-23 823,777 777,823'
            stroke='none'
            fill='url(#ggglitch-grad)'
            clipPath='url("#SvgjsClipPath1849")'
            transform='translate(0 -454)'
          ></polygon>
          <polygon
            points='-23,23 23,-23 823,777 777,823'
            stroke='none'
            fill='url(#ggglitch-grad)'
            clipPath='url("#SvgjsClipPath1848")'
            opacity='0.39'
            transform='translate(0 -311)'
          ></polygon>
          <polygon
            points='-23,23 23,-23 823,777 777,823'
            stroke='none'
            fill='url(#ggglitch-grad)'
            clipPath='url("#SvgjsClipPath1849")'
            transform='translate(0 -334)'
          ></polygon>
          <polygon
            points='-23,23 23,-23 823,777 777,823'
            stroke='none'
            fill='url(#ggglitch-grad)'
            clipPath='url("#SvgjsClipPath1848")'
            opacity='0.39'
            transform='translate(0 -191)'
          ></polygon>
          <polygon
            points='-23,23 23,-23 823,777 777,823'
            stroke='none'
            fill='url(#ggglitch-grad)'
            clipPath='url("#SvgjsClipPath1849")'
            transform='translate(0 -214)'
          ></polygon>
          <polygon
            points='-23,23 23,-23 823,777 777,823'
            stroke='none'
            fill='url(#ggglitch-grad)'
            clipPath='url("#SvgjsClipPath1848")'
            opacity='0.39'
            transform='translate(0 -71)'
          ></polygon>
          <polygon
            points='-23,23 23,-23 823,777 777,823'
            stroke='none'
            fill='url(#ggglitch-grad)'
            clipPath='url("#SvgjsClipPath1849")'
            transform='translate(0 -94)'
          ></polygon>
          <polygon
            points='-23,23 23,-23 823,777 777,823'
            stroke='none'
            fill='url(#ggglitch-grad)'
            clipPath='url("#SvgjsClipPath1848")'
            opacity='0.39'
            transform='translate(0 49)'
          ></polygon>
          <polygon
            points='-23,23 23,-23 823,777 777,823'
            stroke='none'
            fill='url(#ggglitch-grad)'
            clipPath='url("#SvgjsClipPath1849")'
            transform='translate(0 26)'
          ></polygon>
          <polygon
            points='-23,23 23,-23 823,777 777,823'
            stroke='none'
            fill='url(#ggglitch-grad)'
            clipPath='url("#SvgjsClipPath1848")'
            opacity='0.39'
            transform='translate(0 169)'
          ></polygon>
          <polygon
            points='-23,23 23,-23 823,777 777,823'
            stroke='none'
            fill='url(#ggglitch-grad)'
            clipPath='url("#SvgjsClipPath1849")'
            transform='translate(0 146)'
          ></polygon>
        </g>
      </svg>

      <div className='flex mt-12 flex-col lg:flex-row h-fit'>
        {/* Section 1 */}
        <InView triggerOnce={false} threshold={0.3}>
          {({ inView, ref }) => (
            <div
              ref={ref}
              className={`lg:basis-2/4 order-2 lg:order-1 basis-full flex flex-col justify-center ${
                inView ? "animate-slideleft" : "animate-slowfade"
              }`}
            >
              <p className='text-3xl mt-10 md:mt-8 lg:mt-5 text-lime-200'>
                HI! I&apos;m <span className='font-semibold'>Onyedika</span>, A
                FRONT-END WEB DEVELOPER based in Nigeria
              </p>
              <p className='mt-10 text-base leading-loose lg:leading-normal text-lime-200'>
                I&apos;m a skilled front-end web developer with one year of
                experience in the industry and always ready to collaborate with
                others to achieve the best possible results.
              </p>
             
              <div className='flex mt-10'>
                <button className='bg-lime-200 text-primary rounded-full md:px-8 px-4 md:font-semibold border-2 border-lime-200 hover:bg-primary hover:text-lime-200 shadow-lg shadow-primaryDark transition-all duration-300 ease-linear py-3'>
                  Contact Me
                </button>
                <button className='border-2 border-gray-500 p-4 lg:mx-3 mx-2 md:mx-3 hover:bg-primary text-lime-200 transition-all duration-300 ease-in rounded-full'>
                  <a href=''>
                    <FaTwitter size={"1.2rem"} />
                  </a>
                </button>

                <button className='border-2 border-gray-500 p-4 lg:mx-3 mx-2 md:mx-3 hover:bg-primary text-lime-200 transition-all duration-300 ease-in rounded-full'>
                  <a href='https://www.linkedin.com/in/onyedikachukwu-akpa-127360248'>
                    <FaLinkedin size={"1.2rem"} />
                  </a>
                </button>

                <button className='border-2 border-gray-500 p-4 lg:mx-3 mx-2 md:mx-3 hover:bg-primary text-lime-200 transition-all duration-300 ease-in rounded-full'>
                  <a href=''>
                    <FaWhatsapp size={"1.2rem"} />
                  </a>
                </button>
              </div>
            </div>
          )}
        </InView>

        {/* Section 2 */}
        <InView threshold={0.7} triggerOnce={true}>
          {({ inView, ref }) => (
            <div
              ref={ref}
              className={`lg:basis-2/4 basis-full mt-5 lg:mt-0 order-1 lg:order2 flex justify-center items-center opacity-0 ${
                inView ? "animate-slideup" : ""
              }`}
            >
              <img
                src={profile}
                className='object-cover h-4/4 w-3/4 rounded-full img-bor border-8 border-double border-icon/20'
                alt=''
              />
            </div>
          )}
        </InView>
      </div>
    </section>
  );
}

export default Intro;
