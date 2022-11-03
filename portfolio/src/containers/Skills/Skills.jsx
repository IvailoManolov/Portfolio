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
      name : "Source Control",

      // Link to github of the project
      // Title of the project.
      icon : images.git
    },
    {
      // Link to deployed project
      name : "React",

      // Link to github of the project

      // Title of the project.
      icon : images.react
    },
    {
      // Link to deployed project
      name : "CSS/SCSS",

      // Link to github of the project

      // Title of the project.
      icon : images.sass
    },
    {
      // Link to deployed project
      name : "Node",

      // Link to github of the project

      // Title of the project.
      icon : images.node
    },
    {
      // Link to deployed project
      name : "API",

      // Link to github of the project

      // Title of the project.
      icon : images.api
    },
    {
      // Link to deployed project
      name : "Html",

      // Link to github of the project

      // Title of the project.
      icon : images.html
    },
    {
      // Link to deployed project
      name : "JS",

      // Link to github of the project
      // Title of the project.
      icon : images.javascript
    },
  ]

  const experience = [
    {
      name : "Software Engineer",
      company : "Milestone",
      description : "A full-stack software engineer."
    },
    {
      name : "Senior Software Engineer",
      company : "Google",
      description : "A full-stack software engineer."
    },
    {
      name : "Principal Software Engineer",
      company : "Meta",
      description : "A full-stack software engineer."
    },
    {
      name : "Senior Software Engineer",
      company : "Netflix",
      description : "A full-stack software engineer."
    },
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

      <motion.div
      className='app__skills-exp'
      >
        {experience.map((work) => (
          <>
          <motion.div
            whileInView={{opacity : [0,1]}}
            transition={{duration:0.5}}
            className="app__skills-exp-work"
            data-tip
            data-for = {work.name}
            key = {work.name}
          >

            <h4 className='bold-text'>{work.name}</h4>
            <p className='p-text'>{work.company}</p>
          </motion.div>
          <ReactToolTip
          id = {work.name}
          effect="solid"
          arrowColor='#fff'
          className='skills-tooltip'
          >
            {work.description}
          </ReactToolTip>
          </>
        ))}
      </motion.div>
    </div>
    </>
  )
}

export default AppWrap(Skills,'skills')