import { StyleSheet, Text, TextInput, View } from 'react-native';
import { useState } from 'react';
import { pickDocumentAsync } from '../../helpers/pickDocument';
import api from '../../services/api';
import Button from '../../components/Button';
import Input from '../../components/Input';

export default function NewClassScreen() {
  const [className, setClassName] = useState('');
  const [students, setStudents] = useState(null);
  const [fileName, setFileName] = useState(null);

  const handleUpload = async () => {
    try {
      const result = await pickDocumentAsync();
      setStudents(result.data);
      setFileName(result.fileName);
    } catch (error) {
      console.error('Error:', error);
    }
  }

  const saveClass = async () => {
    const savedStudents = students.map(([matricula, name, email]) => ({
      matricula,
      name,
      email
    }))

    console.log({
      className,
      savedStudents
    });

    await api.post('/classes', {
      className,
      students: savedStudents
    }).then(function (response) {
      console.log('OK');
      //console.log(response);
    })
      .catch(function (error) {
        console.error(error);
      });
  }

  return (
    <View style={styles.container}>
      <Input onChangeText={setClassName} value={className} placeholder="Nome da turma" />
      <Button text="Ler planilha de alunos" onPress={handleUpload} />

      <Text>Nome da turma: {className}</Text>
      <Text>{!fileName ? 'Planilha não lida' : fileName}</Text>
      <Text>{!students ? 'Sem dados da turma' : JSON.stringify(students)}</Text>

      <Button text="Salvar turma" onPress={saveClass} />
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