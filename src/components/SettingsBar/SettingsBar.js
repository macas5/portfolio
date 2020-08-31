import React from 'react';
import './SettingsBar.css';
import flagUK from './Flag_of_the_United_Kingdom.svg';
import flagLT from './Flag_of_Lithuania.svg'

const SettingsBar = ({settingsText, onChangeLanguageUK, onChangeLanguageLT, onChangeStyleLight, onChangeStyleDark, onChangeStyleAuto}) => {
  const active = 'auto';
  return (
    <div id='SettingsBar' className='tr flex flex-wrap items-center shadow'>
      <div className='flex flex-wrap mr-auto'>
        <p onClick={onChangeStyleAuto}>Auto</p>
        <p onClick={onChangeStyleLight}>{settingsText.light}</p>
        <p onClick={onChangeStyleDark}>{settingsText.dark}</p>
      </div>
      <div className='ml-auto h2'>
        <img src={flagUK} className='pointer' alt='Flag of the United Kingdom' onClick={onChangeLanguageUK}/> 
        <img src={flagLT} className='pointer' alt='Flag of Lithuania' onClick={onChangeLanguageLT}/>
      </div>
    </div>
  )
}

export default SettingsBar;