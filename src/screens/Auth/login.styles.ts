import { StyleSheet, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');
const buttonSize = (width - 100) / 3;

// Responsive scaling factors
const isSmallScreen = width < 375;
const isMediumScreen = width >= 375 && width < 414;
const isLargeScreen = width >= 414;

// Calculate responsive PIN dot dimensions
const getPinDotSize = () => {
  if (isSmallScreen) return { width: width * 0.12, height: height * 0.08, fontSize: 24, borderRadius: 12 };
  if (isMediumScreen) return { width: width * 0.13, height: height * 0.085, fontSize: 26, borderRadius: 14 };
  return { width: width * 0.14, height: height * 0.09, fontSize: 28, borderRadius: 16 };
};

const pinDotSize = getPinDotSize();

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  header: {
    paddingHorizontal: 20,
    paddingTop: 16,
    paddingBottom: 8,
  },
  loginWithPinButton: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  pinIcon: {
    width: 16,
    height: 16,
    borderRadius: 8,
    backgroundColor: '#8B5CF6',
    marginRight: 8,
  },
  loginWithPinText: {
    fontSize: 14,
    color: '#8B5CF6',
    fontWeight: '600',
  },
  content: {
    flex: 1,
    paddingHorizontal: 24,
    paddingTop: 16,
    alignItems: 'center',
  },
  logoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  logoSquare: {
    width: 125,
    height: 50,
    borderRadius: 6,
    marginRight: 2,
    resizeMode: 'contain',
  },
  logoText: {
    fontFamily: 'Montserrat',
    fontSize: 24,
    fontWeight: '700',
    color: '#333333',
    letterSpacing: -0.5,
  },
  greeting: {
    fontFamily: 'SF Pro Display',
    fontSize: 24,
    fontWeight: '700',
    color: '#000000',
    marginBottom: 8,
  },
  instruction: {
    fontFamily: 'SF Pro Display',
    fontSize: 16,
    color: '#606060',
    marginBottom: 24,
    textAlign: 'center',
  },
  pinDotsContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 16,
    gap: width * 0.02,
    paddingHorizontal: width * 0.05,
  },
  pinDot: {
    width: pinDotSize.width,
    height: pinDotSize.height,
    borderRadius: pinDotSize.borderRadius,
    backgroundColor: '#ECECEC',
    borderWidth: 2,
    borderColor: '#E5E7EB',
    justifyContent: 'center',
    alignItems: 'center',
  },
  pinDotActive: {
    borderColor: '#000',
    backgroundColor: '#FFFFFF',
  },
  pinDotFilled: {
    borderColor: '#E5E7EB',
    backgroundColor: '#F3F4F6',
  },
  pinDotError: {
    borderColor: '#DC2626',
    backgroundColor: '#FFFFFF',
  },
  pinDotText: {
    marginTop: 6,
    fontSize: pinDotSize.fontSize,
    color: '#000',
    fontWeight: '900',
    textAlign: 'center',
    lineHeight: pinDotSize.fontSize * 1.1,
    fontFamily: 'SF Pro Display',
  },
  pinDotTextError: {
    color: '#DC2626',
  },
  cursor: {
    width: 2,
    height: pinDotSize.height * 0.37,
    backgroundColor: '#DC2626',
  },
  errorCursor: {
    width: 3,
    height: pinDotSize.height * 0.54,
    backgroundColor: '#DC2626',
  },
  errorContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#DC2626',
    paddingVertical: 12,
    paddingHorizontal: 6,
    borderRadius: 24,
    marginTop: 8,
    marginBottom: 16,
    width: '100%',
  },
  errorIcon: {
    marginRight: 4,
    marginLeft: 4,
  },
  errorIconText: {
    color: '#ffffffff',
    fontSize: 14,
    fontWeight: '700',
    marginRight: 10,
  },
  errorText: {
    fontFamily: 'SF Pro Display',
    alignItems: 'center',
    flex: 1,
    fontSize: 14,
    color: '#FFFFFF',
    fontWeight: '500',
  },
  passwordLoginButton: {
    alignItems: 'center',
  },
  passwordLoginText: {
    fontFamily: 'SF Pro Display',
    fontSize: 16,
    color: '#000000',
    fontWeight: '400',
  },
  keypadContainer: {
    paddingHorizontal: 16,
    paddingBottom: 10,
  },
  keypadRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 4,
  },
  numberButton: {
    width: buttonSize * 1.20,
    height: buttonSize * 0.55,
    borderRadius: 18,
    backgroundColor: '#F3F4F6',
    justifyContent: 'center',
    alignItems: 'center',
  },
  numberButtonText: {
    fontSize: 28,
    fontWeight: '400',
    color: '#333333',
  },
  biometricIconContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  biometricIcon: {
    width: 28,
    height: 28,
    borderRadius: 14,
    borderWidth: 2,
    borderColor: '#333333',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
  },
  biometricDot: {
    width: 6,
    height: 6,
    borderRadius: 3,
    backgroundColor: '#333333',
  },
  backspaceIcon: {
    fontSize: 24,
    color: '#333333',
  },
  // Touch ID Modal Styles
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    paddingHorizontal: 20,
    paddingBottom: 20,
  },
  touchIdModal: {
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    width: '100%',
    maxWidth: 320,
    position: 'relative',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.25,
    shadowRadius: 20,
    elevation: 10,
  },
  modalCloseButton: {
    position: 'absolute',
    top: 16,
    right: 16,
    zIndex: 1,
    padding: 4,
  },
  modalContent: {
    padding: 24,
    paddingTop: 32,
    alignItems: 'center',
  },
  modalTitle: {
    fontFamily: 'SF Pro Display',
    fontSize: 20,
    fontWeight: '700',
    color: '#000000',
    textAlign: 'center',
    marginBottom: 12,
  },
  modalDescription: {
    fontFamily: 'SF Pro Display',
    fontSize: 14,
    color: '#666666',
    textAlign: 'center',
    lineHeight: 20,
    marginBottom: 32,
    paddingHorizontal: 8,
  },
  fingerprintIconContainer: {
    width: 120,
    height: 120,
    borderRadius: 60,
    backgroundColor: '#F3F4F6',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 32,
  },
  faceIconContainer: {
    width: 140,
    height: 140,
    borderRadius: 70,
    backgroundColor: '#000000',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 32,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowOpacity: 0.3,
    shadowRadius: 16,
    elevation: 8,
  },
  modalCancelButton: {
    backgroundColor: '#ffffffff',
    borderRadius: 12,
    paddingVertical: 12,
    paddingHorizontal: 100,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#D1D5DB',
  },
  modalCancelText: {
    fontFamily: 'SF Pro Display',
    fontSize: 16,
    fontWeight: '600',
    color: '#333333',
  },
});