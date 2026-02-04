import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Home, Router, ChartPie, CircleUser } from 'lucide-react-native';
import HomeScreen from '../screens/Home/Home';
import CheckoutScreen from '../screens/Home/Checkout';
import TransactionsScreen from '../screens/Home/Transactions';
import AccountScreen from '../screens/Home/Account';

export type HomeTabParamList = {
  Home: undefined;
  Checkout: undefined;
  Transactions: undefined;
  Account: undefined;
};

const Tab = createBottomTabNavigator<HomeTabParamList>();

const HomeTabs: React.FC = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarActiveTintColor: '#EC4899',
        tabBarInactiveTintColor: '#9CA3AF',
        tabBarStyle: {
          height: 72,
          paddingTop: 6,
          paddingBottom: 12,
          borderTopColor: '#F3F4F6',
          backgroundColor: '#FFFFFF',
        },
        tabBarLabelStyle: {
          fontSize: 12,
          fontWeight: '600',
        },
        tabBarIcon: ({ color, size }) => {
          const iconSize = size ?? 22;
          if (route.name === 'Home') {
            return <Home size={iconSize} color={color} />;
          }
          if (route.name === 'Checkout') {
            return <Router size={iconSize} color={color} />;
          }
          if (route.name === 'Transactions') {
            return <ChartPie size={iconSize} color={color} />;
          }
          return <CircleUser size={iconSize} color={color} />;
        },
      })}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Checkout" component={CheckoutScreen} />
      <Tab.Screen name="Transactions" component={TransactionsScreen} />
      <Tab.Screen name="Account" component={AccountScreen} />
    </Tab.Navigator>
  );
};

export default HomeTabs;
