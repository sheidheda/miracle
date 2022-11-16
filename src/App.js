import React from 'react'
import './App.css';
import { Routes, Route, Link } from "react-router-dom";
import Header from './components/Header';
import Footer from './components/Footer';
import Section1 from './components/Sections/Section1';
import Section2 from './components/Sections/Section2';
import Section3 from './components/Sections/Section3';
import Section4 from './components/Sections/Section4';
import PublicationPage from './components/Publication/PublicationPage';
import Bookstore from './components/Bookstore/Bookstore';
import ScrollToTop from './ScrollToTop';

function App() {
  return(

  <ScrollToTop>

  
    <div className="App1">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="publications" element={<PublicationPage />} /> 
        <Route path="bookstore" element={<Bookstore />} /> 
      </Routes>
    <div className="copyright">
        <p>Copyright © 2022 MiracleAjah.com. All rights reserved.</p>
    </div>
    </div>
  </ScrollToTop>
  )
}

function Home(){
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

export default App;
