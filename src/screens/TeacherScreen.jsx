import ClassesScreen from './ClassesScreen';
import QuizzesScreen from './QuizzesScreen';
import ApplyQuizScreen from './ApplyQuizScreen';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import FontAwesomeIcons from 'react-native-vector-icons/FontAwesome';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const Tab = createBottomTabNavigator();

export default function TeacherScreen() {
  return (
      <Tab.Navigator screenOptions={{
        tabBarStyle:{
          height: 65
        },
        tabBarLabelStyle: {
          paddingBottom: 10
        }
      }}>
        <Tab.Screen
         name="Questionários"
         component={QuizzesScreen}
         options={{
          tabBarIcon: ({ color, size }) => (
            <FontAwesomeIcons name="book" color={color} size={size}/>
          )
         }}/>
        <Tab.Screen
         name="Turmas"
         component={ClassesScreen}
         options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="google-classroom" color={color} size={size}/>
          ),
        }}/>
        <Tab.Screen
         name="Aplicar questionário"
         component={ApplyQuizScreen} 
         options={{
          tabBarIcon: ({ color, size }) => (
            <FontAwesomeIcons name="check-square" color={color} size={size}/>
          ),
        }}/>
      </Tab.Navigator>
  );
}
