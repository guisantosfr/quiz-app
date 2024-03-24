import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';
import { RootSiblingParent } from 'react-native-root-siblings';

import HomeScreen from './src/screens/HomeScreen';
import TeacherScreen from './src/screens/TeacherScreen';
import StudentScreen from './src/screens/StudentScreen';
import NewClassScreen from './src/screens/NewClassScreen';
import NewQuizScreen from './src/screens/NewQuizScreen';
import ClassesScreen from './src/screens/ClassesScreen';
import QuizzesScreen from './src/screens/QuizzesScreen';
import ApplyQuizScreen from './src/screens/ApplyQuizScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <RootSiblingParent>
    <StatusBar style='light'/>

    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home' screenOptions={{
        headerShown: false
      }}>
        <Stack.Screen name='Home' component={HomeScreen} />
        <Stack.Screen name='Teacher' component={TeacherScreen} />
        <Stack.Screen name='Student' component={StudentScreen} />
        <Stack.Screen name='New class' component={NewClassScreen} />
        <Stack.Screen name='New quiz' component={NewQuizScreen} />
        <Stack.Screen name='Classes' component={ClassesScreen} />
        <Stack.Screen name='Quizzes' component={QuizzesScreen} />
        <Stack.Screen name='Apply' component={ApplyQuizScreen} />
      </Stack.Navigator>
    </NavigationContainer>
    </RootSiblingParent>
  );
}