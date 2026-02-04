import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StatusBar, Platform } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ArrowLeft } from 'lucide-react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../navigation/AppNavigator';
import { Button, PasswordNumberPad } from '../../components/ui';
import { styles } from './createPIN.styles';

type CreatePINProps = NativeStackScreenProps<RootStackParamList, 'CreatePIN'>;

const PIN_LENGTH = 6;

const CreatePIN: React.FC<CreatePINProps> = ({ navigation }) => {
  const [pin, setPin] = useState<string[]>([]);
  const [visibleIndex, setVisibleIndex] = useState<number | null>(null);

  const handleNumberPress = (num: string) => {
    if (pin.length < PIN_LENGTH) {
      const newIndex = pin.length;
      setPin([...pin, num]);
      setVisibleIndex(newIndex);
      setTimeout(() => {
        setVisibleIndex(prev => (prev === newIndex ? null : prev));
      }, 500);
    }
  };

  const handleBackspace = () => {
    if (pin.length > 0) {
      setPin(pin.slice(0, -1));
      setVisibleIndex(null);
    }
  };

  const isComplete = pin.length === PIN_LENGTH;

  const handleCreatePin = () => {
    if (Platform.OS === 'ios') {
      navigation.navigate('SetupFaceId');
    } else {
      navigation.navigate('SetupBio');
    }
  };

  const handleSkip = () => {
    if (Platform.OS === 'ios') {
      navigation.navigate('SetupFaceId');
    } else {
      navigation.navigate('SetupBio');
    }
  };

  return (
    <SafeAreaView style={styles.container} edges={['top', 'bottom']}>
      <StatusBar barStyle="dark-content" backgroundColor="#FFFFFF" />
      <View style={styles.headerRow}>
        <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
          <ArrowLeft size={20} color="#111827" />
        </TouchableOpacity>
      </View>

      <View style={styles.content}>
        <Text style={styles.title}>Set your login PIN</Text>
        <Text style={styles.subtitle}>
          You will use this PIN to log in next time and can change it from the settings.
        </Text>

        <View style={styles.codeRow}>
          {Array.from({ length: PIN_LENGTH }).map((_, index) => {
             const digit = pin[index];
             const isFocused = index === pin.length;
             const isVisible = index === visibleIndex;
             
             return (
               <View
                 key={`pin-${index}`}
                 style={[
                   styles.codeBox,
                   digit ? styles.codeBoxActive : null,
                   isFocused ? styles.codeBoxFocused : null
                 ]}
               >
                 {digit ? (
                     <Text style={styles.codeText}>
                         {isVisible ? digit : '*'}
                     </Text>
                 ) : isFocused ? (
                     <View style={styles.cursor} />
                 ) : null}
               </View>
             );
          })}
        </View>

        <View style={styles.actionsContainer}>
          <Button
            title="Create PIN"
            onPress={handleCreatePin}
            disabled={!isComplete}
            style={[
                styles.createButton,
                isComplete && styles.createButtonActive
            ]}
            textStyle={[
                styles.createButtonText,
                isComplete && styles.createButtonTextActive
            ]}
          />
           <TouchableOpacity style={styles.skipButton} onPress={handleSkip}>
            <Text style={styles.skipText}>Skip, I'll do this later</Text>
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.numberPadContainer}>
        <PasswordNumberPad
          onNumberPress={handleNumberPress}
          onBackspace={handleBackspace}
        />
      </View>
    </SafeAreaView>
  );
};

export default CreatePIN;
