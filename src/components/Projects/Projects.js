import React from 'react';
import Project from './Project/Project';

import './Projects.css'
import ghMark from './Project/GH-Mark-Light.png';

const Projects = ({projectsText, lang}) => {
  return (
    <div>
      <div id="projects" className='mv3 flex flex-wrap mw12 justify-center'>
        <h2 className='center w-100'>{projectsText.title}</h2>
        <Project projectName="SmartBrain" projectText={projectsText.project} lang={lang}/>
        <Project projectName="ThisSite" projectText={projectsText.project} lang={lang}/>
      </div>
      <h3>{projectsText.moreWorks}</h3>
      <a className='button-repo ma2 fl-basis-100 grow' 
      href='https://github.com/macas5?tab=repositories'
      target="_blank" rel="noopener noreferrer">
      <img src={ghMark} width='14px' alt='GitHub Logo'/> {projectsText.moreWorksButton}</a>
    </div>
  );
}

export default Projects;