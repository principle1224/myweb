import React from 'react'
import HeroImage from'../../assets/building.jpg'
import { Link } from "react-router-dom";

const Hero = () => {
  return (
<div className="container mx-auto px-4 py-0 max-w-7xl">
      <div className="relative rounded-2xl overflow-hidden shadow-2xl mb-24 -mx-100 ">
        <img src={HeroImage} className="w-full h-[650px] object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-slate-900"></div>
<div className="absolute bottom-4 inset-x-4 md:bottom-12 md:left-12 text-white max-w-full">

  <h3 className="text-xl md:text-4xl font-bold mb-2 md:mb-3">
    PM신기사는
  </h3>

  <p className="text-sm md:text-xl font-light mb-4 md:mb-6">
    흔들리지 않는 원칙이 문화와 시스템으로 되어 있는 회사입니다.
  </p>

  <Link
    to="/contact"
    className="px-6 py-3 md:px-8 md:py-4 bg-gray-400 text-white rounded-lg 
               hover:bg-gray-700 transition-colors duration-300 text-base 
               md:text-lg font-semibold shadow-lg hover:shadow-xl text-center"
  >
    문의하기
  </Link>

</div>

      </div>
    </div>
  )
}

export default Hero