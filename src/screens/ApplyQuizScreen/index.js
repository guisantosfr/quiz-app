import { useState } from 'react';
import { Text, View } from 'react-native';
import globalStyles from '../../utils/globalStyles';

export default function ApplyQuizScreen() {
  const [currentStep, setCurrentStep] = useState(0);

  const content = [
    <Text>Passo 1</Text>,
    <Text>Passo 2</Text>,
    <Text>Passo 3</Text>
  ]

  return (
    <View style={globalStyles.container}>
      <Text>Passo {currentStep + 1} de 3</Text>

      {
        //  currentStep === 0 && <Text>Passo 1</Text>;
        //currentStep === 1 && <Text>Passo 2</Text>;
        //currentStep === 2 && <Text>Passo 3</Text>;
      }

    </View>
  )
}