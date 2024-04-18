import { Dimensions, StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EEE',
    alignItems: 'center',
    justifyContent: 'center'
  },

  text: {
    color: '#111'
  },

  buttonText: {
    color: '#DDD',
    fontSize: 18
  },

  title: {
    marginTop: 75,
    marginBottom: 40
  },

  list: {
    flexGrow: 0,
    height: '70%',  
  },

  card: {
    alignItems: 'center',
    backgroundColor: '#979797',
    padding: 20,
    borderRadius: 10,
    width: Dimensions.get('window').width * 0.6,
    marginVertical: 10,

    flexBasis: '40%',
    marginBottom: 20,
    marginHorizontal: 5
  }

});