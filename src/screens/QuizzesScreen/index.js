import { ActivityIndicator, Text, View } from 'react-native';
import { useState, useEffect } from 'react';
import api from '../../services/api';
import globalStyles from '../../utils/globalStyles';
import SecondaryButton from '../../components/SecondaryButton';

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
    <View style={globalStyles.container}>
      {
        !quizzes ?
          <ActivityIndicator size="large" color="#00d" />
          :
          (
            quizzes.length === 0 ?
              <Text>Não há questionários cadastrados</Text>
              :
              <>
                <Text>Questionários cadastrados</Text>
                {
                  quizzes.map((item, index) => (
                    <SecondaryButton key={index} text={item.name} />
                  ))
                }
              </>
          )
      }

    </View>
  )
}