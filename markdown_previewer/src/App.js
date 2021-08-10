import React, { Component } from 'react';
import './App.css';
import Header from './AppHeader';
import Main from './AppMain';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Main />
      </div>
    );
  }
}

export default App;
