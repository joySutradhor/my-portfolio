
import "./Contact.css"
import Lottie from "lottie-react";
import contact from "../../../public/contact.json"

const Contact = () => {
    return (
        <div id="contact" className="mx-4 py-12">
            <h1 className="text-3xl text-center text-white pb-12 ">Contact Me</h1>
            <div className="flex justify-center flex-wrap items-center">
            <div className="md:h-[500px] md:w-[500px]">
                <Lottie animationData={contact} loop={true} />
            </div>
            <form
                action="https://getform.io/f/aff911d1-a0f4-47b7-b873-e724ae105e40" method="POST">

                <div className=" mx-auto pb-12">
                    <div className="flex justify-center gap-5 ">
                        <input type="text" placeholder="Your Name" className="input input-bordered input-accent w-full max-w-xs focus:outline-0 focus:bg-gray-900 focus:text-white bg-transparent border p-2 text-white" />
                        <input type="email" placeholder="Your Mail" className="input input-bordered input-accent w-full max-w-xs focus:outline-0 bg-transparent border  p-2  focus:bg-gray-900 focus:text-white text-white" />
                        <input type="text" placeholder="Your Phone" className="input input-bordered input-accent w-full max-w-xs focus:outline-0 bg-transparent border p-2  focus:bg-gray-900 focus:text-white text-white" />
                    </div>
                    <br />
                    <textarea placeholder="Feel Free to write something" className="textarea textarea-bordered textarea-lg w-full max-w-2xl mx-auto focus:outline-0 bg-transparent border p-2 h-[200px]  focus:bg-gray-900 focus:text-white text-white" ></textarea>

                    <div className="text-center py-5">
                        <button
                            type="submit"
                            className="inline-block rounded border-2 border-success px-6 pb-[6px] pt-2 text-xs font-medium uppercase leading-normal text-success transition duration-150 ease-in-out hover:border-success-600 hover:bg-neutral-500 hover:bg-opacity-10 hover:text-success-600 focus:border-success-600 focus:text-success-600 focus:outline-none focus:ring-0 active:border-success-700 active:text-success-700 dark:hover:bg-neutral-100 dark:hover:bg-opacity-10 text-white"
                            data-te-ripple-init>
                            send
                        </button>
                    </div>
                </div>
            </form>
            </div>

        </div>
    );
};

export default Contact;