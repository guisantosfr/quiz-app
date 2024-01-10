import { Dimensions, StyleSheet, TextInput } from "react-native";

export default function Input({ onChangeText, value }) {
  return (
    <TextInput onChangeText={onChangeText} value={value} style={styles.input} />
  )
}

const styles = StyleSheet.create({
  input: {
    height: 50,
    margin: 20,
    borderWidth: 1,
    padding: 12,
    width: Dimensions.get('window').width / 2,
    borderRadius: 10
  }
})