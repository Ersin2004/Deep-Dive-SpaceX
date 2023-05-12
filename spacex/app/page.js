'use client';
import Image from 'next/image'
import Main from '@/components/homePage'
import Booking from '@/components/bookingPage'
import Faq from '@/components/faqPage'
import Landing from '@/components/landingsPage'
import Locations from '@/components/locationsPage'
import SLTemplate from '@/components/locationTemplate';
import Head from '@/components/header'
import { useEffect, useState } from 'react'



export default function Home() {
  const [currentPage, setCurrentpage] = useState();

  // useStates for single destination page
  const [currentDestinationId, setCurrentDestinationId] = useState();



  // Every page recieves the prop setCurrentDestinationId and the prop when loaded. The setCurrentDestinationId state gets changed when the user presses a page in the menu.
  // This causes the page.js file to rehydrate with the new currentDestinationId value. 
  return (
    <>
    <div className='w-screen h-screen'>
      {/* Checks the current setCurrentDestinationId and displays the corresponding page. */}
      { currentPage == undefined ? <Landing setCurrentpage={setCurrentpage} id={'ABOUT'}/> 
      : currentPage == 'ABOUT' ? <Main setCurrentpage={setCurrentpage} id={'ABOUT'}/> 
      : currentPage == 'FAQ' ? <Faq setCurrentpage={setCurrentpage} id={'FAQ'}/> 
      : currentPage == 'LOCATIONS' ? <Locations setCurrentpage={setCurrentpage} setCurrentDestinationId={setCurrentDestinationId} id={'LOCATIONS'}/> 
      : currentPage == 'BOOKING' ? <Booking setCurrentpage={setCurrentpage} id={'BOOKING'}/> 
      : currentPage == 'LOCATION TEMPLATE' ? <SLTemplate setCurrentpage={setCurrentpage} id={'LOCATION TEMPLATE'} currentDestinationId={currentDestinationId}/> 
      : null}
    </div>
    </>
  )
}
