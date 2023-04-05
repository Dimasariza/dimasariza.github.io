"use client"
import Image from 'next/image';
import { motion } from "framer-motion";

import docking1 from '../../public/asset/img/docking_home.png';
import docking2 from '../../public/asset/img/docking_project.png';
import docking3 from '../../public/asset/img/docking_tender.png';
import docking4 from '../../public/asset/img/docking_tracking.png';
import docking5 from '../../public/asset/img/docking_user.png';
import docking6 from '../../public/asset/img/docking_login.png';
import ais1 from '../../public/asset/img/ais_livemap.png';
import ais2 from '../../public/asset/img/ais_coverages.png';
import ais3 from '../../public/asset/img/ais_mainship.png';
import ais4 from '../../public/asset/img/ais_anothership.png';
import pmsol1 from '../../public/asset/img/pmsol_ME.png';
import pmsol2 from '../../public/asset/img/pmsol_AE.png';
import pmsol3 from '../../public/asset/img/pmsol_overview.png';
import pmsol4 from '../../public/asset/img/pmsol_alarm.png';
import pmsol5 from '../../public/asset/img/pmsol_summary.png';
import pmsol6 from '../../public/asset/img/pmsol_param.png';
import pmsol7 from '../../public/asset/img/pmsol_paramME.png';
import pmsol8 from '../../public/asset/img/pmsol_paramAE.png';
import srf1 from '../../public/asset/img/srf_home.png';
import srf2 from '../../public/asset/img/srf_origin.png';
import srf3 from '../../public/asset/img/srf_destination.png';
import srf4 from '../../public/asset/img/srf_anchor.png';
import rest1 from '../../public/asset/img/restaurant_italian.png';
import rest2 from '../../public/asset/img/restaurant_american.png';
import rest3 from '../../public/asset/img/restaurant_thai.png';
import rest4 from '../../public/asset/img/restaurant_japanese.png';
import three1 from '../../public/asset/img/threejs1.png';
import three2 from '../../public/asset/img/threejs2.png';
import 'aos/dist/aos.css'; 


const projectData = [
    {
        title : "Docking Software",
        description : "I build this website with Angular JS library and Nebular Framework. I have used styled Bootstrap CSS to keep everything organize and responsive. Integrate between client side and server side using rest API. Cooperate with backend developer to implements an interactive website using Laravel Framework.",
        demo : "http://docking.batera.id/#/auth/login",
        code : "",
        tech : "Angular Js, Nebular, Bootstrap",
        carousel : [docking1, docking2, docking3, docking4, docking5, docking6]
    },
    {
        title : "AMS (Alarm Monitoring System)",
        description : "The use of this application is to record the condition of the ship's engine. Build this website application with React JS library and React Electron. This application is integrated with Arduino devices developed using the C++ language.",
        demo : "",
        code : "",
        tech : "React Js, React Electron, Bootstrap, C++",
        carousel : [pmsol1, pmsol2, pmsol3, pmsol4, pmsol5, pmsol6, pmsol7, pmsol8]
    },
    {
        title : "AIS Monitoring",
        description : "I build this website with React JS library. I have used styled Bootstrap CSS to keep everything organize and responsive.",
        demo : "https://bateragames.github.io/ais-monitoring/",
        code : "https://github.com/BateraGames/ais-monitoring",
        tech : "React Js, Bootstrap",
        carousel : [ais1, ais2, ais3, ais4]
    },
    {
        title : "Ship Route Finders",
        description : "I build this website with Native Javascript. I have used styled Bootstrap CSS to keep everything organize and responsive.",
        demo : "https://dimasariza.github.io/SRF/",
        code : "https://github.com/Dimasariza/SRF",
        tech : "Native Javascript, Bootstrap",
        carousel : [srf1, srf2, srf3, srf4]
    },
    {
        title : "Food Restaurant",
        description : "This is my first web application to learn React. I build this website with React JS and learn about REST API consumption from open free API.",
        demo : "https://dimasariza.github.io/restaurant/",
        code : "https://github.com/Dimasariza/restaurant",
        tech : "React Js, Bootstrap",
        carousel : [rest1, rest2, rest3, rest4]
    },
    {
        title : "Solar System",
        description : "This is my first web application to learn three Js. I build this website with Vite js to learn 3d rendering on website.",
        demo : "https://dimasariza.github.io/restaurant/",
        code : "https://github.com/Dimasariza/solar-system",
        tech : "Vite Js, Three Js",
        carousel : [three1, three2]
    }
];

