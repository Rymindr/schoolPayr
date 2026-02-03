import { useMemo, useState } from 'react';

export interface CountryCodeItem {
    code: string;
    country: string;
    flag: string;
}

type ActiveField = 'mobile' | 'password' | null;

interface UsePasswordLoginParams {
    initialCountryCode?: string;
    onContinue?: (payload: { countryCode: string; mobileNumber: string; password: string }) => void;
    onSignUp?: () => void;
}

export const usePasswordLogin = ({
    initialCountryCode = '+44',
    onContinue,
    onSignUp,
}: UsePasswordLoginParams = {}) => {
    const [countryCode, setCountryCode] = useState(initialCountryCode);
    const [mobileNumber, setMobileNumber] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [showNumberPad, setShowNumberPad] = useState(false);
    const [showCountryModal, setShowCountryModal] = useState(false);
    const [activeField, setActiveField] = useState<ActiveField>(null);

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

    const handleContinue = () => {
        onContinue?.({ countryCode, mobileNumber, password });
    };

    const handleSignUp = () => {
        onSignUp?.();
    };

    const handleNumberPress = (num: string) => {
        if (activeField === 'mobile') {
            setMobileNumber(prev => prev + num);
            return;
        }
        if (activeField === 'password') {
            setPassword(prev => prev + num);
        }
    };

    const handleBackspace = () => {
        if (activeField === 'mobile') {
            setMobileNumber(prev => prev.slice(0, -1));
            return;
        }
        if (activeField === 'password') {
            setPassword(prev => prev.slice(0, -1));
        }
    };

    const focusMobile = () => {
        setActiveField('mobile');
        setShowNumberPad(true);
    };

    const focusPassword = () => {
        setActiveField('password');
        setShowNumberPad(true);
    };

    const blurInputs = () => {
        setActiveField(null);
    };

    const closeNumberPad = () => {
        setShowNumberPad(false);
        blurInputs();
    };

    const openCountryModal = () => setShowCountryModal(true);
    const closeCountryModal = () => setShowCountryModal(false);

    const handleCountryCodeSelect = (code: string) => {
        setCountryCode(code);
        closeCountryModal();
    };

    const togglePasswordVisibility = () => {
        setShowPassword(prev => !prev);
    };

    return {
        countryCode,
        mobileNumber,
        password,
        showPassword,
        showNumberPad,
        showCountryModal,
        activeField,
        countryCodes,
        setMobileNumber,
        setPassword,
        handleContinue,
        handleSignUp,
        handleNumberPress,
        handleBackspace,
        focusMobile,
        focusPassword,
        blurInputs,
        closeNumberPad,
        openCountryModal,
        closeCountryModal,
        handleCountryCodeSelect,
        togglePasswordVisibility,
    };
};
