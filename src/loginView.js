'use strict'

import React, { Component } from 'react';
import {
    Text,
    AppRegistry,
    View,
    Image,
    TouchableHighlight,
    Alert,
    StyleSheet
} from 'react-native';

const Styles = require("./styles");

class loginView extends Component{
  render(){
    return(
      <View style={Styles.container}>
        <Image style={Styles.imageContainer} source={{uri: 'https://images.unsplash.com/photo-1470082352337-75bde28b7692?dpr=2&auto=format&fit=crop&w=1500&h=2250&q=80&cs=tinysrgb&crop='}}>
          <Text style={Styles.titleLoginText}>GET IN THE SHAPE OF YOUR LIFE</Text>  
        </Image>
        <View style={Styles.loginButtonContainer}>
          <View style={Styles.inputRow}>
            <TouchableHighlight onPress={(this._onLogin.bind(this))} style={Styles.inputButton}>
              <Text style={Styles.bottonText}>
                Starts now
              </Text>
            </TouchableHighlight>
            <TouchableHighlight onPress={(this._onLogin.bind(this))} style={Styles.inputButton}>
              <Text style={Styles.bottonText}>
                Login
              </Text>
            </TouchableHighlight>
          </View>
        </View>
        
      </View>
      )
  }

  _onLogin(){
    Alert.alert(
      'Acceso',
      'Pantalla de login',
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
    this.props.navigator.push({
      title: 'Dashboard',
      name: 'Dashboard',
      passProps: {}
    });
  }

  _cancel(){
    
  }
}

module.exports = loginView;