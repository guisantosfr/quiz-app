import { Dimensions, FlatList, Pressable, StyleSheet, Text, View } from 'react-native';

export default function RadioButtons({ data }) {
  const renderItem = ({ item }) => (
    <View style={styles.card}>
      <Text>{item.name}</Text>
    </View>
  )
  
  return (
      <FlatList
        data={data}
        columnWrapperStyle={{flexWrap: 'wrap'}}
        keyExtractor={item => item._id}
        renderItem={renderItem}
        numColumns={2}
        style={styles.list}
      />
  );
}

const styles = StyleSheet.create({
  list: {
    flexGrow: 0,
    height: '70%',  
  },

  card: {
    alignItems: 'center',
    backgroundColor: '#979797',
    padding: 20,
    borderRadius: 10,
    width: Dimensions.get('window').width * 0.6,
    marginVertical: 10,

    flexBasis: '40%',
    marginBottom: 20,
    marginHorizontal: 5
  }
});