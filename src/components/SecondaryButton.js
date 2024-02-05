import { Dimensions, StyleSheet, Text, TouchableOpacity } from "react-native";

export default function SecondaryButton({ text }) {
  return (
    <TouchableOpacity style={styles.button}>
      <Text>{text}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    backgroundColor: '#eee',
    padding: 10,
    borderColor: '#000',
    borderWidth: 1,
    width: Dimensions.get('window').width * 0.6,
    marginVertical: 10
  }
})