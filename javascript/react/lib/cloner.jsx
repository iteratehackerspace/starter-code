'use strict'

import React from 'react';
import Banner from './banner'

export default

class Cloner extends React.Component {
  constructor(p) {
    super(p);
  }

  render() {
    console.log(this.props);
    let cloneNodes = this.props.data.map(function(clone) {
      return (
        <Banner />
      );
    });
    return (
      <div className = "Cloner">
        {cloneNodes};
      </div>
    );
  }
};
