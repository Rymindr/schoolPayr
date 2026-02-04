import React, { useState } from 'react';
import { View, Text, TouchableOpacity, TextInput, StatusBar, Image, Modal } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { ArrowLeft, Eye, EyeOff, X } from 'lucide-react-native';
import { RootStackParamList } from '../../navigation/AppNavigator';
import { styles } from './createNewPassword.styles';

type Props = NativeStackScreenProps<RootStackParamList, 'CreateNewPassword'>;

const CreateNewPassword: React.FC<Props> = ({ navigation }) => {
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [activeField, setActiveField] = useState<'new' | 'confirm' | null>(null);
  const [showSuccessModal, setShowSuccessModal] = useState(false);

  const handleResetPassword = () => {
    setShowSuccessModal(true);
  };

  const handleLoginNavigation = () => {
    setShowSuccessModal(false);
    navigation.reset({
      index: 0,
      routes: [{ name: 'PasswordLogin' }],
    });
  };

  const handlePasswordChange = (
    text: string, 
    currentPassword: string, 
    setPassword: (p: string) => void, 
    showPassword: boolean
  ) => {
    if (showPassword) {
      setPassword(text);
      return;
    }

    if (text.length < currentPassword.length) {
        setPassword(currentPassword.slice(0, text.length));
        return;
    }
    
    if (text.length > currentPassword.length) {
        if (!text.includes('*')) {
            setPassword(text);
            return;
        }
        
        const newPart = text.slice(currentPassword.length);
        setPassword(currentPassword + newPart);
        return;
    }
  };

  const isFormValid = newPassword.length > 0 && confirmPassword.length > 0 && newPassword === confirmPassword;

  return (
    <SafeAreaView style={styles.container} edges={['top', 'bottom']}>
      <StatusBar barStyle="dark-content" backgroundColor="#FFFFFF" />
      <View style={styles.content}>
        <View style={styles.header}>
          <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
            <ArrowLeft size={20} color="#000000" />
          </TouchableOpacity>
        </View>

        <Text style={styles.title}>Create new password</Text>
        <Text style={styles.subtitle}>
          Create a secure password that will be easy for you to remember.
        </Text>

        <View
          style={[
            styles.inputContainer,
            (activeField === 'new' || newPassword.length > 0) && styles.inputContainerFocused,
          ]}
        >
          <Text style={styles.inputLabel}>New password</Text>
          <View style={styles.passwordRow}>
            <TextInput
              style={styles.passwordInput}
              value={showNewPassword ? newPassword : newPassword.replace(/./g, '*')}
              onChangeText={(text) => handlePasswordChange(text, newPassword, setNewPassword, showNewPassword)}
              secureTextEntry={false}
              autoCapitalize="none"
              autoCorrect={false}
              spellCheck={false}
              onFocus={() => setActiveField('new')}
              onBlur={() => setActiveField(null)}
              placeholder={showNewPassword ? '' : '********'}
            />
            <TouchableOpacity
              style={styles.eyeIcon}
              onPress={() => setShowNewPassword(!showNewPassword)}
            >
              {showNewPassword ? <EyeOff size={20} color="#6B7280" /> : <Eye size={20} color="#6B7280" />}
            </TouchableOpacity>
          </View>
        </View>

        <View
          style={[
            styles.inputContainer,
            (activeField === 'confirm' || confirmPassword.length > 0) && styles.inputContainerFocused,
          ]}
        >
          <Text style={styles.inputLabel}>Confirm new password</Text>
          <View style={styles.passwordRow}>
            <TextInput
              style={styles.passwordInput}
              value={showConfirmPassword ? confirmPassword : confirmPassword.replace(/./g, '*')}
              onChangeText={(text) => handlePasswordChange(text, confirmPassword, setConfirmPassword, showConfirmPassword)}
              secureTextEntry={false}
              autoCapitalize="none"
              autoCorrect={false}
              spellCheck={false}
              onFocus={() => setActiveField('confirm')}
              onBlur={() => setActiveField(null)}
              placeholder="********"
            />
            <TouchableOpacity
              style={styles.eyeIcon}
              onPress={() => setShowConfirmPassword(!showConfirmPassword)}
            >
              {showConfirmPassword ? <EyeOff size={20} color="#6B7280" /> : <Eye size={20} color="#6B7280" />}
            </TouchableOpacity>
          </View>
        </View>

        <TouchableOpacity
          style={[styles.resetButton, !isFormValid && styles.resetButtonDisabled]}
          onPress={handleResetPassword}
          disabled={!isFormValid}
        >
          <Text style={styles.resetButtonText}>Reset password</Text>
        </TouchableOpacity>
      </View>

      <Modal
        visible={showSuccessModal}
        transparent
        animationType="slide"
        onRequestClose={() => setShowSuccessModal(false)}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
            <TouchableOpacity 
              style={styles.closeButton} 
              onPress={() => setShowSuccessModal(false)}
            >
              <X size={24} color="#9CA3AF" />
            </TouchableOpacity>

            <Image
              source={require('../../../assets/Images/Lock.png')}
              style={styles.lockImage}
            />

            <Text style={styles.modalTitle}>Password updated</Text>
            <Text style={styles.modalMessage}>
              Your password has been updated. You can now log in with your new password.
            </Text>

            <TouchableOpacity 
              style={styles.loginButton} 
              onPress={handleLoginNavigation}
            >
              <Text style={styles.loginButtonText}>Login to your account</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </SafeAreaView>
  );
};

export default CreateNewPassword;
