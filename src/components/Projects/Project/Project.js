import React from 'react';

import ghMark from './GH-Mark-Light.png';
import './Project.css';

class Project extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      lang: "",
      name: "",
      site: "",
      repo: "",
      preview: "",
      outline: "",
      frameworks: [],
      ability: []
    }
  }
  setStates = (projectName, lang) => {
    const data = require(`../${projectName}/${projectName}-${lang}.json`);
    const preview = require(`../${projectName}/${projectName}.png`);
    
    const frameworks = data.frameworks.map((data, index) => {
      return <li key={index}>{data}</li>
    })
    
    const ability = data.ability.map((data, index) => {
      return <li key={index}>{data}</li>
    })
    
    this.setState({
      lang: lang,
      name: data.name,
      site: data.site,
      repo: data.repo,
      outline: data.outline,
      frameworks: frameworks,
      ability: ability,
      preview: preview
    })
  }

  componentDidUpdate(){
    if (this.props.lang !== this.state.lang){
      this.setStates(this.props.projectName, this.props.lang);
    }
  }
  
  render(){
    const { name, site, repo, outline, frameworks, ability, preview } = this.state;
    const { projectText } = this.props;
    return (
      <article className='shadow-1 ma3 flex flex-wrap pa3 mw8' data-aos='zoom-out'>
        <h3 className='center w-100'>{name}</h3>
        <div className='flex flex-wrap w-100 w-60-l pa3 mr-auto'>
          {/* Project description */}
          <div className='w-100 w-50-l mr-auto'>
            <p>{outline}</p>
          </div>
          <div className='w-100 w-50-l'>
            {/* Specifics */}
            {frameworks.length ? 
              <div>
                <p>{projectText.frameworks}:</p>
                <ul className='tl'>
                  {frameworks}
                </ul>
              </div>
            :
              <div/>
            }
            
            {ability.length ? 
              <div>
                <p>{projectText.features}:</p>
                <ul className='tl'>
                  {ability}
                </ul>
              </div>
            :
              <div/>
            }
            
          </div>
        </div>
        <div className='w-100 w-40-l'>
          <img src={preview} alt='Preview' className='w-100 pr-img center'/>
  
          <div className='center ma3 flex flex-wrap justify-center'>
          {site !== "https://mkalinauskas.com" ?
              <a className='button-visit ma2 grow' 
              href={site}
              target="_blank" rel="noopener noreferrer">{projectText.visit}</a>
          :
              <p className='button-visit-disabled ma2' >{projectText.visit}</p>
          }
            <a className='button-repo ma2 grow' 
            href={repo}
            target="_blank" rel="noopener noreferrer">
              <img src={ghMark} width='14px' alt='GitHub Logo'/> {projectText.repo}</a>
          </div>  
        </div>
      </article>
    )
  }
}

export default Project;