const MyImage = ({src, alt}) =>  (
    <Image
      src={src}
      alt={alt}
      width={1000}
    />
)

// use carousel type 1
const CarouselType1 = ({carousel}) => {
    const getImgName = (img) => img?.src.split("/")[4].split(".")[0];
    return (
    <motion.div 
    className="carousel w-full"
    whileHover={{ scale: 1.2 }}
    whileTap={{ scale: 1.1 }}
    drag="x"
    dragConstraints={{ left: -100, right: 100 }}
    >
        {
            carousel.map((img, id) => {
                const index = id + 1;
                const imgName = getImgName(img);
                const next = id == carousel.length - 1
                ? getImgName(carousel[0]) 
                : getImgName(carousel[index]);
                const prev = id == 0 
                ? getImgName(carousel[carousel.length - 1])  
                : getImgName(carousel[id - 1]);

                return (
                    <div id={`${imgName}`} key={`image${imgName}`} className="carousel-item relative w-full">
                        <MyImage src={img} alt={`${imgName}`} />
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href={`#${prev}`} className="btn btn-circle">❮</a> 
                        <a href={`#${next}`} className="btn btn-circle">❯</a>
                        </div>
                    </div>
                )
            })
        }
    </motion.div>
)}

// use carousel type 2
const CarouselType2 = ({carousel}) => {
    return (
        <>
            <motion.div 
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 1.1 }}
            drag="x"
            dragConstraints={{ left: -100, right: 100 }}
            className="carousel w-full shadow-xl"
            >
                {   
                    carousel.map(img => {
                        const imgName = img.src.split("/")[4].split(".")[0];
                        return(
                            <div id={imgName} key={`image${imgName}`} className="carousel-item w-full">
                                <MyImage src={img} alt={imgName}/>
                            </div>
                        )    
                    })
                }
            </motion.div> 
            <div className="flex justify-center w-full py-2 gap-2">
                {
                    carousel.map((img, id) => {
                        const imgName = img.src.split("/")[4].split(".")[0];
                        return <a href={`#${imgName}`} key={`anchor${imgName}`} className="btn btn-xs scroll-smooth">{id + 1}</a>
                    })
                }
            </div>
        </>
    )
}


export function Projects() {
    return (
        <div className="home-container">
            <h1 className="home-title">Projects</h1>
                {
                    projectData.map((project, id) => {
                        return (
                            <div 
                            className={projectData.length - 1 == id 
                                ? 'responsive-grid' 
                                : 'responsive-grid pb-20 border-b-blue-500 border-b'} 
                            key={project.title + id} 
                            >
                                <section data-aos="zoom-out-down" data-aos-duration="500">
                                    <h2 className='project-title' >{project.title}</h2>
                                    <p className='paragraph-text pr-16'>{project.description}</p>
                                    <span>Technologies : {project.tech}</span>
                                    <div className='flex gap-3 mt-4'>
                                        <button className="btn bg-blue-400 sm:btn-sm md:btn-md lg:btn-md glass">
                                            <a href={project.demo} target='blank'>Live Demo</a>
                                        </button>
                                        <button className="btn btn-outline text-blue-400 sm:btn-sm md:btn-md lg:btn-md">
                                            <a href={project.code} target='blank'>Source Code</a>
                                        </button>
                                    </div>
                                </section>  
                                <section data-aos="zoom-out-down" data-aos-duration="500">
                                    <CarouselType2 carousel={project.carousel} />
                                </section>
                            </div>
                        )
                    })
                }

        </div>
    )
}