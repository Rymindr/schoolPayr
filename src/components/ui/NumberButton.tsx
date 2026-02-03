import React from 'react';
import { TouchableOpacity, Text, StyleSheet, Dimensions, ViewStyle } from 'react-native';

const { width } = Dimensions.get('window');
const buttonSize = (width - 100) / 3;

interface NumberButtonProps {
  number?: string;
  onPress: () => void;
  style?: ViewStyle;
  activeOpacity?: number;
  children?: React.ReactNode;
}

export const NumberButton: React.FC<NumberButtonProps> = ({
  number,
  onPress,
  style,
  activeOpacity = 0.7,
  children,
}) => {
  return (
    <TouchableOpacity
      style={[styles.numberButton, style]}
      onPress={onPress}
      activeOpacity={activeOpacity}
    >
      {children || <Text style={styles.numberButtonText}>{number}</Text>}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  numberButton: {
    width: buttonSize * 1.20,
    height: buttonSize * 0.55,
    borderRadius: 18,
    backgroundColor: '#F3F4F6',
    justifyContent: 'center',
    alignItems: 'center',
  },
  numberButtonText: {
    fontSize: 28,
    fontWeight: '400',
    color: '#333333',
  },
});
