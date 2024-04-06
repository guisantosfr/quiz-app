import { Dimensions, StyleSheet, Text, TouchableOpacity } from "react-native";
import globalStyles from '../utils/globalStyles';

export default function Button({ text, onPress }) {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text style={globalStyles.buttonText}>{text}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#699CF4',
    marginVertical: 30,
    height: 50,
    width: Dimensions.get('window').width * 0.6,
    borderRadius: 15,

    justifyContent: 'center',
    alignItems: 'center'
  }
})