import { ActivityIndicator, SafeAreaView, StyleSheet, Text } from 'react-native';
import { useState, useEffect } from 'react';
import api from '../../services/api';
import globalStyles from '../../utils/globalStyles';
import CardList from '../../components/CardList';

export default function NewClassScreen() {
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

  return (
    <SafeAreaView style={globalStyles.container}>
      {
        !quizzes ?
          <ActivityIndicator size="large" color="#00d" />
          :
          (
            quizzes.length === 0 ?
              <Text style={globalStyles.text}>Não há questionários cadastrados</Text>
              :
              <>
                <Text style={[globalStyles.text, styles.title]}>Questionários cadastrados</Text>
                <CardList data={quizzes}/>
              </>
          )
      }
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  title: {
    marginTop: 75,
    marginBottom: 40
  }
})