import React from 'react';
import {
  View,
  Text,
  Modal,
  Image,
} from 'react-native';
import styles from './styles';

const Loader = (props) => {
  const { visible, animationType } = props;
  return (
    <Modal visible={visible} animationType={animationType} transparent={true}>
      <View style={styles.wrapper}>
        <View style={styles.loaderWrapper}>
          <Image
            style={styles.loaderImage}
            source={require('assets/images/loading.gif')}
          />
        </View>
      </View>
    </Modal>
  )
}

export default Loader;
