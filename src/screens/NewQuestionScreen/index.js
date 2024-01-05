import { StyleSheet, View } from 'react-native';
import Button from '../../components/Button';
import { pickDocumentAsync } from '../../helpers/pickDocument';

export default function NewQuestionScreen() {
  return (
    <View style={styles.container}>
      <Button text="Ler planilha de questões" onPress={pickDocumentAsync} />
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