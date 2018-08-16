import React, { Component } from 'react';
import {
  View,
  Text,
  KeyboardAvoidingView,
  ScrollView,
} from 'react-native';
import Icon from 'react-native-vector-icons/dist/FontAwesome';
import InputField from 'components/InputField';
import NextArrowButton from 'components/NextArrowButton';
import Notification from 'components/Notification';
import colors from 'colors';
import styles from './styles';

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      formValid: false
    }
  }

  onNextArrowPress = () => {
    this.setState({
      formValid: true,
    })
  }

  onCloseButtonPress = () => {
    this.setState({
      formValid: false,
    });
  }

  render() {
    const { formValid } = this.state;
    const color = formValid ? colors.darkOrange : colors.green;

    return (
      <KeyboardAvoidingView style={[{backgroundColor: color}, styles.wrapper]}>
        <View style={styles.scrollViewWrapper}>
          <ScrollView style={styles.scrollView}>
            <Text style={styles.loginHeader}>Log In</Text>
            <InputField
              labelText="EMAIL ADDRESS"
              borderBottomColor={colors.white}
              inputType="email"
              customStyle={{marginBottom: 30}}
              typeOfKeyboard="email-address"
            />
            <InputField
              labelText="PASSWORD"
              borderBottomColor={colors.white}
              inputType="password"
              customStyle={{marginBottom: 30}}
            />
          </ScrollView>
          <View style={styles.nextButton}>
            <NextArrowButton
              icon={
                <Icon
                  name="angle-right"
                  size={32}
                  style={[{color: color}]}
                />
              }
              onPress={this.onNextArrowPress}
            />
          </View>
          <View>
            <Notification
              type="Error"
              firstLine="Those credentials don't look right"
              secondLine="Please try again"
              showNotification={formValid}
              onPress={this.onCloseButtonPress}
            />
          </View>
        </View>
      </KeyboardAvoidingView>
    )
  }
}