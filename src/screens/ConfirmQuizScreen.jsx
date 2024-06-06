import { ActivityIndicator, SafeAreaView, Text } from 'react-native';
import { useRoute } from '@react-navigation/native';

import globalStyles from '../utils/globalStyles';
import { useEffect, useState } from 'react';
import useQuizzes from '../hooks/useQuizzes';
import theme from '../theme';
import Button from '../components/Button';

export default function ConfirmQuizScreen({ navigation }) {
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
                        <Text style={globalStyles.title}>{selectedQuiz.name}</Text>
                        <Text>{selectedQuiz.questions.length} questões</Text>

                        <Button text="Voltar" onPress={() => {navigation.goBack()}}/>
                        <Button text="Responder" onPress={() => {navigation.navigate('Solve Quiz', { quiz: selectedQuiz }) }}/>
                    </>
                )
        }

        </SafeAreaView>
    )
}