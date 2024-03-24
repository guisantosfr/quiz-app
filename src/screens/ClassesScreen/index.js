import { ActivityIndicator, SafeAreaView, StyleSheet, Text } from 'react-native';
import { useState, useEffect } from 'react';
import api from '../../services/api';
import globalStyles from '../../utils/globalStyles';
import CardList from '../../components/CardList';

export default function ClassesScreen() {
  const [classes, setClasses] = useState(null);

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
    <SafeAreaView style={globalStyles.container}>
      {
        !classes ?
          <ActivityIndicator size="large" color="#00d" />
          :
          (
            classes.length === 0 ?
              <Text style={globalStyles.text}>Não há turmas cadastradas</Text>
              :
              <>
                <Text style={[globalStyles.text, styles.title]}>Turmas cadastradas</Text>
                <CardList data={classes}/>
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