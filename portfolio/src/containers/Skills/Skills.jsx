import React from 'react'
import "./Skills.scss"

import { useState,useEffect } from 'react'
import { motion } from 'framer-motion'
import { AppWrap } from '../../wrapper'
import {images} from '../../constants'
import ReactToolTip from 'react-tooltip'

const Skills = () => {

  
  const availableSkills = [
    {
      // Link to deployed project
      projectLink : "github.com",

      // Link to github of the project
      codeLink : "github.com",

      // Title of the project.
      Title : "This is a javaScript project.",

      // Describe the project
      Description : "Short Description of the project.",

      imgUrl : images.about03,

      tags : ['UI/UX']
    },
    {
      // Link to deployed project
      projectLink : "github.com",

      // Link to github of the project
      codeLink : "github.com",

      // Title of the project.
      Title : "This is a C# project.",

      // Describe the project
      Description : "Short Description of the project.",

      imgUrl : images.about03,

      tags : ['Backend']
    },
    {
      // Link to deployed project
      projectLink : "github.com",

      // Link to github of the project
      codeLink : "github.com",

      // Title of the project.
      Title : "This is a NodeJS project.",

      // Describe the project
      Description : "Short Description of the project.",

      imgUrl : images.about03,

      tags : ['MERN']
    }
  ]

  return (
    <>
    <h2 className="head-text">Skills & Experience</h2>
    <div className="app__skills-container">
      <motion.div
      className='app__skills-list'
      >

        {availableSkills.map( (skill) => 
        (
            <motion.div
            whileInView={{opacity : [0,1]}}
            transition={{duration:0.5}}
            className="app__skills-item app__flex"
            key = {skill.name}
            >

              <div className='app__flex' style={{backgroundColor : skill.bgColor}}>
                <img  src = {skill.icon} alt = {skill.name}/>
              </div>

              <p className="p-text"> {skill.name} </p>
              
            </motion.div>
        ))}

      </motion.div>
    </div>
    </>
  )
}

export default Skills