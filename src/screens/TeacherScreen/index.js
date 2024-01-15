import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Button from '../../components/Button';

export default function TeacherScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Button text="Cadastrar turma" onPress={() => navigation.navigate('New class')} />
      <Button text="Cadastrar questões" onPress={() => navigation.navigate('New questions')} />
      <Button text="Ver turmas" onPress={() => navigation.navigate('Classes')} />
      <Button text="Ver questionários" onPress={() => navigation.navigate('Quizzes')} />
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#eee',
    alignItems: 'center',
    justifyContent: 'center',
  }
})