import React, { useState } from 'react';
import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    StatusBar,
    ScrollView,
    Linking,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ArrowLeft, Eye, EyeOff } from 'lucide-react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../navigation/AppNavigator';
import { Button } from '../../components/ui';
import { CountryCodeModal } from '../../components/modals';
import { ProgressBar } from '../../components/ProgressBar';
import { useSignup } from '../../hooks/useSignup';
import { styles } from './signup.styles';

type SignupProps = NativeStackScreenProps<RootStackParamList, 'Signup'>;
type FocusedField = 'fullName' | 'email' | 'mobile' | 'password' | null;

const Signup: React.FC<SignupProps> = ({ navigation }) => {
    const {
        fullName,
        email,
        countryCode,
        mobileNumber,
        password,
        showPassword,
        agreed,
        showCountryModal,
        countryCodes,
        isValid,
        setFullName,
        setEmail,
        setMobileNumber,
        setPassword,
        handleContinue,
        toggleAgreement,
        openCountryModal,
        closeCountryModal,
        handleCountryCodeSelect,
        togglePasswordVisibility,
    } = useSignup({
        onContinue: ({ countryCode: code, mobileNumber: phone }) => {
            navigation.navigate('VerificationCode', {
                phoneNumber: `${code} ${phone}`.trim(),
                isSignup: true,
            });
        },
    });

    const [focusedField, setFocusedField] = useState<FocusedField>(null);
    const isFullNameActive = focusedField === 'fullName' || fullName.length > 0;
    const isEmailActive = focusedField === 'email' || email.length > 0;
    const isPasswordActive = focusedField === 'password' || password.length > 0;

    const handleTermsPress = (url: string) => {
        if (!url) return;
        Linking.openURL(url).catch(() => undefined);
    };

    return (
        <SafeAreaView style={styles.container} edges={['top', 'bottom']}>
            <StatusBar barStyle="dark-content" backgroundColor="#FFFFFF" />
            <ScrollView contentContainerStyle={{ paddingBottom: 24 }} keyboardShouldPersistTaps="handled">
                <View style={styles.headerRow}>
                    <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
                        <ArrowLeft size={20} color="#111827" />
                    </TouchableOpacity>

                    <ProgressBar currentStep={0} />
                </View>

                <View style={styles.content}>
                    <Text style={styles.title}>Sign up to SchoolPayr</Text>
                    <Text style={styles.subtitle}>
                        To get started, create an account. This helps us{''}keep your financial information safe and secure.
                    </Text>

                    <View style={styles.cardField}>
                        <Text
                            style={[styles.floatingLabel, isFullNameActive && styles.floatingLabelActive]}
                        >
                            Full name
                        </Text>
                        <TextInput
                            style={[styles.input, styles.inputWithLabel]}
                            placeholder=""
                            value={fullName}
                            onChangeText={setFullName}
                            autoCapitalize="words"
                            returnKeyType="next"
                            onFocus={() => setFocusedField('fullName')}
                            onBlur={() => setFocusedField(null)}
                        />
                    </View>

                    <View style={styles.cardField}>
                        <Text
                            style={[styles.floatingLabel, isEmailActive && styles.floatingLabelActive]}
                        >
                            Email(optional)
                        </Text>
                        <TextInput
                            style={[styles.input, styles.inputWithLabel]}
                            placeholder=""
                            value={email}
                            onChangeText={setEmail}
                            keyboardType="email-address"
                            autoCapitalize="none"
                            returnKeyType="next"
                            onFocus={() => setFocusedField('email')}
                            onBlur={() => setFocusedField(null)}
                        />
                    </View>

                    <View style={styles.cardField}>
                        <Text
                            style={[styles.floatingLabel, styles.floatingLabelActive]}
                        >
                            Mobile number
                        </Text>
                        <View style={styles.inputRow}>
                            <TouchableOpacity style={styles.countryCodeButton} onPress={openCountryModal}>
                                <Text style={styles.countryCodeText}>{countryCode}</Text>
                                <Text style={styles.dropdownArrow}>▾</Text>
                            </TouchableOpacity>
                            <TextInput
                                style={styles.phoneInput}
                                placeholder=""
                                value={mobileNumber}
                                onChangeText={setMobileNumber}
                                keyboardType="phone-pad"
                                returnKeyType="next"
                                onFocus={() => setFocusedField('mobile')}
                                onBlur={() => setFocusedField(null)}
                            />
                        </View>
                    </View>

                    <View style={styles.cardField}>
                        <Text
                            style={[styles.floatingLabel, isPasswordActive && styles.floatingLabelActive]}
                        >
                            Password
                        </Text>
                        <View style={styles.passwordRow}>
                            <View pointerEvents="none" style={styles.passwordOverlay}>
                                <Text style={styles.passwordOverlayText}>
                                    {showPassword ? password : '*'.repeat(password.length)}
                                </Text>
                            </View>
                            <TextInput
                                style={[styles.passwordInput, styles.inputWithLabel]}
                                placeholder=""
                                value={password}
                                onChangeText={setPassword}
                                secureTextEntry={!showPassword}
                                autoCapitalize="none"
                                textContentType="password"
                                autoComplete="password"
                                onFocus={() => setFocusedField('password')}
                                onBlur={() => setFocusedField(null)}
                            />
                            <TouchableOpacity style={styles.eyeButton} onPress={togglePasswordVisibility}>
                                {showPassword ? <Eye size={18} color="#6B7280" /> : <EyeOff size={18} color="#6B7280" />}
                            </TouchableOpacity>
                        </View>
                    </View>

                    <View style={styles.checkboxRow}>
                        <TouchableOpacity
                            style={[styles.checkbox, agreed && styles.checkboxChecked]}
                            onPress={toggleAgreement}
                            activeOpacity={0.8}
                        >
                            {agreed ? <Text style={styles.checkboxTick}>✓</Text> : null}
                        </TouchableOpacity>
                        <Text style={styles.termsText}>
                            I confirm that I have read and agree to the terms outlined in our{' '}
                            <Text style={styles.termsLink} onPress={() => handleTermsPress('https://example.com/user-agreement')}>
                                User Agreement
                            </Text>{' '}
                            and{' '}
                            <Text style={styles.termsLink} onPress={() => handleTermsPress('https://example.com/privacy-policy')}>
                                Privacy Policy
                            </Text>.
                        </Text>
                    </View>
                </View>

                <View style={styles.actionsContainer}>
                    <Button
                        title="Continue"
                        onPress={isValid ? handleContinue : () => undefined}
                        activeOpacity={isValid ? 0.7 : 1}
                        style={[styles.continueButton, !isValid && styles.continueButtonDisabled]}
                        textStyle={[styles.continueButtonText, !isValid && styles.continueButtonTextDisabled]}
                    />
                </View>

                <View style={styles.footer}>
                    <Text style={styles.footerText}>Already have an account? </Text>
                    <TouchableOpacity onPress={() => navigation.replace('Login')}>
                        <Text style={styles.footerLink}>Login</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>

            <CountryCodeModal
                visible={showCountryModal}
                data={countryCodes}
                onSelect={handleCountryCodeSelect}
                onClose={closeCountryModal}
            />
        </SafeAreaView>
    );
};

export default Signup;
