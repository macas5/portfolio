import React from 'react';

import './App.css';
import Header from './components/Header/Header';
import Navbara from './components/Navbar/Navbar';
import Body from './components/Body/Body';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <Navbara />
      <Body />
      <Footer />
    </div>
  );
}

export default App;
