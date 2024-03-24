import { FlatList, Pressable, StyleSheet, Text, View } from 'react-native';
import { useState } from 'react';

export default function RadioButtons({ data, onSelect }) {
  const [selectedOption, setSelectedOption] = useState(null);

  const selectHandler = (value) => {
    onSelect(value);
    setSelectedOption(value);
  };

  const renderItem = ({ item }) => (
    <Pressable 
      style={[styles.option, item.name === selectedOption ? styles.selected : styles.unselected]}
      onPress={() => selectHandler(item.name)}>
        <Text style={styles.text}>{item.name}</Text>
    </Pressable>
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
 
  option: {
    flexBasis: '40%',
    padding: 30,
    borderRadius: 10,
    marginBottom: 20,
    marginHorizontal: 5
  },

  unselected: {
    backgroundColor: '#699CF4'
  },

  selected: {
    backgroundColor: '#00C'
  },

  text: {
    fontSize: 15,
    color: 'white',
    textAlign: 'center',
  }
});