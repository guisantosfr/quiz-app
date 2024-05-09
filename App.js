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
import ClassDetailScreen from './src/screens/ClassDetailScreen';
import QuizDetailScreen from './src/screens/QuizDetailScreen';
import InitialScreen from './src/screens/InitialScreen';
import LoginScreen from './src/screens/LoginScreen';
import RegisterScreen from './src/screens/RegisterScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <RootSiblingParent>
    <StatusBar style='dark'/>

    <NavigationContainer>
      <Stack.Navigator initialRouteName='Initial' screenOptions={{
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
        <Stack.Screen name='Class Detail' component={ClassDetailScreen} />
        <Stack.Screen name='Quiz Detail' component={QuizDetailScreen} />
        <Stack.Screen name='Initial' component={InitialScreen} />
        <Stack.Screen name='Register' component={RegisterScreen} />
        <Stack.Screen name='Login' component={LoginScreen} />
      </Stack.Navigator>
    </NavigationContainer>
    </RootSiblingParent>
  );
}