import React from 'react'

import './About.css'

const About = () => {
  return (
    <div id='about' className='flex flex-wrap center max-width-70'>
      <article className='w-100 w32-l center shadow-1 ma3 tl'>
        <h2 className='tc basis-100'>Who am I?</h2>
        <p className='ma3'>I am a developer who is excited to build things which has potential to reach people across the world and I believe the time to make such things is best there ever was.</p>
      </article>
      <article className='w100 w32-l center shadow-1 ma3 tl flex flex-wrap'>
        <h2 className='tc basis-100'>What can I do?</h2>
        <p className='ma3 basis-100'>My knowledge includes these languages and frameworks:</p>
        <div className='flex flex-wrap'>
          <ul className='mr5'>
            <li data-aos='fade-left' id='list-top-row' 
            data-aos-delay='50'>HTML</li>
            <li data-aos='fade-left' data-aos-anchor='#list-top-row' 
            data-aos-delay='100'>CSS</li>
            <li data-aos='fade-left' data-aos-anchor='#list-top-row' 
            data-aos-delay='150'>JavaScript</li>
            <li data-aos='fade-left' data-aos-anchor='#list-top-row' 
            data-aos-delay='200'>PostgreSQL</li>
            <li data-aos='fade-left' data-aos-anchor='#list-top-row' 
            data-aos-delay='250'>Java</li>
            <li data-aos='fade-left' data-aos-anchor='#list-top-row' 
            data-aos-delay='300'>C++</li>
          </ul>
          <ul>
            <li data-aos='fade-left' data-aos-anchor='#list-top-row' 
            data-aos-delay='350'>Git</li>
            <li data-aos='fade-left' data-aos-anchor='#list-top-row' 
            data-aos-delay='400'>NPM</li>
            <li data-aos='fade-left' data-aos-anchor='#list-top-row' 
            data-aos-delay='450'>React</li>
            <li data-aos='fade-left' data-aos-anchor='#list-top-row' 
            data-aos-delay='500'>NodeJS</li>
            <li data-aos='fade-left' data-aos-anchor='#list-top-row' 
            data-aos-delay='550'>Express</li>
          </ul>
        </div>
      </article>
    </div>
  );
}

export default About;