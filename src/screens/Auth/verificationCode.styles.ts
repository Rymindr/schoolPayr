import { StyleSheet, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');

const boxSize = Math.min(56, Math.max(44, (width - 80) / 6));

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
    paddingHorizontal: 24,
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
  phoneText: {
    fontSize: 15,
    color: '#111827',
    fontWeight: '600',
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
  codeBoxActive: {
    borderColor: '#111827',
    backgroundColor: '#FFFFFF',
  },
  codeBoxFilled: {
    borderColor: '#D1D5DB',
    backgroundColor: '#F3F4F6',
  },
  codeText: {
    fontSize: 22,
    fontWeight: '700',
    color: '#111827',
  },
  cursor: {
    width: 2,
    height: boxSize * 0.5,
    backgroundColor: '#EC4899',
  },
  resendContainer: {
    alignItems: 'center',
    marginTop: 18,
  },
  resendInlineRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  resendText: {
    fontSize: 14,
    color: '#6B7280',
  },
  resendButtonText: {
    fontSize: 14,
    color: '#EC4899',
    fontWeight: '600',
  },
  resendTimerText: {
    fontSize: 14,
    color: '#EC4899',
    fontWeight: '600',
  },
  actionsContainer: {
    paddingHorizontal: 24,
    paddingTop: 16,
    paddingBottom: 8,
  },
  continueButton: {
    height: 52,
    borderRadius: 14,
    backgroundColor: '#EC4899',
  },
  continueButtonDisabled: {
    backgroundColor: '#F9E2EF',
  },
  continueButtonText: {
    color: '#FFFFFF',
    fontWeight: '600',
  },
  continueButtonTextDisabled: {
    color: '#F9A8D4',
  },
  numberPadContainer: {
    paddingBottom: 8,
  },
});
