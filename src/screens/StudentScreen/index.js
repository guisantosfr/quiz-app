import { StyleSheet, TouchableOpacity, View } from 'react-native';
import { useState } from 'react';
import globalStyles from '../../utils/globalStyles';
import Input from '../../components/Input';
import Button from '../../components/Button';

export default function StudentScreen() {
  const [email, setEmail] = useState('');
  const [quizCode, setQuizCode] = useState('');

  function connect() {

  }

  return (
    <View style={globalStyles.container}>
      <Input onChangeText={setEmail} placeholder="Email" value={email} />
      <Input onChangeText={setQuizCode} placeholder="Código" value={quizCode} />

      <Button onPress={connect} text="Conectar ao questionário" />
    </View>
  )
}