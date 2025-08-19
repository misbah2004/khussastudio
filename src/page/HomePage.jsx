import React from 'react'
import HeroSection from '../components/herosection/HeroSection'
import ProductSection from '../components/productsection/ProductSection'
import AboutSection from '../components/about/AboutSection'

const HomePage = () => {
  return (
    <div>
      <HeroSection/>
      <ProductSection/>
      <AboutSection/>
    </div>
  )
}

export default HomePage
