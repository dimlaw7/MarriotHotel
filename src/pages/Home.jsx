import React from 'react'
import Hero from '../components/Hero'
import About from '../components/About';
import { Services } from '../components/Services';
import Rooms from '../components/Rooms';
import Pictures from '../components/Pictures';
import Reviews from '../components/Reviews';
import Footer from '../components/Footer';

const Home = () => {
  return (
    <>
      <Hero />
      <About />
      <Services />
      <Rooms />
      <Pictures />
      <Reviews />
      <Footer />
    </>
  )
}

export default Home