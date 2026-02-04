import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFFFFF',
    },
    header: {
        paddingHorizontal: 20,
        paddingTop: 8,
        paddingBottom: 4,
    },
    backButton: {
        width: 32,
        height: 32,
        borderRadius: 16,
        justifyContent: 'center',
        alignItems: 'center',
    },
    content: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 24,
    },
    ringsContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 30,
    },
    ringOuter: {
        width: 320,
        height: 320,
        borderRadius: 160,
        borderWidth: 1,
        borderColor: '#FFE4E6', // Very light pink
        justifyContent: 'center',
        alignItems: 'center',
    },
    ringMiddle: {
        width: 220,
        height: 220,
        borderRadius: 110,
        borderWidth: 1,
        borderColor: '#FDA4AF', // Light pink
        justifyContent: 'center',
        alignItems: 'center',
    },
    iconContainer: {
        width: 100,
        height: 100,
        borderRadius: 50,
        backgroundColor: '#EC4899',
        justifyContent: 'center',
        alignItems: 'center',
        shadowColor: '#EC4899',
        shadowOffset: { width: 0, height: 10 },
        shadowOpacity: 0.3,
        shadowRadius: 20,
        elevation: 10,
    },
    title: {
        fontSize: 24,
        fontWeight: '700',
        color: '#111827',
        marginTop: 24,
        marginBottom: 12,
    },
    subtitle: {
        fontSize: 16,
        color: '#6B7280',
        textAlign: 'center',
        lineHeight: 24,
        marginBottom: 32,
    },
    actionsContainer: {
        paddingHorizontal: 24,
        paddingBottom: 40,
        width: '100%',
    },
    enableButton: {
        marginVertical: 8,
        height: 52,
        width: '100%',
        borderRadius: 14,
        backgroundColor: '#EC4899',
    },
    enableButtonText: {
        color: '#FFFFFF',
    },
    skipButton: {
        alignItems: 'center',
    },
    skipText: {
        fontSize: 16,
        color: '#111827',
    },
});
