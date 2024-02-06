import { createStackNavigator } from '@react-navigation/stack'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import SplashScreen from '../screens/SplashScreen';
import Home from '../screens/Home';


const RootNavigation = () => {

  const Stack = createStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{}}
      >
        <Stack.Screen name='splashScreen' component={SplashScreen} options={{ headerShown: false }} />
        <Stack.Screen name='home' component={Home} options={{ headerShown: false }} />

      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default RootNavigation

