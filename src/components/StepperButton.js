import { Dimensions, StyleSheet, Text, TouchableOpacity } from "react-native";

export default function StepperButton({ text, onPress }) {
  return (
      <TouchableOpacity style={styles.button} onPress={onPress}>
        <Text style={styles.buttonText}>{text}</Text>
      </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#699CF4',
    marginHorizontal: 24,
    marginVertical: 12,
    height: 50,
    width: Dimensions.get('window').width * 0.3,
    borderRadius: 15,

    justifyContent: 'center',
    alignItems: 'center'
  },

  buttonText: {
    color: '#ddd',
    fontSize: 18
  }
})