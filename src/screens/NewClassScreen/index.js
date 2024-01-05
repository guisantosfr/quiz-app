import { StyleSheet, View } from 'react-native';
import { pickDocumentAsync } from '../../helpers/pickDocument';
import Button from '../../components/Button';

export default function NewClassScreen() {
  return (
    <View style={styles.container}>
      <Button text="Ler planilha de alunos" onPress={pickDocumentAsync} />
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