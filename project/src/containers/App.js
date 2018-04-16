import React, { Component } from 'react';
import './App.css';
import InfoBox from '../components/InfoBox/InfoBox';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1 className='tc f1 ma0 pv4'>
          Star Wars Directory
        </h1>  
        <InfoBox id='InfoBox'/>                            
      </div>
    );
  }
}

export default App;
