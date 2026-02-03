import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StatusBar,
  Animated,
  Image,
} from 'react-native';
import { AlertTriangle } from 'lucide-react-native';
import { styles } from './login.styles';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useLogin } from '../../hooks/useLogin';
import { PinDot, NumberPad } from '../../components/ui';
import { TouchIdModal, FaceIdModal } from '../../components/modals';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../navigation/AppNavigator';

type LoginNavigationProp = NativeStackNavigationProp<RootStackParamList, 'Login'>;

interface LoginProps {
  userName?: string;
  onPinComplete?: (pin: string) => void;
  navigation?: LoginNavigationProp;
}

const Login: React.FC<LoginProps> = ({ userName, onPinComplete, navigation }) => {
  const {
    pin,
    error,
    cursorVisible,
    shakeAnimation,
    visibleDigits,
    showTouchIdModal,
    showFaceIdModal,
    maxPinLength,
    userName: hookUserName,
    handleNumberPress,
    handleBackspace,
    handleBiometric,
    handleTouchIdCancel,
    handleFaceIdCancel,
  } = useLogin({ userName, onPinComplete });

  const handlePasswordLogin = () => {
    if (navigation) {
      navigation.navigate('PasswordLogin');
    }
  };


  const renderPinDots = () => {
    return (
      <Animated.View
        style={[
          styles.pinDotsContainer,
          { transform: [{ translateX: shakeAnimation }] }
        ]}
      >
        {Array.from({ length: maxPinLength }).map((_, index) => {
          const isFilled = pin.length > index;
          const isCursor = pin.length === index;
          const hasError = error !== '';
          const digit = pin[index];
          const showDigit = visibleDigits[index];

          return (
            <PinDot
              key={index}
              isFilled={isFilled}
              isCursor={isCursor}
              hasError={hasError}
              digit={digit}
              showDigit={showDigit}
              cursorVisible={cursorVisible}
            />
          );
        })}
      </Animated.View>
    );
  };


  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#FFFFFF" />
      <View style={styles.content}>
        <View style={styles.logoContainer}>
          <Image source={require('../../../assets/Images/Logo_Variaitons.png')} style={styles.logoSquare} />
        </View>

        {/* Greeting */}
        <Text style={styles.greeting}>Hello {hookUserName},</Text>
        <Text style={styles.instruction}>
          Enter your SchoolPayr account's 6-digit login PIN
        </Text>

        {/* PIN Dots */}
        {renderPinDots()}

        {error ? (
          <View style={styles.errorContainer}>
            <AlertTriangle size={14} color="#FFFFFF" style={styles.errorIcon} />
            <Text style={styles.errorText}>{error}</Text>
          </View>
        ) : null}

        <TouchableOpacity
          style={styles.passwordLoginButton}
          onPress={handlePasswordLogin}
        >
          <Text style={styles.passwordLoginText}>Or login with password</Text>
        </TouchableOpacity>
      </View>

      <NumberPad
        onNumberPress={handleNumberPress}
        onBackspace={handleBackspace}
        onBiometric={handleBiometric}
      />

      <TouchIdModal
        visible={showTouchIdModal}
        onCancel={handleTouchIdCancel}
      />

      <FaceIdModal
        visible={showFaceIdModal}
        onCancel={handleFaceIdCancel}
      />
    </SafeAreaView>
  );
};

export default Login;