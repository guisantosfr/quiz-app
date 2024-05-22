import { ActivityIndicator, SafeAreaView, Text } from 'react-native';
import { useRoute } from '@react-navigation/native';

import globalStyles from '../utils/globalStyles';
import { useEffect, useState } from 'react';
import useQuizzes from '../hooks/useQuizzes';
import theme from '../theme';
import TableView from '../components/TableView';

export default function QuizDetailScreen() {
  const route = useRoute();
  const { id } = route.params;
  const [selectedQuiz, setSelectedQuiz] = useState(null);
  const { fetchQuizById } = useQuizzes();

  useEffect(() => {
    const getQuiz = async() => {
      const result = await fetchQuizById(id);
      setSelectedQuiz(result);
    }

    getQuiz();
  }, []);

  return (
    <SafeAreaView style={globalStyles.container}>
    {
      !selectedQuiz ?
      <ActivityIndicator size="large" color={theme.colors.lightBlue} />
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