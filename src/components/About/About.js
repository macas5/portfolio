import React from 'react'

import './About.css'

const About = () => {
  return (
    <div id='about' className='flex flex-wrap'>
      <article className='w100 w32-l center shadow-1 ma3 tl'>
        <h2 className='tc'>Who am I?</h2>
        <p className='ma3'>I am Lithuanian developer who currently lives in UK.</p>
        <p className='ma3'>I am excited to build things which has potential to reach people across the world
        and I believe the time to make such things is best there ever was.</p>
      </article>
      <article className='w100 w32-l center shadow-1 ma3 tl flex flex-wrap'>
        <h2 className='tc basis-100'>What can I do?</h2>
        <p className='ma3 basis-100'>My knowledge includes these languages and frameworks:</p>
        <div className='flex flex-wrap'>
          <ul className='mr5'>
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>
            <li>PostgreSQL</li>
            <li>Java</li>
            <li>C++</li>
          </ul>
          <ul>
            <li>React</li>
            <li>NodeJS</li>
            <li>Express</li>
          </ul>
        </div>
      </article>
    </div>
  );
}

export default About;