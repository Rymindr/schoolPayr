import { useState, useCallback, useEffect } from 'react';
import { Animated, Alert, Platform } from 'react-native';
import * as LocalAuthentication from 'expo-local-authentication';

interface UseLoginProps {
  userName?: string;
  onPinComplete?: (pin: string) => void;
}

export const useLogin = ({ userName = 'Waleed', onPinComplete }: UseLoginProps) => {
  const [pin, setPin] = useState<string>('');
  const [error, setError] = useState<string>('');
  const [cursorVisible, setCursorVisible] = useState<boolean>(true);
  const [shakeAnimation] = useState(new Animated.Value(0));
  const [visibleDigits, setVisibleDigits] = useState<{ [key: number]: boolean }>({});
  const [showTouchIdModal, setShowTouchIdModal] = useState<boolean>(false);
  const [showFaceIdModal, setShowFaceIdModal] = useState<boolean>(false);
  const maxPinLength = 6;

  useEffect(() => {
    const interval = setInterval(() => {
      setCursorVisible(prev => !prev);
    }, 530);
    return () => clearInterval(interval);
  }, []);

  const handleNumberPress = useCallback((num: string) => {
    if (pin.length < maxPinLength) {
      const newPin = pin + num;
      setPin(newPin);
      setError('');

      setVisibleDigits(prev => ({ ...prev, [pin.length]: true }));

      setTimeout(() => {
        setVisibleDigits(prev => ({ ...prev, [pin.length]: false }));
      }, 1000);

      if (newPin.length === maxPinLength) {
        setTimeout(() => {
          if (newPin === '123456') {
            onPinComplete?.(newPin);
          } else {
            setError('The PIN you entered is incorrect. Try again');
            triggerShake();
            setPin('');
            setVisibleDigits({});
          }
        }, 100);
      }
    }
  }, [pin, onPinComplete]);

  const handleBackspace = useCallback(() => {
    if (pin.length > 0) {
      const newPin = pin.slice(0, -1);
      setPin(newPin);
      setError('');
      setVisibleDigits(prev => {
        const newVisible = { ...prev };
        delete newVisible[newPin.length];
        return newVisible;
      });
    }
  }, [pin]);

  const handleFaceIdAuth = useCallback(async () => {
    try {
      const hasHardware = await LocalAuthentication.hasHardwareAsync();
      const supportedTypes = await LocalAuthentication.supportedAuthenticationTypesAsync();
      
      if (!hasHardware || !supportedTypes.includes(LocalAuthentication.AuthenticationType.FACIAL_RECOGNITION)) {
        Alert.alert('Face ID Not Available', 'Face ID is not available on this device.');
        return;
      }

      const result = await LocalAuthentication.authenticateAsync({
        promptMessage: 'Authenticate with Face ID',
        fallbackLabel: 'Use Passcode',
        cancelLabel: 'Cancel',
      });

      if (result.success) {
        if (onPinComplete) {
          onPinComplete('123456');
        }
      }
    } catch (error) {
      console.error('Face ID authentication error:', error);
      Alert.alert('Authentication Error', 'Failed to authenticate with Face ID.');
    }
  }, [onPinComplete]);

  const handleBiometric = useCallback(() => {
    if (Platform.OS === 'ios') {
      handleFaceIdAuth();
    } else {
      setShowTouchIdModal(true);
    }
    console.log('Biometric authentication');
  }, [handleFaceIdAuth]);

  const handleTouchIdCancel = useCallback(() => {
    setShowTouchIdModal(false);
  }, []);

  const handleFaceIdCancel = useCallback(() => {
    setShowFaceIdModal(false);
  }, []);

  const triggerShake = () => {
    Animated.sequence([
      Animated.timing(shakeAnimation, { toValue: 10, duration: 50, useNativeDriver: true }),
      Animated.timing(shakeAnimation, { toValue: -10, duration: 50, useNativeDriver: true }),
      Animated.timing(shakeAnimation, { toValue: 10, duration: 50, useNativeDriver: true }),
      Animated.timing(shakeAnimation, { toValue: 0, duration: 50, useNativeDriver: true }),
    ]).start();
  };

  const resetPin = useCallback(() => {
    setPin('');
    setError('');
    setVisibleDigits({});
  }, []);

  return {
    pin,
    error,
    cursorVisible,
    shakeAnimation,
    visibleDigits,
    showTouchIdModal,
    showFaceIdModal,
    maxPinLength,
    userName,
    handleNumberPress,
    handleBackspace,
    handleBiometric,
    handleTouchIdCancel,
    handleFaceIdCancel,
    resetPin,
  };
};
