import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  keyboardContainer: {
    flex: 1,
  },
  scrollView: {
    flex: 1,
  },
  scrollContent: {
    flexGrow: 1,
  },
  content: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 16,
  },
  logoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  logoImage: {
    width: 125,
    height: 50,
    resizeMode: 'contain',
  },
  title: {
    fontSize: 24,
    fontWeight: '700',
    color: '#000000',
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 14,
    color: '#6B7280',
    marginBottom: 24,
    lineHeight: 20,
  },
  formContainer: {
    marginBottom: 24,
  },
  forgotPasswordContainer: {
    alignItems: 'flex-start',
    marginBottom: 16,
  },
  forgotPasswordText: {
    fontSize: 16,
    color: '#000000',
    fontWeight: '400',
  },
  continueButton: {
    backgroundColor: '#EC4899',
    borderRadius: 10,
    paddingVertical: 14,
    alignItems: 'center',
    marginBottom: 24,
  },
  continueButtonText: {
    fontSize: 15,
    fontWeight: '600',
    color: '#FFFFFF',
  },
  actionsContainer: {
    marginBottom: 8,
  },
  actionsContainerShifted: {
    transform: [{ translateY: -40 }],
  },
  signUpContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 24,
  },
  signUpText: {
    fontSize: 16,
    color: '#000000',
  },
  signUpLink: {
    fontSize: 16,
    color: '#EC4899',
    fontWeight: '500',
  },
  numberPadOverlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'transparent',
    zIndex: 1,
  },
  numberPadContainer: {
    zIndex: 2,
  },
  inputContainer: {
    borderWidth: 1,
    borderColor: '#E5E5E5',
    borderRadius: 14,
    paddingHorizontal: 16,
    paddingVertical: 12,
    marginBottom: 16,
    backgroundColor: '#F9FAFB',
  },
  inputContainerFocused: {
    backgroundColor: '#F5F5F5',
  },
  inputLabel: {
    fontSize: 13,
    color: '#9CA3AF',
    marginBottom: 6,
  },
  inputRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  countryCode: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 8,
  },
  countryCodeText: {
    fontSize: 16,
    color: '#333333',
    marginRight: 4,
  },
  dropdownArrow: {
    fontSize: 12,
    color: '#333333',
  },
  phoneInput: {
    flex: 1,
    fontSize: 16,
    color: '#333333',
    padding: 0,
  },
  passwordRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: 40,
  },
  passwordInput: {
    flex: 1,
    fontSize: 16,
    color: '#333333',
    padding: 0,
    paddingTop: 15,
  },
  passwordFloatingLabel: {
    position: 'absolute',
    left: 16,
    top: 18,
    fontSize: 16,
    color: '#9CA3AF',
  },
  passwordFloatingLabelActive: {
    top: 10,
    fontSize: 13,
    color: '#9CA3AF',
  },
  eyeIcon: {
    padding: 4,
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
  },
  eyeIconText: {
    fontSize: 16,
    color: '#999999',
  },
});