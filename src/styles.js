import React, { Component } from 'react';
import {
  StyleSheet
} from 'react-native';


const styles = StyleSheet.create({
  container: {
    flex: 1,
    
    backgroundColor: '#F5FCFF',
  },
  imageContainer: {
    flex: 9,
    alignItems: 'stretch',
  },
  loginButtonContainer: {
    flex: 0.5,
    backgroundColor: '#3E606F'
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  boton: {
    height:30,
    width: 300,
    backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
    marginBottom: 10,
    borderRadius: 8,
    borderWidth: 1

  },
  bottonText: {
    color: 'white'
  },
  titleLoginText : {
    fontSize: 30,
    bottom:0,
    position:'absolute',
    paddingBottom: 50,
    paddingLeft:30,
    paddingRight:10,
    color: 'white',
    textAlign: 'center',
    backgroundColor: 'rgba(0,0,0,0)'
  },
  inputButton: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      borderWidth: 0.5,
      borderColor: '#91AA9D',
  },
  inputRow: {
      flex: 1,
      flexDirection: 'row'
  },
  titleNavigator: {
    marginTop: 10,
    color: '#007AFF',
}
});

module.exports = styles;