import React from 'react'
import DeskIllustration from './desk-illustration.svg';

const Home = ({homeText}) => {
  return (
    <article id="home" className='pa3 tl f4 tc'>
      <p className='mh3 mv0'>{homeText.welcome}</p>
      <img src={DeskIllustration} alt="desk" className='mw6' data-aos='fade-down'/>
    </article>
  );
}

export default Home;