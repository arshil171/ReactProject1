import React, { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import Section from './components/Section';
import Footer from './components/Footer';

const App = () => {
   const [dark , setDark] = useState(false)
  return(
    <div>
      {/* <Navbar dark={dark} setDark={setDark} /> */}
    {/* <Section dark={dark} setDark={setDark}/> */}
    <Footer />
   
    </div>
  )
}

export default App