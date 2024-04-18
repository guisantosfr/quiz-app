import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

import ListClassesScreen from '../ListClassesScreen';
import NewClassScreen from '../NewClassScreen';

const Tab = createMaterialTopTabNavigator();

export default function QuizzesScreen() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Listar" component={ListClassesScreen} />
      <Tab.Screen name="Nova classe" component={NewClassScreen} />
    </Tab.Navigator>
  );
}
