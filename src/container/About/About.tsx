import React, { Component,useEffect } from 'react'
import {motion, useAnimation} from 'framer-motion'
import './About.scss'
import {useInView} from 'react-intersection-observer'

type Props = {}



export default function About ({}: Props) {

  const {ref, inView} = useInView({
    threshold:0.2 //20% OF THE CONTAINER SHOULD BE IN VIEW TO EXECUTE THE ANIMATION
  });
  const animationRight = useAnimation();
  const animationLeft = useAnimation();

  useEffect(() => {
    if(inView){
      animationRight.start({
        x:0,
        transition:{
          type: "spring", stiffness: 400, damping: 20, duration:0.8
        }
      })
      animationLeft.start({
        x:0,
        transition:{
          type: "spring", stiffness: 400, damping: 20, duration:0.8
        }
      })
    }
    if(!inView){
      animationRight.start({x:'-100vw'})
      animationLeft.start({x:'100vw'})
    }
  }, [inView]);

    return (
      <div ref={ref} className='app__about' >
        <motion.div className="app__about-info-1" initial={{x:'100vw'}} animate={animationLeft}>
        <p>Ambitious front-end developer looking for
        an opportunity to work with the lastest technologies
        on challenging projects.</p> 
        </motion.div>
        <motion.div className="app__about-info-2" animate={animationRight}>
        <p>I consider myself a confident
        and competitive person, who is been 
        working  successfully on team 
        projects for 4 years.</p>
        </motion.div>
        <motion.div className="app__about-info-3" initial={{x:'100vw'}} animate={animationLeft}>
        <p>Originally from Spain, 
        I studied one year in Canada.</p>
        </motion.div>
        <motion.div className="app__about-info-4" animate={animationRight}>
        <p>Really into sports, 
        especially basketball and padel.</p>
        </motion.div>
        <motion.div className="app__about-info-5" animate={animationLeft}>
        <p>Graduate in Interactive Technologies (UPV).</p>
        </motion.div>
        <img src="" alt="" />

      </div>
    )
}