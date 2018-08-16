import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  Dimensions,
  TouchableHighlight,
} from 'react-native';
import Icon from 'react-native-vector-icons/dist/FontAwesome';
import colors from 'colors';
import RoundedButton from 'components/RoundedButton';
import styles from './styles';

export default class Logout extends Component {
  onFacebookPress = () => {
    alert('Facebook button press')
  }

  onCreateAccountPress = () => {
    alert('Create account button press')
  }

  onMoreOptionsPress = () => {
    alert('More options button press')
  }

  render() {
    return (
      <View style={styles.wrapper}>
        <View style={styles.welcomeWrapper}>
          <Image style={styles.logo} source={require('assets/images/airbnb-logo.png')} />
          <Text style={styles.welcomeText}>Welcome to Airbnb</Text>
          <RoundedButton
            textColor={colors.green}
            background={colors.white}
            buttonText="Continue with Facebook"
            icon={<Icon name="facebook" size={20} style={styles.facebookButtonIcon}/>}
            onPress={this.onFacebookPress}
          />

          <RoundedButton
            textColor={colors.white}
            buttonText="Create account"
            onPress={this.onCreateAccountPress}
          />

          <TouchableHighlight onPress={this.onMoreOptionsPress} style={styles.moreOptionsButton}>
            <Text style={styles.moreOptionButtonText}>More options</Text>
          </TouchableHighlight>

          <View style={styles.termAndConditions}>
            <Text style={styles.termText}>I agree to Airbnb's</Text>
            <TouchableHighlight style={styles.buttonLink}>
              <Text style={styles.termText}>Terms of Service</Text>
            </TouchableHighlight>
          </View>
        </View>
      </View>
    )
  }
}
