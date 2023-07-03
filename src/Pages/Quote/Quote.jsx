import pic from  "../../../public/2.jpg"
import "./Quote.css"
import { FaQuoteLeft } from 'react-icons/fa';
const Quote = () => {
    return (
        <div className="quote-img h-full relative py-12 md:py-0">
            <img src={pic} alt="" className="bg-fixed" />
            <div className=" text-center text-white block-text font-[Helvetica ] md:text-[24px] md:py-0  font-bold text-start">
                <p className="text-[#cf1f1f] md:text-5xl pb-3"><FaQuoteLeft></FaQuoteLeft></p>
                <p>Do more than is required. What is the distance between someone who achieves their goals consistently and those who spend their lives and careers merely following? The extra mile.</p>
                <p className="text-sm font-normal py-3">- Joy Sutradhor</p>
            </div>

        </div>
    );
};

export default Quote;