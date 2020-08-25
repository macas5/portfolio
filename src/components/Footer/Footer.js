import React from 'react';

import './Footer.css';

const Footer = () => {
  return (
    <footer id='footer' className='bg-darkgray pa2'>
      <ul className='flex justify-center pa0 ma0'>
        <li className='list mh2'><a className='a-gray nostyle' 
        href="https://github.com/macas5?tab=repositories" 
        target="_blank" rel="noopener noreferrer">GitHub</a></li>
        <li className='list mh2'><a className='a-gray nostyle' 
        href="https://linkedin.com/" 
        target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
      </ul>
      <p className='ma0'>This website was created by myself using React</p>
      <p className='ma0'>mkalinauskas1993@gmail.com</p>
    </footer>
  );
}

export default Footer;