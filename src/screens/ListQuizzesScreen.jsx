import { ActivityIndicator, Dimensions, FlatList, Pressable, SafeAreaView, StyleSheet, Text } from 'react-native';

import theme from '../theme';
import globalStyles from '../utils/globalStyles';

import useQuizzes from '../hooks/useQuizzes';

export default function ListQuizzesScreen({ navigation }) {
  const { quizzes } = useQuizzes();

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
                <Text style={[globalStyles.text, globalStyles.title]}>Meus questionários</Text>
                <FlatList
                  data={quizzes}
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


const styles = StyleSheet.create({
  card: {
    alignItems: 'center',
    alignSelf: 'center',
    backgroundColor: theme.colors.darkGray,
    padding: 25,
    borderRadius: 10,
    width: Dimensions.get('window').width * 0.8,
    marginVertical: 10,
    marginBottom: 20,
    marginHorizontal: 5
  }

})