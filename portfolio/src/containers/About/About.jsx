import React from 'react'
import {motion} from 'framer-motion'
import { useState, useEffect } from 'react'
import {images} from '../../constants'
import "./About.scss"

const About = () => {
  const abouts = [
    {title : 'Web Development', description : "I am a good developer", img : images.about01},
    {title : 'Web Design', description : "I am a good developer", img : images.about02},
    {title : 'Software Engineer', description : "I am a good developer", img : images.about03},
    {title : 'UI/UX ', description : "I am a good developer", img : images.about04},
    {title : 'Backend', description : "I am a good developer", img : images.about01}
  ]
  return (
    <>
    <h2 className='head-text'> I Know That <span>Good Development</span> means <span>Good Business</span> 
    </h2>

    <div className="app__profiles">
      {abouts.map((about,index) => (
        <motion.div
        whileInView={{opacity:0.5}}
        whileHover={{scale : 1.1, opacity : 1}}
        transition = {{duration : 0.5, type : 'tween'}}
        className = "app__profile-item"
        key = {about.title+index}
        >
          <img src={about.img} alt = {about.title} />

          <h2 className="bold-text" style={{marginTop : 20}}>
            {about.title}
          </h2>

          <p className="p-text" style={{marginTop : 10}}>
            {about.description}
          </p>
        </motion.div>
      ))}
    </div>
    </>
  )
}

export default About