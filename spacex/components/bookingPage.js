
import { useState, useEffect } from 'react';
import Head from '@/components/header';
import { motion } from 'framer-motion';
import axios from 'axios';


export default function Booking(props) {
  const [destinations, setDestinations] = useState();
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


    const [departure, setDeparture] = useState('');
    const [arrivalOptions, setArrivalOptions] = useState(destinations);

  function handleDepartureChange(event) {
    // Grabs the selected departure value
    const selectedDeparture = event.target.value;
    setDeparture(selectedDeparture);

    // Filters the array (destinations) based on the selected departure value
    const filteredDestinations = destinations.filter((destination) => {
      return destination.location !== selectedDeparture;
    });
    setArrivalOptions(filteredDestinations);
  }

  const tickets = [{
    departurevalue: 'New York',
    departure: 'NY',
    arrival: 'TK',
    date: '10 MAY 2023',
  },{
    departurevalue: 'New York',
    departure: 'NY',
    arrival: 'TK',
    date: '10 MAY 2023',
  },{
    departurevalue: 'Tokyo',
    departure: 'TK',
    arrival: 'NY',
    date: '10 MAY 2023',
  },{
    departurevalue: 'Tokyo',
    departure: 'TK',
    arrival: 'NY',
    date: '10 MAY 2023',
  },]

  const [filteredTickets, setFilteredTickets] = useState();

  useEffect(() => {
    // Clears the filtered tickets when the departure changes
    setFilteredTickets();
    flights.classList.add('hidden');
  }, [departure])

  function showFlights() {
    // Filters the array (tickets) based on the departure value
    const arrival = document.getElementById('arrival').value;
    const departure = document.getElementById('departure').value;
    // Checks if the arrival and departure are not empty
    if (arrival != '') {
      const flights = document.getElementById('flights');
      if (departure != '') {
        const filter = tickets.filter((ticket) => {
          return ticket.departurevalue == departure;
        });
        setFilteredTickets(filter);
      }
      flights.classList.remove('hidden');
    } else {
      // If the arrival and departure are empty, show an alert
      alert('Please select a departure and arrival location');
    }

  }


  return (
    <motion.div 
initial={{ opacity: 0 }}
animate={{ opacity: 1 }}className='h-full'>
<div className="min-w-full min-h-1/2 bg-[url('/book.png')]  no-repeat flex flex-col bg-cover p-8 sm:p-12 ">
    <Head setCurrentpage={props.setCurrentpage} id={props.id}/>
    <div className="gap-4 flex flex-col sm:mt-10 ">
        <h1 className=" text-4xl sm:text-6xl faq-text font-medium">BOOKING</h1>
        <p className="uppercase sm:w-1/2 md:w-full lg:w-1/2 text-[#D0D0D0] text-[18px] sm:text-lg faq-text font-medium">BOOK NOW AND EXPERIENCE LUXURY LIKE NEVER BEFORE</p>
    </div>
  </div>
      <div className='w-full min-h-2/3 h-2/3 p-12 bg-gradient-to-t flex flex-col gap-8 from-gray-900 via-gray-black to-black'> 
        <div className='flex flex-row w-full'>
        <form className="p-8 w-1/2 h-fit flex gap-6 bg-white flex-col">
          <div className="flex flex-row gap-6 faq-text">
            
            <div className="flex flex-col text-black faq-text text-lg gap-2">
              <label htmlFor="departure">DEPARTURE</label>
              <select className="p-3 text-gray border-solid border-2" id="departure" name="departure" onChange={handleDepartureChange}>
                <option value="default" disabled selected>Select departure</option>
              {destinations != undefined ?
                  destinations.map((des)=>{
                    return (
                      <option key={des.location} value={des.location}>{des.location}</option>
                    )
                  })
                  :
                  null
                }
              </select>
            </div>

            <div className="flex flex-col text-black faq-text text-lg gap-2">
              <label htmlFor="arrival">ARRIVAL</label>
              <select className="p-3 text-gray border-solid border-2" id="arrival" name="arrival">
                {arrivalOptions != undefined ? 
                  arrivalOptions.map((des)=>{
                  return (
                    <option key={des.location} value={des.location}>{des.location}</option>
                  )
                }) : null}
              </select>
            </div>


            <div onClick={showFlights} className="flex flex-col hover:pointer-cursor text-black faq-text text-lg gap-2">
              <label htmlFor="search">SEARCH</label>
              <div  className="p-2 text-gray border-solid border-2 cursor-default" id="search" name="search">
                  SEARCH
              </div>
            </div>

          </div>


        </form>
        </div>

        <div id="flights" name="flights" className=' hidden flex bg-white h-fit w-full faq-text flex-col p-8 '>
                <div className='grid grid-cols-4 gap-6'>
                  {filteredTickets != undefined ? filteredTickets.map((t) => {
                    return (
                      <div key={t.departure} className='flex flex-row p-5 gap-8 border-solid border-2'>
                        <div className='flex flex-col'>
                          <div className='flex  text-black text-[20px] flex-row'>{t.departure} - {t.arrival}</div>
                          <div className='text-[#D0D0D0] text-[12px] '>{t.date}</div>
                        </div>
                        <img className='object-cover ' src='/rocket.png'></img>
                      </div>
                    )
                  }) : null
                  }
                </div>
        </div>
      </div>
    </motion.div>
  );
}

