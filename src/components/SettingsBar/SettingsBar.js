import React from 'react';

import './SettingsBar.css';
import flagUK from './Flag_of_the_United_Kingdom.svg';
import flagLT from './Flag_of_Lithuania.svg'

const SettingsBar = ({settingsText, style, auto, onChangeLanguageUK, onChangeLanguageLT, 
onChangeStyleLight, onChangeStyleDark, onChangeStyleAuto}) => {
  const isAuto = (auto) ? 'active' : '';
  const isLight = ((!auto) && (style === 'light')) ? 'active' : '';
  const isDark = ((!auto) && (style === 'dark')) ? 'active' : '';
  return (
    <div id='SettingsBar' className='tr flex flex-row-reverse flex-wrap items-center shadow'>
      <div className='ml-auto height-2'>
        <img src={flagUK} className='pointer' alt='Flag of the United Kingdom' 
        onClick={onChangeLanguageUK}/> 
        <img src={flagLT} className='pointer' alt='Flag of Lithuania' 
        onClick={onChangeLanguageLT}/>
      </div>
      <div className='flex flex-wrap mr-auto'>
        <p className={isAuto} onClick={onChangeStyleAuto}>Auto</p>
        <p className={isLight} onClick={onChangeStyleLight}>{settingsText.light}</p>
        <p className={isDark} onClick={onChangeStyleDark}>{settingsText.dark}</p>
      </div>
    </div>
  )
}

export default SettingsBar;