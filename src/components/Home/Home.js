import React from 'react'
import DeskIllustration from './desk-illustration.svg';

import './Home.css';

const Home = () => {
  return (
    <article id="home" className='pa3 tl f4 tc'>
      <p className='mh3 mv0'>Welcome to my portfolio. Here you will find projects done by me</p>
      <p className='mh3 mv0'>If you want to contact me, you will find info at Contact section</p>
      <img src={DeskIllustration} alt="desk" className=''/>
    </article>
  );
}

export default Home;