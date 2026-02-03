import React from 'react';
import { View, Text, TouchableOpacity, Modal } from 'react-native';
import { X, Fingerprint } from 'lucide-react-native';
import { styles } from './modal.styles';

interface TouchIdModalProps {
  visible: boolean;
  onCancel: () => void;
}

export const TouchIdModal: React.FC<TouchIdModalProps> = ({ visible, onCancel }) => {
  return (
    <Modal
      visible={visible}
      transparent={true}
      animationType="fade"
      onRequestClose={onCancel}
    >
      <View style={styles.modalOverlay}>
        <View style={styles.touchIdModal}>
          <TouchableOpacity
            style={styles.modalCloseButton}
            onPress={onCancel}
          >
            <X size={20} color="#666666" />
          </TouchableOpacity>

          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>Login with Touch ID</Text>
            <Text style={styles.modalDescription}>
              Touch the fingerprint sensor to log in using your biometric credentials.
            </Text>

            <View style={styles.fingerprintIconContainer}>
              <Fingerprint size={60} color="#DC2626" strokeWidth={1} />
            </View>

            <TouchableOpacity
              style={styles.modalCancelButton}
              onPress={onCancel}
            >
              <Text style={styles.modalCancelText}>Cancel</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
};
