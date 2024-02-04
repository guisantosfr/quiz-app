import { FlatList, StyleSheet, Text, View } from 'react-native';
import { useState, useEffect } from 'react';
import api from '../../services/api';
import globalStyles from '../../utils/globalStyles';

export default function NewClassScreen() {
  const [quizzes, setQuizzes] = useState([]);

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

  return (
    <View style={globalStyles.container}>
      {
        quizzes.length === 0 ?
          <Text>Não há questionários cadastrados</Text>
          :
          //<FlatList
          //  data={quizzes}
          //  renderItem={({ item }) => <Text>{item.quizName} - {item.quizCode}</Text>}
          ///>

          quizzes.map((item, index) => (
            <Text key={index}>{item.quizName} - {item.quizCode}</Text>
          ))

      }

    </View>
  )
}