import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import ScanScreen from './screens/ScanScreen';

export default class App extends React.Component {
  render () {
    return (
      <View style = { styles.container }>
        <Image source = {require("./assets/Camera.jpg")} 
        style = {{width: 200, height: 200}}/> 
        <Text style = {{
          textAlign:'center', 
          fontSize: 30,
          marginTop : 25}}> WILY </Text>
        <TouchableOpacity
        onPress = { this.getCameraPermissions }
        style = { styles.scanButton }
        title = "Bar Code Scanner">
          <Text style={styles.buttonText}>
            Scan QR Code
          </Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  }, 
  buttonText: { 
    fontSize: 20,
    textAlign : 'center',
    marginTop : 10
  },
  scanButton:{
    backgroundColor : 'brown',
    width : 150,
    borderWidth : 1.5,
    marginTop : 25
  }
});
