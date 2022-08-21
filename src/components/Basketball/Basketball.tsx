import React, { useState } from 'react'
import {images} from '../../constants'
import {motion} from "framer-motion"
import './Basketball.scss'

type Props = {}

export default function Basketball({}: Props) {

    const [isAnimating, setIsAnimating] = useState(false);
    const min = 100;
    const max = 700;
    const randomNumber = Math.floor(Math.random() * (800 - min + 1)) + min;
    console.log("numero random: "+randomNumber)
    
    

  return (
    
        <div className='app__home-basketball'>
          <motion.img src={images.basketball} alt="basketball" 
          
          animate={{
            x: isAnimating ? randomNumber: min,
            y: isAnimating ? randomNumber: max,
            rotate: isAnimating ? 1920 : 0
          }}   
          transition={{
            type:"spring",
            stiffness:40,
            damping:20,
           
          }}
          onClick={() => setIsAnimating(!isAnimating)}
          />
        </div>
  )
}

