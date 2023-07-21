import React from 'react'
import './App.css';
import { Routes, Route, } from "react-router-dom";
import { useState, useEffect } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Section1 from './components/Sections/Section1';
import Section2 from './components/Sections/Section2';
import Section3 from './components/Sections/Section3';
import Section4 from './components/Sections/Section4';
import PublicationPage from './components/Publication/PublicationPage';
import Bookstore from './components/Bookstore/Bookstore';
import ScrollToTop from './ScrollToTop';
import MobileHeader from './components/Mobile/MobileHeader';




function App() {
  return (

    <ScrollToTop>


      <div className="App1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/publications" element={<PublicationPage />} />
          <Route path="/bookstore" element={<Bookstore />} />
        </Routes>
        <div className="copyright">
          <p>Copyright © 2022 MiracleAjah.com. All rights reserved.</p>
        </div>
      </div>
    </ScrollToTop>
  )
}


function Home() {
  const [width, setWidth] = useState(window.innerWidth);
  const isMobile = width <= 500;

  const handleWindowSizeChange = () => {
    setWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener('resize', handleWindowSizeChange);
    return () => {
      window.removeEventListener('resize', handleWindowSizeChange);
    };
  }, []);


// FOR MOBILE VIEW
  if (isMobile) {
    return (
      <div>
      <MobileHeader />
      <h5>wweeeweewe</h5>
      <h1>NOOOOOOOOOOO</h1>
      <h1>NOOOOOOOOOOO</h1>
      <h1>NOOOOOOOOOOO</h1>
      </div>
    );
  } 
  
  // FOR DESKTOP VIEW
  else {
    return (
      <div className="App">
        <div className="c1">
          <Header />
          <Section1 />
        </div>
        
        <Section2 />
        <Section3 />
        <Section4 />
        <Footer />


      </div>

    );
  }
}



// function Home() {
//   return (
//     <div className="App">
//       <div className="c1">
//         <Header />
//         <Section1 />
//       </div>
//       <Mobile />
//       <Section2 />
//       <Section3 />
//       <Section4 />
//       <Footer />


//     </div>
//   );
// }


export default App;
