import React from 'react';
import { View, StyleSheet, Platform } from 'react-native';
import { Fingerprint, ScanFace, Delete } from 'lucide-react-native';
import { NumberButton } from './NumberButton';

interface NumberPadProps {
  onNumberPress: (number: string) => void;
  onBackspace: () => void;
  onBiometric: () => void;
}

export const NumberPad: React.FC<NumberPadProps> = ({
  onNumberPress,
  onBackspace,
  onBiometric,
}) => {
  const renderBiometricButton = () => (
    <NumberButton
      number=""
      onPress={onBiometric}
      style={styles.biometricButton}
    >
      {Platform.OS === 'android' ? (
        <Fingerprint size={28} color="#333333" />
      ) : (
        <ScanFace size={28} color="#333333" />
      )}
    </NumberButton>
  );

  const renderBackspaceButton = () => (
    <NumberButton
      number=""
      onPress={onBackspace}
      style={styles.backspaceButton}
    >
      <Delete size={24} color="#333333" />
    </NumberButton>
  );

  return (
    <View style={styles.keypadContainer}>
      <View style={styles.keypadRow}>
        <NumberButton number="1" onPress={() => onNumberPress('1')} />
        <NumberButton number="2" onPress={() => onNumberPress('2')} />
        <NumberButton number="3" onPress={() => onNumberPress('3')} />
      </View>
      <View style={styles.keypadRow}>
        <NumberButton number="4" onPress={() => onNumberPress('4')} />
        <NumberButton number="5" onPress={() => onNumberPress('5')} />
        <NumberButton number="6" onPress={() => onNumberPress('6')} />
      </View>
      <View style={styles.keypadRow}>
        <NumberButton number="7" onPress={() => onNumberPress('7')} />
        <NumberButton number="8" onPress={() => onNumberPress('8')} />
        <NumberButton number="9" onPress={() => onNumberPress('9')} />
      </View>
      <View style={styles.keypadRow}>
        {renderBiometricButton()}
        <NumberButton number="0" onPress={() => onNumberPress('0')} />
        {renderBackspaceButton()}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  keypadContainer: {
    paddingHorizontal: 16,
    paddingBottom: 10,
  },
  keypadRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 4,
  },
  biometricButton: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  backspaceButton: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});
