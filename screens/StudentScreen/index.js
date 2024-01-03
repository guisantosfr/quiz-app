import { StyleSheet, Text, View } from 'react-native';

export default function StudentScreen() {
  return (
    <View>
      <Text style={styles.buttonText}>Sou aluno</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  buttonText: {
    color: '#000',
    fontSize: 20,
    marginTop: 7,
    display: 'flex',
    alignSelf: 'center',
  }

})