import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFFFFF',
    },
    safeArea: {
        flex: 1,
    },
    statusBarSpacer: {
        height: 4,
    },
    headerRow: {
        paddingHorizontal: 20,
        paddingTop: 8,
        paddingBottom: 4,
        flexDirection: 'row',
        alignItems: 'center',
    },
    backButton: {
        width: 32,
        height: 32,
        borderRadius: 16,
        justifyContent: 'center',
        alignItems: 'center',
    },
    progressContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 8,
    },
    progressBar: {
        width: 26,
        height: 3,
        borderRadius: 2,
        backgroundColor: '#E5E7EB',
        marginHorizontal: 6,
    },
    progressBarActive: {
        backgroundColor: '#EC4899',
    },
    content: {
        flex: 1,
        paddingHorizontal: 20,
    },
    title: {
        fontSize: 24,
        fontWeight: '700',
        color: '#111827',
        marginTop: 8,
        marginBottom: 8,
    },
    subtitle: {
        fontSize: 14,
        color: '#6B7280',
        lineHeight: 20,
        marginBottom: 20,
    },
    cardField: {
        borderWidth: 1,
        borderColor: '#E5E7EB',
        borderRadius: 14,
        backgroundColor: '#F9FAFB',
        paddingHorizontal: 16,
        paddingVertical: 16,
        marginBottom: 12,
    },
    input: {
        fontSize: 16,
        color: '#111827',
        padding: 0,
    },
    inputWithLabel: {
        paddingTop: 12,
    },
    floatingLabel: {
        position: 'absolute',
        left: 16,
        top: 25,
        fontSize: 16,
        color: '#9CA3AF',
        marginTop: -4,
    },
    floatingLabelActive: {
        top: 10,
        fontSize: 13,
        color: '#6B7280',
    },
    inputRow: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 6,
    },
    countryCodeButton: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingRight: 10,
        paddingVertical: 4,
    },
    countryCodeText: {
        fontSize: 16,
        color: '#111827',
        marginRight: 4,
    },
    dropdownArrow: {
        fontSize: 12,
        color: '#6B7280',
    },
    phoneInput: {
        flex: 1,
        fontSize: 16,
        color: '#111827',
        padding: 0,
    },
    passwordRow: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginTop: 6,
        position: 'relative',
        minHeight: 30,
    },
    passwordInput: {
        flex: 1,
        fontSize: 16,
        color: 'transparent',
        padding: 0,
    },
    passwordOverlay: {
        position: 'absolute',
        left: 0,
        right: 36,
        top: 0,
        bottom: 0,
        justifyContent: 'center',
        overflow: 'hidden',
    },
    passwordOverlayText: {
        fontSize: 16,
        color: '#111827',
        marginTop: 12,
    },
    eyeButton: {
        paddingHorizontal: 8,
        paddingVertical: 4,
    },
    checkboxRow: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 8,
        marginBottom: 20,
    },
    checkbox: {
        width: 22,
        height: 22,
        borderRadius: 4,
        borderWidth: 1,
        borderColor: '#D1D5DB',
        backgroundColor: '#FFFFFF',
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: 10,
    },
    checkboxChecked: {
        backgroundColor: '#EC4899',
        borderColor: '#EC4899',
    },
    checkboxTick: {
        fontSize: 14,
        color: '#FFFFFF',
    },
    termsText: {
        flex: 1,
        fontSize: 14,
        color: '#4B5563',
        lineHeight: 20,
    },
    termsLink: {
        color: '#111827',
        fontWeight: '600',
        textDecorationLine: 'underline',
    },
    actionsContainer: {
        paddingHorizontal: 20,
        paddingBottom: 16,
    },
    continueButton: {
        height: 52,
        borderRadius: 14,
        backgroundColor: '#EC4899',
    },
    continueButtonDisabled: {
        backgroundColor: '#FAD7E8',
    },
    continueButtonText: {
        fontWeight: '600',
        color: '#FFFFFF',
    },
    continueButtonTextDisabled: {
        color: '#F9A8D4',
    },
    footer: {
        paddingHorizontal: 20,
        paddingBottom: 24,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
    },
    footerText: {
        fontSize: 16,
        color: '#111827',
    },
    footerLink: {
        fontSize: 16,
        color: '#EC4899',
        fontWeight: '600',
    },
});
