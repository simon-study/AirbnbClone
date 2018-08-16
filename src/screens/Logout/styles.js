import { StyleSheet } from 'react-native';
import colors from 'colors';

export default StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: colors.green,
  },

  welcomeWrapper: {
    flex: 1,
    padding: 20,
    // marginTop: 30,
  },

  logo: {
    width: 50,
    height: 50,
    marginTop: 30,
    marginBottom: 40,
  },

  facebookButtonIcon: {
    color: colors.green,
    position: 'relative',
    left: 20,
  },

  welcomeText: {
    fontSize: 30,
    fontWeight: '300',
    color: colors.white,
    marginBottom: 40,
  },

  moreOptionButtonText: {
    color: colors.white,
    marginTop: 15,
  },

  termAndConditions: {
    flexDirection: 'row',
    marginTop: 20,
  },

  termText: {
    color: colors.white,
  },

  buttonLink: {
    borderBottomColor: colors.white,
    borderBottomWidth: 1
  },
});