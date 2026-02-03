import React from 'react';
import { FlatList, Modal, Text, TouchableOpacity, View } from 'react-native';
import { CountryCodeItem } from '../../hooks/usePasswordLogin';
import { styles } from './modal.styles';

interface CountryCodeModalProps {
    visible: boolean;
    data: CountryCodeItem[];
    onSelect: (code: string) => void;
    onClose: () => void;
}

export const CountryCodeModal: React.FC<CountryCodeModalProps> = ({
    visible,
    data,
    onSelect,
    onClose,
}) => {
    return (
        <Modal visible={visible} transparent animationType="fade" onRequestClose={onClose}>
            <TouchableOpacity style={styles.dropdownOverlay} activeOpacity={1} onPress={onClose}>
                <TouchableOpacity activeOpacity={1} onPress={() => { }}>
                    <View style={styles.dropdownContainer}>
                        <FlatList
                            data={data}
                            keyExtractor={(item, index) => `${item.code}-${index}`}
                            renderItem={({ item }) => (
                                <TouchableOpacity
                                    style={styles.dropdownItem}
                                    onPress={() => onSelect(item.code)}
                                >
                                    <Text style={styles.dropdownFlag}>{item.flag}</Text>
                                    <Text style={styles.dropdownCountry}>{item.country}</Text>
                                    <Text style={styles.dropdownCode}>{item.code}</Text>
                                </TouchableOpacity>
                            )}
                        />
                    </View>
                </TouchableOpacity>
            </TouchableOpacity>
        </Modal>
    );
};
