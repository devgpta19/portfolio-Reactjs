import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollToPlugin } from 'gsap/all';
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);



const Aboutme = () => {
  const ref = useRef();
  useEffect(() => {
    const el = ref.current;

    


    ScrollTrigger.matchMedia({

      // Desktop or laptop view

      "(min-width: 1024px)": function () {

        gsap.fromTo('.desc0',
          {
            x: -800,
            opacity: 0,
          },
          {
            scrollTrigger: {
              trigger: 'el',
              start: 'top -15%',
              end: 'top -15%',
            },
            x: 0,
            duration: 0.2,
            opacity: 100,
          })
        gsap.fromTo('.desc1',
          {
            x: -800,
            opacity: 0,
          },
          {
            scrollTrigger: {
              trigger: 'el',
              start: 'top -15%',
              end: 'top -15%',
            },
            x: 0,
            duration: 0.5,
            opacity: 100,
          })
        gsap.fromTo('.desc2',
          {
            x: -800,
            opacity: 0,
          },
          {
            scrollTrigger: {
              trigger: 'el',
              start: 'top -15%',
              end: 'top -15%',
            },
            x: 0,
            duration: 0.8,
            opacity: 100,
          })
        gsap.fromTo('.desc3',
          {
            x: -800,
            opacity: 0,
          },
          {
            scrollTrigger: {
              trigger: 'el',
              start: 'top -15%',
              end: 'top -15%',
            },
            x: 0,
            duration: 1.1,
            opacity: 100,
          })
        gsap.fromTo('.desc4',
          {
            x: -800,
            opacity: 0,
          },
          {
            scrollTrigger: {
              trigger: 'el',
              start: 'top -15%',
              end: 'top -15%',
            },
            x: 0,
            duration: 1.4,
            opacity: 100,
          })
        gsap.fromTo('.desc5',
          {
            x: -800,
            opacity: 0,
          },
          {
            scrollTrigger: {
              trigger: 'el',
              start: 'top -15%',
              end: 'top -15%',
            },
            x: 0,
            duration: 1.7,
            opacity: 100,
          })
        gsap.fromTo('.desc6',
          {
            x: -800,
            opacity: 0,
          },
          {
            scrollTrigger: {
              trigger: 'el',
              start: 'top -15%',
              end: 'top -15%',
            },
            x: 0,
            duration: 2,
            opacity: 100,
          })
        gsap.fromTo('.desc7',
          {
            x: -800,
            opacity: 0,
          },
          {
            scrollTrigger: {
              trigger: 'el',
              start: 'top -15%',
              end: 'top -15%',
            },
            x: 0,
            duration: 2.3,
            opacity: 100,
          })
        gsap.fromTo('.desc8',
          {
            x: -800,
            opacity: 0,
          },
          {
            scrollTrigger: {
              trigger: 'el',
              start: 'top -15%',
              end: 'top -15%',
            },
            x: 0,
            duration: 2.6,
            opacity: 100,
          })
        gsap.fromTo('.desc9',
          {
            x: -800,
            opacity: 0,
          },
          {
            scrollTrigger: {
              trigger: 'el',
              start: 'top -15%',
              end: 'top -15%',
            },
            x: 0,
            duration: 2.6,
            opacity: 100,
          })
        gsap.fromTo('.desc10',
          {
            x: -800,
            opacity: 0,
          },
          {
            scrollTrigger: {
              trigger: 'el',
              start: 'top -15%',
              end: 'top -15%',
            },
            x: 0,
            duration: 2.6,
            opacity: 100,
          })
        gsap.fromTo('.desc11',
          {
            x: -800,
            opacity: 0,
          },
          {
            scrollTrigger: {
              trigger: 'el',
              start: 'top -15%',
              end: 'top -15%',
            },
            x: 0,
            duration: 2.6,
            opacity: 100,
          })
        gsap.fromTo('.desc12',
          {
            x: -800,
            opacity: 0,
          },
          {
            scrollTrigger: {
              trigger: 'el',
              start: 'top -15%',
              end: 'top -15%',
            },
            x: 0,
            duration: 2.6,
            opacity: 100,
          })
        gsap.fromTo('.desc13',
          {
            x: -800,
            opacity: 0,
          },
          {
            scrollTrigger: {
              trigger: 'el',
              start: 'top -15%',
              end: 'top -15%',
            },
            x: 0,
            duration: 2.6,
            opacity: 100,
          })


      },

      // MOBILE VIEW
      "(max-width: 767px)": function () {

        gsap.fromTo('.desc0',
          {
            x: -800,
            opacity: 0,
          },
          {
            scrollTrigger: {
              trigger: 'el',
              start: 'top -15%',
              end: 'top -15%',
            },
            x: 0,
            duration: 0.2,
            opacity: 100,
          })
        gsap.fromTo('.desc1',
          {
            x: -800,
            opacity: 0,
          },
          {
            scrollTrigger: {
              trigger: 'el',
              start: 'top -15%',
              end: 'top -15%',
            },
            x: 0,
            duration: 0.5,
            opacity: 100,
          })
        gsap.fromTo('.desc2',
          {
            x: -800,
            opacity: 0,
          },
          {
            scrollTrigger: {
              trigger: 'el',
              start: 'top -15%',
              end: 'top -15%',
            },
            x: 0,
            duration: 0.8,
            opacity: 100,
          })
        gsap.fromTo('.desc3',
          {
            x: -800,
            opacity: 0,
          },
          {
            scrollTrigger: {
              trigger: 'el',
              start: 'top -15%',
              end: 'top -15%',
            },
            x: 0,
            duration: 1.1,
            opacity: 100,
          })
        gsap.fromTo('.desc4',
          {
            x: -800,
            opacity: 0,
          },
          {
            scrollTrigger: {
              trigger: 'el',
              start: 'top -15%',
              end: 'top -15%',
            },
            x: 0,
            duration: 1.4,
            opacity: 100,
          })
        gsap.fromTo('.desc5',
          {
            x: -800,
            opacity: 0,
          },
          {
            scrollTrigger: {
              trigger: 'el',
              start: 'top -15%',
              end: 'top -15%',
            },
            x: 0,
            duration: 1.7,
            opacity: 100,
          })
        gsap.fromTo('.desc6',
          {
            x: -800,
            opacity: 0,
          },
          {
            scrollTrigger: {
              trigger: 'el',
              start: 'top -15%',
              end: 'top -15%',
            },
            x: 0,
            duration: 2,
            opacity: 100,
          })
        gsap.fromTo('.desc7',
          {
            x: -800,
            opacity: 0,
          },
          {
            scrollTrigger: {
              trigger: 'el',
              start: 'top -15%',
              end: 'top -15%',
            },
            x: 0,
            duration: 2.3,
            opacity: 100,
          })
        gsap.fromTo('.desc8',
          {
            x: -800,
            opacity: 0,
          },
          {
            scrollTrigger: {
              trigger: 'el',
              start: 'top -15%',
              end: 'top -15%',
            },
            x: 0,
            duration: 2.6,
            opacity: 100,
          })
        gsap.fromTo('.desc9',
          {
            x: -800,
            opacity: 0,
          },
          {
            scrollTrigger: {
              trigger: 'el',
              start: 'top -15%',
              end: 'top -15%',
            },
            x: 0,
            duration: 2.6,
            opacity: 100,
          })
        gsap.fromTo('.desc10',
          {
            x: -800,
            opacity: 0,
          },
          {
            scrollTrigger: {
              trigger: 'el',
              start: 'top -15%',
              end: 'top -15%',
            },
            x: 0,
            duration: 2.6,
            opacity: 100,
          })
        gsap.fromTo('.desc11',
          {
            x: -800,
            opacity: 0,
          },
          {
            scrollTrigger: {
              trigger: 'el',
              start: 'top -15%',
              end: 'top -15%',
            },
            x: 0,
            duration: 2.6,
            opacity: 100,
          })
        gsap.fromTo('.desc12',
          {
            x: -800,
            opacity: 0,
          },
          {
            scrollTrigger: {
              trigger: 'el',
              start: 'top -15%',
              end: 'top -15%',
            },
            x: 0,
            duration: 2.6,
            opacity: 100,
          })
        gsap.fromTo('.desc13',
          {
            x: -800,
            opacity: 0,
          },
          {
            scrollTrigger: {
              trigger: 'el',
              start: 'top -15%',
              end: 'top -15%',
            },
            x: 0,
            duration: 2.6,
            opacity: 100,
          })

        return () => ScrollTrigger.getAll().forEach(trigger => trigger.kill());
      }
    });
  })


  return (
    <>
      <div ref={ref} className='h-screen p-10 w-full flex justify-center items-center'>
        <div className='px-3  h-full p-10 flex justify-center items-center w-full text-center'>
          <h1 className=' desc text-center text-[2rem] lg:text-[3.2rem] max-sm:text-[1.6rem] max-sm:leading-[1rem] tracking-wider font-bold w-full items-center justify-center gap-3 flex flex-wrap decoration-orange-50-2 bg-transparent text-orange-50 lg:leading-[6rem] leading-[2rem] mt-10 lg:ml-10' >

            <div className="desc13 bg-transparent ">As a </div>
            <div className="desc12 bg-transparent  text-orange-400"> {"\<"}Frontend Developer{"\>"} </div>
            <div className="desc11 bg-transparent ">I enjoy </div>
            <div className="desc10 bg-transparent ">combining beauty</div>
            <div className="desc9 bg-transparent ">and function</div>
            <div className="desc8 bg-transparent ">to create</div>
            <div className="desc7 bg-transparent  text-orange-400">Web Applications</div>
            <div className="desc6 bg-transparent ">that attract's</div>
            <div className="desc5 bg-transparent ">the whole</div>
            <div className="desc4 bg-transparent ">people attention</div>
            <div className="desc3 bg-transparent ">I've a strong passion</div>
            <div className="desc2 bg-transparent ">for new Ideas</div>
            <div className="desc1 bg-transparent ">and a commitment to</div>
            <div className="desc0 bg-transparent ">doing greate work.</div>

          </h1>
        </div>
      </div>
      <hr />
    </>
  )
}
export default Aboutme
