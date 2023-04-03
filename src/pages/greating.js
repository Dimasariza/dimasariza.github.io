import { motion, AnimatePresence } from "framer-motion";
import Image from 'next/image';
import bg from '../../public/asset/bg/bg.svg';

export default function Greating() {
    return (
        <AnimatePresence>
            <motion.div 
            key="greating_motion"
            initial={{opacity : 0, y : 15}}
            animate={{opacity : 1, y : 1}}
            exit={{opacity : 0, y : 15}}
            transition={{delay : 0.8}}
            id="greating"
            className="flex h-screen justify-center items-center flex-col font-medium">
                <div className="w-full flex lg:flex-row md:flex-row sm:flex-col justify-center lg:justify-center md:justify-center sm:items-center my-2 lg:text-6xl md:text-5xl sm:text-4xl">
                    <h1>Hi, My name is&nbsp;</h1>
                    <h1 className="text-blue-400">Roganda Dimas Ariza</h1>
                </div>
                <h2 className="my-2 lg:text-5xl md:text-4xl sm:text-3xl">I am a Web Developer</h2>
                <button className="btn bg-blue-400 btn-lg my-5">
                    <a href="#about_me">See More</a>
                </button>
            </motion.div>
        <Image id="about_me" className='about-bg' priority src={bg} alt='background' />
        </AnimatePresence>
    )
}