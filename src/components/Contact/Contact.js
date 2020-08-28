import React from 'react';

import ContactMe from '../Mailer/Mailer'

import LILogo from './LI-In-Bug.png'
import GmailLogo from './gmail.png'
import './Contact.css'



const Contact = () => {
  return (
    <article className='flex flex-wrap justify-center center ma4 shadow-1 mw7'>
      <h2 className='w-100'>Ways to contact me</h2>
      <ContactMe />
      <div className='tl ma3 flex flex-column justify-center'>
        <a 
        className='button-blue'
        href='mailto:mkalinauskas1993@gmail.com'>
        <img src={GmailLogo} alt='Gmail logo' height='14px'/> mkalinauskas1993@gmail.com</a><br/>
        <a className='button-blue' 
        href="https://www.linkedin.com/in/matas-kalinauskas-a6b786b3/" 
        target="_blank" rel="noopener noreferrer"><img src={LILogo} alt='LinkedIn logo' height='14px'/> LinkedIn</a>
      </div>
    </article>
  )
}

export default Contact;