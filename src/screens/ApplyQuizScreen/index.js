import { useEffect, useState } from 'react';
import { ActivityIndicator, StyleSheet, Text, View } from 'react-native';
import globalStyles from '../../utils/globalStyles';
import api from '../../services/api';
import Button from '../../components/Button';
import StepperButton from '../../components/StepperButton';
import RadioButton from '../../components/RadioButton';

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

  switch(currentStep){
    case 0:
      return(
        <View style={[globalStyles.container, styles.container]}>
          <Text style={styles.title}>Passo 1 de 3 - Selecionar questionário</Text>
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
            <RadioButton data={quizzes} onSelect={(value) => setSelectedQuiz(value)}/>
          }
          <Button text="Próximo" onPress={nextStep}/>
        </View>
      );
    case 1:
      return(
        <View style={[globalStyles.container, styles.container]}>
          <Text style={styles.title}>Passo 2 de 3 - Selecionar turma</Text>

          {
            !classes ?
            <ActivityIndicator size="large" color="#00d" />
            :
            <RadioButton data={classes} onSelect={(value) => setSelectedClass(value)}/>
          }

          <View style={styles.buttonArea}>
            <StepperButton text="Voltar" onPress={prevStep}/>
            <StepperButton text="Próximo" onPress={nextStep}/>
          </View>
        </View>
      );
    case 2:
      return(
        <View style={globalStyles.container}>
          <Text>Passo 3 de 3 - Confirmar dados</Text>

          <View style={styles.buttonArea}>
            <StepperButton text="Voltar" onPress={prevStep}/>
            <StepperButton text="Próximo" onPress={nextStep}/>
          </View>
        </View>
      );
  }

}

const styles = StyleSheet.create({
  container: {
    borderColor: 'red',
    borderWidth: 1
  },

  title: {
    marginTop: 75
  },

  buttonArea: {
    flex: 1,
    flexWrap: 'wrap',
    flexDirection: 'row'
  },

  notification: {
    color: '#0c0',
  },

  error: {
    color: '#c00'
  }
})