import Head from "./header"
import { motion } from "framer-motion"
import { useEffect, useState } from "react";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faChevronCircleLeft, faChevronCircleRight } from "@fortawesome/free-solid-svg-icons";

export default function SLTemplate(props) {
  // This useState stores the destination data pulled from the database.
  const [locationData, setLocationData] = useState();
  // request all rows from the queried destination table, this is determinted by the params of the get request.
    useEffect(()=>{
        const url = 'http://localhost/bit-operators/spacex/app/api/connect.php'
        axios.get(url, {
          params: {
            table: 'destination',
            id: props.currentDestinationId,
          }}).then(response => response.data)
        .then((data) => {
          setLocationData(data)
        })
    },[])



  return (
    <>
    <motion.div 
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}className='h-full flex flex-col'>
    <div className="min-w-full min-h-1/2 no-repeat flex flex-col bg-cover p-8 sm:p-12 " style={{ backgroundImage: `url(' ${locationData != undefined ? locationData[0].afbeelding2 : null}')`, }}>
        <Head setCurrentpage={props.setCurrentpage} id={props.id}/>
        <div className="gap-4 flex flex-col sm:mt-10 ">
        <h1 className=" text-4xl sm:text-6xl faq-text uppercase font-medium">{locationData != undefined ? locationData[0].location : null}</h1>
        <p className="uppercase sm:w-1/2 md:w-full lg:w-1/2 text-[#D0D0D0] text-[18px] sm:text-lg faq-text font-medium">{locationData != undefined ? locationData[0].samenvatting : null} </p>
        </div>
      </div>
          <div className=' justify-start relative min-h-2/3 flex p-12 gap-12 flex-col h-2/3 bg-gradient-to-t from-gray-900 via-gray-black to-black'> 
            <div className="grid w-full  grid-cols-1 lg:grid-cols-2 gap-12">
              <div className="flex justify-center  flex-col gap-4">
                <h1 className=" text-4xl sm:text-5xl faq-text uppercase font-medium">spaceport information</h1>
                <div className=" text-[#D0D0D0] uppercase">{locationData != undefined ? locationData[0].informatie1 : null}</div>
              </div>
              <img className="max-h-[250px]  object-cover w-full" src={ locationData != undefined ? locationData[0].afbeelding1 : null } ></img>
            </div>

            <div className="w-full grid grid-cols-4">
                {locationData != undefined ? 
                  locationData.map((location)=>{
                    console.log(location.vervoersmiddel1)
                  })
                : null}
            </div>
            <div className="w-fit text-[12px] flex flex-row justify-center p-3 bottom-3 pl-0 absolute bottom-0 hover:cursor-pointer items-center gap-2 group" onClick={()=>{props.setCurrentpage('LOCATIONS')}}>
              <FontAwesomeIcon className='text-white w-3 group-hover:-translate-x-[3px] transition-all h-3'icon={faArrowLeft}/> 
              <div>RETURN</div>
            </div>
          </div>
        </motion.div>

    </>
  )
}
