import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import Onboarding from '../screens/onboarding';
import Login from '../screens/Auth/login';
import PasswordLogin from '../screens/Auth/passwordLogin';
import VerificationCode from '../screens/Auth/verificationCode';
import HomeTabs from './HomeTabs';
import ConnectStripe from '../screens/Home/ConnectStripe';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

export type RootStackParamList = {
  Onboarding: undefined;
  Login: undefined;
  PasswordLogin: undefined;
  VerificationCode: { phoneNumber: string };
  HomeTabs: undefined;
  ConnectStripe: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

const AppNavigator: React.FC = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Onboarding" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Onboarding" component={Onboarding} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="PasswordLogin" component={PasswordLogin} />
        <Stack.Screen name="VerificationCode" component={VerificationCode} />
        <Stack.Screen name="HomeTabs" component={HomeTabs} />
        <Stack.Screen name="ConnectStripe" component={ConnectStripe} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;