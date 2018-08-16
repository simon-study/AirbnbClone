import React from 'react';
import {
  View,
  Text,
  TouchableHighlight,
} from 'react-native';
import PropTypes from 'prop-types';
import styles from './styles';

const RoundedButton = (props) => {
  const {
    buttonText,
    background,
    textColor,
    icon,
    onPress,
  } = props;

  const backgroundColor = background || 'transparent';
  const color = textColor || 'black';

  return (
    <TouchableHighlight style={[{backgroundColor}, styles.wrapper]} onPress={onPress}>
      <View style={styles.wrapperButton}>
        {icon}
        <Text style={[{color}, styles.buttonText]}>{buttonText}</Text>
      </View>
    </TouchableHighlight>
  )
}

RoundedButton.propTypes = {
  buttonText: PropTypes.string.isRequired,
  onPress: PropTypes.func.isRequired,
  textColor: PropTypes.string,
  background: PropTypes.string,
  icon: PropTypes.object,
}

export default RoundedButton;
