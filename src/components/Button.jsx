import { Dimensions, StyleSheet, Text, TouchableOpacity } from "react-native";

import theme from '../theme';

export default function Button({ text, onPress }) {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text style={styles.buttonText}>{text}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: theme.colors.darkBlue,
    marginVertical: 30,
    height: 50,
    width: Dimensions.get('window').width * 0.6,
    borderRadius: 15,

    justifyContent: 'center',
    alignItems: 'center'
  },

  buttonText: {
    color: theme.colors.background,
    fontSize: 18
  },
})