import React, { Component } from 'react';
import './App.css';
import InfoBox from '../components/InfoBox/InfoBox';
import Header from '../components/Header/Header';
import CategoryBar from '../components/CategoryBar/CategoryBar';


class App extends Component {
  render() {
    return (
      <div className="App">
        <Header /> 
        <InfoBox id='InfoBox'/>
        <CategoryBar />                           
      </div>
    );
  }
}

export default App;
