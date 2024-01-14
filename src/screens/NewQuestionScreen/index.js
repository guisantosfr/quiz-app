import { StyleSheet, Text, TextInput, View } from 'react-native';
import { useState } from 'react';
import { pickDocumentAsync } from '../../helpers/pickDocument';
import api from '../../services/api';
import Button from '../../components/Button';
import Input from '../../components/Input';

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

  const saveQuiz = async () => {
    const savedQuestions = quizData.map(([subject, question, answer]) => ({
      subject,
      question,
      answer
    }))

    await api.post('/quizzes', {
      quizName,
      questions: savedQuestions
    }).then(function (response) {
      console.log('OK');
      //console.log(response);
    })
      .catch(function (error) {
        console.error(error);
      });
  }

  return (
    <View style={styles.container}>
      <Input onChangeText={setQuizName} value={quizName} placeholder="Nome do questionário" />

      <Button text="Ler planilha de questões" onPress={handleUpload} />
      <Text>Nome do questionário: {quizName}</Text>
      <Text>{!fileName ? 'Planilha não lida' : fileName}</Text>
      <Text>{!quizData ? 'Sem dados da turma' : JSON.stringify(quizData)}
      </Text>

      <Button text="Salvar Questionário" onPress={saveQuiz} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#eee',
    alignItems: 'center',
    justifyContent: 'center',
  },

  title: {
    fontSize: 20
  }
})