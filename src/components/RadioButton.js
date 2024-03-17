import { useState } from 'react';
import { Pressable, View, StyleSheet, Text, Dimensions, ScrollView } from 'react-native';

export default function RadioButton({ data, onSelect }) {
    const [selectedOption, setSelectedOption] = useState(null);

    const selectHandler = (value) => {
        onSelect(value);
        setSelectedOption(value);
      };

    return (
        <View style={styles.container}>
                {data.map((item, index) => {
                return (
                    <Pressable 
                    style={[styles.option, item.name === selectedOption ? styles.selected : styles.unselected]}
                    onPress={() => selectHandler(item.name)}>
                        <Text style={styles.text}>{item.name}</Text>
                    </Pressable>
                );
                })}
            
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        width: '80%',
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        paddingVertical: 30
    },

    option: {
      flexBasis: '40%',
      padding: 30,
      borderRadius: 10,
      marginBottom: 20
    },

    unselected: {
      backgroundColor: '#699CF4',
      margin: 5,
    },

    selected: {
      backgroundColor: '#00D',
      margin: 6
    },

    text: {
      fontSize: 15,
      color: 'white',
      textAlign: 'center',
    }
  });