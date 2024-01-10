import { StyleSheet, Text, TextInput, View } from 'react-native';
import { useState } from 'react';
import Button from '../../components/Button';
import { pickDocumentAsync } from '../../helpers/pickDocument';

export default function NewQuestionScreen() {
  const [quizName, setQuizName] = useState('');
  const [quizData, setQuizData] = useState(null);
  const [fileName, setFileName] = useState(null);

  const handleUpload = async () => {
    try {
      const result = await pickDocumentAsync();
      setQuizData(result.data);
      setFileName(result.fileName);
    } catch (error) {
      console.error('Error:', error);
    }
  }

  return (
    <View style={styles.container}>
      <Text>Nome do questionário:</Text>
      <TextInput onChangeText={setQuizName} value={quizName} />

      <Button text="Ler planilha de questões" onPress={handleUpload} />
      <Text>{!fileName ? 'Planilha não lida' : fileName}</Text>
      <Text>{!quizData ? 'Sem dados da turma' : JSON.stringify(quizData)}
      </Text>

      <Button text="Salvar Questionário" />
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