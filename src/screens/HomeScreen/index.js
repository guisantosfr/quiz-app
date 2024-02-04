import { StyleSheet, View } from 'react-native';
import Button from '../../components/Button';
import globalStyles from '../../utils/globalStyles';

export default function HomeScreen({ navigation }) {
  return (
    <View style={globalStyles.container}>
      <Button text="Sou professor" onPress={() => navigation.navigate('Teacher')} />
      <Button text="Sou aluno" onPress={() => navigation.navigate('Student')} />
    </View>
  )
}
