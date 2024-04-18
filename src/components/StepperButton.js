import { Dimensions, StyleSheet, Text, TouchableOpacity } from "react-native";
import globalStyles from '../utils/globalStyles';

export default function StepperButton({ text, onPress, secondary }) {
  return (
      secondary ?
        <TouchableOpacity style={[styles.button, styles.secondary]} onPress={onPress}>
          <Text style={globalStyles.buttonText}>{text}</Text>
        </TouchableOpacity>
      :
        <TouchableOpacity style={[styles.button, styles.primary]} onPress={onPress}>
          <Text style={globalStyles.buttonText}>{text}</Text>
        </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  button: {
    marginHorizontal: 24,
    marginVertical: 12,
    height: 50,
    width: Dimensions.get('window').width * 0.3,
    borderRadius: 15,

    justifyContent: 'center',
    alignItems: 'center'
  },
  
  primary:{
    backgroundColor: '#699CF4'
  },

  secondary: {
    backgroundColor: '#AAA',
    borderColor: '#DDD',
    borderWidth: 2
  }
})