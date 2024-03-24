import { useEffect, useState } from 'react';
import { ActivityIndicator, SafeAreaView, StyleSheet, Text } from 'react-native';
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

  const [notification, setNotification] = useState('');
  const [errorMessage, setErrorMessage] = useState(null);

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

  useEffect(() => {
    setTimeout(() => {
      setNotification('')
      setErrorMessage(false)
    }, 3000)
  }, [notification])

  const nextStep = () => {
    
    if(currentStep === 2) return;
    
    if(currentStep === 0 && !selectedQuiz){
      setNotification('Selecione um questionário para avançar');
      setErrorMessage(true);
      return;
    } 
    
    if(currentStep === 1 && !selectedClass){
      setNotification('Selecione uma turma para avançar');
      setErrorMessage(true);
      return;
    } 

    setCurrentStep(prevStep => prevStep + 1);
  };

  const prevStep = () => {
    if(currentStep === 0) return;
    setCurrentStep(prevStep => prevStep - 1);
  };

  const applyQuiz = () => {
    console.log('Questionário aplicado');
  };

  switch(currentStep){
    case 0:
      return(
        <SafeAreaView style={globalStyles.container}>
          <Text style={[styles.title, globalStyles.text]}>Passo 1 de 3 - Selecionar questionário</Text>
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
          {
            !quizzes ?
            <ActivityIndicator size="large" color="#00d" />
            :
            <RadioButtons data={quizzes} onSelect={(value) => setSelectedQuiz(value)}/>
          }
          <Button text="Próximo" onPress={nextStep}/>
        </SafeAreaView>
      );
    case 1:
      return(
        <SafeAreaView style={globalStyles.container}>
          <Text style={[styles.title, globalStyles.text]}>Passo 2 de 3 - Selecionar turma</Text>
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
          {
            !classes ?
            <ActivityIndicator size="large" color="#00d" />
            :
            <RadioButtons data={classes} onSelect={(value) => setSelectedClass(value)}/>
          }

          <View style={styles.buttonArea}>
            <StepperButton text="Voltar" onPress={prevStep}/>
            <StepperButton text="Próximo" onPress={nextStep}/>
          </View>

        </SafeAreaView>
      );
    case 2:
      return(
        <SafeAreaView style={globalStyles.container}>
          <Text style={[styles.title, globalStyles.text]}>Passo 3 de 3 - Confirmar dados</Text>

          <View style={ { flexGrow: 0, height: '70%', }}>
            <Text style={globalStyles.text}>Questionário: {selectedQuiz}</Text>
            <Text style={globalStyles.text}>Turma: {selectedClass}</Text>
          </View>

          <View style={styles.buttonArea}>
            <StepperButton text="Voltar" onPress={prevStep}/>
            <StepperButton text="Aplicar" onPress={applyQuiz}/>
          </View>
        </SafeAreaView>
      );
  }
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