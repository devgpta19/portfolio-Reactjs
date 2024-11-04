import React, { useEffect, useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { BsLinkedin } from "react-icons/bs";


const Connect = () => {


    const [inputName, setInputName] = useState('');
    const [inputEmail, setInputEmail] = useState('');
    const [inputMessage, setInputMessage] = useState('');
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        setInputName('')
        setInputEmail('')
        setInputMessage('')

        emailjs.sendForm('devgpta19', 'template_devgpta19', form.current, '_7H4sKXz5m04FBqrw')
            .then(
                () => {
                    console.log('SUCCESS!');
                },
                (error) => {
                    console.log('FAILED...', error.text);
                },
            );
    };


    return (
        <>
            <div className='relative min-h-screen w-full flex items-center justify-center'>
                <div className='w-full mb-20'>
                    <div className='h-full w-full flex lg:flex-row items-center justify-center mt-20 flex-col-reverse lg:px-10 lg:gap-8'>
                        <div className="w-full flex items-center justify-center">
                            <div className="connect rounded-lg shadow-lg shadow-black p-8 max-w-md w-full">
                                <h2 className="text-2xl font-bold mb-6 text-zinc-300 text-center">Let's Connect</h2>
                                <form ref={form} className="space-y-6" onSubmit={sendEmail}>
                                    <div>
                                        <label htmlFor="name" className="block text-sm font-medium text-zinc-500">Name</label>
                                        <input
                                            type="text"
                                            id="name"
                                            className="mt-1 block w-full px-4 text-orange-200 font-mono py-2 border border-zinc-300 rounded-md shadow-sm focus:ring-purple-500 focus:border-purple-500"
                                            placeholder="Your Name"
                                            name='inputName'
                                            value={inputName}
                                            onChange={(e) => setInputName(e.target.inputName)}
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="email" className="block text-sm font-medium text-zinc-500">Email</label>
                                        <input
                                            type="email"
                                            id="email"
                                            className="mt-1 block w-full px-4 text-orange-200 font-mono py-2 border border-zinc-300 rounded-md shadow-sm focus:ring-purple-500 focus:border-purple-500"
                                            placeholder="yourname@example.com"
                                            name='inputEmail'
                                            value={inputEmail}
                                            onChange={(e) => setInputEmail(e.target.value)}
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="message" className="block text-sm font-medium text-zinc-500">Message</label>
                                        <textarea
                                            id="message"
                                            rows="4"
                                            className="mt-1 block w-full px-4 text-orange-200 font-mono py-2 border border-zinc-300 rounded-md shadow-sm focus:ring-purple-500 focus:border-purple-500"
                                            placeholder="Your Message"
                                            name='inputMessage'
                                            value={inputMessage}
                                            onChange={(e) => setInputMessage(e.target.value)}
                                        ></textarea>
                                    </div>
                                    <div className="text-center">
                                        <input
                                            type="submit"
                                            className="w-full bg-orange-500 hover:bg-orange-300 hover:cursor-pointer transform hover:scale-105 transition duration-300 ease-in-out text-white font-semibold py-2 px-4 rounded-md"
                                            value={`Send`}
                                        >
                                        </input>
                                    </div>
                                </form>
                            </div>
                        </div>

                        <div className='flex items-center justify-center p-10'>
                            <div className='w-[70%] max-sm:w-[80%] flex justify-center items-center flex-col'>
                                <h1 className='text-center bg-transparent text-orange-50 lg:text-3xl text-[2rem] max-sm:mb-8' ><span className='text-orange-400'>Imagine </span> the world where every interaction is seamless, <span className='text-orange-400'>every design </span> captivates the eye, <span className='text-orange-400'>every application </span> shares a story, <span className='text-orange-400'>every user </span> feels truly valued, and everything is wonderfully easy to use.</h1> <br />
                                <a className='text-center bg-transparent text-orange-50 font-mono' href="https://mail.google.com/mail/u/0/#inbox?compose=GTvVlcSHxjdKhjZBtKpCKBhpVgpMjzqlVbCrTcBhGdrHQwZwXTmNhcnDfMLTkcdnLQwzCSkJjZBrT"><h2 className='max-sm:mt-8 max-sm:mb-2 text-center bg-transparent text-orange-50 font-mono text-[1.2rem] lg:text-lg'>
                                    devansh2002gupta@gmail.com</h2></a>
                                <h2 className='text-center text-orange-50 font-mono text-[1.2rem] max-sm:mb-2 lg:text-lg bg-transparent' >+91 8839897252</h2>
                                <h2 className='text-center text-orange-50 font-mono text-[1.2rem] max-sm:mb-14 lg:text-lg bg-transparent' >Bengaluru, Karnataka</h2>
                            </div>
                        </div>
                    </div>

                    <div className='flex justify-center items-end'>
                        <div className='absolute mt-5 bottom-1 bg-transparent'>
                            <h1 className=' flex justify-between gap-5 github text-gray-50 text-xl bottom-1 bg-transparent' >Connect on <span><a className='text-orange-400 bg-transparent font-semibold text-2xl hover:text-orange-200' href="https://www.linkedin.com/in/devgpta19/"><BsLinkedin /></a></span> </h1>
                        </div>
                    </div>


                </div>
            </div>
        </>
    );
};

export default Connect;