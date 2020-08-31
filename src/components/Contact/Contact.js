import React from 'react';

import Mailer from '../Mailer/Mailer'

import LILogo from './LI-In-Bug.png'
import GmailLogo from './gmail.png'
import './Contact.css'



const Contact = ({contactText}) => {
  return (
    <article id='contact' className='flex flex-wrap justify-center center ma4 shadow mw7'>
      <h2 className='w-100'>{contactText.title}</h2>
      <Mailer mailerText={contactText.mailForm}/>
      <div className='tl ma3 flex flex-column justify-center'>
        <a data-aos='fade-left' data-aos-delay='100' data-aos-anchor='#contact-form' 
        className='button-blue grow'
        href='mailto:mkalinauskas1993@gmail.com'>
        <img src={GmailLogo} alt='Gmail logo' height='14px'/> mkalinauskas1993@gmail.com</a><br/>
        <a data-aos='fade-left' data-aos-delay='200' data-aos-anchor='#contact-form' 
        className='button-blue grow' 
        href="https://www.linkedin.com/in/matas-kalinauskas-a6b786b3/" 
        target="_blank" rel="noopener noreferrer">
        <img src={LILogo} alt='LinkedIn logo' height='14px'/> LinkedIn</a>
      </div>
    </article>
  )
}

export default Contact;