
export default function Landing(props) {
    return (
      <>
        <div class="faq-text p-5 fixed w-full h-100 h-full z-50 top-0 bg-cover w-screen h-screen bg-[url('../public/spacex_back.png')]">
          <img className="bg-no-repeat ml-8 mb-1 bg-right-top" src="/spacex.png"></img>
            <div> 
              <div className="sm:text-5xl text-3xl color: white ml-8 mb-2 max-w-3xl font-sunflower p-1 font-medium font-weight-700">FROM NEW YORK TO TOKYO IN JUST 30 MINUTES.</div>
              <p className="uppercase sm:w-1/2 md:w-full ml-8 lg:w-1/2 text-[#D0D0D0] text-[18px] sm:text-lg faq-text font-medium">DISCOVER IT NOW, WITH SPACEX</p>
              <button type="button" class="bg-transparant mt-8 p-2 text-black font-sunflower font-medium font-weight-700 text-md hover:cursor-pointer text-white border-2 hover:bg-white hover:text-black transition-all border-white ml-8 " onClick={()=>{props.setCurrentpage('ABOUT')}}>READ MORE</button>
            </div>
        </div>        
      </> 
    )
  }
  