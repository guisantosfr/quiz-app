import { ActivityIndicator, Dimensions, FlatList, SafeAreaView, Text, View } from 'react-native';
import { useRoute } from '@react-navigation/native';

import globalStyles from '../utils/globalStyles';
import { useEffect, useState } from 'react';
import useQuizzes from '../hooks/useQuizzes';
import theme from '../theme';
import Button from '../components/Button';
import CardContent from '../components/CardContent';

export default function ConfirmQuizScreen() {
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

                        <Button text="Voltar" onPress={() => {}}/>
                        <Button text="Responder" onPress={() => {}}/>
                    </>
                )
        }

        </SafeAreaView>
    )
}