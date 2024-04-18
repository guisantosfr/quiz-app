import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

import ListQuizzesScreen from '../ListQuizzesScreen';
import NewQuizScreen from '../NewQuizScreen';

const Tab = createMaterialTopTabNavigator();

export default function QuizzesScreen() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Listar" component={ListQuizzesScreen} />
      <Tab.Screen name="Novo Quiz" component={NewQuizScreen} />
    </Tab.Navigator>
  );
}
