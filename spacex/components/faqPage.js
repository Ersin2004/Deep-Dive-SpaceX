import Head from './header'
import { motion } from 'framer-motion'
export default function Faq(props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="h-full">
      <div className="min-w-full min-h-1/2 bg-[url('/faq_background.png')]  no-repeat flex flex-col bg-cover p-8 sm:p-12 ">
        <Head setCurrentpage={props.setCurrentpage} id={props.id} />
        <div className="gap-4 flex flex-col sm:mt-10 ">
          <h1 className=" text-4xl sm:text-6xl faq-text font-medium text-white">
            FAQ
          </h1>
          <p className="uppercase sm:w-1/2 md:w-full lg:w-1/2 text-[#D0D0D0] text-[18px] sm:text-lg faq-text font-medium">
            QUESTIONS? ANSWERS CAN BE FOUND HERE!
          </p>
        </div>
      </div>
      <div className="w-full min-h-2/3 h-2/3 flex flex-col gap-8 p-12 bg-gradient-to-t from-gray-900 via-gray-black to-black">
        <div className="faq-text w-full md:w-1/2">
          <h2 className="text-base sm:text-lg md:text-xl font-bold mb-2">
            IS SPACE TRAVEL BAD FOR MY HEALTH?
          </h2>
          <hr className="border-white mb-2 sm:mb-4" />
          <p className="text-xs sm:text-sm md:text-base mb-4">
            The short answer is no. only when you spent long periods of time in
            space, and we designed the flights in such a way that we spend
            minimal time in actual outer space.
          </p>
        </div>
        <div className="faq-text w-full md:w-1/2">
          <div className="flex flex-col">
            <h2 className="text-base sm:text-lg md:text-xl font-bold mb-2">
              CAN I BRING PETS ON THE FLIGHT?
            </h2>
            <hr className="border-white mb-2 sm:mb-4" />
            <p className="text-xs sm:text-sm md:text-base mb-4">
              Sadly there are no pets allowed on the space flight as we can not
              ensure that the travel is save for animals
            </p>
          </div>
        </div>
        <div className="faq-text w-full md:w-1/2">
          <h2 className="text-base sm:text-lg md:text-xl font-bold mb-2">
            IS THERE AN AGE REQUIREMENT?
          </h2>
          <hr className="border-white mb-2 sm:mb-4" />
          <p className="text-xs sm:text-sm md:text-base mb-4">
            Yes the minimal age for space travel is set at 18. this is because
            the body is fully developed at this point.
          </p>
        </div>
      </div>
    </motion.div>
  )
}
