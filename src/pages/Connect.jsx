import React, { useEffect, useRef, useState } from 'react';
import emailjs from '@emailjs/browser';


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
                <div className='w-full'>
                    <div className="h-[90%] w-full flex items-center justify-center p-6">
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
                                        className="w-full bg-orange-500 hover:bg-orange-300 hover:cursor-pointer transform hover:scale-105 transition duration-300 ease-in-out text-white font-semibold py-2 px-4 rounded-md transition duration-300 ease-in-out"
                                        value={`Send`}
                                    >
                                    </input>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div className='absolute bottom-1 h-[10%] w-full pb-5 flex justify-center items-end'>
                        <div>
                            <h1 className='text-zinc-300 text-xl font-extralight' >Connect on <a className='text-orange-500 font-semibold' href="https://www.linkedin.com/in/devgpta19/" target='_blank'>LinkedIn.</a> </h1>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Connect;