import React from 'react';
import { View, StyleSheet } from 'react-native';

interface ProgressBarProps {
  currentStep: number;
  totalSteps?: number;
}

export const ProgressBar: React.FC<ProgressBarProps> = ({ currentStep, totalSteps = 3 }) => {
  return (
    <View style={styles.progressContainer}>
      {Array.from({ length: totalSteps }).map((_, index) => (
        <View
          key={`step-${index}`}
          style={[
            styles.progressBar,
            index === currentStep && styles.progressBarActive,
          ]}
        />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  progressContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 8,
    marginRight: 40,
  },
  progressBar: {
    width: 26,
    height: 3,
    borderRadius: 2,
    backgroundColor: '#E5E7EB',
    marginHorizontal: 4,
  },
  progressBarActive: {
    backgroundColor: '#EC4899',
  },
});
