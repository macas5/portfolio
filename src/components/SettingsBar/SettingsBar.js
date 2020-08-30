import React from 'react';

import './SettingsBar.css';
import flagUK from './Flag_of_the_United_Kingdom.svg';
import flagLT from './Flag_of_Lithuania.svg'

const SettingsBar = ({onChangeLanguageUK, onChangeLanguageLT}) => {
  return (
    <div id='SettingsBar' className='h2 tr flex flex-wrap justify-end'>
      <img src={flagUK} className='pointer' alt='Flag of the United Kingdom' onClick={onChangeLanguageUK}/> 
      <img src={flagLT} className='pointer' alt='Flag of Lithuania' onClick={onChangeLanguageLT}/>
    </div>
  )
}

export default SettingsBar;