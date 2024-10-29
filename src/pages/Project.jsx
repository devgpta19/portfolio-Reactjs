import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollToPlugin } from 'gsap/all';
import { ScrollTrigger } from "gsap/ScrollTrigger";



gsap.registerPlugin(ScrollTrigger);

const Project = () => {
    const ref = useRef();
    useEffect(() => {
        const el = ref.current;


        ScrollTrigger.matchMedia({
            // Desktop or laptop view
            "(min-width: 1024px)": function () {
                gsap.fromTo('.prohead',
                    {
                        y: -100,
                        opacity: 0,
                    },
                    {
                        scrollTrigger: {
                            trigger: 'el',
                            // scrub: 1,
                            start: 'top -270%',
                            end: 'top -260%',
                        },
                        y: 0,
                        duration: 0.5,
                        opacity: 100,
                    });
                gsap.fromTo('.product',
                    {
                        y: 150,
                        opacity: 0,
                    },
                    {
                        scrollTrigger: {
                            trigger: '.el',
                            // scrub: 1,
                            start: 'top -280%',
                            end: 'top -260%',
                        },
                        y: 0,
                        duration: 1.5,
                        opacity: 100,
                    })
                gsap.fromTo('.github',
                    {
                        y: 150,
                        opacity: 0,
                    },
                    {
                        scrollTrigger: {
                            trigger: '.el',
                            // scrub: 1,
                            start: 'top -300%',
                            end: 'top -300%',
                        },
                        y: 0,
                        duration: 1.5,
                        opacity: 100,
                    });

                return () => ScrollTrigger.getAll().forEach(trigger => trigger.kill());
            },

            // MOBILE VIEW
            "(max-width: 767px)": function () {
                gsap.fromTo('.prohead',
                    {
                        y: -100,
                        opacity: 0,
                    },
                    {
                        scrollTrigger: {
                            trigger: 'el',
                            // scrub: 1,
                            start: 'top -320%',
                            end: 'top -320%',
                        },
                        y: 0,
                        duration: 0.5,
                        opacity: 100,
                    });
                gsap.fromTo('.product',
                    {
                        y: 150,
                        opacity: 0,
                    },
                    {
                        scrollTrigger: {
                            trigger: '.el',
                            // scrub: 1,
                            start: 'top -330%',
                            end: 'top -330%',
                        },
                        y: 0,
                        duration: 0.5,
                        opacity: 100,
                    });
                gsap.fromTo('.github',
                    {
                        y: 150,
                        opacity: 0,
                    },
                    {
                        scrollTrigger: {
                            trigger: '.el',
                            // scrub: 1,
                            start: 'top -345%',
                            end: 'top -345%',
                        },
                        y: 0,
                        duration: 1.5,
                        opacity: 100,
                    });

                return () => ScrollTrigger.getAll().forEach(trigger => trigger.kill());
            }
        });
    })
    return (
        <>
            <div ref={ref} className=' relative min-h-screen w-full p-5'>
                <div className='px-3'>
                    <h1 className='max-sm:text-[3rem]  prohead bg-transparent tracking-wider font-bold	text-[4rem] text-left decoration-orange-50 underline decoration-2 text-orange-50 leading-[6rem] lg:text-left mt-10 lg:ml-10' >
                        My Projects</h1>
                </div>
                <div className='flex h-[90%] product lg:flex-row lg:flex-wrap flex-col gap-8 justify-center items-center'>
                    <a style={{ backgroundImage: `url('/images/RocketAir.png')`, }} href='https://devgpta19.github.io/Clone_RocketAir/' className='hover:shadow-orange-200 hover:shadow-md transform hover:scale-105 transition duration-300 ease-in-out bg-cover bg-center h-48 w-64 bg-transparent rounded-md shadow-xl shadow-zinc-950 flex justify-center items-center text-zinc-200 font-bold text-xl'>
                        <div className='h-full w-full backdrop-blur-lg text-2xl bg-white/5 flex justify-center items-center'>
                            <h1 className='bg-transparent text-orange-50 font-mono' >RocketAir_Clone</h1>
                        </div>
                    </a>
                    <a style={{ backgroundImage: `url('/images/TODO-Project.jpg')`, }} href='https://todoreact-beige.vercel.app/' className='hover:shadow-orange-200 hover:shadow-md transform hover:scale-105 transition duration-300 ease-in-out bg-cover bg-center h-48 w-64 bg-transparent rounded-md shadow-xl shadow-zinc-950 flex justify-center items-center text-zinc-200 font-bold text-xl'>
                        <div className='h-full w-full backdrop-blur-lg text-2xl bg-white/5 flex justify-center items-center'>
                            <h1 className='bg-transparent text-orange-50 font-mono' >TODO_React</h1>
                        </div>
                    </a>
                    <a style={{ backgroundImage: `url('/images/Portfolio-1.png')`, }} href='https://react-portfolio-plum-phi-94.vercel.app/' className='hover:shadow-orange-200 hover:shadow-md transform hover:scale-105 transition duration-300 ease-in-out bg-cover bg-center h-48 w-64 bg-transparent rounded-md shadow-xl shadow-zinc-950 flex justify-center items-center text-zinc-200 font-bold text-xl'>
                        <div className='h-full w-full backdrop-blur-md text-2xl bg-white/5 flex justify-center items-center'>
                            <h1 className='bg-transparent text-orange-50 font-mono' >Portfolio</h1>
                        </div>
                    </a>
                    <a style={{ backgroundImage: `url('/images/LandingPage.png')`, }} href='https://devgpta19.github.io/LandingPage2/' className='hover:shadow-orange-200 hover:shadow-md transform hover:scale-105 transition duration-300 ease-in-out bg-cover bg-center h-48 w-64 bg-transparent rounded-md shadow-xl shadow-zinc-950 flex justify-center items-center text-zinc-200 font-bold text-xl'>
                        <div className='h-full w-full backdrop-blur-md text-2xl bg-white/5 flex justify-center items-center'>
                            <h1 className='bg-transparent text-zinc-800 font-mono' >Landing Page</h1>
                        </div>
                    </a>

                </div>
                <div className='mt-5 flex justify-center items-end'>
                    <h1 className=' absolute github text-gray-50 text-xl bottom-1 bg-transparent' >View Projects : <a className='text-orange-400 uppercase bg-transparent font-semibold' href="https://github.com/devgpta19">Github</a>.</h1>
                </div>
            </div>

            <hr />
        </>
    )
}

export default Project
