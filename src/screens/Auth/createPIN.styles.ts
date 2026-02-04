import { StyleSheet, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');
const boxSize = Math.min(56, Math.max(44, (width - 80) / 6));

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFFFFF',
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
    content: {
        flex: 1,
        paddingHorizontal: 20,
    },
    title: {
        fontSize: 24,
        fontWeight: '700',
        color: '#111827',
        marginTop: 12,
    },
    subtitle: {
        fontSize: 14,
        color: '#6B7280',
        marginTop: 8,
        lineHeight: 20,
    },
    codeRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 24,
    },
    codeBox: {
        width: boxSize,
        height: boxSize + 6,
        borderRadius: 12,
        borderWidth: 1,
        borderColor: '#E5E7EB',
        backgroundColor: '#FFFFFF',
        justifyContent: 'center',
        alignItems: 'center',
    },
    codeBoxFocused: {
        backgroundColor: '#FFFFFF',
        borderColor: '#111827',
    },
    codeBoxActive: {
        borderColor: '#E5E7EB',
        backgroundColor: '#F5F5F5',
    },
    codeText: {
        fontSize: 22,
        fontWeight: '700',
        color: '#111827',
    },
    cursor: {
        width: 2,
        height: 24,
        backgroundColor: '#EC4899',
    },
    dot: {
        width: 14,
        height: 14,
        borderRadius: 7,
        backgroundColor: '#111827',
    },
    actionsContainer: {
        marginTop: 'auto',
        marginBottom: 20,
    },
    createButton: {
        marginTop: 8,
        height: 52,
        borderRadius: 14,
        backgroundColor: '#FDE8F3',
    },
    createButtonActive: {
        backgroundColor: '#EC4899',
    },
    createButtonText: {
        color: '#F9A8D4',
    },
    createButtonTextActive: {
        color: '#FFFFFF',
    },
    skipButton: {
        alignItems: 'center',
        marginTop: 8,
    },
    skipText: {
        fontSize: 14,
        color: '#111827',
    },
    numberPadContainer: {
        paddingBottom: 20,
        backgroundColor: '#E5E5E5',
    },
});
