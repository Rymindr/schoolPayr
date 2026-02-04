import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StatusBar, Modal, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { X, LockKeyhole } from 'lucide-react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { Button } from '../../components/ui';
import { styles } from './connectStripe.styles';
import { RootStackParamList } from '../../navigation/AppNavigator';

const ConnectStripe: React.FC = () => {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  const [showFailedModal, setShowFailedModal] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);

  const handleConnect = () => {
    setShowFailedModal(true);
  };

  const handleTryAgain = () => {
    setShowFailedModal(false);
    setShowSuccessModal(true);
  };

  const handleCloseSuccess = () => {
    setShowSuccessModal(false);
    navigation.goBack();
  };

  return (
    <SafeAreaView style={styles.container} edges={['top', 'bottom']}>
      <StatusBar barStyle="dark-content" backgroundColor="#FFFFFF" />

      <TouchableOpacity style={styles.closeButton} onPress={() => navigation.goBack()}>
        <X size={20} color="#111827" />
      </TouchableOpacity>

      <View style={styles.content}>
        <View style={styles.mainSection}>
          <View style={styles.ringsContainer}>
            <View style={styles.ringOuter} />
            <View style={styles.ringMiddle} />
            <View style={styles.ringInner} />
            <View style={styles.stripeCircle}>
              <Text style={styles.stripeText}>stripe</Text>
            </View>
          </View>

          <Text style={styles.title}>Connect your Stripe account</Text>
          <Text style={styles.subtitle}>
            Connect your Stripe account and unlock{''}
            seamless, cashless payments for your school
          </Text>

          <Button
            title="Connect Stripe"
            onPress={handleConnect}
            style={styles.primaryButton}
            textStyle={styles.primaryButtonText}
          />
        </View>

        <View style={styles.secureRow}>
          <LockKeyhole size={18} color="#6B7280" />
          <Text style={styles.secureText}>Secure connection</Text>
        </View>
      </View>

      <Modal transparent animationType="fade" visible={showFailedModal}>
        <View style={styles.modalOverlay}>
          <View style={styles.modalCard}>
            <TouchableOpacity style={styles.modalClose} onPress={() => setShowFailedModal(false)}>
              <X size={18} color="#9CA3AF" />
            </TouchableOpacity>
            <View style={styles.modalIconCircle}>
              <Image
                source={require('../../../assets/Images/3d.png')}
                style={styles.modalImage}
                resizeMode="contain"
              />
            </View>
            <Text style={styles.modalTitle}>Stripe setup failed</Text>
            <Text style={styles.modalDescription}>
              Sorry about that. This can happen if we were unable to receive data back from
              Stripe about your account or had trouble saving it with your profile.
            </Text>
            <Button
              title="Try again"
              onPress={handleTryAgain}
              style={styles.primaryButton}
              textStyle={styles.primaryButtonText}
            />
            <TouchableOpacity
              style={styles.secondaryButton}
              onPress={() => setShowFailedModal(false)}
            >
              <Text style={styles.secondaryButtonText}>Cancel</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>

      <Modal transparent animationType="fade" visible={showSuccessModal}>
        <View style={styles.modalOverlay}>
          <View style={styles.modalCard}>
            <TouchableOpacity style={styles.modalClose} onPress={handleCloseSuccess}>
              <X size={18} color="#9CA3AF" />
            </TouchableOpacity>
            <View style={styles.modalIconCircleSuccess}>
              <Image
                source={require('../../../assets/Images/Image container.png')}
                style={styles.modalImage}
                resizeMode="contain"
              />
            </View>
            <Text style={styles.modalTitle}>Stripe connected successfully</Text>
            <Text style={styles.modalDescription}>
              You're all set! Your Stripe account is now securely connected. Start collecting
              seamless, cashless payments for your school
            </Text>

            <View style={styles.infoCard}>
              <Text style={styles.infoLabel}>Merchant account</Text>
              <Text style={styles.infoValue}>email@email.com</Text>
              <Text style={styles.infoLabel}>Account ID</Text>
              <Text style={styles.infoValue}>acct_1QUEQncEVhyWFkwys</Text>
            </View>

            <Button
              title="Start collecting payment"
              onPress={handleCloseSuccess}
              style={styles.primaryButton}
              textStyle={styles.primaryButtonText}
            />
          </View>
        </View>
      </Modal>
    </SafeAreaView>
  );
};

export default ConnectStripe;
