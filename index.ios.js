/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Navigator,
  TouchableHighlight
} from 'react-native';

import LoginView from './src/loginView'
import DashboardView from './src/dashboardView'

const Styles = require("./src/styles");


// Navigation bar configuration
var NavigationBarRouteMapper = {
  LeftButton: function (route, navigator, index) {
    if (route.name === 'Login' || route.name === 'List') {
      return null;
    }
    return (
      <TouchableHighlight
        underlayColor={'rgba(0,0,0,0)'}
        onPress={() => {
          if (index > 0) {
            navigator.pop();
          }
        }}
      >
        <Text style={{ marginTop: 10, marginLeft: 20, color: '#007AFF' }}>Back</Text>
      </TouchableHighlight>
    );
  },
  RightButton: function () {
    return null;
  },
  Title: function (route) {
    // Title hidden for Login view
    if (route.name === 'Login') {
      return null;
    }
    return (
      <Text style={Styles.titleNavigator}>
        {route.name}
      </Text>
    );
  },
};

export default class SuperHero extends Component {

  renderScene(route, navigator) {
      switch (route.name) {
        case 'Login':
          return (
            <LoginView navigator={navigator} route={route} />
          );
        case 'Dashboard':
          return (
            <DashboardView navigator={navigator} route={route} />
          );
        default:
          return null;
      }
  } 
  render() {
    return (
      <Navigator
        initialRoute={{
          name: 'Login',
          display: false,
        }}
        renderScene={this.renderScene}
        configureScene={(route) => {
          if (route.sceneConfig) {
            return route.sceneConfig;
          }
          return Navigator.SceneConfigs.FloatFromRight;
        }}
        navigationBar={
          <Navigator.NavigationBar
            routeMapper={NavigationBarRouteMapper}
          />}
/>
    );
  }
}



AppRegistry.registerComponent('SuperHero', () => SuperHero);
