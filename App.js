import React from 'react';
import { StyleSheet, Text, View,Image,pic } from 'react-native';

import judul from './Component/judul'

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
      <Image source={pic} style={{width: 200, height: 110}}></Image>
        <Text>Welcome To Biodata</Text>
        <Text>Jerry Kristanto</Text>
        <Text>XI RPL 2</Text>
        <Text>22</Text>
        <Image style={{height: 300, width: 300}}
        source={require('./Foto/Jerry.jpg')}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'green',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
