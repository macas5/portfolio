import React from 'react';
import Project from './Project/Project';

import './Projects.css'
import ghMark from './Project/GH-Mark-Light.png';

const Projects = () => {
  return (
    <div id="projects" className='mv3 flex flex-wrap mw12 justify-center'>
      <h2 className='center w-100'>My projects</h2>
      <Project projectName="SmartBrain"/>
      <Project projectName="TestProject"/>
      <Project projectName="ThisSite"/>
        <h3>If you would like to see more of my works visit my</h3>
        <a className='button-repo ma2 di' 
        href='https://github.com/macas5?tab=repositories'
        target="_blank" rel="noopener noreferrer">
        <img src={ghMark} width='14px' alt='GitHub Logo'/> GitHub Account</a>
    </div>
  );
}

export default Projects;