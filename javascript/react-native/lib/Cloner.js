import React, { Component } from 'react';
import {
  Text,
  View,
  Alert,
} from 'react-native';

export default
class Cloner extends Component {
  constructor(){
    super();
  }

  render() {
    const mapArray = new Array(this.props.count).fill(1);
    const items = mapArray.map(function(item, idx){
      return (
        <Text key={idx}>Hey</Text>
      );
    });
    return (
      <View>
        {items}
      </View>
    );
  }
}
