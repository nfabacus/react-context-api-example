import React, { Component } from 'react';

const MyText = (props) => {
  return (
    <div>
      <h4 style={{color: props.color}}>This is my text.</h4>
      <p>This is an HOF example.  The color of the above title is passed on by an HOF. (See HOFexample folder.)</p>
    </div>
  )
};

const withColorHOF = (PassedInComponent) => {
  // HOF -- return class or function

  // return class extends Component {
  //   render() {
  //     const color="green";
  //     return <PassedInComponent color={color} />
  //   }
  // }
  return (props) => {
    const color = "red";  // do or set something here.
    return <PassedInComponent color={color} />
  }
};

export default withColorHOF(MyText);