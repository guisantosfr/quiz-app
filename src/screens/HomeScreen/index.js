import { SafeAreaView, Text, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5'

import Card from '../../components/Card';
import globalStyles from '../../utils/globalStyles';

export default function HomeScreen({ navigation }) {
  return (
    <SafeAreaView style={globalStyles.container}>
      <TouchableOpacity onPress={() => navigation.navigate('Teacher')}>
        <Card>
          <Icon name='chalkboard-teacher'/>
          <Text>Sou professor</Text>
        </Card>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate('Student')}>
        <Card>
        <Icon name='book'/>
          <Text>Sou aluno</Text>
        </Card>
      </TouchableOpacity>
    </SafeAreaView>
  )
}
