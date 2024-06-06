import { useRoute } from "@react-navigation/native";
import { useEffect, useState } from "react";
import { ActivityIndicator, SafeAreaView, Text } from "react-native";
import globalStyles from "../utils/globalStyles";
import theme from "../theme";
import { shuffleArray } from "../helpers/shuffleArray";
import Button from "../components/Button";

export default function SolveQuizScreen({ navigation }) {
    const route = useRoute();
    const { quiz } = route.params;

    const [shuffledQuestions, setShuffledQuestions] = useState(null);
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    
    useEffect(() => {
        setShuffledQuestions(shuffleArray(quiz.questions));
    }, []);

    const handleNextQuestion = () => {
        setCurrentQuestionIndex((prevIndex) => Math.min(prevIndex + 1, shuffledQuestions.length - 1));
      };
    
      const handlePreviousQuestion = () => {
        setCurrentQuestionIndex((prevIndex) => Math.max(prevIndex - 1, 0));
      };

    return (
        <SafeAreaView style={globalStyles.container}>
        {
            !shuffledQuestions ?
            <ActivityIndicator size="large" color={theme.colors.lightBlue} />
                :
                (
                    <>
                    <Text>{quiz.name}</Text>
                    <Text>Questão {currentQuestionIndex + 1} de {quiz.questions.length}</Text>
                    <Text>Assunto: {shuffledQuestions[currentQuestionIndex].topic}</Text>
                    <Text>{shuffledQuestions[currentQuestionIndex].question}</Text>

                    {
                        currentQuestionIndex === 0 ?
                            <Button text="Voltar" onPress={() => {navigation.goBack()}}/>
                            :
                            <Button text="Voltar" onPress={handlePreviousQuestion}/>
                    }

                    {
                        currentQuestionIndex === shuffledQuestions.length - 1 ?
                            <Button text="Finalizar" onPress={() => {}}/>
                            :
                            <Button text="Próxima questão" onPress={handleNextQuestion}/>
                    }

                    </>
                )
        }
        </SafeAreaView>
    );
}
