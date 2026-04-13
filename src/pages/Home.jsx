import React from 'react'
import HeroSection from '../components/UI/HeroSection'
import About from './About'


const Home = () => {
  return (
    <>

    <HeroSection/>
    <About imageLimit={9}/>
    </>
  )
}

export default Home