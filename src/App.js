import React from 'react';

import './App.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Home from './components/Home/Home';
import About from './components/About/About';
import Projects from './components/Projects/Projects';
import Contact from './components/Contact/Contact';
import SettingsBar from './components/SettingsBar/SettingsBar';

class App extends React.Component {
  constructor() {
    super();
    this.state={
      lang: 'en',
      text: {
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
    this.setState();
    this.setTextLanguage('en');
  }

  onChangeLanguageLT = () => {
    this.setTextLanguage('lt');
  }
  
  setTextLanguage(lang) {
    if (lang === 'lt') {
      this.setState({text: require('./components/Language/Language-lt.json')})
      this.setState({lang: 'lt'});
    } else {
      this.setState({text: require('./components/Language/Language-en.json')});
      this.setState({lang: 'en'});
    }
  }

  componentDidMount() {
    this.setTextLanguage();
  }
  

  render () {
   
    const {text} = this.state; 
    return (
      <div className="App w-70-ns center shadow-2 mw12">
        <SettingsBar onChangeLanguageUK={this.onChangeLanguageUK} 
        onChangeLanguageLT={this.onChangeLanguageLT}/>
        <Header headerText={text.header}/>
        <Home homeText={text.home}/>
        <About aboutText={text.about}/>
        <Projects projectsText={text.projects} lang={this.state.lang}/>
        <Contact contactText={text.contact}/>
        <Footer footerText={text.footer}/>
      </div>
    );
  }
}

export default App;
