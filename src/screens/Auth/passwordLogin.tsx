import React from 'react';
import { View, Text, TouchableOpacity, StatusBar, Image, TextInput } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../navigation/AppNavigator';
import { Button, PasswordNumberPad } from '../../components/ui';
import { CountryCodeModal } from '../../components/modals';
import { usePasswordLogin } from '../../hooks/usePasswordLogin';
import { styles } from './passwordLogin.styles';

type PasswordLoginNavigationProp = NativeStackNavigationProp<RootStackParamList, 'PasswordLogin'>;

interface PasswordLoginProps {
  navigation: PasswordLoginNavigationProp;
}

const PasswordLogin: React.FC<PasswordLoginProps> = ({ navigation }) => {
  const {
    countryCode,
    mobileNumber,
    password,
    showPassword,
    showNumberPad,
    showCountryModal,
    activeField,
    countryCodes,
    setMobileNumber,
    setPassword,
    handleContinue,
    handleSignUp,
    handleNumberPress,
    handleBackspace,
    focusMobile,
    focusPassword,
    blurInputs,
    closeNumberPad,
    openCountryModal,
    closeCountryModal,
    handleCountryCodeSelect,
    togglePasswordVisibility,
  } = usePasswordLogin({
    onContinue: payload => {
      navigation.navigate('VerificationCode', {
        phoneNumber: `${payload.countryCode} ${payload.mobileNumber}`.trim(),
      });
    },
    onSignUp: () => console.log('Sign up'),
  });

  return (
    <SafeAreaView style={styles.container} edges={['top', 'bottom']}>
      <StatusBar barStyle="dark-content" backgroundColor="#FFFFFF" />
      <View style={styles.keyboardContainer}>
        <View style={styles.content}>
          <View style={styles.logoContainer}>
            <Image
              source={require('../../../assets/Images/Logo_Variaitons.png')}
              style={styles.logoImage}
            />
          </View>

          <Text style={styles.title}>Login to your account</Text>
          <Text style={styles.subtitle}>
            Please enter your mobile number and password to log in.
          </Text>

          <View style={styles.formContainer}>
            <View
              style={[
                styles.inputContainer,
                (activeField === 'mobile' || mobileNumber.length > 0) && styles.inputContainerFocused,
              ]}
            >
              <Text style={styles.inputLabel}>Mobile number</Text>
              <View style={styles.inputRow}>
                <TouchableOpacity style={styles.countryCode} onPress={openCountryModal}>
                  <Text style={styles.countryCodeText}>{countryCode}</Text>
                  <Text style={styles.dropdownArrow}>▾</Text>
                </TouchableOpacity>
                <TextInput
                  style={styles.phoneInput}
                  value={mobileNumber}
                  onChangeText={setMobileNumber}
                  placeholder=""
                  keyboardType="phone-pad"
                  onFocus={focusMobile}
                  showSoftInputOnFocus={false}
                />
              </View>
            </View>

            <View
              style={[
                styles.inputContainer,
                (activeField === 'password' || password.length > 0) && styles.inputContainerFocused,
              ]}
            >
              <Text
                style={[
                  styles.passwordFloatingLabel,
                  (activeField === 'password' || password.length > 0) && styles.passwordFloatingLabelActive,
                ]}
              >
                Password
              </Text>
              <View style={styles.passwordRow}>
                <TextInput
                  style={styles.passwordInput}
                  value={showPassword ? password : password.replace(/./g, '*')}
                  onChangeText={setPassword}
                  placeholder=""
                  secureTextEntry={false}
                  textContentType="password"
                  autoComplete="password"
                  onFocus={focusPassword}
                  showSoftInputOnFocus={false}
                />
                <TouchableOpacity
                  style={styles.eyeIcon}
                  onPress={togglePasswordVisibility}
                >
                  <Text style={styles.eyeIconText}>{showPassword ? '👁' : '👁‍🗨'}</Text>
                </TouchableOpacity>
              </View>
            </View>

            <View style={styles.forgotPasswordContainer}>
              <TouchableOpacity>
                <Text style={styles.forgotPasswordText}>Forgot password?</Text>
              </TouchableOpacity>
            </View>

            <View
              style={[
                styles.actionsContainer,
                showNumberPad && styles.actionsContainerShifted,
              ]}
            >
              <Button
                title="Continue"
                onPress={handleContinue}
                style={styles.continueButton}
                textStyle={styles.continueButtonText}
              />

              <View style={styles.signUpContainer}>
                <Text style={styles.signUpText}>Don't have an account? </Text>
                <TouchableOpacity onPress={handleSignUp}>
                  <Text style={styles.signUpLink}>Sign up</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>

        {showNumberPad && (
          <>
            <TouchableOpacity
              style={styles.numberPadOverlay}
              activeOpacity={1}
              onPress={closeNumberPad}
            />
            <View style={styles.numberPadContainer}>
              <PasswordNumberPad onNumberPress={handleNumberPress} onBackspace={handleBackspace} />
            </View>
          </>
        )}
      </View>

      <CountryCodeModal
        visible={showCountryModal}
        data={countryCodes}
        onSelect={handleCountryCodeSelect}
        onClose={closeCountryModal}
      />
    </SafeAreaView>
  );
};

export default PasswordLogin;