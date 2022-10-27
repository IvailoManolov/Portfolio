import React from 'react'
import "./Work.scss"

import { useState,useEffect } from 'react'
import {AiFillEye,AiFillGithub} from 'react-icons/ai'
import { motion } from 'framer-motion'
import { AppWrap } from '../../wrapper'
import {images} from '../../constants'

const Work = () => {

  const availableWork = [
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

  const [activeFilter, setActiveFilter] = useState('All')

  const [animateCard, setAnimateCard] = useState({y : 0, opacity : 1})  

  const [filterWork,setFilterWork] = useState(availableWork)

  const handleWorkFilter = (item) =>  {
    console.log(item)
    setActiveFilter(item)
    setAnimateCard([{y:100,opacity:0}])
    
    setTimeout(() => {
      setAnimateCard([{y:100,opacity:1}])
    },500)

    if(item === 'All')
    {
      setFilterWork(availableWork)
    }
    else 
    {
      setFilterWork(availableWork.filter((work) => work.tags.includes(item)))
    }
  }

  return (
    <>
    <h2 className='head-text'>My creative <span>Portfolio</span> Section 
    </h2>

    <div className="app__work-filter">
      {['UI/UX','Web App','Mobile App','React JS','All'].map((item,index) => (
        <div
        key = {index}
        onClick = {()=> handleWorkFilter(item)}
        className = {`app__work-filter-item app__flex p-text ${activeFilter === item ? 'item-active' : ''}`}
        >
          {item}
        </div>
      ))}
    </div>

    <motion.div
    animate = {animateCard}
    transition={{duration : 0.5,delayChildren : 0.5}}
    className="app__work-portfolio"
    >
      {filterWork.map((work,index) => (
        <div className='app__work-item app__flex' key = {index}>
          <div className="app__work-img app__flex"> 
            <img src={work.imgUrl} alt="" />
            <motion.div
            whileHover={{opacity : [0,1]}}
            transition={{duration : 0.25, ease : 'easeInOut',staggerChildren : 0.5}}
            className='app__work-hover app__flex'
            >

              <a href={work.projectLink} target ="_blank" rel ="noreferrer"> 
                <motion.div
                whileInView={{scale : [0,1]}}
                whileHover={{scale : [1,0.9]}}
                transition={{duration : 0.25}}
                className='app__flex'
                >
                  <AiFillEye />
                </motion.div>
              </a>

              <a href={work.codeLink} target ="_blank" rel ="noreferrer"> 
                <motion.div
                whileInView={{scale : [0,1]}}
                whileHover={{scale : [1,0.9]}}
                transition={{duration : 0.25}}
                className='app__flex'
                >
                  <AiFillGithub />
                </motion.div>
              </a>
            </motion.div>
          </div>
          <div className='app__work-content app__flex'>
            <h4 className='bold-text'>
              {work.Title}
            </h4>
            <p className='p-text' style={{marginTop : 10}}>
              {work.Description}
            </p>
            <div className="app__work-tag app__flex">
              <p className='p-text'>{work.tags[0]}</p>
            </div>
          </div>
        </div>
      ))}
    </motion.div>
    </>
  )
}

export default AppWrap(Work,'work')