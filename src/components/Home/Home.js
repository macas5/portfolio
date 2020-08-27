import React from 'react'
import DeskIllustration from './desk-illustration.svg';

const Home = () => {
  return (
    <article id="home" className='pa3 tl f4 tc'>
      <p className='mh3 mv0'>Welcome to my portfolio. Here you will find projects done by me</p>
      <img src={DeskIllustration} alt="desk" className='mw6'/>
    </article>
  );
}

export default Home;