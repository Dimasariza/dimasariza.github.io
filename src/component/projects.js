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

const projectData = [
    {
        title : "Docking Software",
        description : "I build this website with Angular JS library and Nebular Framework. I have used styled Bootstrap CSS to keep everything organize and responsive. I have implemented react hooks for my toggle. Website content is stored in data folder, which I am using to display content in my sections.",
        demo : "http://docking.batera.id/#/auth/login",
        code : "",
        carousel : [docking1, docking2, docking3, docking4, docking5, docking6]
    },
    {
        title : "AMS (Alarm Monitoring System)",
        description : "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Praesentium, sapiente, molestiae alias in quas iure debitis pariatur est quae iusto reiciendis vero totam earum similique excepturi ratione dignissimos saepe inventore",
        demo : "",
        code : "",
        carousel : [pmsol1, pmsol2, pmsol3, pmsol4, pmsol5, pmsol6, pmsol7, pmsol8]
    },
    {
        title : "AIS Monitoring",
        description : "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Praesentium, sapiente, molestiae alias in quas iure debitis pariatur est quae iusto reiciendis vero totam earum similique excepturi ratione dignissimos saepe inventore",
        demo : "https://bateragames.github.io/ais-monitoring/",
        code : "https://github.com/BateraGames/ais-monitoring",
        carousel : [ais1, ais2, ais3, ais4]
    },
    {
        title : "Ship Route Finders",
        description : "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Praesentium, sapiente, molestiae alias in quas iure debitis pariatur est quae iusto reiciendis vero totam earum similique excepturi ratione dignissimos saepe inventore",
        demo : "https://dimasariza.github.io/SRF/",
        code : "https://github.com/Dimasariza/SRF",
        carousel : [srf1, srf2, srf3, srf4]
    },
    {
        title : "Food Restaurant",
        description : "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Praesentium, sapiente, molestiae alias in quas iure debitis pariatur est quae iusto reiciendis vero totam earum similique excepturi ratione dignissimos saepe inventore",
        demo : "https://dimasariza.github.io/restaurant/",
        code : "https://github.com/Dimasariza/restaurant",
        carousel : [rest1, rest2, rest3, rest4]
    },
    {
        title : "Solar System",
        description : "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Praesentium, sapiente, molestiae alias in quas iure debitis pariatur est quae iusto reiciendis vero totam earum similique excepturi ratione dignissimos saepe inventore",
        demo : "https://dimasariza.github.io/restaurant/",
        code : "https://github.com/Dimasariza/restaurant",
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
                            key={project.title + id} >
                                <section>
                                    <h2 className='project-title'>{project.title}</h2>
                                    <p className='paragraph-text pr-16'>{project.description}</p>
                                    <div className='flex gap-3'>
                                        <button className="btn bg-blue-400 sm:btn-sm md:btn-md lg:btn-md glass">
                                            <a href={project.demo} target='blank'>Live Demo</a>
                                        </button>
                                        <button className="btn btn-outline text-blue-400 sm:btn-sm md:btn-md lg:btn-md">
                                            <a href={project.code} target='blank'>Source Code</a>
                                        </button>
                                    </div>
                                </section>  
                                <section>
                                    <CarouselType2 carousel={project.carousel} />
                                </section>
                            </div>
                        )
                    })
                }

        </div>
    )
}