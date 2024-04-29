import { useEffect, useState } from 'react';
import { ActivityIndicator, SafeAreaView, StyleSheet, Text, View } from 'react-native';
import Toast from 'react-native-root-toast';

import globalStyles from '../utils/globalStyles';
import theme from '../theme';
import api from '../services/api';
import Button from '../components/Button';
import StepperButton from '../components/StepperButton';
import RadioButtons from '../components/RadioButtons';

export default function ApplyQuizScreen() {
  const [currentStep, setCurrentStep] = useState(0);

  const [selectedClass, setSelectedClass] = useState(null);
  const [selectedQuiz, setSelectedQuiz] = useState(null);

  const [classToApply, setClassToApply] = useState(null);
  const [quizToApply, setQuizToApply] = useState(null);

  const [classes, setClasses] = useState(null);
  const [quizzes, setQuizzes] = useState(null);

  useEffect(() => {
    const fetchQuizzes = async () => {
      try {
        const result = await api.get('/quizzes');
        setQuizzes(result.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }

    fetchQuizzes();
  }, []);

  useEffect(() => {
    const fetchClasses = async () => {
      try {
        const result = await api.get('/classes');
        setClasses(result.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }

    fetchClasses();
  }, []);

  useEffect(() => {
    const getToApply = async() => {
      if(currentStep === 1){
        const result = await api.get(`/quizzes/${selectedQuiz}`);
        setQuizToApply(result.data);
      };
  
      if(currentStep === 2){
        const result = await api.get(`/classes/${selectedClass}`);
        setClassToApply(result.data);
      };
    }

    getToApply();
  }, [currentStep]);

  const nextStep = () => {
    
    if(currentStep === 2) return;
    
    if(currentStep === 0 && !selectedQuiz){
      Toast.show('Selecione um questionário para avançar', {
        duration: 3000,
        position: 75,
        animation: true,
        backgroundColor: theme.colors.error
      });
  
      return;
    } 
    
    if(currentStep === 1 && !selectedClass){
      Toast.show('Selecione uma turma para avançar', {
        duration: 3000,
        position: 75,
        animation: true,
        backgroundColor: theme.colors.error
      });
  
      return;
    } 

    setCurrentStep(prevStep => prevStep + 1);
  };

  const prevStep = () => {
    if(currentStep === 0) return;

    if(currentStep === 1) {
      setSelectedQuiz(null);
      setQuizToApply(null);
    };

    if(currentStep === 2) {
      setSelectedClass(null);
      setClassToApply(null);
    };

    setCurrentStep(prevStep => prevStep - 1);
  };

  const applyQuiz = () => {
    Toast.show('Questionário aplicado', {
      duration: 3000,
      position: 75,
      animation: true,
      backgroundColor: theme.colors.success
    })
  };

  const renderStep = () => {
    switch(currentStep){
      case 0:
        return(
          <>
            <Text style={[globalStyles.title, globalStyles.text]}>Passo 1 de 3 - Selecionar questionário</Text>
            {
              !quizzes ?
              <ActivityIndicator size="large" color={theme.colors.lightBlue} />
              :
              <RadioButtons data={quizzes} onSelect={(value) => setSelectedQuiz(value)}/>
            }
            <Button text="Próximo" onPress={nextStep}/>
          </>
        );
      case 1:
        return(
          <>
            <Text style={[globalStyles.title, globalStyles.text]}>Passo 2 de 3 - Selecionar turma</Text>
            {
              !classes ?
              <ActivityIndicator size="large" color={theme.colors.lightBlue} />
              :
              <RadioButtons data={classes} onSelect={(value) => setSelectedClass(value)}/>
            }

            <View style={styles.buttonArea}>
              <StepperButton text="Voltar" onPress={prevStep} secondary/>
              <StepperButton text="Próximo" onPress={nextStep}/>
            </View>

          </>
        );
      case 2:
        return(
          <>
          {
            !quizToApply || !classToApply ?
            <ActivityIndicator size="large" color={theme.colors.lightBlue} /> :

          <>
            <Text style={[globalStyles.title, globalStyles.text]}>Passo 3 de 3 - Confirmar dados</Text>

            <View style={ { flexGrow: 0, height: '70%', }}>
              <Text style={globalStyles.text}>Questionário: {quizToApply.name}</Text>
              <Text style={globalStyles.text}>Turma: {classToApply.name}</Text>
            </View>

            <View style={styles.buttonArea}>
              <StepperButton text="Voltar" onPress={prevStep} secondary/>
              <StepperButton text="Aplicar" onPress={applyQuiz}/>
            </View>
          </>
          }
          </>
        );
    }
  }

  return (
    <SafeAreaView style={globalStyles.container}>
    {
      !classes || !quizzes ?
      <ActivityIndicator size="large" color={theme.colors.lightBlue} />
      :
      (
        classes.length === 0 || quizzes.length === 0 ?
          <Text>Não há turmas ou questionários cadastrados</Text>
          :
          renderStep()
      )
    }
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  buttonArea: {
    flex: 1,
    flexWrap: 'wrap',
    flexDirection: 'row'
  },
})