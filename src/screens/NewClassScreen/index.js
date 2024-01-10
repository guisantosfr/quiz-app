import { StyleSheet, Text, TextInput, View } from 'react-native';
import { useState } from 'react';
import { pickDocumentAsync } from '../../helpers/pickDocument';
import Button from '../../components/Button';
import Input from '../../components/Input';

export default function NewClassScreen() {
  const [className, setClassName] = useState('');
  const [classData, setClassData] = useState(null);
  const [fileName, setFileName] = useState(null);

  const handleUpload = async () => {
    try {
      const result = await pickDocumentAsync();
      setClassData(result.data);
      setFileName(result.fileName);
    } catch (error) {
      console.error('Error:', error);
    }
    console.log(classData);
  }

  return (
    <View style={styles.container}>
      <Input onChangeText={setClassName} value={className} placeholder="Nome da turma" />
      <Button text="Ler planilha de alunos" onPress={handleUpload} />

      <Text>Nome da turma: {className}</Text>
      <Text>{!fileName ? 'Planilha não lida' : fileName}</Text>
      <Text>{!classData ? 'Sem dados da turma' : JSON.stringify(classData)}</Text>

      <Button text="Salvar turma" />
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

  title: {
    fontSize: 20
  }
})