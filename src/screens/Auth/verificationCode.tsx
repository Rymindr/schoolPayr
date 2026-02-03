import React from 'react';
import { View, Text, TouchableOpacity, StatusBar, Keyboard, TouchableWithoutFeedback } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { ArrowLeft } from 'lucide-react-native';
import { RootStackParamList } from '../../navigation/AppNavigator';
import { Button, PasswordNumberPad } from '../../components/ui';
import { useVerificationCode } from '../../hooks/useVerificationCode';
import { styles } from './verificationCode.styles';

type VerificationCodeProps = NativeStackScreenProps<RootStackParamList, 'VerificationCode'>;

const VerificationCode: React.FC<VerificationCodeProps> = ({ navigation, route }) => {
  const { phoneNumber } = route.params;
  const {
    code,
    seconds,
    formattedTimer,
    otpLength,
    isComplete,
    visibleDigits,
    handleNumberPress,
    handleBackspace,
    handleResend,
    handleContinue,
  } = useVerificationCode({
    onComplete: verifiedCode => {
      console.log('Verify code:', verifiedCode);
    },
  });

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
      <SafeAreaView style={styles.container} edges={['top', 'bottom']}>
        <StatusBar barStyle="dark-content" backgroundColor="#FFFFFF" />
        <View style={styles.header}>
          <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
            <ArrowLeft size={20} color="#111827" />
          </TouchableOpacity>
        </View>

        <View style={styles.content}>
          <Text style={styles.title}>Enter verification code</Text>
          <Text style={styles.subtitle}>
            We sent a verification code to your phone number{'\n'}
            <Text style={styles.phoneText}>{phoneNumber}</Text>
          </Text>
          <View style={styles.codeRow}>
            {Array.from({ length: otpLength }).map((_, index) => {
              const digit = code[index];
              const isActive = index === code.length && code.length < otpLength;
              const displayChar = digit ? (visibleDigits[index] ? digit : '*') : '';

              return (
                <View
                  key={`digit-${index}`}
                  style={[
                    styles.codeBox,
                    digit ? styles.codeBoxFilled : null,
                    isActive ? styles.codeBoxActive : null,
                  ]}
                >
                  {isActive && !digit ? (
                    <View style={styles.cursor} />
                  ) : (
                    <Text style={styles.codeText}>{displayChar}</Text>
                  )}
                </View>
              );
            })}
          </View>

          <View style={styles.resendContainer}>
            {seconds > 0 ? (
              <View style={styles.resendInlineRow}>
                <Text style={styles.resendText}>Resend code in </Text>
                <Text style={styles.resendTimerText}>{formattedTimer}</Text>
              </View>
            ) : (
              <View style={styles.resendInlineRow}>
                <Text style={styles.resendText}>Didn't get the code?</Text>
                <TouchableOpacity onPress={handleResend}>
                  <Text style={styles.resendButtonText}> Resend code</Text>
                </TouchableOpacity>
              </View>
            )}
          </View>
        </View>

        <View style={styles.actionsContainer}>
          <Button
            title="Continue"
            onPress={handleContinue}
            style={[styles.continueButton, !isComplete && styles.continueButtonDisabled]}
            textStyle={[styles.continueButtonText, !isComplete && styles.continueButtonTextDisabled]}
          />
        </View>

        <View style={styles.numberPadContainer}>
          <PasswordNumberPad onNumberPress={handleNumberPress} onBackspace={handleBackspace} />
        </View>
      </SafeAreaView>
    </TouchableWithoutFeedback>
  );
};

export default VerificationCode;
