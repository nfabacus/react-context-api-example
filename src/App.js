import React, { Component } from 'react';
import MyText from './HOFexample';
import Selector from './Selector';
import Display from './Display';
import LanguageContext, { LanguageContextProvider } from './contexts/LanguageContext';

class App extends Component {


  render() {
    return (
      <div className="container bg-primary p-2">
        <h1>App (Parent) Component</h1>
        <LanguageContextProvider>
          <div className="bg-success p-2">
            <h3>Inner Div</h3>
            <Selector />
            <Display />
          </div>
        </LanguageContextProvider>
        <br />
        <MyText />
      </div>
    );
  }
}

export default App;
