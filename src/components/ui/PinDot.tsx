import React from 'react';
import { View, Text, StyleSheet, Dimensions, Animated } from 'react-native';

const { width, height } = Dimensions.get('window');

const getPinDotSize = () => {
  const isSmallScreen = width < 375;
  const isMediumScreen = width >= 375 && width < 414;
  
  if (isSmallScreen) return { width: width * 0.12, height: height * 0.08, fontSize: 24, borderRadius: 12 };
  if (isMediumScreen) return { width: width * 0.13, height: height * 0.085, fontSize: 26, borderRadius: 14 };
  return { width: width * 0.14, height: height * 0.09, fontSize: 28, borderRadius: 16 };
};

const pinDotSize = getPinDotSize();

interface PinDotProps {
  isFilled: boolean;
  isCursor: boolean;
  hasError: boolean;
  digit?: string;
  showDigit: boolean;
  cursorVisible: boolean;
}

export const PinDot: React.FC<PinDotProps> = ({
  isFilled,
  isCursor,
  hasError,
  digit,
  showDigit,
  cursorVisible,
}) => {
  return (
    <View
      style={[
        styles.pinDot,
        isCursor && styles.pinDotActive,
        isFilled && styles.pinDotFilled,
        hasError && styles.pinDotError,
      ]}
    >
      {isFilled ? (
        <Text style={[styles.pinDotText, hasError && styles.pinDotTextError]}>
          {hasError ? '|' : (showDigit ? digit : '*')}
        </Text>
      ) : isCursor && cursorVisible ? (
        <View style={[styles.cursor, hasError && styles.errorCursor]} />
      ) : null}
    </View>
  );
};

const styles = StyleSheet.create({
  pinDot: {
    width: pinDotSize.width,
    height: pinDotSize.height,
    borderRadius: pinDotSize.borderRadius,
    backgroundColor: '#ECECEC',
    borderWidth: 2,
    borderColor: '#E5E7EB',
    justifyContent: 'center',
    alignItems: 'center',
  },
  pinDotActive: {
    borderColor: '#000',
    backgroundColor: '#FFFFFF',
  },
  pinDotFilled: {
    borderColor: '#E5E7EB',
    backgroundColor: '#F3F4F6',
  },
  pinDotError: {
    borderColor: '#DC2626',
    backgroundColor: '#FFFFFF',
  },
  pinDotText: {
    marginTop: 6,
    fontSize: pinDotSize.fontSize,
    color: '#000',
    fontWeight: '900',
    textAlign: 'center',
    lineHeight: pinDotSize.fontSize * 1.1,
    fontFamily: 'SF Pro Display',
  },
  pinDotTextError: {
    color: '#DC2626',
  },
  cursor: {
    width: 2,
    height: pinDotSize.height * 0.37,
    backgroundColor: '#DC2626',
  },
  errorCursor: {
    width: 3,
    height: pinDotSize.height * 0.54,
    backgroundColor: '#DC2626',
  },
});
