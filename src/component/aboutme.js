import Image from 'next/image';
import me from '../../public/asset/img/me.png';

export default function Aboutme() {
    return (
        <div className="home-container scroll-mt-10 z-10 relative" id="about_me">
            <h1 className="home-title">About me</h1>
            <div className="responsive-grid">
                <p className='paragraph-text' data-aos="zoom-out-down" data-aos-duration="500">
                    I am able to adapt very quick and also, I am really friendly who can fit in any team. <br /> <br />
                    My Current Skills <br /> 
                    HTML, CSS, Javascript, Python, Java, PHP, C#, <br />
                    Bootstrap, Tailwind, Nebular, Daisy, Next Js, <br /> 
                    React, Angular, Laravel, Node JS, Docker, .Net,
                </p>
                <div className='w-full flex justify-center' data-aos="zoom-out-down" data-aos-duration="500">
                    <div className="card w-80 bg-blue-100 shadow-xl glass">
                        <figure>
                            <Image src={me} alt='background' />
                        </figure>
                    </div>
                </div>
            </div>
        </div>
    )
}
