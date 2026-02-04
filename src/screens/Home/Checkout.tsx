import React from 'react';
import { Text, StatusBar } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const Checkout: React.FC = () => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#FFFFFF', alignItems: 'center', justifyContent: 'center' }}>
      <StatusBar barStyle="dark-content" backgroundColor="#FFFFFF" />
      <Text style={{ fontSize: 16, color: '#111827', fontWeight: '600' }}>Checkout</Text>
    </SafeAreaView>
  );
};

export default Checkout;
