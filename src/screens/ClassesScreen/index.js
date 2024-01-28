import { FlatList, StyleSheet, Text, View } from 'react-native';
import { useState, useEffect } from 'react';
import api from '../../services/api';


export default function NewClassScreen() {
  const [classes, setClasses] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await api.get('/classes');
        setClasses(result.data)
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }

    fetchData();
  }, []);

  return (
    <View style={styles.container}>
      {
        classes.length === 0 ?
          <Text>Não há turmas cadastradas</Text>
          :
          //<FlatList
          //  data={classes}
          //  renderItem={({ item }) => <Text>{item.className}</Text>}
          ///>

          classes.map((item, index) => (
            <Text key={index}>{item.className}</Text>
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