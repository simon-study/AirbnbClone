import { StyleSheet } from 'react-native';
import colors from 'colors';

export default StyleSheet.create({
  wrapper: {
    display: 'flex',
  },

  labelWrapper: {
    flexDirection: 'row',
  },

  label: {
    fontWeight: '700',
    marginBottom: 10
  },

  input: {
    borderBottomWidth: 1,
    paddingVertical: 5,
  },

  showButton: {
    position: 'absolute',
    right: 0,
  },

  showButtonText: {
    color: colors.white,
    fontWeight: '700',
  },

  checkMarkWrapper: {
    position: 'absolute',
    right: 0,
    bottom: 12,
  }
});
