import { useCallback, useEffect, useMemo, useState } from 'react';

interface UseVerificationCodeParams {
  otpLength?: number;
  resendSeconds?: number;
  revealDurationMs?: number;
  onComplete?: (code: string) => void;
}

export const useVerificationCode = ({
  otpLength = 6,
  resendSeconds = 60,
  revealDurationMs = 500,
  onComplete,
}: UseVerificationCodeParams = {}) => {
  const [code, setCode] = useState('');
  const [seconds, setSeconds] = useState(resendSeconds);
  const [visibleDigits, setVisibleDigits] = useState<{ [key: number]: boolean }>({});

  useEffect(() => {
    if (seconds <= 0) return;
    const timer = setInterval(() => setSeconds(prev => prev - 1), 1000);
    return () => clearInterval(timer);
  }, [seconds]);

  const formattedTimer = useMemo(() => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
  }, [seconds]);

  const handleNumberPress = useCallback(
    (num: string) => {
      if (code.length < otpLength) {
        const nextIndex = code.length;
        setCode(prev => prev + num);
        setVisibleDigits(prev => ({ ...prev, [nextIndex]: true }));

        setTimeout(() => {
          setVisibleDigits(prev => ({ ...prev, [nextIndex]: false }));
        }, revealDurationMs);
      }
    },
    [code.length, otpLength, revealDurationMs]
  );

  const handleBackspace = useCallback(() => {
    if (code.length > 0) {
      const nextIndex = code.length - 1;
      setCode(prev => prev.slice(0, -1));
      setVisibleDigits(prev => {
        const updated = { ...prev };
        delete updated[nextIndex];
        return updated;
      });
    }
  }, [code.length]);

  const handleResend = useCallback(() => {
    if (seconds === 0) {
      setSeconds(resendSeconds);
      setCode('');
      setVisibleDigits({});
    }
  }, [resendSeconds, seconds]);

  const isComplete = code.length === otpLength;

  const handleContinue = useCallback(() => {
    if (isComplete) {
      onComplete?.(code);
    }
  }, [code, isComplete, onComplete]);

  const resetCode = useCallback(() => {
    setCode('');
    setVisibleDigits({});
  }, []);

  return {
    code,
    seconds,
    formattedTimer,
    otpLength,
    isComplete,
    visibleDigits,
    handleNumberPress,
    handleBackspace,
    handleResend,
    handleContinue,
    resetCode,
  };
};
