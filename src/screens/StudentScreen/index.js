import { StyleSheet, Text, View } from 'react-native';

export default function StudentScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.buttonText}>Sou aluno</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#eee',
    alignItems: 'center',
    justifyContent: 'center',
  },

  buttonText: {
    color: '#000',
    fontSize: 20,
    marginTop: 7,
    display: 'flex',
    alignSelf: 'center',
  }

})