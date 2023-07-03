
import "./Hero.css"
import { FaFacebook, FaGithub, FaLinkedinIn } from "react-icons/fa";
import { useCallback } from "react";
import Particles from "react-particles";
import { loadFull } from "tsparticles";
import { Typewriter } from 'react-simple-typewriter';
import { Link } from "react-router-dom";
import { FaDownload } from 'react-icons/fa';
import my from "../.././../public/my.jpg"
import mypdf from "../../../public/Resume of Joy Sutradhor.pdf"

const Hero = () => {

    // Particles functionality 
    const particlesInit = useCallback(async engine => {
        console.log(engine);

        await loadFull(engine);
    }, []);

    const particlesLoaded = useCallback(async container => {
        await console.log(container);
    }, []);

    //  typewritter functionality 
    const handleType = (count) => {
        // access word count number
        console.log(count);
    };

    const handleDone = () => {
        console.log(`Done after 5 loops!`);
    };

    return (
        <div className="h-screen" id="home">
            <Particles

                id="tsparticles"
                init={particlesInit}
                loaded={particlesLoaded}
                options={{

                    fpsLimit: 120,
                    interactivity: {
                        events: {
                            onClick: {
                                enable: false,
                                mode: "push",
                            },
                            onHover: {
                                enable: true,
                                mode: "repulse",
                            },
                            resize: true,
                        },
                        modes: {
                            push: {
                                quantity: 4,
                            },
                            repulse: {
                                distance: 80,
                                duration: 0.4,
                            },
                        },
                    },

                    particles: {
                        color: {
                            value: "#ffffff",
                        },
                        links: {
                            color: "#ffffff",
                            distance: 150,
                            enable: true,
                            opacity: 0.5,
                            width: 1,
                        },
                        collisions: {
                            enable: false,
                        },
                        move: {
                            direction: "none",
                            enable: true,
                            outModes: {
                                default: "bounce",
                            },
                            random: false,
                            speed: 3,
                            straight: false,
                        },
                        number: {
                            density: {
                                enable: true,
                                area: 1000,
                            },
                            value: 10,
                        },
                        opacity: {
                            value: 0.5,
                        },
                        shape: {
                            type: "circle",
                        },
                        size: {
                            value: { min: 1, max: 5 },
                        },
                    },
                    detectRetina: true,
                }}
            />
            {/* socail icons here */}
            <aside className="font-[Helvetica]  md:gap-5  fixed z-20 md:top-[45%] top-[22%]">
                <div className="flex flex-col gap-5 text-xl text-[#cf1f1f] px-3 md:px-8 w-[100px]">

                    <Link to="https://www.facebook.com/joysutradhor10" target="_blank" ><FaFacebook></FaFacebook></Link>
                    <Link to="https://github.com/joySutradhor" target="_blank"><FaGithub></FaGithub></Link>
                    <Link to="https://www.linkedin.com/in/joy-sutradhor-a8b103187/" target="_blank"><FaLinkedinIn></FaLinkedinIn></Link>
                </div>
            </aside>
            <div className="flex flex-col-reverse justify-center items-center py-10 px-12 md:flex-row md:justify-between md:items-center md:px-32 md:py-32">
                <div>

                    {/* Typewritting section  */}
                    <div>
                        <div className="App">
                            <h1 className="text-red-700 font-bold text-xl pt-10">
                                I Am Joy Sutradhor{' '}

                                <h2 className="py-5">
                                    <span className="text-2xl md:text-4xl " style={{ color: 'white', fontWeight: 'bold' }}>

                                        <Typewriter
                                            words={['PROGRAMMER', 'WEB DEVELOPER',
                                            ]}
                                            loop={50000}
                                            cursor
                                            cursorStyle='..'
                                            typeSpeed={70}
                                            deleteSpeed={60}
                                            delaySpeed={1000}
                                            onLoopDone={handleDone}
                                            onType={handleType}
                                        />
                                    </span>
                                </h2>
                            </h1>
                        </div>
                    </div>

                    {/* projecs sections */}
                    <div className="flex  font-[Helvetica] ">
                        <div className="border-[#777777] border-l-[1px] pl-2 pr-10 text-[#f5f0f0] ">
                            <p className="pb-2">Starforce Universe</p>
                            <p className="text-[10px]  font-sans md:space-x-2 text-blue-200">
                                <Link to="https://github.com/joySutradhor/Starforce-universe.git" target="_blank">Client  </Link>
                                <Link to="https://github.com/joySutradhor/Starforce-universe-server.git" target="_blank">- Server - </Link>
                                <Link to="https://starforce-universe.web.app/" target="_blank">Live</Link>
                            </p>
                        </div>
                        <div className="border-[#777777] border-l-[1px] pl-2 pr-10 text-[#f5f0f0] ">
                            <p className="pb-2">Cricket World</p>
                            <p className="text-[10px] font-sans md:space-x-2 text-blue-200">
                                <Link to="https://github.com/joySutradhor/Cricket-World.git" target="_blank">Client  </Link>
                                <Link to="https://github.com/joySutradhor/Cricket-world-server.git" target="_blank">- Server - </Link>
                                <Link to="https://cricketworld.netlify.app/" target="_blank">Live</Link>
                            </p>
                        </div>
                        <div className="border-[#777777] border-l-[1px] pl-2 pr-10 text-[#f5f0f0] ">
                            <p className="pb-2">Hunting Jobs</p>
                            <p className="text-[10px] font-sans md:space-x-2 text-blue-200">
                                <Link to="https://github.com/joySutradhor/Hunting-jobs.git" target="_blank">Client  </Link>
                                <Link to="https://hunting-jobs.netlify.app/" target="_blank">  - Live</Link>
                            </p>
                        </div>

                    </div>
                    <div>
                        <div className="py-5">
                            <button type="button" className="bg-[#cf1f1f] px-3 py-1 text-white rounded-sm" >
                                <a href="../../../public/Resume of Joy Sutradhor.pdf" download={mypdf} >Download Resume <FaDownload className="inline"></FaDownload></a>
                            </button>

                        </div>
                    </div>

                </div>

                <div>
                    <div>
                    <img src={my} alt="" className="md:h-[300px] md:w-[300px] h-[200px] w-[200px] object-cover rounded-full" /> 
                    </div>
                
                </div>
            </div>
        </div>
    );
};

export default Hero;