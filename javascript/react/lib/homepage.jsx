'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import Banner from './banner';
import Cloner from './cloner'

class Clicker extends React.Component {
  constructor() {
    super();
    this.state = {counter : 0, data: []};
    this.click_handler = this.click_handler.bind(this);
  }

  componentDidMount(){
    console.log('Mounted');
  }


  click_handler(e) {
    this.setState({counter: this.state.counter + 1, data: this.state.data.concat([1])});
  }

  render() {
    let styles = {color: 'red'};
    return (
      <div>
        <br />
        <Banner />
        <Cloner data={this.state.data} />
        <br />
        <button style={styles} onClick={this.click_handler}>
	         Click me please, counter is: {this.state.counter}
         </button>
      </div>
    );
  }
};

ReactDOM.render(<Clicker />,
		document.getElementById('react-container'));
