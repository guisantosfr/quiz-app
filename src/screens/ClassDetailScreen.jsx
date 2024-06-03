import { useEffect, useState } from 'react';
import { ActivityIndicator, Dimensions, FlatList, SafeAreaView, Text, View } from 'react-native';
import { useRoute } from '@react-navigation/native';

import useClasses from '../hooks/useClasses';
import globalStyles from '../utils/globalStyles';
import theme from '../theme';

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

  const renderItem = ({ item }) => (
    <View>
      <Text>{item._id}</Text>
      <Text>{item.name}</Text>
      <Text>{item.email}</Text>
    </View>
  )

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

              <FlatList
                  data={selectedClass.students}
                  keyExtractor={item => item._id}
                  renderItem={renderItem}
                  style={{width: Dimensions.get('window').width * 0.9}}
                />
            </>
          )
      }
    </SafeAreaView>
  )
}