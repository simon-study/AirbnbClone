import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  wrapper: {
    zIndex: 9,
    backgroundColor:'rgba(0,0,0,0.5)',
    position: 'absolute',
    width: '100%',
    height: '100%',
    top: 0,
    left: 0,
    alignItems: 'center',
    justifyContent: 'center',
  },

  loaderWrapper: {
    width: 90,
    height: 90,
    backgroundColor: 'transparent',
  },

  loaderImage: {
    width: 90,
    height: 90,
  },
});
