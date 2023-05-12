import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons"
import Head from "./header"
import { motion } from "framer-motion"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

export default function Main(props) {
  return (
    <>
    <motion.div 
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    className="min-w-full  h-fit pb-48  lg:pb-0 md:min-h-full bg-[url('/spacex-ride.jpeg')] no-repeat flex flex-col bg-cover pl-8 sm:p-12 ">
    <Head setCurrentpage={props.setCurrentpage} id={props.id}/>
    <div className="flex flex-col sm:mt-10 sm:mt-0 gap-14 sm:gap-24">
        <div className="gap-4 flex pb-24 lg:pb-0 flex-col ">
            <h1 className=" text-4xl sm:text-6xl faq-text font-medium">THE FUTURE OF TRAVELLING</h1>
            <p className=" sm:w-1/2 md:w-full lg:w-1/2 text-[#D0D0D0] uppercase text-[18px] sm:text-lg faq-text font-medium">Experience luxury like never before, with SpaceX</p>
        </div>
    </div>
    </motion.div>
    {/* Commented out for later, need to fnish design first */}
    <div className="w-full md:mt-24 p-12 flex flex-col gap-24 bg-no-repeat bg-gradient-to-t from-gray-900 via-gray-black to-black">
        <div className="flex flex-col gap-4">
            <h2 className="text-4xl">OUR SPACESHIP</h2>
            <p className=" sm:w-1/2 md:w-full lg:w-1/2 text-[18px] uppercase sm:text-lg faq-text font-medium">DISCOVER OUR STATE OF THE ART SPACECRAFT</p>
        </div>
        <div className="  grid  grid-cols-1 lg:gap-0 gap-12 lg:grid-cols-2 pb-24">
                <img className="w-full h-full" src="dragon.png"></img>
                <div className="flex lg:pl-16 gap-8 h-full flex-col">
                    <div>
                        <h3 className="text-2xl font-light ">DRAGON </h3>
                        <h2 className="text-4xl">OVERVIEW</h2>
                    </div>
                    <div className="w-full flex flex-col gap-8">
                        <div className="flex flex-row text-[#D0D0D0]  w-full text-[18px] faq-text font-thin justify-between border-b-2">
                            <div>HEIGHT</div>
                            <div>82m</div>
                        </div>
                        <div className="flex flex-row text-[#D0D0D0]  w-full text-[18px] faq-text font-thin justify-between border-b-2">
                            <div>WITDH</div>
                            <div>12.2m</div>
                        </div>
                        <div className="flex flex-row text-[#D0D0D0]  w-full text-[18px] faq-text font-thin justify-between border-b-2">
                            <div>CAPACITY</div>
                            <div>4p</div>
                        </div>
                        <div className="flex flex-row text-[#D0D0D0]  w-full text-[18px] faq-text font-thin justify-between border-b-2">
                            <div>RETURN PAYLOAD MASS</div>
                            <div>3t</div>
                        </div>
                        <div className="w-fit text-[12px] flex flex-row justify-center p-3 pl-0 hover:cursor-pointer items-center gap-2 group">
                        <div>READ MORE</div>
                        <FontAwesomeIcon className='text-white w-3 group-hover:translate-x-[3px] transition-all h-3'icon={faArrowRight}/> 
                        </div>
                    </div>
                </div>
        </div>  
    </div>

    </>
  )
}
