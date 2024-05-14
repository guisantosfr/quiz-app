import { Dimensions, StyleSheet, TextInput } from "react-native";

export default function Input({ onChangeText, value, placeholder, secureTextEntry}) {
  return (
    <TextInput onChangeText={onChangeText} value={value} style={styles.input} placeholder={placeholder} secureTextEntry={secureTextEntry}/>
  )
}

const styles = StyleSheet.create({
  input: {
    height: 50,
    marginVertical: 17.5,
    borderWidth: 1,
    padding: 12,
    width: Dimensions.get('window').width * 0.6,
    borderRadius: 10
  }
})