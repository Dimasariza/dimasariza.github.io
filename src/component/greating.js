import { motion, AnimatePresence } from "framer-motion";
import Image from 'next/image';
import bg from '../../public/asset/bg/bg.svg';

export default function Greating() {
    const scroll2El = elID => {
        window.scrollTo({
          top: document.getElementById(elID).offsetTop - 20,
          behavior: 'smooth',
        });
    };

    const onBtnClick = (e) => {
        e.preventDefault();
        const goto = e.target.getAttribute('goto');
        setTimeout(() => {
          scroll2El(goto);
        }, 100);
    }

    return (
        <AnimatePresence> 
            <div className="w-full flex justify-end p-10" key="greating_animation">
                <label className="swap swap-rotate">
                <input type="checkbox"  />

                <svg className="swap-on fill-current w-10 h-10 text-slate-900" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z"/></svg>
                
                <svg className="swap-off fill-current w-10 h-10" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z"/></svg>

                </label>
            </div>
            <motion.div 
            key="greating_motion"
            initial={{opacity : 0, y : 15}}
            animate={{opacity : 1, y : 1}}
            exit={{opacity : 0, y : 15}}
            transition={{delay : 0.8}}
            id="greating"
            className="flex h-screen justify-center items-center flex-col font-medium pb-40">
                <div className="w-full flex lg:flex-row md:flex-row sm:flex-col justify-center lg:justify-center md:justify-center sm:items-center my-2 lg:text-6xl md:text-5xl sm:text-4xl">
                    <h1>Hi, My name is&nbsp;</h1>
                    <h1 className="text-blue-400">Roganda Dimas Ariza</h1>
                </div>
                <h2 className="my-2 lg:text-5xl md:text-4xl sm:text-3xl">I am a Web Developer</h2>
                <button className="btn bg-blue-400 btn-lg my-5 glass" goto="about_me" onClick={onBtnClick}>
                    See More
                </button>
            </motion.div>
        <Image className='absolute w-full' priority src={bg} alt='background' />
        </AnimatePresence>
    )
}