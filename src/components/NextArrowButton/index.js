import React from 'react';
import {
  View,
  TouchableHighlight,
} from 'react-native';
import styles from './styles';

const NextArrowButton = (props) => {
  const {
    icon,
    onPress,
    disabled,
  } = props;

  const opacityStyle = disabled ? { backgroundColor: 'rgba(255,255,255,0.2)' } : { backgroundColor: 'rgba(255,255,255,0.6)' };

  return (
    <TouchableHighlight style={[opacityStyle, styles.wrapper]} onPress={onPress}>
      {icon}
    </TouchableHighlight>
  )
}

export default NextArrowButton;
