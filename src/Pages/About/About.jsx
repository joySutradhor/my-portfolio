// import { CircleProgress } from 'react-gradient-progress'
// import { FaHtml5 ,} from 'react-icons/fa';

const About = () => {
    return (
        <div className="text-white max-w-6xl mx-auto" id='skill'>

            <h1 className='md:text-4xl text-2xl font-bold text-center md:py-12 py-6'>My Skills</h1>
            {/* <div className='flex md:flex-row flex-col py-6 md:py-0 justify-evenly text-center font-bold'>
                <div>
                    <CircleProgress percentage={85} strokeWidth={8} secondaryColor="#606060" />
                    <p>Tailwind</p>
                </div>
                <div>
                    <CircleProgress percentage={70} strokeWidth={8} secondaryColor="#f0f0f0" />
                    <p>Javascript</p>
                </div>
                <div>
                    <CircleProgress percentage={80} strokeWidth={8} secondaryColor="#f0f0f0" />
                    <p>React</p>
                </div>
                <div>
                    <CircleProgress percentage={30} strokeWidth={8} secondaryColor="#f0f0f0" />
                    <p>MongoDB</p>
                </div>
            </div> */}

            <div className="grid md:grid-cols-4 gap-5 md:px-0 px-4">
                <div className="card md:w-auto  shadow-xl border border-green-800">
                    <div className="card-body">
                        <h2 className="card-title p-2 flex justify-center items-center">  HTML ---- 98%</h2>
                    </div>
                </div>
                <div className="card md:w-auto  shadow-xl border border-green-800">
                    <div className="card-body">
                        <h2 className="card-title p-2 flex justify-center items-center">  Tailwind Css ---- 90%</h2>
                    </div>
                </div>
                <div className="card md:w-auto  shadow-xl border border-green-800">
                    <div className="card-body">
                        <h2 className="card-title p-2 flex justify-center items-center">  Bootstrap  ---- 80%</h2>
                    </div>
                </div>
                <div className="card md:w-auto  shadow-xl border border-green-800">
                    <div className="card-body">
                        <h2 className="card-title p-2 flex justify-center items-center">  Daisy UI  ---- 85%</h2>
                    </div>
                </div>
                <div className="card md:w-auto  shadow-xl border border-green-800">
                    <div className="card-body">
                        <h2 className="card-title p-2 flex justify-center items-center">  JavaScript   ---- 80%</h2>
                    </div>
                </div>
                <div className="card md:w-auto  shadow-xl border border-green-800">
                    <div className="card-body">
                        <h2 className="card-title p-2 flex justify-center items-center">  React   ---- 85%</h2>
                    </div>
                </div>
                <div className="card md:w-auto  shadow-xl border border-green-800">
                    <div className="card-body">
                        <h2 className="card-title p-2 flex justify-center items-center">  Express Js   ---- 40%</h2>
                    </div>
                </div>
                <div className="card md:w-auto  shadow-xl border border-green-800">
                    <div className="card-body">
                        <h2 className="card-title p-2 flex justify-center items-center">  MongoDB   ---- 35%</h2>
                    </div>
                </div>
               
              
            </div>


        </div>
    );
};

export default About;