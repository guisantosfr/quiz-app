import { ActivityIndicator, FlatList, Pressable, SafeAreaView, Text } from 'react-native';
import { useState, useEffect } from 'react';
import api from '../../services/api';
import globalStyles from '../../utils/globalStyles';

export default function NewClassScreen({ navigation }) {
  const [quizzes, setQuizzes] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await api.get('/quizzes');
        setQuizzes(result.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }

    fetchData();
  }, []);

  const renderItem = ({ item }) => (
    <Pressable style={globalStyles.card} onPress={() => navigation.navigate('Quiz Detail', { id: item._id})}>
      <Text>{item.name}</Text>
    </Pressable>
  )

  return (
    <SafeAreaView style={globalStyles.container}>
      {
        !quizzes ?
          <ActivityIndicator size="large" color="#699CF4" />
          :
          (
            quizzes.length === 0 ?
              <Text style={globalStyles.text}>Não há questionários cadastrados</Text>
              :
              <>
                <Text style={[globalStyles.text, globalStyles.title]}>Questionários cadastrados</Text>
                <FlatList
                  data={quizzes}
                  columnWrapperStyle={{flexWrap: 'wrap'}}
                  keyExtractor={item => item._id}
                  renderItem={renderItem}
                  numColumns={2}
                  style={globalStyles.list}
                />
              </>
          )
      }
    </SafeAreaView>
  )
}
