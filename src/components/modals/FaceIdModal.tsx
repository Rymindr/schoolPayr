import React from 'react';
import { View, Text, TouchableOpacity, Modal } from 'react-native';
import { X, ScanFace } from 'lucide-react-native';
import { styles } from './modal.styles';

interface FaceIdModalProps {
  visible: boolean;
  onCancel: () => void;
}

export const FaceIdModal: React.FC<FaceIdModalProps> = ({ visible, onCancel }) => {
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
            <Text style={styles.modalTitle}>Face ID</Text>
            <Text style={styles.modalDescription}>
              Scan your face to log in using your biometric credentials.
            </Text>
            
            <View style={styles.faceIconContainer}>
              <ScanFace size={70} color="#FFFFFF" strokeWidth={1.5} />
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
