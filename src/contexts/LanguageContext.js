import React, { Component } from 'react';
import Selector from "../App";

const Context = React.createContext('English');

export class LanguageContextProvider extends Component {
  state = { language: 'english' };
  onLanguageChange = (language) => this.setState({language});

  render(){
    return (
      <Context.Provider value={{ ...this.state, onLanguageChange: this.onLanguageChange }}>
        <div className="bg-info p-2">
          <p>Inside the LanguageContextProvider.<br/>
            State is managed here. state: {this.state.language}</p>
          {
            this.props.children
          }
        </div>
      </Context.Provider>
    )
  }
}

export default Context;