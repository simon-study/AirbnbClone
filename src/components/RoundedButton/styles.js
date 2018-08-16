import { StyleSheet } from 'react-native';
import colors from 'colors';

export default StyleSheet.create({
  wrapper: {
    padding: 15,
    borderWidth: 1,
    borderColor: colors.white,
    borderRadius: 40,
    marginBottom: 15,
    alignItems: 'center',
  },

  wrapperButton: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },

  buttonText: {
    fontSize: 16,
    width: '100%',
    textAlign: 'center',
  }
});
