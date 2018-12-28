import React from 'react';
import {Button} from "reactstrap";
import LanguageContext from '../contexts/LanguageContext';
import ColorContext from '../contexts/ColorContext';

// To consume multiple Contexts, we need to use Consumers and nest them.
// This will look horrible.  So, I made a HOF for the second Context.
// This means actually we do not need to use Consumer shown in the example below.
// But, below just shows how to use Consumer.
// However, if there are several Contexts, we need to nest Consumers in the component or in HOF.

const ButtonArea = (props) => (
  <div className="bg-success p-2">
    <LanguageContext.Consumer>
      {(values) => {
        console.log(values);
        console.log(props);
        return (
          <div>
            <h3 style={{color: props.color}}>Button Area Component</h3>
            <p>The color of the above title is passed on by ColorContext.Consumer.</p>
            <p>onLanguageChange function is passed on to the buttons below by LanguageContext.Consumer.</p>
            <Button color="primary" onClick={()=>values.onLanguageChange("English")}>English</Button>
            {' '}
            <Button color="warning" onClick={()=>values.onLanguageChange("Japanese")}>Japanese</Button>
          </div>
        )
      }}
    </LanguageContext.Consumer>
  </div>
);

const withColorComponent = (PassedInComponent) =>
  (props) => (
    <ColorContext.Consumer>
      {(color) => (<PassedInComponent color={color} {...props} />)}
    </ColorContext.Consumer>
  );

export default withColorComponent(ButtonArea);