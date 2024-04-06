import { useEffect, useState } from 'react';
import { ActivityIndicator, SafeAreaView, Text } from 'react-native';
import { useRoute } from '@react-navigation/native';
import globalStyles from '../../utils/globalStyles';
import api from '../../services/api';

export default function ClassDetailScreen() {
  const route = useRoute();
  const { id } = route.params;
  const [selectedClass, setSelectedClass] = useState(null);

  useEffect(() => {
    const getClass = async() => {
      const result = await api.get(`/classes/${id}`);
      setSelectedClass(result.data);
    }

    getClass();
  }, []);

  return (
    <SafeAreaView style={globalStyles.container}>
      {
        !selectedClass ?
        <ActivityIndicator size="large" color="#699CF4" />
          :
          (
            <>
              <Text style={globalStyles.text}>Turma selecionada: { selectedClass.name }</Text>
            </>
          )
      }
    </SafeAreaView>
  )
}