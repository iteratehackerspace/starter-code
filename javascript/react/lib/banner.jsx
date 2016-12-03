'use strict'

import React from 'react';

export default

class Banner extends React.Component {
  constructor() {
    super();
    this.change_color = this.change_color.bind(this);
    this.state = {set_color: '#000000'}
  }

  change_color(e) {
    let color = '#';
    for(let i of [1,2,3]) {
      color += (Math.floor(Math.random()*256)).toString(16);
    }
    this.setState({set_color: color});
  }

  render() {
    let styles = {color: this.state.set_color, display: 'inline-block'}
    return(
      <h1 style = {styles} onClick = {this.change_color}>Hello World!!!</h1>
    );
  }

};
