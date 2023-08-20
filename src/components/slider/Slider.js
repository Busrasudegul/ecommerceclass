//// home sayfasındaki slider i yapacağımız yer
import React, { useState } from 'react'
import "./Slider.scss"
import {AiOutlineArrowLeft, AiOutlineArrowRight} from "react-icons/ai"

const Slider = () => {

  const [currentSlide, setCurrentSlide] = useState(0)
  return (
    <div className="slider">
      <AiOutlineArrowLeft className="arrow prev"/>
      <AiOutlineArrowRight className="arrow next"/>
    </div>
  )
}

export default Slider