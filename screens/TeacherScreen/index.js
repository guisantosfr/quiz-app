import { StyleSheet, Text, View } from 'react-native';

export default function TeacherScreen() {
  return (
    <View>
      <Text style={styles.buttonText}>Sou professor</Text>
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