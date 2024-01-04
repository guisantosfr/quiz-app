import { StyleSheet, Text, View } from 'react-native';

export default function NewQuestionScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text>Nova Questão</Text>
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