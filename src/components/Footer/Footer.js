import React from 'react';

import './Footer.css';

const Footer = () => {
  return (
    <footer className='bg-darkgray grey'>
      <ul className='flex justify-center pa0 ma0'>
        <li className='list mh2'><a href="https://github.com/macas5?tab=repositories" 
        target="_blank" rel="noopener" rel="noreferrer">GitHub</a></li>
        <li className='list mh2'>LinkedIn</li>
      </ul>
      <p className='ma0'>mkalinauskas1993@gmail.com</p>
      <p className='ma0'>This website was created with React</p>
    </footer>
  );
}

export default Footer;