import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './src/screens/HomeScreen';
import LoginScreen from './src/screens/LoginScreen';
import SignupScreen from './src/screens/SignupScreen';
const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions ={
        {
          headerShown:false
        }
      }>
        <Stack.Screen
          name="login_screen"
          component={LoginScreen}
        />
        <Stack.Screen
            name="home_screen"
            component={HomeScreen}
        />
        <Stack.Screen
          name="singup_screen"
          component={SignupScreen}
        />
        
      </Stack.Navigator>
    </NavigationContainer>
  );
}

