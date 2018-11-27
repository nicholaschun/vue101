import React, { Component } from 'react';
import logo from './logo.svg';
import './css/App.css';
import TopSlider from './components/TopSlider';
import IconContainer from './components/IconContainer';
import MainContainer from './components/MainContainer';
import Footer from './components/Footer';

class App extends Component {
  render() {
    return (
      <div className="fullContainer">
        <TopSlider />
        <IconContainer name="heyu" />
        <MainContainer />
        <Footer />
      </div>
    );
  }
}

export default App;
