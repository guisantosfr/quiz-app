import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button}
        onPress={() => navigation.navigate('Teacher')}>
        <Text style={styles.buttonText}>Sou professor</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button}
        onPress={() => navigation.navigate('Student')}>
        <Text style={styles.buttonText}>Sou aluno</Text>
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
    width: 200,
    borderRadius: 15
  },

  buttonText: {
    color: '#ddd',
    fontSize: 20,
    marginTop: 7,
    display: 'flex',
    alignSelf: 'center',
  }

})