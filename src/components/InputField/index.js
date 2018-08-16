import React, { Component } from 'react';
import {
  View,
  Input,
  Text,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import PropTypes from 'prop-types';
import colors from 'colors';
import styles from './styles';

export default class InputField extends Component {
  constructor(props) {
    super(props);
    this.state = {
      secureInput: props.inputType === 'text' || props.inputType === 'email' ? false : true
    }
  }

  toggleShowPassword = () => {
    this.setState({
      secureInput: !this.state.secureInput
    });
  }

  render() {
    const {
      labelText,
      labelColor,
      labelSize,
      textColor,
      borderBottomColor,
      inputType,
      customStyle,
      typeOfKeyboard,
    } = this.props;

    const { secureInput } = this.state;
    const fontSize = labelSize || 14;
    const color = labelColor || colors.white;
    const inputColor = textColor || colors.white;
    const borderBottom = borderBottomColor || 'transparent';
    const keyboardType = typeOfKeyboard || 'default';

    return (
      <View style={[customStyle, styles.wrapper]}>
        <Text style={[{color, fontSize}, styles.label]}>{labelText}</Text>
        {
          inputType === 'password' ?
          <TouchableOpacity onPress={this.toggleShowPassword} style={styles.showButton}>
            <Text style={styles.showButtonText}>{secureInput ? 'Show' : 'Hide'}</Text>
          </TouchableOpacity> : null
        }
        <TextInput
          autoCorrect={false}
          style={[{color: inputColor, borderBottomColor: borderBottom}, styles.input]}
          underlineColorAndroid="transparent"
          secureTextEntry={secureInput}
          keyboardType={keyboardType}
        />
      </View>
    )
  }
}

InputField.propTypes = {
  labelText: PropTypes.string,
  labelColor: PropTypes.string,
}