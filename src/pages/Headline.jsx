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

        gsap.fromTo('.popup0',
          {
            x: -800,
            opacity: 0,
          },
          {
            scrollTrigger: {
              trigger: 'el',
              start: 'top -210%',
              end: 'top -170%',
            },
            x: 0,
            duration: 0.2,
            opacity: 100,
          })
        gsap.fromTo('.popup1',
          {
            x: -800,
            opacity: 0,
          },
          {
            scrollTrigger: {
              trigger: 'el',
              start: 'top -210%',
              end: 'top -170%',
            },
            x: 0,
            duration: 0.5,
            opacity: 100,
          })
        gsap.fromTo('.popup2',
          {
            x: -800,
            opacity: 0,
          },
          {
            scrollTrigger: {
              trigger: 'el',
              start: 'top -210%',
              end: 'top -170%',
            },
            x: 0,
            duration: 0.8,
            opacity: 100,
          })
        gsap.fromTo('.popup3',
          {
            x: -800,
            opacity: 0,
          },
          {
            scrollTrigger: {
              trigger: 'el',
              start: 'top -210%',
              end: 'top -170%',
            },
            x: 0,
            duration: 1.1,
            opacity: 100,
          })
        gsap.fromTo('.popup4',
          {
            x: -800,
            opacity: 0,
          },
          {
            scrollTrigger: {
              trigger: 'el',
              start: 'top -210%',
              end: 'top -170%',
            },
            x: 0,
            duration: 1.4,
            opacity: 100,
          })
        gsap.fromTo('.popup5',
          {
            x: -800,
            opacity: 0,
          },
          {
            scrollTrigger: {
              trigger: 'el',
              start: 'top -210%',
              end: 'top -170%',
            },
            x: 0,
            duration: 1.7,
            opacity: 100,
          })
        gsap.fromTo('.popup6',
          {
            x: -800,
            opacity: 0,
          },
          {
            scrollTrigger: {
              trigger: 'el',
              start: 'top -210%',
              end: 'top -170%',
            },
            x: 0,
            duration: 2,
            opacity: 100,
          })
        gsap.fromTo('.popup7',
          {
            x: -800,
            opacity: 0,
          },
          {
            scrollTrigger: {
              trigger: 'el',
              start: 'top -210%',
              end: 'top -170%',
            },
            x: 0,
            duration: 2.3,
            opacity: 100,
          })
        gsap.fromTo('.popup8',
          {
            x: -800,
            opacity: 0,
          },
          {
            scrollTrigger: {
              trigger: 'el',
              start: 'top -210%',
              end: 'top -170%',
            },
            x: 0,
            duration: 2.6,
            opacity: 100,
          })


      },

      // MOBILE VIEW
      "(max-width: 767px)": function () {

        gsap.fromTo('.popup0',
          {
            x: -800,
            opacity: 0,
          },
          {
            scrollTrigger: {
              trigger: 'el',
              start: 'top -210%',
              end: 'top -170%',
            },
            x: 0,
            duration: 0.2,
            opacity: 100,
          })
        gsap.fromTo('.popup1',
          {
            x: -800,
            opacity: 0,
          },
          {
            scrollTrigger: {
              trigger: 'el',
              start: 'top -210%',
              end: 'top -170%',
            },
            x: 0,
            duration: 0.5,
            opacity: 100,
          })
        gsap.fromTo('.popup2',
          {
            x: -800,
            opacity: 0,
          },
          {
            scrollTrigger: {
              trigger: 'el',
              start: 'top -210%',
              end: 'top -170%',
            },
            x: 0,
            duration: 0.8,
            opacity: 100,
          })
        gsap.fromTo('.popup3',
          {
            x: -800,
            opacity: 0,
          },
          {
            scrollTrigger: {
              trigger: 'el',
              start: 'top -210%',
              end: 'top -170%',
            },
            x: 0,
            duration: 1.1,
            opacity: 100,
          })
        gsap.fromTo('.popup4',
          {
            x: -800,
            opacity: 0,
          },
          {
            scrollTrigger: {
              trigger: 'el',
              start: 'top -210%',
              end: 'top -170%',
            },
            x: 0,
            duration: 1.4,
            opacity: 100,
          })
        gsap.fromTo('.popup5',
          {
            x: -800,
            opacity: 0,
          },
          {
            scrollTrigger: {
              trigger: 'el',
              start: 'top -210%',
              end: 'top -170%',
            },
            x: 0,
            duration: 1.7,
            opacity: 100,
          })
        gsap.fromTo('.popup6',
          {
            x: -800,
            opacity: 0,
          },
          {
            scrollTrigger: {
              trigger: 'el',
              start: 'top -210%',
              end: 'top -170%',
            },
            x: 0,
            duration: 2,
            opacity: 100,
          })
        gsap.fromTo('.popup7',
          {
            x: -800,
            opacity: 0,
          },
          {
            scrollTrigger: {
              trigger: 'el',
              start: 'top -210%',
              end: 'top -170%',
            },
            x: 0,
            duration: 2.3,
            opacity: 100,
          })
        gsap.fromTo('.popup8',
          {
            x: -800,
            opacity: 0,
          },
          {
            scrollTrigger: {
              trigger: 'el',
              start: 'top -210%',
              end: 'top -170%',
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
          <h1 className='text-center flex max-sm:text-[3rem] lg:flex-row lg:inline-flex flex-wrap bg-transparent lg:w-[50%] tracking-wider font-bold w-full items-center justify-center gap-3	text-[4rem] decoration-orange-50-2 text-orange-50 leading-[6rem] max-sm:leading-[5rem] mt-10 lg:ml-10' >

            <div className='popup8'>Projects </div>
            <div className='popup7'>speak </div>
            <div className='popup6'>where </div>
            <div className='popup5'>words </div>
            <div className='popup4'>are </div>
            <div className='popup3'>unable </div>
            <div className='popup2'>to </div>
            <div className='popup1'>explain </div>
            <div className='popup0'>. </div>

          </h1>
        </div>
      </div>
      <hr />
    </>
  )
}
export default Headline
