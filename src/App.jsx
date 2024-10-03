import React from 'react'
import About from './components/About';
import Banner from './components/Banner';
import Contact from './components/Contact';
import Header from './components/Header';
import Nav from './components/Nav';
import Services from './components/Services';
import Work from './components/Work';

function App() {
  

  return (
    <>
      
      <div className="text-black p-4 rounded-none  bg-site bg-no-repeat bg-cover overflow-hidden h-[4000px]">
        <Header />
        <Banner />
        <Nav />
        <About />
        <Services />
        <Work />
        <Contact />
        <div classname=""></div>
      </div>
    </>
  )
}

export default App
