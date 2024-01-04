import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function TeacherScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button}
        onPress={() => navigation.navigate('New class')}>
        <Text style={styles.buttonText}>Cadastrar turma</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button}
        onPress={() => navigation.navigate('New questions')}>
        <Text style={styles.buttonText}>Cadastrar questões</Text>
      </TouchableOpacity>
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

  button: {
    backgroundColor: '#00d',
    marginVertical: 30,
    height: 50,
    width: 250,
    borderRadius: 15
  },

  buttonText: {
    color: '#ddd',
    fontSize: 20,
    marginTop: 7,
    display: 'flex',
    alignSelf: 'center'
  }

})