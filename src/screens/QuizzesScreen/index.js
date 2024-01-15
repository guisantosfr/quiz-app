import { StyleSheet, Text, View } from 'react-native';
import { useState, useEffect } from 'react';
import api from '../../services/api';

export default function NewClassScreen() {
  const [quizzes, setQuizzes] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await api.get('/quizzes');
        setQuizzes(result.data)
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }

    fetchData();
  }, []);

  return (
    <View style={styles.container}>
      {
        quizzes.length === 0 ?
          <Text>Não há questionários cadastrados</Text>
          : quizzes.map((item, index) => (
            <Text key={index}>{item.quizName}</Text>
          ))
      }

    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#eee',
    alignItems: 'center',
    justifyContent: 'center',
  }
})