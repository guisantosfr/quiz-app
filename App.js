import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from './screens/HomeScreen';
import StudentScreen from './screens/StudentScreen';
import TeacherScreen from './screens/TeacherScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home'>
        <Stack.Screen name='Home' component={HomeScreen} />
        <Stack.Screen name='Student' component={StudentScreen} />
        <Stack.Screen name='Teacher' component={TeacherScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}