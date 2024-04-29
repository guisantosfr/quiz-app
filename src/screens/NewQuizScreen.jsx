import { SafeAreaView, Text } from 'react-native';
import { useState } from 'react';
import Toast from 'react-native-root-toast';

import { pickDocumentAsync } from '../helpers/pickDocument';
import api from '../services/api';
import globalStyles from '../utils/globalStyles';
import Button from '../components/Button';
import Input from '../components/Input';

export default function NewQuizScreen() {
  const [quizName, setQuizName] = useState('');
  const [quizData, setQuizData] = useState(null);
  const [fileName, setFileName] = useState(null);

  const handleUpload = async () => {
    const result = await pickDocumentAsync();

    if (!result) return;

    setQuizData(result.data);
    setFileName(result.fileName);
  }

  const saveQuiz = async () => {
    if (!quizName || !quizData) {
      Toast.show('Nome do questionário e planilha de questões são obrigatórios', {
        duration: 3000,
        position: 75,
        animation: true,
        backgroundColor: '#FF445D'
      });

      return;
    }

    const savedQuestions = quizData.map(([subject, topic, question, answer]) => ({
      subject, 
      topic,
      question,
      answer
    }))

    await api.post('/quizzes', {
      name: quizName,
      questions: savedQuestions
    }).then(function (response) {
      Toast.show('Questionário criado com sucesso', {
        duration: 3000,
        position: 75,
        animation: true,
        backgroundColor: '#2CDE80'
      });

      setQuizName('');
      setQuizData(null);
      setFileName(null);
    })
      .catch(function (error) {
        console.error(error);
      });
  }

  return (
    <SafeAreaView style={globalStyles.container}>
      <Input onChangeText={setQuizName} value={quizName} placeholder="Nome do questionário" />
      <Text style={globalStyles.text}>{!fileName ? 'Planilha não lida' : fileName}</Text>
      <Button text="Ler planilha de questões" onPress={handleUpload} />
      <Button text="Salvar Questionário" onPress={saveQuiz} />
    </SafeAreaView>
  )
}