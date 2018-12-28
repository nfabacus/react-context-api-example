import React, { Component } from 'react';
import LanguageContext from '../contexts/LanguageContext';

class TextArea extends Component {
  // contextType can be used only when there is one context object.  If more than one, we need to use Consumer.
  static contextType = LanguageContext;
  render(){
    console.log(this.context);
    return (
      <div className="bg-white p-2">
        <h3>Text Area</h3>
        <p>In this component, we are using only one context, so we can use <strong>contextType</strong> in this class component, which makes this.context available in the class (this cannot be used on functional component). Then, just use this.context to access the value.</p>
        <h4>{this.context.language}</h4>
      </div>
    );
  }
}

export default TextArea;