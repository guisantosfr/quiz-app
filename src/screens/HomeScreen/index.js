import { StyleSheet, View } from 'react-native';
import Button from '../../components/Button';

export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Button text="Sou professor" onPress={() => navigation.navigate('Teacher')} />
      <Button text="Sou aluno" onPress={() => navigation.navigate('Student')} />
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