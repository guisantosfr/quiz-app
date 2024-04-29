import { FlatList, Pressable, StyleSheet, Text } from 'react-native';
import { useState } from 'react';
import globalStyles from '../utils/globalStyles';
import theme from '../theme';

export default function RadioButtons({ data, onSelect }) {
  const [selectedOption, setSelectedOption] = useState(null);

  const selectHandler = (value) => {
    onSelect(value);
    setSelectedOption(value);
  };

  const renderItem = ({ item }) => (
    <Pressable 
      style={[styles.option, item._id === selectedOption ? styles.selected : styles.unselected]}
      onPress={() => selectHandler(item._id)}>
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
        style={globalStyles.list}
      />
   
  );
}

const styles = StyleSheet.create({ 
  option: {
    flexBasis: '40%',
    padding: 30,
    borderRadius: 10,
    marginBottom: 20,
    marginHorizontal: 5
  },

  unselected: {
    backgroundColor: theme.colors.lightBlue
  },

  selected: {
    backgroundColor: theme.colors.darkBlue
  },

  text: {
    fontSize: 15,
    color: theme.colors.background,
    textAlign: 'center',
  }
});