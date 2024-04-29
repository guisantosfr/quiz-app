import { ActivityIndicator, Dimensions, FlatList, Pressable, SafeAreaView, StyleSheet, Text } from 'react-native';
import { useState, useEffect } from 'react';
import api from '../services/api';
import theme from '../theme';
import globalStyles from '../utils/globalStyles';

export default function ListQuizzesScreen({ navigation }) {
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
  }, [quizzes]);

  const renderItem = ({ item }) => (
    <Pressable style={styles.card} onPress={() => navigation.navigate('Quiz Detail', { id: item._id})}>
      <Text>{item.name}</Text>
    </Pressable>
  )

  return (
    <SafeAreaView style={globalStyles.container}>
      {
        !quizzes ?
          <ActivityIndicator size="large" color={theme.colors.lightBlue} />
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


const styles = StyleSheet.create({
  card: {
    alignItems: 'center',
    backgroundColor: theme.colors.darkGray,
    padding: 20,
    borderRadius: 10,
    width: Dimensions.get('window').width * 0.6,
    marginVertical: 10,
    flexBasis: '40%',
    marginBottom: 20,
    marginHorizontal: 5
  }

})