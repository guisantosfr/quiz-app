import { ActivityIndicator, Dimensions, FlatList, Pressable, SafeAreaView, StyleSheet, Text } from 'react-native';
import theme from '../theme';
import globalStyles from '../utils/globalStyles';
import useClasses from '../hooks/useClasses';

export default function ListClassesScreen({ navigation }) {
  const { classes } = useClasses();

  const renderItem = ({ item }) => (
    <Pressable style={styles.card} onPress={() => navigation.navigate('Class Detail', { id: item._id})}>
      <Text>{item.name}</Text>
    </Pressable>
  )

  return (
    <SafeAreaView style={globalStyles.container}>
      {
        !classes ?
          <ActivityIndicator size="large" color={theme.colors.lightBlue} />
          :
          (
            classes.length === 0 ?
              <Text style={globalStyles.text}>Não há turmas cadastradas</Text>
              :
              <>
                <Text style={[globalStyles.text, globalStyles.title]}>Turmas cadastradas</Text>
                <FlatList
                  data={classes}
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
