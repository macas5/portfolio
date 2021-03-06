import React from 'react';
import Project from './Project/Project';

import ghMark from './Project/GH-Mark-Light.png';
import './Projects.css';

const Projects = ({projectsText, lang}) => {
  return (
    <div>
      <div id="projects" className='mv3 flex flex-wrap justify-center'>
        <h2 className='center w-100'>{projectsText.title}</h2>
        <Project projectName="SmartBrain" projectText={projectsText.project} lang={lang}/>
        <Project projectName="ThisSite" projectText={projectsText.project} lang={lang}/>
      </div>
      <h3>{projectsText.moreWorks}</h3>
      <a className='button ma2 fl-basis-100 grow' 
      href='https://github.com/macas5?tab=repositories'
      target="_blank" rel="noopener noreferrer">
      <img src={ghMark} width='14px' alt='GitHub Logo'/> {projectsText.moreWorksButton}</a>
    </div>
  );
}

export default Projects;