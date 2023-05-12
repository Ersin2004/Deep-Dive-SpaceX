import Head from '@/components/header'
import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import axios from 'axios';
import { faArrowLeft, faCircleNotch, faSpinner } from '@fortawesome/free-solid-svg-icons';
export default function Locations(props) {
  // This useState stores the destination data pulled from the database.
    const [destinations, setDestinations] = useState();
  // request all rows from the destination table, this is determinted by the params of the get request.
    useEffect(()=>{
        const url = 'http://localhost/bit-operators/spacex/app/api/connect.php'
        axios.get(url, {
          params: {
            table: 'destination',
          }}).then(response => response.data)
        .then((data) => {
          console.log(data)
          setDestinations(data)
        })
    },[])

    return (
      <>
    <motion.div 
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}className='h-full'>
    <div className="min-w-full min-h-1/2 bg-[url('/lift-off.png')]  no-repeat flex flex-col bg-cover p-8 sm:p-12 ">
        <Head setCurrentpage={props.setCurrentpage} id={props.id}/>
        <div className="gap-4 flex flex-col sm:mt-10 ">
            <h1 className=" text-4xl sm:text-6xl faq-text font-medium">OUR STARBASE LOCATIONS</h1>
            <p className="uppercase sm:w-1/2 md:w-full lg:w-1/2 text-[#D0D0D0] text-[18px] sm:text-lg faq-text font-medium">SpaceX has over 20+ starports on earth, this ensures that you can travel to every part of the globe within a hour.</p>
        </div>
      </div>
          <div className='w-full min-h-1/2 h-1/2 p-12 bg-gradient-to-b from-gray-900 relative via-gray-black to-black'> 
            <div className='sm:w-2/3 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1  gap-8 '>
              {
              destinations != undefined ?
                destinations.map((des)=>{
                  return (
                    <div key={des.location} onClick={()=>{ props.setCurrentpage('LOCATION TEMPLATE'), props.setCurrentDestinationId(des.destination_id) }} className='p-5 relative bg-cover flex items-center justify-center h-[150px] hover:cursor-pointer hover:-translate-y-1.5 transition-all' style={{ backgroundImage: `url('${des.afbeelding1}')`, }}>
                      <div className='w-full h-full absolute bg-black z-1 opacity-50' ></div>
                      <div className='text-[24px] text-center w-fit z-2 relative uppercase '>{des.location}</div>
                    </div>
                  )
                })
                :
                null
              }
            </div>
          {
            destinations == undefined ?
            <FontAwesomeIcon className='text-white absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 fa-spin  icon h-1/5'icon={faCircleNotch}/>
            : null
          }

          </div>
        </motion.div>
      </>
    )
  }
  
