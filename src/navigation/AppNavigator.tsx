import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import Onboarding from '../screens/onboarding';
import Login from '../screens/Auth/login';
import PasswordLogin from '../screens/Auth/passwordLogin';
import ResetPassword from '../screens/Auth/ResetPassword';
import CreateNewPassword from '../screens/Auth/CreateNewPassword';
import VerificationCode from '../screens/Auth/verificationCode';
import Signup from '../screens/Auth/signup';
import ConnectRymindr from '../screens/Auth/ConnectRymindr';
import CreatePIN from '../screens/Auth/CreatePIN';
import SetupBio from '../screens/Auth/SetupBio';
import SetupFaceId from '../screens/Auth/SetupFaceId';
import HomeTabs from './HomeTabs';
import ConnectStripe from '../screens/Home/ConnectStripe';
import Checkout from '../screens/Home/Checkout';
import Transactions from '../screens/Home/Transactions';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

export type RootStackParamList = {
  Onboarding: undefined;
  Login: undefined;
  Signup: undefined;
  PasswordLogin: undefined;
  ResetPassword: undefined;
  CreateNewPassword: undefined;
  VerificationCode: { phoneNumber: string; isSignup?: boolean };
  ConnectRymindr: undefined;
  CreatePIN: undefined;
  SetupBio: undefined;
  SetupFaceId: undefined;
  HomeTabs: undefined;
  ConnectStripe: undefined;
  Checkout: undefined;
  Transactions: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

const AppNavigator: React.FC = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Onboarding" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Onboarding" component={Onboarding} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Signup" component={Signup} />
        <Stack.Screen name="PasswordLogin" component={PasswordLogin} />
        <Stack.Screen name="ResetPassword" component={ResetPassword} />
        <Stack.Screen name="CreateNewPassword" component={CreateNewPassword} />
        <Stack.Screen name="VerificationCode" component={VerificationCode} />
        <Stack.Screen name="ConnectRymindr" component={ConnectRymindr} />
        <Stack.Screen name="CreatePIN" component={CreatePIN} />
        <Stack.Screen name="SetupFaceId" component={SetupFaceId} />
        <Stack.Screen name="SetupBio" component={SetupBio} />
        <Stack.Screen name="HomeTabs" component={HomeTabs} />
        <Stack.Screen name="ConnectStripe" component={ConnectStripe} />
        <Stack.Screen name="Checkout" component={Checkout} />
        <Stack.Screen name="Transactions" component={Transactions} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;