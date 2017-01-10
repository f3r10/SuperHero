'use strict'

import React, { Component } from 'react';
import {
    Text,
    AppRegistry,
    View,
    TouchableHighlight,
    Alert,
    StyleSheet
} from 'react-native';

class loginView extends Component{
  render(){
    return(
      <View>
        <TouchableHighlight onPress={(this._onLogin.bind(this))} style={styles.boton}>
          <Text style={styles.bottonText}>
            Login
          </Text>
        </TouchableHighlight>
      </View>
      )
  }

  _onLogin(){
    Alert.alert(
      'Acceso',
      'Te jas logueado en el sistema',
      [
        {
          text: 'Aceptar',
          onPress: (this._accept.bind(this))
        },
        {
          text: 'Cancelar',
          onPress: (this._cancel.bind(this))
        }
      ]

    )
  }

  _accept(){

  }

  _cancel(){
    
  }
}

const styles = StyleSheet.create({
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
  }
})

module.exports = loginView;