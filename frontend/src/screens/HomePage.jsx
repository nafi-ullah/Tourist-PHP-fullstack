import React from 'react';
import Carousel from '../components/homecomponents/Carousel';
import Destinations from '../components/homecomponents/Destinations';
import Navbar from '../components/homecomponents/Navbar';
import Hero from '../components/homecomponents/Hero';
import Search from '../components/homecomponents/Search';
import Selects from '../components/homecomponents/Selects';
import Footer from '../components/homecomponents/Footer';


const HomePage = () => {
  return (
    <div>
    <Navbar />
    <Hero />
    <Destinations />
    <Search />
    <Selects />
    <Carousel />
    <Footer />
  </div>
  )
}

export default HomePage