import { useCallback, useMemo, useState } from 'react';
import { CountryCodeItem } from './usePasswordLogin';

interface UseSignupParams {
    initialCountryCode?: string;
    onContinue?: (payload: {
        fullName: string;
        email?: string;
        countryCode: string;
        mobileNumber: string;
        password: string;
    }) => void;
}

export const useSignup = ({ initialCountryCode = '+44', onContinue }: UseSignupParams = {}) => {
    const [fullName, setFullName] = useState('');
    const [email, setEmail] = useState('');
    const [countryCode, setCountryCode] = useState(initialCountryCode);
    const [mobileNumber, setMobileNumber] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [agreed, setAgreed] = useState(false);
    const [showCountryModal, setShowCountryModal] = useState(false);

    const countryCodes = useMemo<CountryCodeItem[]>(
        () => [
            { code: '+1', country: 'United States', flag: '🇺🇸' },
            { code: '+44', country: 'United Kingdom', flag: '🇬🇧' },
            { code: '+91', country: 'India', flag: '🇮🇳' },
            { code: '+61', country: 'Australia', flag: '🇦🇺' },
            { code: '+1', country: 'Canada', flag: '🇨🇦' },
        ],
        []
    );

    const isValid =
        fullName.trim().length > 0 &&
        mobileNumber.trim().length > 0 &&
        password.trim().length >= 6 &&
        agreed;

    const handleContinue = useCallback(() => {
        if (!isValid) return;
        onContinue?.({
            fullName: fullName.trim(),
            email: email.trim(),
            countryCode,
            mobileNumber: mobileNumber.trim(),
            password,
        });
    }, [agreed, countryCode, email, fullName, isValid, mobileNumber, onContinue, password]);

    const toggleAgreement = useCallback(() => setAgreed(prev => !prev), []);
    const togglePasswordVisibility = useCallback(() => setShowPassword(prev => !prev), []);

    const openCountryModal = useCallback(() => setShowCountryModal(true), []);
    const closeCountryModal = useCallback(() => setShowCountryModal(false), []);
    const handleCountryCodeSelect = useCallback(
        (code: string) => {
            setCountryCode(code);
            closeCountryModal();
        },
        [closeCountryModal]
    );

    return {
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
    };
};
