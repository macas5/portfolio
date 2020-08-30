import React from 'react';

import './Header.css'

const Header = ({headerText}) => {
  return (
    <header className='flex flex-wrap justify-center pa2'>
      <h1 className='basis-100'>{headerText.myname}</h1>
      <h2 className='basis-100'>{headerText.portfolio}</h2>
    </header>
  );
}

export default Header;