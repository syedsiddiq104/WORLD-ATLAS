import React from 'react'
import { FaLongArrowAltRight } from "react-icons/fa";
import { NavLink } from 'react-router-dom';

const HeroSection = () => {
  return (
    <div className="hero-section main">
        <div className="container grid grid-two-cols">
        <div className="hero-content">
            <h1 className='heading-xl'>Explore the World, One Country At a Time</h1>
            <p className="paragraph">
            Discover the history, culture, and beauty of every nation. Sort,
            search, and filter through countries to find the details you need.
          </p>
          <NavLink to={'/about'}><button>Explore More<FaLongArrowAltRight /></button></NavLink>
        </div>
        <div className="hero-image">
                <img src="../../public/images/world.png" alt="world" className="banner-image" />
            </div>
        </div>
    </div>
  )
}

export default HeroSection