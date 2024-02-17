import { View } from 'react-native';
import globalStyles from '../../utils/globalStyles';
import Button from '../../components/Button';

export default function TeacherScreen({ navigation }) {
  return (
    <View style={globalStyles.container}>
      <Button text="Cadastrar turma" onPress={() => navigation.navigate('New class')} />
      <Button text="Cadastrar questões" onPress={() => navigation.navigate('New questions')} />
      <Button text="Ver turmas" onPress={() => navigation.navigate('Classes')} />
      <Button text="Ver questionários" onPress={() => navigation.navigate('Quizzes')} />
      <Button text="Aplicar questionário" onPress={() => navigation.navigate('Apply')} />
    </View>
  )
}
