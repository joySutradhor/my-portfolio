
import marvel from "../../../public/job.png"
import cricket from "/cricket.png"

const Projects = () => {
    return (
        <div id="projects" className="max-w-6xl mx-auto z-30">
            <h2 className="font-[saira] text-[34px] text-white text-center pb-12">My Projects </h2>
            <div className="flex gap-20 flex-wrap px-4 justify-center items-center pb-12 text-white">
                <div className="card w-96 bg-base-100 shadow-xl">
                    <figure><img src={marvel} alt="Starforce" className="rounded-md" /></figure>
                    <div className="card-body">
                        <h2 className="card-title py-2">
                            Starforce Universe
                        </h2>
                        <p className="text-gray-600">This website is comic book related webiste . which a admin can add a comic book and delete it as soon as possible. </p>
                        <div>
                            <h4 className="py-2 underline">Using Technology :</h4>
                            <div className="flex gap-2 flex-wrap ">
                                <button className="border p-1 rounded-sm text-xs border-gray-800">tailwind css</button>
                                <button className="border p-1 rounded-sm text-xs border-gray-800">Daisy Ui</button>
                                <button className="border p-1 rounded-sm text-xs border-gray-800">Javasricpt</button>
                                <button className="border p-1 rounded-sm text-xs border-gray-800">React Js</button>
                                <button className="border p-1 rounded-sm text-xs border-gray-800">Firebase</button>
                                <button className="border p-1 rounded-sm text-xs border-gray-800">Express Js</button>
                                <button className="border p-1 rounded-sm text-xs border-gray-800">MongoDB</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="card w-96 bg-base-100 shadow-xl">
                    <figure><img src={cricket} alt="Starforce" className="rounded-md" /></figure>
                    <div className="card-body">
                        <h2 className="card-title py-2">
                            Cricket World
                        </h2>
                        <p className="text-gray-600">This website is comic book related webiste . which a admin can add a comic book and delete it as soon as possible. </p>
                        <div>
                            <h4 className="py-2 underline">Using Technology :</h4>
                            <div className="flex gap-2 flex-wrap ">
                                <button className="border p-1 rounded-sm text-xs border-gray-800">tailwind css</button>
                                <button className="border p-1 rounded-sm text-xs border-gray-800">Daisy Ui</button>
                                <button className="border p-1 rounded-sm text-xs border-gray-800">Javasricpt</button>
                                <button className="border p-1 rounded-sm text-xs border-gray-800">React Js</button>
                                <button className="border p-1 rounded-sm text-xs border-gray-800">Firebase</button>
                                <button className="border p-1 rounded-sm text-xs border-gray-800">Express Js</button>
                                <button className="border p-1 rounded-sm text-xs border-gray-800">MongoDB</button>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Projects;