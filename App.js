import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from './src/screens/HomeScreen';
import TeacherScreen from './src/screens/TeacherScreen';
import StudentScreen from './src/screens/StudentScreen';
import NewClassScreen from './src/screens/NewClassScreen';
import NewQuestionScreen from './src/screens/NewQuestionScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home' screenOptions={{
        headerShown: false
      }}>
        <Stack.Screen name='Home' component={HomeScreen} />
        <Stack.Screen name='Teacher' component={TeacherScreen} />
        <Stack.Screen name='Student' component={StudentScreen} />
        <Stack.Screen name='New class' component={NewClassScreen} />
        <Stack.Screen name='New questions' component={NewQuestionScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}