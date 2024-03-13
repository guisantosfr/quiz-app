import { ActivityIndicator, Text, View } from 'react-native';
import { useState, useEffect } from 'react';
import api from '../../services/api';
import globalStyles from '../../utils/globalStyles';
import SecondaryButton from '../../components/SecondaryButton';

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
    <View style={globalStyles.container}>
      {
        !classes ?
          <ActivityIndicator size="large" color="#00d" />
          :
          (
            classes.length === 0 ?
              <Text>Não há turmas cadastradas</Text>
              :
              <>
                <Text>Turmas cadastradas</Text>
                {
                  classes.map((item, index) => (
                    <SecondaryButton key={index} text={item.name} />
                  ))
                }
              </>
          )
      }
    </View>
  )
}