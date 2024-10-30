import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollToPlugin } from 'gsap/all';
import { ScrollTrigger } from "gsap/ScrollTrigger";



gsap.registerPlugin(ScrollTrigger);

const Eduandskills = () => {
    const ref = useRef();
    useEffect(() => {
        const el = ref.current;


        ScrollTrigger.matchMedia({
            // Desktop or laptop view
            "(min-width: 1024px)": function () {
                gsap.fromTo('.headd',
                    {
                        y: -100,
                        opacity: 0,
                    },
                    {
                        scrollTrigger: {
                            trigger: 'el',
                            // scrub: 1,
                            start: 'top -180%',
                            end: 'top -180%',
                        },
                        y: 0,
                        duration: 0.5,
                        opacity: 100,
                    });
                gsap.fromTo('.skill',
                    {
                        x: 150,
                        opacity: 0,
                    },
                    {
                        scrollTrigger: {
                            trigger: 'el',
                            // scrub: 1,
                            start: 'top -200%',
                            end: 'top -190%',
                        },
                        x: 0,
                        duration: 0.5,
                        opacity: 100,
                    });
                gsap.fromTo('.educate',
                    {
                        x: -150,
                        opacity: 0,
                    },
                    {
                        scrollTrigger: {
                            trigger: '.el',
                            // scrub: 1,
                            start: 'top -200%',
                            end: 'top -190%',
                        },
                        x: 0,
                        duration: 0.5,
                        opacity: 100,
                    })
            },

            // MOBILE VIEW
            "(max-width: 767px)": function () {
                gsap.fromTo('.headd',
                    {
                        y: -100,
                        opacity: 0,
                    },
                    {
                        scrollTrigger: {
                            trigger: 'el',
                            // scrub: 1,
                            start: 'top -200%',
                            end: 'top - 200%',
                        },
                        y: 0,
                        duration: 0.5,
                        opacity: 100,
                    });
                gsap.fromTo('.skill',
                    {
                        x: 150,
                        opacity: 0,
                    },
                    {
                        scrollTrigger: {
                            trigger: 'el',
                            // scrub: 1,
                            start: 'top -240%',
                            end: 'top -240%',
                        },
                        x: 0,
                        duration: 0.5,
                        opacity: 100,
                    });
                gsap.fromTo('.educate',
                    {
                        x: -150,
                        opacity: 0,
                    },
                    {
                        scrollTrigger: {
                            trigger: '.el',
                            // scrub: 1,
                            start: 'top -360%',
                            end: 'top - 360%',
                        },
                        x: 0,
                        duration: 0.5,
                        opacity: 100,
                    });

                    return () => ScrollTrigger.getAll().forEach(trigger => trigger.kill());
            }
        });


    })
    return (
        <>
            <div ref={ref} className='px-3'>
                <div className='min-h-screen w-full flex lg:flex-row flex-col p-5 lg:justify-between'>
                    <div className='h-full lg:w-[40%] px-3'>
                        <h1 className='max-sm:text-[3rem]  headd bg-transparent tracking-wider font-bold	text-[4rem] text-left decoration-orange-50 underline decoration-2 text-orange-50 leading-[6rem] lg:text-left mt-10 lg:ml-10' >
                            My Skills</h1>

                        <div className='text-left text-yellow-50 pt-10 text-xl lg:ml-10'>

                            <h1 className=' skill font-mono text-2xl' >
                                React.js
                            </h1>
                            <h1 className=' skill font-mono text-2xl' >
                                JavaScript
                            </h1>
                            <h1 className=' skill font-mono text-2xl' >
                                Node.js
                            </h1>
                            <h1 className=' skill font-mono text-2xl' >
                                Express.js
                            </h1>
                            <h1 className=' skill font-mono text-2xl' >
                                MongoDB
                            </h1>
                            <h1 className=' skill font-mono text-2xl' >
                                Java
                            </h1>

                        </div>
                    </div>
                    <div className='h-full lg:w-[40%] px-3'>
                        <h1 className=' max-sm:text-[3rem]  headd bg-transparent tracking-wider font-bold	text-[4rem] text-right decoration-orange-50 underline decoration-2 text-orange-50 leading-[6rem] lg:text-right mt-10 lg:mr-10' >
                            My Education</h1>

                        <div className=' educate text-right text-yellow-50 pt-10 text-xl lg:mr-10'>
                            <h1
                                className='font-mono text-2xl' >
                                Bachelor of Technology
                            </h1>
                            <h2 className='font-mono text-sm text-zinc-400 mb-3' >(Computer Science & Engineering)</h2>
                            <h2 className='text-slate-400'>
                                Lakshmi Narain College of Technology & Science, Bhopal(M.P.)

                            </h2>
                        </div>
                        <div className=' educate text-right text-yellow-50 pt-10 text-xl lg:mr-10'>
                            <h1
                                className='font-mono text-2xl' >
                                Bachelor of Technology
                            </h1>
                            <h2 className='font-mono text-sm text-zinc-400 mb-3' >(Computer Science & Engineering)</h2>
                            <h2 className='text-slate-400'>
                                Lakshmi Narain College of Technology & Science, Bhopal(M.P.)

                            </h2>
                        </div>
                        <div className=' educate text-right text-yellow-50 pt-10 text-xl lg:mr-10'>
                            <h1
                                className='font-mono text-2xl' >
                                Bachelor of Technology
                            </h1>
                            <h2 className='font-mono text-sm text-zinc-400 mb-3' >(Computer Science & Engineering)</h2>
                            <h2 className='text-slate-400'>
                                Lakshmi Narain College of Technology & Science, Bhopal(M.P.)
                            </h2>
                        </div>
                    </div>
                </div>
            </div>

            <hr />
        </>
    )
}

export default Eduandskills
