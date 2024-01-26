import { StyleSheet, Text, TextInput, View } from 'react-native';
import { useEffect, useState } from 'react';
import { pickDocumentAsync } from '../../helpers/pickDocument';
import api from '../../services/api';
import Button from '../../components/Button';
import Input from '../../components/Input';

export default function NewClassScreen() {
  const [className, setClassName] = useState('');
  const [students, setStudents] = useState(null);
  const [fileName, setFileName] = useState(null);

  const [notification, setNotification] = useState('');
  const [errorMessage, setErrorMessage] = useState(null);

  useEffect(() => {
    setTimeout(() => {
      setNotification('')
      setErrorMessage(false)
    }, 3000)
  }, [notification])

  const handleUpload = async () => {
    try {
      const result = await pickDocumentAsync();
      setStudents(result.data);
      setFileName(result.fileName);
    } catch (error) {
      console.error('Error:', error);
      setNotification('Erro');
      setErrorMessage(true);
    }
  }

  const saveClass = async () => {
    const savedStudents = students.map(([matricula, name, email]) => ({
      matricula,
      name,
      email
    }))

    await api.post('/classes', {
      className,
      students: savedStudents
    }).then(function (response) {
      setNotification(`A turma ${className} foi criada com sucesso`);
      //console.log('OK');
      //console.log(response);
    })
      .catch(function (error) {
        console.error(error);
        setNotification('Erro');
        setErrorMessage(true);
      });
  }

  return (
    <View style={styles.container}>
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

      <Input onChangeText={setClassName} value={className} placeholder="Nome da turma" />
      <Button text="Ler planilha de alunos" onPress={handleUpload} />

      <Text>Nome da turma: {className}</Text>
      <Text>{!fileName ? 'Planilha não lida' : fileName}</Text>

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
  },

  notification: {
    color: '#0c0'
  },

  error: {
    color: '#c00'
  }
})