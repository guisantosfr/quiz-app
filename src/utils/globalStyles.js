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
    marginTop: 75,
    marginBottom: 40
  },

  list: {
    flexGrow: 0,
    height: '70%',  
  },

  link: {
    color: theme.colors.lightBlue
}
});