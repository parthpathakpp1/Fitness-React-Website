import React from 'react'
import "./reasons.css"
import image1 from "../../assets/image1.png"
import image2 from "../../assets/image2.png"
import image3 from "../../assets/image3.png"
import image4 from "../../assets/image4.png"
import nike from "../../assets/nike.png"
import adidas from "../../assets/adidas.png"
import tick from "../../assets/tick.png"
import nb from "../../assets/nb.png"
const Reasons = () => {
  return (
    <div className='Reasons' id='reasons'>
    <div className='left-r'>
     <img src={image1} alt="" />
     <img src={image2} alt="" />
     <img src={image3} alt="" />
     <img src={image4} alt="" />
     </div>
     <div className='right-r'>
      <span>some reasons</span>
      <div className='reasons-text'>
        <span className='stroke-text'>why</span>
        <span>choose us? </span>
      </div>
      <div className='details-r'>
      <div><img src={tick} /><span>OVER 140+ EXPERT COACHS</span></div>
      <div><img src={tick}/><span>TRAIN SMARTER AND FASTER THAN</span></div>
      <div><img src={tick} /><span>FREE PROGRAM FOR NEW MEMBER</span></div>
      <div><img src={tick} /><span>RELAIBLE PARTNERS</span></div>
      </div>
      <span style={{
        color:"var(--gray)",
        fontWeight:"normal",

      }}>OUR PARTNERS</span>
      <div className='partners'>
        <img src={nike} alt="" />
        <img src={adidas} alt="" />
        <img src={nb} alt="" />
        
      </div>
     </div>
     </div>
  )
}

export default Reasons