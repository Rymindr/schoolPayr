import React, { useState } from 'react';
import { View, Text, TouchableOpacity, ScrollView, StatusBar, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Bell, X } from 'lucide-react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { Button } from '../../components/ui';
import { styles } from './home.styles';
import { RootStackParamList } from '../../navigation/AppNavigator';

const Home: React.FC = () => {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  const [showPasscodeCard, setShowPasscodeCard] = useState(true);
  return (
    <SafeAreaView style={styles.container} edges={['top', 'bottom']}>
      <StatusBar barStyle="dark-content" backgroundColor="#F9FAFB" />
      <ScrollView contentContainerStyle={styles.content} showsVerticalScrollIndicator={false}>
        <View style={styles.header}>
          <View style={styles.headerLeft}>
            <View style={styles.schoolBadge}>
              <Image
                source={require('../../../assets/Images/Avatars.png')}
                style={styles.schoolBadgeImage}
                resizeMode="contain"
              />
            </View>
            <Text style={styles.schoolName}>St. George's School</Text>
          </View>
          <TouchableOpacity style={styles.headerIconButton} activeOpacity={0.7}>
            <Bell size={18} color="#111827" />
          </TouchableOpacity>
        </View>

        <View style={styles.card}>
          <Text style={styles.stripeLogo}>stripe</Text>
          <Text style={styles.stripeTitle}>Start collecting payments with Stripe</Text>
          <Text style={styles.stripeDescription}>
            Connect your Stripe account and unlock{''}
            seamless, cashless payments for your school
            — quick, secure, and stress-free.
          </Text>
          <Button
            title="Connect Stripe"
            onPress={() => navigation.navigate('ConnectStripe')}
            style={styles.stripeButton}
            textStyle={styles.stripeButtonText}
          />
        </View>

        <View style={[styles.card, styles.rowCard]}>
          <View style={styles.rowLeft}>
            <View style={styles.rowIconWrap}>
              <Image
                source={require('../../../assets/Images/ClipboardList.png')}
                style={styles.rowIconImage}
                resizeMode="contain"
              />
            </View>
            <View style={styles.rowTextWrap}>
              <Text style={styles.rowTitle}>Manage your school's products and items for quick checkout</Text>
              <Text style={styles.rowSubtitle}>Add & manage items</Text>
            </View>
          </View>
        </View>

        {showPasscodeCard ? (
          <View style={[styles.card, styles.rowCard]}>
            <View style={styles.rowLeft}>
              <View style={styles.rowIconWrap}>
                <Image
                  source={require('../../../assets/Images/Lock.png')}
                  style={styles.rowIconImage}
                  resizeMode="contain"
                />
              </View>
              <View style={styles.rowTextWrap}>
                <Text style={styles.rowSecondaryTitle}>Protect your transactions with passcode</Text>
                <Text style={styles.rowSecondarySubtitle}>Set up passcode</Text>
              </View>
            </View>
            <TouchableOpacity
              style={styles.closeButton}
              activeOpacity={0.7}
              onPress={() => setShowPasscodeCard(false)}
            >
              <X size={16} color="#9CA3AF" />
            </TouchableOpacity>
          </View>
        ) : null}
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;
