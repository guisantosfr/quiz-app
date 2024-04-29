import { SafeAreaView, Text, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5'

import Card from '../components/Card';
import globalStyles from '../utils/globalStyles';

export default function HomeScreen({ navigation }) {
  return (
    <SafeAreaView style={globalStyles.container}>
      <Card onPress={() => navigation.navigate('Teacher')}>
          <Icon name='chalkboard-teacher'/>
          <Text>Sou professor</Text>
      </Card>

      <Card onPress={() => navigation.navigate('Student')}>
        <Icon name='book'/>
        <Text>Sou aluno</Text>
      </Card>
    </SafeAreaView>
  )
}
