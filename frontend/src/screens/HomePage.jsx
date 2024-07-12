import React from 'react';
import Carousel from '../components/homecomponents/Carousel';
import Destinations from '../components/homecomponents/Destinations';
import Navbar from '../components/homecomponents/Navbar';
import Hero from '../components/homecomponents/Hero';
import Search from '../components/homecomponents/Search';
import Selects from '../components/homecomponents/Selects';
import Footer from '../components/homecomponents/Footer';
import NewHero from '../components/homecomponents/NewHero';


const HomePage = () => {
  return (
    <div className='bg-gradient-to-r from-teal-700 to-teal-400 h-screen flex flex-col justify-between'>
    <Navbar />
    <div className='h-20 w-screen '></div>
    <div>
    <NewHero />
    {/* <Destinations />
    <Search />
    <Selects />
    <Carousel /> */}
    <Footer />
    </div>
    
  </div>
  )
}

export default HomePage