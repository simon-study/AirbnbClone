import React, { Component } from 'react';
import { View, Text, TouchableOpacity, Animated, Easing } from 'react-native';
import PropTypes from 'prop-types';
import Icon from 'react-native-vector-icons/FontAwesome';
import colors from 'colors';
import styles from './styles';

class Notification extends Component {
  constructor(props) {
    super(props);
    this.state = {
      positionValue: new Animated.Value(-60)
    }
  }

  animateNotification = (value) => {
    const { positionValue } = this.state;
    Animated.timing(
      positionValue, {
        toValue: value,
        duration: 300,
        velocity: 3,
        tension: 2,
        friction: 8,
        easing: Easing.easeOutBack,
      },
    ).start()
  }

  render() {
    const {
      type,
      firstLine,
      secondLine,
      showNotification,
      onPress,
    } = this.props;

    const { positionValue } = this.state;
    showNotification ? this.animateNotification(0) : this.animateNotification(-60);

    return (
      <Animated.View style={[{marginBottom: positionValue}, styles.wrapper]}>
        <View style={styles.errorMessageContainer}>
          <Text style={styles.errorText}>{type}</Text>
          <Text style={styles.errorMessage}>{firstLine}</Text>
        </View>
        <Text style={styles.errorMessage}>{secondLine}</Text>
        <TouchableOpacity
          style={styles.closeButton}
          onPress={onPress}
        >
          <Icon name="times" size={20} color={colors.lightGray}/>
        </TouchableOpacity>
      </Animated.View>
    );
  }
}

Notification.propTypes = {
  type: PropTypes.string,
  firstLine: PropTypes.string,
  secondLine: PropTypes.string,
}

export default Notification;
