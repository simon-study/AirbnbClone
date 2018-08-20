import { StyleSheet } from 'react-native';
import colors from 'colors';

export default StyleSheet.create({
  wrapper: {
    // flex: 1,
    backgroundColor: colors.white,
    height: 60,
    padding: 10,
  },

  errorMessageContainer: {
    flex: 1,
    flexDirection: 'row',
    marginBottom: 2,
  },

  errorText: {
    color: colors.darkOrange,
    marginRight: 5,
    fontSize: 14,
    marginBottom: 2,
  },

  errorMessage: {
    flexDirection: 'row',
    flex: 1,
    marginBottom: 2,
    fontSize: 14,
  },

  closeButton: {
    position: 'absolute',
    right: 10,
    top: 10,
    // zIndex: 999
  }
});
