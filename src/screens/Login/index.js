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
import Loader from 'components/Loader';
import CustomIcon from 'components/CustomIcon';
import colors from 'colors';
import styles from './styles';

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      formValid: true,
      emailAddress: '',
      password: '',
      validEmail: false,
      validPassword: false,
      loadingVisible: false,
    }
  }

  onNextArrowPress = () => {
    const { emailAddress } = this.state;
    this.setState({ loadingVisible: true });

    setTimeout(() => {
      this.setState({
        formValid: emailAddress === 'airbnb@gmail.com' ? true : false,
        loadingVisible: false,
      });
    }, 2000);
  }

  onCloseButtonPress = () => {
    this.setState({ formValid: true });
  }

  onEmailChange = (email) => {
    const checkEmailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    this.setState({
      emailAddress: email,
    });

    if (!this.state.validEmail) {
      if (checkEmailRegex.test(email)) {
        this.setState({ validEmail: true });
      }
    } else if (!checkEmailRegex.test(email)) {
      this.setState({ validEmail: false });
    }
  }

  onPasswordChange = (password) => {
    if (!this.state.validPassword) {
      if (password.length > 4) {
        this.setState({ validPassword: true });
      }
    } else if (password.length <= 4) {
      this.setState({ validPassword: false });
    }
  }

  render() {
    const {
      formValid,
      validEmail,
      validPassword,
      loadingVisible,
    } = this.state;

    const color = formValid ? colors.green : colors.darkOrange;
    const isDisabled = (validEmail && validPassword) ? true : false;

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
              onChangeText={this.onEmailChange}
            />
            <InputField
              labelText="PASSWORD"
              borderBottomColor={colors.white}
              inputType="password"
              customStyle={{marginBottom: 30}}
              onChangeText={this.onPasswordChange}
            />
          </ScrollView>
          <View style={styles.nextButton}>
            <NextArrowButton
              icon={
                <CustomIcon name="icon-next" size={32} color={color} />
              }
              onPress={this.onNextArrowPress}
              disabled={isDisabled}
            />
          </View>
        </View>

        <Loader
          visible={loadingVisible}
          animationType="fade"
        />

        <View style={styles.notificationWrapper}>
          <Notification
            type="Error"
            firstLine="Those credentials don't look right"
            secondLine="Please try again"
            showNotification={!formValid}
            onPress={this.onCloseButtonPress}
          />
        </View>
      </KeyboardAvoidingView>
    )
  }
}