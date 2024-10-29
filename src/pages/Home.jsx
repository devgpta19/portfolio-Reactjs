import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollToPlugin } from 'gsap/all';
import { ScrollTrigger } from "gsap/ScrollTrigger";



gsap.registerPlugin(ScrollTrigger);

const Home = () => {
  const ref = useRef();
  useEffect(() => {
    gsap.fromTo('.wel',
      {
        x: -800,
        opacity: 0,
      },
      {
        x: 0,
        duration:0.5,
        opacity: 100,
      })
    gsap.fromTo('.des',
      {
        x: -800,
        opacity: 0,
      },
      {
        x: 0,
        duration:1,
        opacity: 100,
      })
    gsap.fromTo('.port',
      {
        x: -800,
        opacity: 0,
      },
      {
        x: 0,
        duration:1.5,
        opacity: 100,
      })
    gsap.fromTo('.extra',
      {
        y:50,
        opacity: 0,
      },
      {
        y:0,
        opacity: 100,
        duration:1,
      })
    gsap.fromTo('.photo',
      {
        x: -1000,
        opacity: 0,
      },
      {
        // scrollTrigger:{

        // },
        x: 0,
        duration:1.5,
        opacity: 100,
      })
  })

  return (
    <>
      <div ref={ref} className=' py-5 px-10 min-h-screen min-w-screen md:gap-8 md:px-3 justify-center items-center lg:justify-between flex flex-col lg:flex-row lg:items-center'>
        <div>
          <div className='h-full max-sm:w-full flex justify-center items-center'>
            <h1 className='heading tracking-wider font-bold max-sm:text-[4rem] max-sm:leading-[4rem] text-[8rem] text-orange-50 leading-[6rem] text-center lg:text-left mt-10'>
              <div className="wel bg-transparent">Welcome to</div>
              <div className="des bg-transparent">My Design</div> 
              <div className="port bg-transparent">Portfolio</div></h1>
          </div>
          <div className='h-20 w-full flex justify-center items-center lg:inline' >
            <div className='extra h-12 mt-8 lg:mt-0 flex justify-center items-center rounded-full w-80 border-2 gap-8 px-2 border-orange-50'>
              <h2 className='text-xl text-stone-50'>Devansh Gupta  </h2>
              <span className='text-[0.65rem] text-end text-zinc-400'>Front-End Developer</span>
            </div>
          </div>
        </div>
        <div className='photo min-h-[100vh] lg:w-[40%] bg-transparent flex justify-center items-center'>
          <img className='h-full w-[400px] float-right rounded-tl-[100%] rounded-bl-[50%] rounded-tr-[50%] bg-transparent rounded-br-[100%] ' src="./images/AVATAR.png" alt="" />
        </div>
      </div>

      <hr />

    </>
  )
}

export default Home
