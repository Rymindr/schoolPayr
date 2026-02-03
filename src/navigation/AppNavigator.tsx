import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import Onboarding from '../screens/onboarding';
import Login from '../screens/Auth/login';
import PasswordLogin from '../screens/Auth/passwordLogin';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

export type RootStackParamList = {
  Onboarding: undefined;
  Login: undefined;
  PasswordLogin: undefined;
};

const Stack = createNativeStackNavigator();

const AppNavigator: React.FC = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Onboarding" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Onboarding" component={Onboarding} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="PasswordLogin" component={PasswordLogin} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;