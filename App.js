/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';
import Logout from './src/screens/Logout';
import Login from './src/screens/Login';

export default class App extends Component {
  render() {
    return (
      <Login />
    );
  }
}
