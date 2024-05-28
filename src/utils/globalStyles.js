import { StyleSheet } from 'react-native';
import theme from '../theme';

export default StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },

  text: {
    color: theme.colors.black
  },

  title: {
    marginVertical: 40,
    fontWeight: 'bold',
    fontSize: theme.fontSizes.large
  },

  list: {
    flexGrow: 0,
    height: '70%',  
  },

  link: {
    color: theme.colors.lightBlue,
    textDecorationLine: 'underline'
}
});