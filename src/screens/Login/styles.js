import { StyleSheet } from 'react-native';
import colors from 'colors';

export default StyleSheet.create({
  wrapper: {
    display: 'flex',
    flex: 1,
  },

  scrollViewWrapper: {
    flex: 1,
    marginTop: 30,
  },

  scrollView: {
    flex: 1,
    paddingTop: 20,
    paddingHorizontal: 20,
  },

  loginHeader: {
    fontSize: 34,
    color: colors.white,
    fontWeight: '300',
    marginBottom: 40,
  },

  nextButton: {
    position: 'absolute',
    right: 20,
    bottom: 20,
  },
});
