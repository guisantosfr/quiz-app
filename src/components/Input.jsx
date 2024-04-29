import { Dimensions, StyleSheet, TextInput } from "react-native";

export default function Input({ onChangeText, value, placeholder }) {
  return (
    <TextInput onChangeText={onChangeText} value={value} style={styles.input} placeholder={placeholder} />
  )
}

const styles = StyleSheet.create({
  input: {
    backgroundColor: '#EEE',
    height: 50,
    margin: 20,
    borderWidth: 1,
    padding: 12,
    width: Dimensions.get('window').width * 0.6,
    borderRadius: 10
  }
})