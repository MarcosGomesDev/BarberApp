import React, { useCallback, useEffect, useState } from 'react';
import { Animated, Dimensions } from 'react-native';

import { useToast, useToastService } from '@services';

import { ToasContent } from './components/ToastContent';
import { getStatusBarHeight } from 'react-native-status-bar-height';

const height = (Dimensions.get('screen').height * 3) / 100;

const DEFAULT_DURATION = 4000;

export function Toast() {
  const toast = useToast();
  const { hideToast } = useToastService();

  const [timer, setTimer] = useState<number | null>(null);

  const [pos] = useState(new Animated.Value(-(getStatusBarHeight() + height)));

  const runExitingAnimation = useCallback(() => {
    Animated.timing(pos, {
      toValue: -(getStatusBarHeight() + height),
      duration: 200,
      useNativeDriver: true,
    }).start(() => {
      hideToast();
      setTimer(null);
    });
  }, [pos, hideToast]);

  const runEnteringAnimation = useCallback(() => {
    Animated.timing(pos, {
      toValue: 0,
      duration: 140,
      useNativeDriver: true,
    }).start(() => {
      setTimer(toast?.duration || DEFAULT_DURATION);
    });
  }, [pos, toast?.duration]);

  useEffect(() => {
    if (toast) {
      runEnteringAnimation();
    }

    if (timer) {
      const timeout = setTimeout(() => {
        runExitingAnimation();
      }, timer);

      return () => clearTimeout(timeout);
    }
  }, [hideToast, runEnteringAnimation, runExitingAnimation, toast, timer]);

  if (!toast) {
    return null;
  }

  return (
    <Animated.View
      testID={'toast-message'}
      style={{
        position: 'absolute',
        alignSelf: 'center',
        transform: [{ translateY: pos }],
      }}>
      <ToasContent toast={toast} onPress={() => runExitingAnimation()} />
    </Animated.View>
  );
}
