import { StyleSheet, Text, View } from 'react-native';
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
    const result = await pickDocumentAsync();

    if (!result) return;

    setStudents(result.data);
    setFileName(result.fileName);
  }

  const saveClass = async () => {
    if (!className || !students) {
      setNotification('Nome da turma e planilha de alunos são obrigatórios');
      setErrorMessage(true);
      return;
    }

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

      setClassName('');
      setStudents(null);
      setFileName(null);
    })
      .catch(function (error) {
        console.error('ERRO', error);
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