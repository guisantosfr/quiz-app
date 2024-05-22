import { useEffect, useState } from 'react';
import { ActivityIndicator, SafeAreaView, Text } from 'react-native';
import { useRoute } from '@react-navigation/native';

import useClasses from '../hooks/useClasses';
import globalStyles from '../utils/globalStyles';
import theme from '../theme';
import TableView from '../components/TableView';

export default function ClassDetailScreen() {
  const route = useRoute();
  const { id } = route.params;
  const [selectedClass, setSelectedClass] = useState(null);
  const { fetchClassById } = useClasses();

  useEffect(() => {
    const getClass = async() => {
      const result = await fetchClassById(id);
      setSelectedClass(result);
    }
    getClass();
  }, []);

  return (
    <SafeAreaView style={globalStyles.container}>
      {
        !selectedClass ?
        <ActivityIndicator size="large" color={theme.colors.lightBlue} />
          :
          (
            <>
              <Text style={[globalStyles.text, globalStyles.title]}>Detalhes da turma</Text>
              <Text style={globalStyles.text}>Nome: { selectedClass.name }</Text>
              <Text style={globalStyles.text}>Alunos: { selectedClass.students.length }</Text>

              <TableView data={selectedClass.students}/>
            </>
          )
      }
    </SafeAreaView>
  )
}