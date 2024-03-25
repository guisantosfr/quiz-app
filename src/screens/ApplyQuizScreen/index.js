import { useEffect, useState } from 'react';
import { ActivityIndicator, SafeAreaView, StyleSheet, Text, View } from 'react-native';
import Toast from 'react-native-root-toast';

import globalStyles from '../../utils/globalStyles';
import api from '../../services/api';
import Button from '../../components/Button';
import StepperButton from '../../components/StepperButton';
import RadioButtons from '../../components/RadioButtons';

export default function ApplyQuizScreen() {
  const [currentStep, setCurrentStep] = useState(0);
  const [selectedClass, setSelectedClass] = useState(null);
  const [selectedQuiz, setSelectedQuiz] = useState(null);

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
        setClasses(result.data)
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }

    fetchClasses();
  }, []);

  const nextStep = () => {
    
    if(currentStep === 2) return;
    
    if(currentStep === 0 && !selectedQuiz){
      Toast.show('Selecione um questionário para avançar', {
        duration: 3000,
        position: 75,
        animation: true,
        backgroundColor: '#FF445D'
      });
  
      return;
    } 
    
    if(currentStep === 1 && !selectedClass){
      Toast.show('Selecione uma turma para avançar', {
        duration: 3000,
        position: 75,
        animation: true,
        backgroundColor: '#FF445D'
      });
  
      return;
    } 

    setCurrentStep(prevStep => prevStep + 1);
  };

  const prevStep = () => {
    if(currentStep === 0) return;

    if(currentStep === 1) setSelectedQuiz(null);

    if(currentStep === 2) setSelectedClass(null);

    setCurrentStep(prevStep => prevStep - 1);
  };

  const applyQuiz = () => {
    console.log('Questionário aplicado');
  };

  const renderStep = () => {
    switch(currentStep){
      case 0:
        return(
          <>
            <Text style={[styles.title, globalStyles.text]}>Passo 1 de 3 - Selecionar questionário</Text>
            {
              !quizzes ?
              <ActivityIndicator size="large" color="#699CF4" />
              :
              <RadioButtons data={quizzes} onSelect={(value) => setSelectedQuiz(value)}/>
            }
            <Button text="Próximo" onPress={nextStep}/>
          </>
        );
      case 1:
        return(
          <>
            <Text style={[styles.title, globalStyles.text]}>Passo 2 de 3 - Selecionar turma</Text>
            {
              !classes ?
              <ActivityIndicator size="large" color="#699CF4" />
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
            <Text style={[styles.title, globalStyles.text]}>Passo 3 de 3 - Confirmar dados</Text>

            <View style={ { flexGrow: 0, height: '70%', }}>
              <Text style={globalStyles.text}>Questionário: {selectedQuiz}</Text>
              <Text style={globalStyles.text}>Turma: {selectedClass}</Text>
            </View>

            <View style={styles.buttonArea}>
              <StepperButton text="Voltar" onPress={prevStep} secondary/>
              <StepperButton text="Aplicar" onPress={applyQuiz}/>
            </View>
          </>
        );
    }
  }

  return (
    <SafeAreaView style={globalStyles.container}>
    {
      !classes || !quizzes ?
      <ActivityIndicator size="large" color="#699CF4" />
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
  title: {
    marginTop: 75,
    marginBottom: 40
  },

  notification: {
    color: '#0c0',
  },
  
  error: {
    color: '#c00'
  },

  buttonArea: {
    flex: 1,
    flexWrap: 'wrap',
    flexDirection: 'row'
  },
})