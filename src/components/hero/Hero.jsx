import React from 'react'
import "./hero.css"
import Header from "../header/Header"
import hero_image from "../../assets/hero_image.png"
import hero_image_back from "../../assets/hero_image_back.png"
import Heart from "../../assets/heart.png"
import Calories from "../../assets/calories.png"
import {motion} from "framer-motion"
const Hero = () => {

  const transition={type:'spring',duration:'3'}
  return (
    <div className='hero'>
    <div className='blur hero-blur'></div>
    <div className='left-side'>
        <Header />
        <div className='the-best-ad'>
          <motion.div
          initial={{left:'238px'}}
          whileInView={{left:'9px'}}
          transition={transition}
          ></motion.div>
          <span>the best fitness club in the town</span>
        </div>
        <div className='hero-text'>
         <div>
            <span className='stroke-text'>Shape</span>
            <span>Your</span>
         </div>
         <div><span>
            Ideal Body
         </span></div>
         <div>
         <span>
         In here we will help you to shape and build your ideal body and live up your life to fullest.
         </span>
         </div>
         </div>
         <div className='figures'>
         <div>
            <span>+140</span>
            <span>expert coachs</span>
            </div>
         <div>
         <span>+978</span>
         <span>memebers joined</span>
         </div>
         <div>
         <span>+50</span>
         <span>fitness program</span>
         </div>
        </div>
        <div className='hero-buttons'>
          <button className='btn'>Get Started</button>
          <button className='btn'>Learn More</button>
          </div>
        </div>
    <div className='right-side'>
        <button className='btn'>Join Now</button>

        <motion.div 
        transition={transition}
        initial={{right:'-1rem'}}
        whileInView={{right:"4rem"}}
        className='heart-rate'>
        <img src={Heart} alt="Image" />
        <span>Heart Rate</span>
        <span>116 BPM</span>
        </motion.div>
        <img src={hero_image} alt='hero_image' className='hero-image' />
        <motion.img 
        initial={{right:'11rem'}}
        whileInView={{right:'20rem'}}
        transition={transition}
        src={hero_image_back} alt='hero_image' className='hero-image-back' />
        <motion.div 
         transition={transition}
         initial={{right:'37rem'}}
         whileInView={{right:'28rem'}}
        className='calories'>
         <img src={Calories} className='Image'/>
         <div>
         <span>Calories Burned</span>
         <span>220 kcal</span>
         </div>
         
         </motion.div>
    </div>
    </div>
  )
}

export default Hero