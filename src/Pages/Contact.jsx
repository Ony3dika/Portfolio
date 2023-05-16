import React, { useRef, useState } from "react";
import { MdSend } from "react-icons/md";
import emailjs from "@emailjs/browser";
import { FaTwitter, FaLinkedin, FaGithub } from "react-icons/fa";
import { RiWhatsappFill } from "react-icons/ri";
import { InView } from "react-intersection-observer";

function Contact() {
  const form = useRef();
  const [message, SetMessage] = useState("");
  const [time, setTime] = useState(false);

  const sendEmail = (e) => {
    setTime(true);

    e.preventDefault();
    emailjs
      .sendForm(
        // Service Key
        "service_ffy9f7k",

        // Template Key
        "template_uk9hfk9",
        form.current,

        // Public Key
        "wRPiALQMMtIGQDjVC"
      )
      .then(
        (result) => {
          console.log(result.text);
          if (result.text === "OK") {
            SetMessage("Email Sent");
          } else {
            SetMessage("Failed To Send Email, Try Again");
          }
        },
        (error) => {
          console.log(error.text);
          SetMessage("Failed To Send Email, Try Again");
        }
      );
  };
  setTimeout(() => {
    setTime(false);
  }, 4000);
  return (
    <React.Fragment>
      <div
        className='container mx-auto lg:mt-0 lg:px-10 lg:pt-8 px-5 md:px-10'
        id='contact'
      >
        <InView threshold={0.4} triggerOnce={true}>
          {({ inView, ref }) => (
            <p
              ref={ref}
              className={`text-center lg:text-8xl mt-10 lg:mt-5 text-4xl font-extrabold leading-tight bg-clip-text text-transparent bg-gradient-to-r from-icon via-sub about-text to-primaryDark pt-16 opacity-0 ${
                inView ? "animate-slideupsmooth" : ""
              }`}
            >
              CONTACT
            </p>
          )}
        </InView>

        <section className='flex lg:flex-row flex-col justify-between pb-12 mt-5'>
          <InView threshold={0.4} triggerOnce={true}>
            {({ inView, ref }) => (
              <div
                ref={ref}
                className={`basis-5/5 relative isolate md:basis-2/5 bg-gradient-to-b from-mid to-icon/20 overflow-y-hidden rounded-xl opacity-0 ${
                  inView ? "animate-slideupsmooth" : ""
                }`}
              >
                <div className='w-full h-full -z-10 shape opacity-30 absolute'></div>
                <div className='w-full h-full'>
                  <div className='md:pt-10 md:mx-12 p-5'>
                    <p className='text-base font-semibold text-lime-200'>
                      Get In Touch
                    </p>
                    <p className='mt-5 text-white/80 text-base leading-loose'>
                      Feel free to reach out to me via email. You can also
                      connect with me on LinkedIn or follow me on Twitter for
                      updates and insights on front-end development. I look
                      forward to hearing from you!
                    </p>
                    <p className='font-semibold text-white/80 mt-5 lg:mt-16'>
                      Social Media
                    </p>
                    <div className='flex mt-5 w-2/4 md:w-2/5 justify-between'>
                      <button className='text-lime-200 transition-all duration-300 ease-in rounded-full'>
                        <a
                          target='_blank'
                          rel='noreferrer'
                          href='https://twitter.com/Ony3dikaa?t=608LPE8h2D2drcWsbRzwpA&s=09'
                        >
                          <FaTwitter size={"1.5rem"} />
                        </a>
                      </button>
                      <button className='text-lime-200 transition-all duration-300 ease-in rounded-full'>
                        <a
                          target='_blank'
                          rel='noreferrer'
                          href='https://www.linkedin.com/in/onyedikachukwu-akpa-127360248'
                        >
                          <FaLinkedin size={"1.5rem"} />
                        </a>
                      </button>
                      <button className='text-lime-200 transition-all duration-300 ease-in rounded-full'>
                        <a
                          target='_blank'
                          rel='noreferrer'
                          href='https://api.whatsapp.com/send/?phone=%2B2348119233513&text&type=phone_number&app_absent=0'
                        >
                          <RiWhatsappFill size={"1.5rem"} />
                        </a>
                      </button>
                      <button className='text-lime-200 transition-all duration-300 ease-in rounded-full'>
                        <a
                          target='_blank'
                          rel='noreferrer'
                          href='https://github.com/Ony3dika'
                        >
                          <FaGithub size={"1.5rem"} />
                        </a>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </InView>

          {/* Form */}
          <InView threshold={0.4} triggerOnce={true}>
            {({ ref, inView }) => (
              <div
                ref={ref}
                className={`basis-6/6 lg:basis-3/6 lg:px-10 pt-5 rounded-xl opacity-0 ${
                  inView ? "animate-slideupsmooth" : ""
                }`}
              >
                <form ref={form} onSubmit={sendEmail}>
                  <div>
                    <p className='text-base font-semibold text-lime-200'>
                      Message Me
                    </p>

                    <div className='mt-5'>
                      {/* Name */}
                      <div className=''>
                        <label className='block text-sm font-medium leading-6 text-white/80'>
                          Name
                        </label>

                        <input
                          type='text'
                          name='from_name'
                          className='block mt-1 w-full pl-5 rounded-md outline-none bg-transparent py-1.5 text-white/80 border-icon/20 border-2 '
                        />
                      </div>

                      {/* Email */}
                      <div className='mt-5'>
                        <label className='block text-sm font-medium leading-6 text-white/80'>
                          Email address
                        </label>

                        <input
                          type='email'
                          name='from_email'
                          className='block pl-5 w-full mt-1 rounded-md outline-none bg-transparent py-1.5 text-white/80 border-icon/20 border-2 '
                        />
                      </div>
                    </div>

                    <div className='mt-5 '>
                      <label className='block text-sm font-medium leading-6 text-white/80'>
                        About
                      </label>

                      <textarea
                        rows={10}
                        name='message'
                        placeholder='Tell me what I can help you with'
                        className='block resize-none w-full mt-1 pl-5 rounded-md outline-none bg-transparent py-1.5 text-white/80 border-icon/20 border-2'
                      />
                    </div>
                  </div>

                  {time ? (
                    <p className='bg-mid border-2 border-lime-200 text-white/80 w-full mt-5 p-3 rounded-lg'>
                      {message}
                    </p>
                  ) : (
                    ""
                  )}

                  <button className='rounded-xl flex justify-center w-full mt-5 hover:bg-mid hover:text-lime-200 hover:border-lime-200 transition-all ease-linear duration-300 border-2 border-transparent  bg-lime-200 px-8 py-3 font-semibold text-primary'>
                    Send Message <MdSend size={"1.5rem"} className='ml-3' />
                  </button>
                </form>
              </div>
            )}
          </InView>
        </section>
      </div>
    </React.Fragment>
  );
}

export default Contact;
