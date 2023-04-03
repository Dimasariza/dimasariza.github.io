import Image from 'next/image';
import me from '../../public/asset/img/me.png';

export default function Aboutme() {
    return (
        <div className="home-container">
            <h1 className="home-title">About me</h1>
            <div className="responsive-grid" >
                <p className='paragraph-text'>
                    I am able to adapt very quick and also, I am really friendly who can fit in any team. <br /> <br />
                    My Current Skills <br /> 
                    HTML, CSS, Javascript, Python, Java, PHP, C#, <br />
                    Bootstrap, Tailwind, Nebular, Daisy, Next Js, <br /> 
                    React, Angular, Laravel, Node JS, Docker, .Net,
                </p>
                <div className='w-full flex justify-center'>
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
