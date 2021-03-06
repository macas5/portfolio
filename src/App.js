import React from 'react';
import { ThemeProvider } from 'styled-components';

import { GlobalStyle } from './components/GlobalStyle/GlobalStyle';
import { lightStyle, darkStyle } from './components/Style/Style';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Home from './components/Home/Home';
import About from './components/About/About';
import Projects from './components/Projects/Projects';
import Contact from './components/Contact/Contact';
import SettingsBar from './components/SettingsBar/SettingsBar';
import ScrollTopArrow from './components/ScrollTopArrow/ScrollTopArrow';
import './App.css';
import { Helmet } from 'react-helmet';

class App extends React.Component {
  constructor() {
    super();
    this.state={
      lang: 'en',
      style: '',
      themeColor: '#EAEAF7',
      isAuto: false,
      text: {
        "settingsBar": {},
        "header": {},
        "home": {},
        "about": {},
        "projects": {
          "project": {}
        },
        "contact": {
          "mailForm": {}
        },
        "footer": {}
      }
    }
  }

  onChangeLanguageUK = () => {
    this.setTextLanguage('en');
  }

  onChangeLanguageLT = () => {
    this.setTextLanguage('lt');
  }
  
  setTextLanguage(lang) {
    this.setState({text: require(`./components/Language/Language-${lang}.json`)});
    this.setState({lang: lang});
    localStorage.setItem('language', lang);
  }

  onChangeStyleLight = () => {
    this.setStyle('light');
  }

  onChangeStyleDark = () => {
    this.setStyle('dark');
  }

  onChageStyleAuto = () => {
    this.setAutoStyle();
  }

  setAutoStyle = () => {
    const date = new Date();
    if ((date.getHours() > 7) && (date.getHours() < 18)){
      this.setStyle('light', true);
    } else {
      this.setStyle('dark', true);
    }
  }
  
  setStyle(style, isAuto=false) {
    const themeColor = style === 'dark' ? '#0F0F0F' : '#EAEAF7';
    if (!isAuto) {
      this.setState({style: style, isAuto: false, themeColor: themeColor});
      localStorage.setItem('style', style);
    } else {
      this.setState({style: style, isAuto: true, themeColor: themeColor});
      localStorage.setItem('style', 'auto');
    }

  }

  componentDidMount() {
    const style = localStorage.getItem('style');
    const language = localStorage.getItem('language');

    if (language ==='lt') {
      this.setTextLanguage(language);
    } else {
      this.setTextLanguage('en');
    }

    if ((style === 'light' || style ==='dark')) {
      this.setStyle(style);
    } else {
      this.setAutoStyle();
    }
  }
  
  
  render () {
    const {text, style, isAuto, themeColor} = this.state; 
    return (
      <ThemeProvider theme={ style === 'light' ? lightStyle : darkStyle}>
        <GlobalStyle />
        <Helmet>
          <meta name="theme-color" content={themeColor} />
        </Helmet>
        <div className="App w-70-ns center mw12 shadow overflow-hidden">
          <ScrollTopArrow />
          <SettingsBar settingsText={text.settingsBar} style={style} auto={isAuto} onChangeLanguageUK={this.onChangeLanguageUK} 
          onChangeLanguageLT={this.onChangeLanguageLT} onChangeStyleLight={this.onChangeStyleLight}
          onChangeStyleDark={this.onChangeStyleDark} onChangeStyleAuto={this.onChageStyleAuto}/>
          <Header headerText={text.header}/>
          <Home homeText={text.home}/>
          <About aboutText={text.about}/>
          <Projects projectsText={text.projects} lang={this.state.lang}/>
          <Contact contactText={text.contact}/>
          <Footer footerText={text.footer}/>
        </div>
      </ThemeProvider>
    );
  }
}

export default App;
