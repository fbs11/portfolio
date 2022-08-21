import React, { Component, useState } from 'react'
import {images} from '../../constants'
import './Navbar.scss'
import {motion} from "framer-motion"
import {HiOutlineMenu, HiX} from 'react-icons/hi'

type Props = {}

type State = {}

export default function Navbar ({}: Props) {
  const [toggle, setToggle] = useState(false)


    return (
      <nav className='app__navbar'>
        <div className='app__navbar-logo' >
          <motion.img src={images.logo_black} alt="logo" animate={{ y: [-100,25,-15,0] }}
          transition={{ type: "spring",  stiffness: 400, damping: 10 }} />
        </div>
    
          <motion.ul className='app__navbar-links' 
          animate={{ y: [-100,25,-15,0] }}
          transition={{ type: "spring",  stiffness: 400, damping: 10 }} >

              {['home', 'about me', 'projects', 'skills'].map ((item) => (
                <motion.li whileHover={{scale: 1.1}}
                transition={{ type: "spring", stiffness: 400, damping: 10 }} className='app__flex p-text' key= {`link-${item}`}>
                  
                  <a href={`#${item}`}>{item}</a>
                </motion.li>
              ))}
          </motion.ul>
        
        <motion.div className='app__navbar-contact-link'>
          <motion.ul animate={{ y: [-100,25,-15,0] }} transition={{ type: "spring",  stiffness: 400, damping: 10 }}>
            <motion.li  whileHover={{scale: 1.1}}
          transition={{ type: "spring", stiffness: 400, damping: 10 }}>
            <a href="#">Contact</a>
            </motion.li>
          </motion.ul>
        </motion.div>

        <motion.div className="app__navbar-menu" animate={{ y: [-100,25,-15,0] }}
          transition={{ type: "spring",  stiffness: 400, damping: 10 }} >
          <HiOutlineMenu onClick={() => setToggle(true)} />
          {
            toggle && (
              <motion.div
              animate={{ x: [-100,0,-20,0] }}
              transition={{ type: "spring", duration: 0.5, stiffness: 100, damping: 10 }}
              
              >
              <HiX onClick={() => setToggle(false)} />
              <ul>
              {['home', 'about me', 'projects', 'skills', 'contact'].map ((item) => (
                <motion.li whileHover={{scale: 1.1}}
                transition={{ type: "spring", stiffness: 400, damping: 10 }} className='app__flex p-text' key= {`link-${item}`}>
                  <a href={`#${item}`}>{item}</a>
                </motion.li>
              ))}
              </ul>
              </motion.div>
            )
        
          }
        </motion.div>

      </nav>
    )
  }
