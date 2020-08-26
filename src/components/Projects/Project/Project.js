import React from 'react';

import ghMark from './GH-Mark-Light.png';
import './Project.css';

class Project extends React.Component {
  constructor() {
    super();
    this.state = {
      name: "",
      site: "",
      repo: "",
      preview: "",
      outline: "",
      frameworks: [],
      ability: []
    }
  }
  setStates = (projectName) => {
    const data = require(`../${projectName}/${projectName}.json`);
    const preview = require(`../${projectName}/${projectName}.png`);

    const frameworks = data.frameworks.map((data, index) => {
      return <li key={index}>{data}</li>
    })

    const ability = data.ability.map((data, index) => {
      return <li key={index}>{data}</li>
    })

    this.setState({
      name: data.name,
      site: data.site,
      repo: data.repo,
      outline: data.outline,
      frameworks: frameworks,
      ability: ability,
      preview: preview
    })
}

  componentDidMount(){
    this.setStates(this.props.projectName);
  }

  render(){
    const { name, site, repo, outline, frameworks, ability, preview } = this.state;
    return (
      <article className='center shadow-1 ma3 flex flex-wrap pa3'>
        <h3 className='center w-100'>{name}</h3>
        <div className='flex flex-wrap w-100 w-60-l pa3 mr-auto'>
          {/* Project description */}
          <div className='w-100 w-50-l mr-auto'>
            {/* Basic outline */}
            <p>{outline}</p>
          </div>
          <div className='w-100 w-50-l'>
            {/* Specifics */}
            {frameworks.length ? 
              <div>
                <p>Frameworks used:</p>
                <ul className='tl'>
                  {frameworks}
                </ul>
              </div>
            :
              <div/>
            }
            
            {ability.length ? 
              <div>
                <p>This website can:</p>
                <ul className='tl'>
                  {ability}
                </ul>
              </div>
            :
              <div/>
            }
            
          </div>
        </div>
        <div className='w-100 w-40-l flex flex-wrap'>
          <img src={preview} alt='Preview' className='w-100 pr-img center'/>
  
          <div className='center ma3'>
          {site !== "https://mkalinauskas.com" ?
              <a className='button-visit ma2' 
              href={site}
              target="_blank" rel="noopener noreferrer">Visit site</a>
          :
              <p className='button-visit-disabled ma2' >Visit site</p>
          }
            <a className='button-repo ma2 di' 
            href={repo}
            target="_blank" rel="noopener noreferrer">
              <img src={ghMark} width='14px' alt='GitHub Logo'/> Repository</a>
          </div>  
        </div>
      </article>
    )
  }
}

export default Project;