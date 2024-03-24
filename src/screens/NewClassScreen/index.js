import { SafeAreaView, Text } from 'react-native';
import { useState } from 'react';
import Toast from 'react-native-root-toast';

import { pickDocumentAsync } from '../../helpers/pickDocument';
import api from '../../services/api';
import globalStyles from '../../utils/globalStyles';
import Button from '../../components/Button';
import Input from '../../components/Input';

export default function NewClassScreen() {
  const [className, setClassName] = useState('');
  const [students, setStudents] = useState(null);
  const [fileName, setFileName] = useState(null);

  const handleUpload = async () => {
    const result = await pickDocumentAsync();

    if (!result) return;

    setStudents(result.data);
    setFileName(result.fileName);
  }

  const saveClass = async () => {
    if (!className || !students) {
      Toast.show('Nome da turma e planilha de alunos são obrigatórios', {
        duration: 3000,
        position: 75,
        animation: true,
        backgroundColor: '#FF445D'
      });

      return;
    }
    
    const savedStudents = students.map(([id, name, email]) => ({
      id,
      name,
      email
    }));
   
    await api.post('/classes', {
      name: className,
      students: savedStudents
    }).then(function (response) {
      Toast.show('Turma criada com sucesso', {
        duration: 3000,
        position: 75,
        animation: true,
        backgroundColor: '#2CDE80'
      })

      setClassName('');
      setStudents(null);
      setFileName(null);
    })
      .catch(function (error) {
        console.error(error);
      });
  }

  return (
    <SafeAreaView style={globalStyles.container}>
      <Input onChangeText={setClassName} value={className} placeholder="Nome da turma" />
      <Text style={globalStyles.text}>{!fileName ? 'Planilha não lida' : fileName}</Text>
      <Button text="Ler planilha de alunos" onPress={handleUpload} />
      <Button text="Salvar turma" onPress={saveClass} />
    </SafeAreaView>
  )
}