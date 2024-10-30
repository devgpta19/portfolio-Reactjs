import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollToPlugin } from 'gsap/all';
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);



const Headline = () => {
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
              start: 'top -380%',
              end: 'top -380%',
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
              start: 'top -380%',
              end: 'top -380%',
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
              start: 'top -380%',
              end: 'top -380%',
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
              start: 'top -380%',
              end: 'top -380%',
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
              start: 'top -380%',
              end: 'top -380%',
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
              start: 'top -380%',
              end: 'top -380%',
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
              start: 'top -380%',
              end: 'top -380%',
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
              start: 'top -380%',
              end: 'top -380%',
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
              start: 'top -380%',
              end: 'top -380%',
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
              start: 'top -380%',
              end: 'top -380%',
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
              start: 'top -380%',
              end: 'top -380%',
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
              start: 'top -380%',
              end: 'top -380%',
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
              start: 'top -380%',
              end: 'top -380%',
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
              start: 'top -380%',
              end: 'top -380%',
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
              start: 'top -380%',
              end: 'top -380%',
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
              start: 'top -380%',
              end: 'top -380%',
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
              start: 'top -380%',
              end: 'top -380%',
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
              start: 'top -380%',
              end: 'top -380%',
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
      <div ref={ref} className='h-screen p-5 w-full flex justify-center items-center'>
        <div className='px-3  h-full p-10 flex justify-center items-center w-full text-center'>
          <h1 className='text-center flex lg:flex-row lg:inline-flex flex-wrap bg-transparent lg:w-[50%] tracking-wider font-bold w-full items-center justify-center gap-3	text-[4rem] decoration-orange-50-2 text-orange-50 leading-[6rem] max-sm:leading-[3rem] mt-10 lg:ml-10' >

            <div className='desc8 text-orange-400'>Projects </div>
            <div className='desc7'>speak </div>
            <div className='desc6'>where </div>
            <div className='desc5'>words </div>
            <div className='desc4'>are </div>
            <div className='desc3'>unable </div>
            <div className='desc2'>to </div>
            <div className='desc1'>explain </div>
            <div className='desc0'>. </div>

          </h1>
        </div>
      </div>
      <hr />
    </>
  )
}
export default Headline
