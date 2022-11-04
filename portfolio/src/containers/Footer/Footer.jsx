import React from 'react'
import {images} from '../../constants'
import { AppWrap } from '../../wrapper'
import { useState } from 'react'
import "./Footer.scss"

const Footer = () => {

  const [formData,setFormData] = useState({name : '', email : '', message : ''})
  const [isFormSubmitted, setisFormSubmitted] = useState(false)
  const [loading, setloading] = useState(false)

  const {name,email,message} = formData


  const handleChangeInput = (e) => {
    const {name,value} = e.target

    setFormData({...formData,[name] : value})
  }

  const handleSubmit = () => {
    setloading(true)

    const contact = {
      _type : 'contact',
      name : name,
      email : email,
      message : message
    }
    setloading(false)
    setisFormSubmitted(true)
  }
  return (
    <>
      <h2 className='head-text'>
        Take a coffee & chat with me.
      </h2>

      <div className="app__footer-cards">
        <div className="app__footer-card">
          <img src={images.email} alt="email"/>
          <a href="mailto:ivomoreras@abv.bg" className='p-text'>hello@</a>
        </div>
        <div className="app__footer-card">
          <img src={images.mobile} alt="mobile" />
          <a href='tel:+1 39239 323' className='p-text'>+1 3 89 78 75 782</a>
        </div>
      </div>
      {!isFormSubmitted ? 
      <div className="app__footer-form app__flex">
        <div className="app__flex">
          <input className='p-text' type="text" name="name" placeholder ="Your name" value = {name} onChange = {handleChangeInput}/>
        </div>
        
        <div className="app__flex">
          <input className='p-text' type="email" name="email" placeholder ="Your email" value = {email} onChange = {handleChangeInput}/>
        </div>

        <div>
          <textarea
          className='p-text'
          placeholder='Your Message'
          value={message}
          name="message"
          onChange={handleChangeInput}
          />
        </div>

        <button type="button" className='p-text' onClick={handleSubmit}>
          {loading ? 'Sending' : 'Send Message'}
        </button>
      </div>
      : 
      <div>
        <h3 className='head-text'>Thank you for contacting</h3>
      </div>
      }
    </>
  )
}

export default AppWrap(Footer,"contact")