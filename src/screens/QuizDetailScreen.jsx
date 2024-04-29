import { ActivityIndicator, SafeAreaView, Text } from 'react-native';
import { useRoute } from '@react-navigation/native';
import globalStyles from '../utils/globalStyles';
import { useEffect, useState } from 'react';
import api from '../services/api';
import TableView from '../components/TableView';

export default function QuizDetailScreen() {
  const route = useRoute();
  const { id } = route.params;
  const [selectedQuiz, setSelectedQuiz] = useState(null);

  useEffect(() => {
    const getQuiz = async() => {
      const result = await api.get(`/quizzes/${id}`);
      setSelectedQuiz(result.data);
    }

    getQuiz();
  }, []);

  return (
    <SafeAreaView style={globalStyles.container}>
    {
      !selectedQuiz ?
      <ActivityIndicator size="large" color="#699CF4" />
        :
        (
          <>
            <Text style={[globalStyles.text, globalStyles.title]}>Detalhes do questionário</Text>
            <Text style={globalStyles.text}>Nome: { selectedQuiz.name }</Text>
            <Text style={globalStyles.text}>Questões: { selectedQuiz.questions.length }</Text>

            <TableView data={selectedQuiz.questions}/>
          </>
        )
    }
  </SafeAreaView>
  )
}