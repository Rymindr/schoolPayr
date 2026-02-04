import React, { useState, useMemo } from 'react';
import { View, Text, TouchableOpacity, TextInput, StatusBar } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { ArrowLeft } from 'lucide-react-native';
import { RootStackParamList } from '../../navigation/AppNavigator';
import { CountryCodeModal } from '../../components/modals';
import { styles } from './resetPassword.styles';

type Props = NativeStackScreenProps<RootStackParamList, 'ResetPassword'>;

const ResetPassword: React.FC<Props> = ({ navigation }) => {
  const [mobileNumber, setMobileNumber] = useState('');
  const [countryCode, setCountryCode] = useState('+44');
  const [showCountryModal, setShowCountryModal] = useState(false);
  const [isFocused, setIsFocused] = useState(false);

  const countryCodes = useMemo(
    () => [
        { code: '+1', country: 'United States', flag: '🇺🇸' },
        { code: '+44', country: 'United Kingdom', flag: '🇬🇧' },
        { code: '+91', country: 'India', flag: '🇮🇳' },
        { code: '+61', country: 'Australia', flag: '🇦🇺' },
        { code: '+1', country: 'Canada', flag: '🇨🇦' },
    ],
    []
  );

  const handleContinue = () => {
    navigation.navigate('VerificationCode', {
      phoneNumber: `${countryCode} ${mobileNumber}`.trim(),
    });
  };

  return (
    <SafeAreaView style={styles.container} edges={['top', 'bottom']}>
      <StatusBar barStyle="dark-content" backgroundColor="#FFFFFF" />
      <View style={styles.content}>
        <View style={styles.header}>
          <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
            <ArrowLeft size={20} color="#000000" />
          </TouchableOpacity>
        </View>

        <Text style={styles.title}>Reset password</Text>
        <Text style={styles.subtitle}>
          Please enter your mobile number and we will send an OTP code to reset your password.
        </Text>

        <View
          style={[
            styles.inputContainer,
            (isFocused || mobileNumber.length > 0) && styles.inputContainerFocused,
          ]}
        >
          <Text style={styles.inputLabel}>Mobile number</Text>
          <View style={styles.inputRow}>
            <TouchableOpacity 
              style={styles.countryCode} 
              onPress={() => setShowCountryModal(true)}
            >
              <Text style={styles.countryCodeText}>{countryCode}</Text>
              <Text style={styles.dropdownArrow}>▾</Text>
            </TouchableOpacity>
            <TextInput
              style={styles.phoneInput}
              value={mobileNumber}
              onChangeText={setMobileNumber}
              placeholder=""
              keyboardType="phone-pad"
              onFocus={() => setIsFocused(true)}
              onBlur={() => setIsFocused(false)}
              autoFocus
            />
          </View>
        </View>

        <TouchableOpacity 
          style={[styles.continueButton, !mobileNumber && styles.continueButtonDisabled]} 
          onPress={handleContinue}
          disabled={!mobileNumber}
        >
          <Text style={styles.continueButtonText}>Continue</Text>
        </TouchableOpacity>
      </View>

      <CountryCodeModal
        visible={showCountryModal}
        data={countryCodes}
        onSelect={(code) => {
          setCountryCode(code);
          setShowCountryModal(false);
        }}
        onClose={() => setShowCountryModal(false)}
      />
    </SafeAreaView>
  );
};

export default ResetPassword;
