import { StyleSheet, TouchableOpacity, View } from 'react-native';
import { useState } from 'react';
import Input from '../../components/Input';
import Button from '../../components/Button';

export default function StudentScreen() {
  const [email, setEmail] = useState('');
  const [quizCode, setQuizCode] = useState('');

  function connect() {

  }

  return (
    <View style={styles.container}>
      <Input onChangeText={setEmail} placeholder="Email" value={email} />
      <Input onChangeText={setQuizCode} placeholder="Código" value={quizCode} />

      <Button onPress={connect} text="Conectar ao questionário" />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#eee',
    alignItems: 'center',
    justifyContent: 'center',
  },

  buttonText: {
    color: '#000',
    fontSize: 20,
    marginTop: 7,
    display: 'flex',
    alignSelf: 'center',
  }

})