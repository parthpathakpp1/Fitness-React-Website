import React from 'react'
import {plansData} from "../data/plansData"
import whiteTick from "../assets/whiteTick.png"
import "./plans.css"
const Plans = () => {
  return (
   <div className='plans-container'>
   <div className='blur plans-blur-1'></div>
   <div className='blur plans-blur-2'></div>
    <div className='programs-header'>
    <span className='stroke-text'>READ TO START</span>
    <span>YOUR JOURNEY</span>
    <span className='stroke-text'>NOW WITH US</span>
    </div>
    <div className='plans'>
        {plansData.map((plan,i)=>(
            <div className='plan' key={i}>
                {plan.icon}
                <span>{plan.name}</span>
                <span className='price'>$ {plan.price}</span>
                
                <div className='features'>
                 {plan.features.map((feature,i)=>(
                    <div className='feature'>
                     <img src={whiteTick}/>
                     <span key={i}>{feature}</span>

                    </div>
                 ))}
                </div>
                <div>
                    <span>SEE MORE BENEFITS</span>
                </div>
                <button className='btn'>Join Now</button>
            </div>
        ))}
    </div>
</div>
  )
}

export default Plans