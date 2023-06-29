import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import Onboarding from '../screens/App/Onboarding';
import { GetStarted } from '../screens/Auth/GetStarted';
import { Register } from '../screens/Auth/Register';
import { Login } from '../screens/Auth/Login';
import { DetailProduct } from '../screens/App/DetailProduct';
import { TabRoutes } from './tab.routes';

const Stack = createNativeStackNavigator();

export function StackRoutes() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="TabRoutes" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Onboarding" component={Onboarding} />
        <Stack.Screen name="GetStarted" component={GetStarted} />
        <Stack.Screen name="Register" component={Register} options={{ headerShown: false }} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="DetailProduct" component={DetailProduct} />
        <Stack.Screen name="TabRoutes" component={TabRoutes} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
