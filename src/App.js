import React from 'react';

import './App.css';
import Header from './components/Header/Header';
import MyNavbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import Home from './components/Home/Home';
import About from './components/About/About';
import Projects from './components/Projects/Projects';

function App() {
  return (
    <div className="App w-70-ns center shadow-2">
      <Header />
      <MyNavbar />
      <Home />
      <About />
      <Projects />
      <Footer />
    </div>
  );
}

export default App;
