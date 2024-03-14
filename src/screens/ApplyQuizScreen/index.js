import { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import globalStyles from '../../utils/globalStyles';
import Button from '../../components/Button';
import StepperButton from '../../components/StepperButton';

export default function ApplyQuizScreen() {
  const [currentStep, setCurrentStep] = useState(0);
  const [selectedClass, setSelectedClass] = useState(null);
  const [selectedQuiz, setSelectedQuiz] = useState(null);

  const nextStep = () => {
    if(currentStep === 2) return;
    setCurrentStep(prevStep => prevStep + 1);
  };

  const prevStep = () => {
    if(currentStep === 0) return;
    setCurrentStep(prevStep => prevStep - 1);
  };

  switch(currentStep){
    case 0:
      return(
        <View style={globalStyles.container}>
          <Text>Passo 1 de 3 - Selecionar questionário</Text>
          <Button text="Próximo" onPress={nextStep}/>
        </View>
      );
    case 1:
      return(
        <View style={globalStyles.container}>
          <Text>Passo 2 de 3 - Selecionar turma</Text>

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
  buttonArea: {
    flexDirection: 'row'
  }
})