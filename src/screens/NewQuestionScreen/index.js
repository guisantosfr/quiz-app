import { StyleSheet, Text, TextInput, View } from 'react-native';
import { useEffect, useState } from 'react';
import { pickDocumentAsync } from '../../helpers/pickDocument';
import api from '../../services/api';
import Button from '../../components/Button';
import Input from '../../components/Input';

export default function NewQuestionScreen() {
  const [quizName, setQuizName] = useState('');
  const [quizData, setQuizData] = useState(null);
  const [fileName, setFileName] = useState(null);

  const [notification, setNotification] = useState('');
  const [errorMessage, setErrorMessage] = useState(null);

  useEffect(() => {
    setTimeout(() => {
      setNotification('')
      setErrorMessage(false)
    }, 3000)
  }, [notification])

  const handleUpload = async () => {
    const result = await pickDocumentAsync();

    if (!result) return;

    setQuizData(result.data);
    setFileName(result.fileName);
  }


  const saveQuiz = async () => {
    if (!quizName || !quizData) {
      setNotification('Nome do questionário e planilha de questões são obrigatórios');
      setErrorMessage(true);
      return;
    }

    const savedQuestions = quizData.map(([subject, question, answer]) => ({
      subject,
      question,
      answer
    }))

    await api.post('/quizzes', {
      quizName,
      questions: savedQuestions
    }).then(function (response) {
      setNotification(`O questionário ${quizName} foi criado com sucesso`);

      setQuizName('');
      setQuizData(null);
      setFileName(null);
    })
      .catch(function (error) {
        console.error(error);
      });
  }

  return (
    <View style={styles.container}>
      {
        notification?.length > 0 ? (
          !errorMessage ? (
            <Text style={styles.notification}>{notification}</Text>
          ) : (
            <Text style={styles.error}>{notification}</Text>
          )
        ) : (
          <></>
        )
      }

      <Input onChangeText={setQuizName} value={quizName} placeholder="Nome do questionário" />

      <Button text="Ler planilha de questões" onPress={handleUpload} />
      <Text>Nome do questionário: {quizName}</Text>
      <Text>{!fileName ? 'Planilha não lida' : fileName}</Text>

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
  },

  notification: {
    color: '#0c0'
  },

  error: {
    color: '#c00'
  }
})