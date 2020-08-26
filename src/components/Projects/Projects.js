import React from 'react';
import Project from './Project/Project';

const Projects = () => {
  return (
    <div id="projects" className='mv3'>
      <h2 className='center'>My projects</h2>
      <Project projectName="TestProject"/>
      <Project projectName="ThisSite"/>
    </div>
  );
}

export default Projects;