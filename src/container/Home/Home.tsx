import React, { Component,useEffect, useState } from 'react'
import './Home.scss'
import {images} from '../../constants'
import {motion} from "framer-motion"
import Basketball from '../../components/Basketball/Basketball'
import Avatar from '../../components/Avatar/Avatar'

type Props = {}

type State = {}

export default function Home ({}: Props) {


  

    return (
      <div className='app__home'>
        <div className='app__home-title'>
          <motion.img src={images.header_landing} alt="name"
          whileHover={{scale: 1.1}}
          transition={{ type: "spring", stiffness: 400, damping: 10 }}
          
          drag
          dragElastic={1}
          dragTransition={{ bounceStiffness: 500, bounceDamping: 20 }}
          dragConstraints={{
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
          }}/>
          
        </div>
        
        
       

      </div>
      
    );
}