import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, ScrollView, StatusBar, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Bell, X, ChevronRight, Wifi, CreditCard } from 'lucide-react-native';
import { useNavigation, useRoute, RouteProp } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { Button } from '../../components/ui';
import { styles } from './home.styles';
import { RootStackParamList } from '../../navigation/AppNavigator';

const Home: React.FC = () => {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  const route = useRoute<RouteProp<{ params: { isStripeConnected?: boolean } }, 'params'>>();
  const [showPasscodeCard, setShowPasscodeCard] = useState(true);
  const [isStripeConnected, setIsStripeConnected] = useState(false);
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    if (route.params?.isStripeConnected) {
      setIsStripeConnected(true);
    }
  }, [route.params?.isStripeConnected]);

  // Mock data for transactions if needed later
  // const transactions = [
  //   { id: 1, name: 'Sarah Johnson', date: '12:30 PM • TXN001236', amount: '£24.50', items: '2 item(s)', collectedBy: 'Waleed' },
  //   { id: 2, name: 'Sarah Johnson', date: '10:45 AM • TXN001234', amount: '£42.75', items: '4 item(s)', collectedBy: 'Admin' },
  // ];

    const transactionData = [
      { id: 1, name: 'Sarah Johnson', date: '12:30 PM • TXN001236', amount: '£24.50', items: '2 item(s)', collectedBy: 'Waleed', type: 'contactless' },
      { id: 2, name: 'Sarah Johnson', date: '10:45 AM • TXN001234', amount: '£42.75', items: '4 item(s)', collectedBy: 'Waleed', type: 'card' },
      { id: 3, name: 'Sarah Johnson', date: '11:10 AM • TXN001235', amount: '£15.00', items: '1 item(s)', collectedBy: 'Waleed', type: 'contactless' },
    ];
    
    useEffect(() => {
        setTransactions(transactionData as any);
    }, []);

  const renderConnectedState = () => (
    <>
      <View style={styles.connectedCard}>
        <View style={styles.schoolInfoRow}>
          <View style={styles.schoolIconContainer}>
            <Image
              source={require('../../../assets/Images/Frame 162914.png')}
              style={styles.schoolIcon}
              resizeMode="contain"
            />
          </View>
          <View style={styles.schoolInfoText}>
            <Text style={styles.connectedSchoolName}>St. George's School</Text>
            <Text style={styles.accountId}>acct_1QUEQncEVhyWFkwys</Text>
          </View>
          <ChevronRight size={20} color="#9CA3AF" />
        </View>

        <View style={styles.balanceContainer}>
          <Text style={styles.balanceLabel}>Today's sale</Text>
          <Text style={styles.balanceAmount}>
            <Text style={{ fontSize: 24, fontWeight: '700' }}>£</Text>0.00
          </Text>
          <Text style={styles.currencyLabel}>British Pound</Text>
        </View>

        <TouchableOpacity
          style={styles.collectButton}
          onPress={() => navigation.navigate('Checkout')}
        >
          <Text style={styles.collectButtonText}>Collect payment</Text>
        </TouchableOpacity>
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
            <TouchableOpacity>
              <Text style={styles.manageItemsText}>Add & manage items</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>

      <View style={styles.transactionsSection}>
        {transactions.length > 0 ? (
          <View style={styles.card}>
            <View style={styles.transactionsHeader}>
              <Text style={styles.transactionsTitle}>Transactions history</Text>
              <TouchableOpacity onPress={() => navigation.navigate('Transactions')}>
                <Text style={styles.seeAllText}>See all</Text>
              </TouchableOpacity>
            </View>

            <View style={styles.dateRow}>
                <Text style={styles.dateText}>Jun 13</Text>
                <Text style={styles.totalAmountText}>£82.25</Text>
            </View>

            {transactions.map((txn: any) => (
              <View key={txn.id} style={styles.transactionItem}>
                <View style={[styles.transactionIcon, txn.type === 'card' && styles.transactionIconBlue]}>
                   {txn.type === 'card' ? (
                       <CreditCard size={20} color="#3730A3" />
                   ) : (
                       <Wifi size={20} color="#EC4899" />
                   )}
                </View>
                <View style={styles.transactionInfo}>
                  <Text style={styles.transactionName}>{txn.name}</Text>
                  <Text style={styles.transactionDate}>{txn.date}</Text>
                  <Text style={styles.transactionDate}>Collected by <Text style={{ fontWeight: '600', color: '#000' }}>{txn.collectedBy}</Text></Text>
                </View>
                <View style={styles.transactionAmountColumn}>
                  <Text style={styles.transactionAmount}>{txn.amount}</Text>
                  <Text style={styles.transactionItems}>{txn.items}</Text>
                </View>
              </View>
            ))}
          </View>
        ) : (
          <View style={styles.emptyStateContainer}>
            <Image
              source={require('../../../assets/Images/transaction.png')}
              style={styles.emptyStateIcon}
              resizeMode="contain"
            />
            <Text style={styles.emptyStateTitle}>No transactions</Text>
            <Text style={styles.emptyStateSubtitle}>
              You don't have any transactions yet
            </Text>
          </View>
        )}
      </View>
    </>
  );

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
            <Bell size={20} color="#111827" />
          </TouchableOpacity>
        </View>

        {isStripeConnected ? (
          renderConnectedState()
        ) : (
          <>
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
          </>
        )}
      </ScrollView>
    </SafeAreaView>
  );
};


export default Home;
