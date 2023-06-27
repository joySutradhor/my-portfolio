
import "./Hero.css"
import { FaFacebook, FaGithub, FaLinkedinIn } from "react-icons/fa";
import { useCallback } from "react";
import Particles from "react-particles";
import { loadFull } from "tsparticles";

const Hero = () => {

    const particlesInit = useCallback(async engine => {
        console.log(engine);

        await loadFull(engine);
    }, []);

    const particlesLoaded = useCallback(async container => {
        await console.log(container);
    }, []);

    return (
        <div className="hero-bg absolute top-[0px] w-full h-screen">
            <Particles
                id="tsparticles"
                init={particlesInit}
                loaded={particlesLoaded}
                options={{
                    // background: {
                    //     color: {
                    //         value: "#0d47a1",
                    //     },
                    // },
                    fpsLimit: 120,
                    interactivity: {
                        events: {
                            onClick: {
                                enable: true,
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
                            enable: true,
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
                                area: 800,
                            },
                            value: 50,
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

            <aside className="font-[Helvetica] flex flex-col gap-5 justify-center absolute left-5 top-1/2">
                <div className="flex flex-col gap-2 items-center">
                    <div>
                        <h1 className="[writing-mode:vertical-lr]">Follow Me</h1>
                    </div>
                    <div className="flex flex-col gap-2 ">
                        <FaFacebook></FaFacebook>
                        <FaGithub></FaGithub>
                        <FaLinkedinIn></FaLinkedinIn>
                    </div>
                </div>
            </aside>
            <div className="absolute top-1/2 left-10">
                <h1>hello </h1>
                <p>nice to meet your</p>
                </div>

        </div>
    );
};

export default Hero;