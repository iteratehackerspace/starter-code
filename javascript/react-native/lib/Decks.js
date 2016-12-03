import React, { Component } from 'react';
import {
  Text,
  View,
  Alert,
  Image,
} from 'react-native';

export default
class Decks extends Component {
  constructor(){
    super();
  }

  render() {
    return (
      <View>
        <Image
          source={{uri: 'http://www.hearthstone.sitew.fr/fs/Root/small/cjf7z-blizzcon_cardback.png'}}
          style={{width: 101, height: 150}}
        />
      </View>
    );
  }
}
