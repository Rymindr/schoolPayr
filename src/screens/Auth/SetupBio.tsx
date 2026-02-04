import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StatusBar, Modal, StyleSheet, Dimensions, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ArrowLeft, Fingerprint, X } from 'lucide-react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../navigation/AppNavigator';
import { Button } from '../../components/ui';
import { styles } from './setupBio.styles';

type SetupBioProps = NativeStackScreenProps<RootStackParamList, 'SetupBio'>;

const SetupBio: React.FC<SetupBioProps> = ({ navigation }) => {
    const [showSuccess, setShowSuccess] = useState(false);

    const handleEnable = () => {
        setTimeout(() => {
            setShowSuccess(true);
        }, 500);
    };

    const handleSkip = () => {
        setShowSuccess(true);
    };

    const handleGoToAccount = () => {
        setShowSuccess(false);
        navigation.reset({
            index: 0,
            routes: [{ name: 'HomeTabs' }],
        });
    };

    return (
        <SafeAreaView style={styles.container} edges={['top', 'bottom']}>
            <StatusBar barStyle="dark-content" backgroundColor="#FFFFFF" />
            <View style={styles.content}>
                <View style={styles.ringsContainer}>
                    <View style={styles.ringOuter}>
                        <View style={styles.ringMiddle}>
                            <View style={styles.iconContainer}>
                                <Fingerprint size={48} color="#FFFFFF" />
                            </View>
                        </View>
                    </View>
                </View>

                <Text style={styles.title}>Setup Touch ID</Text>
                <Text style={styles.subtitle}>
                    Enable Touch ID to let you login & proceed{'\n'}your transactions faster.
                </Text>
            </View>

            <View style={styles.actionsContainer}>
                <Button
                    title="Enable Touch ID"
                    onPress={handleEnable}
                    style={styles.enableButton}
                    textStyle={styles.enableButtonText}
                />
                <TouchableOpacity style={styles.skipButton} onPress={handleSkip}>
                    <Text style={styles.skipText}>Skip, I'll do this later</Text>
                </TouchableOpacity>
            </View>

            <Modal
                visible={showSuccess}
                transparent
                animationType="fade"
                statusBarTranslucent
            >
                <View style={modalStyles.overlay}>
                    <View style={modalStyles.container}>
                        <TouchableOpacity style={modalStyles.closeButton} onPress={handleGoToAccount}>
                            <X size={20} color="#9CA3AF" />
                        </TouchableOpacity>

                        <View style={modalStyles.iconContainer}>
                            <Image 
                                source={require('../../../assets/Images/Image container.png')} 
                                style={modalStyles.successImage}
                                resizeMode="contain"
                            />
                        </View>

                        <Text style={modalStyles.congratsText}>Congratulations</Text>
                        <Text style={modalStyles.titleText}>You are member now!</Text>
                        <Text style={modalStyles.subText}>
                            Your account is ready. Let's start for your better financial experience.
                        </Text>

                        <Button
                            title="Go to my account"
                            onPress={handleGoToAccount}
                            style={modalStyles.button}
                            textStyle={modalStyles.confirmButtonText}
                        />
                    </View>
                </View>
            </Modal>

        </SafeAreaView>
    );
};

const { width } = Dimensions.get('window');

const modalStyles = StyleSheet.create({
    overlay: {
        flex: 1,
        backgroundColor: 'rgba(0,0,0,0.5)',
        justifyContent: 'flex-end',
        alignItems: 'center',
        paddingHorizontal: 20,
        paddingBottom: 20,
    },
    container: {
        width: width - 40,
        backgroundColor: '#FFFFFF',
        borderRadius: 24,
        padding: 24,
        alignItems: 'center',
    },
    closeButton: {
        position: 'absolute',
        top: 16,
        right: 16,
        zIndex: 1,
    },
    iconContainer: {
        marginBottom: 20,
        marginTop: 20,
    },
    successImage: {
        width: 140,
        height: 140,
    },
    congratsText: {
        fontSize: 14,
        color: '#EC4899',
        fontWeight: '600',
        marginBottom: 8,
    },
    titleText: {
        fontSize: 24,
        fontWeight: '700',
        color: '#111827',
        marginBottom: 12,
        textAlign: 'center',
    },
    subText: {
        fontSize: 14,
        color: '#6B7280',
        textAlign: 'center',
        lineHeight: 20,
        marginBottom: 24,
    },
    button: {
        marginTop: 8,
        height: 52,
        width: '100%',
        borderRadius: 14,
        backgroundColor: '#EC4899',
    },
    confirmButtonText: {
        color: '#FFFFFF',
        fontWeight: '600',
    },
});

export default SetupBio;
