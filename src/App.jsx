import React from 'react'
import {BrowserRouter} from "react-router-dom"
import {About,Contact,Experience,Hero,Navbar,Feedbacks,Tech,Works,StarsCanvas} from './components'
import Stars from './components/canvas/Stars'

const App = () => {
  return (
    <BrowserRouter>
             <div className='relative z-0 bg-primary'>
              <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>
                   <Navbar/>
                   <Hero/>
              </div>
               <div className=''>
               <About/>
               </div>
               {/* <Experience/> */}
               <Tech/>
               <Works/>
              
              
               <div className='relative z-0'>
             
               <Contact/>
                <StarsCanvas/>
               </div>
             </div>
  
    </BrowserRouter>
  )
}

export default App