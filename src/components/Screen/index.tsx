import React from 'react';
import {
  Appearance,
  KeyboardAvoidingView,
  Platform,
  StatusBar,
} from 'react-native';

import { Box, BoxProps } from '@components';
import { useAppSafeArea, useAppTheme } from '@hooks';

import { ScrollViewContainer, ViewContainer, ScreenHeader } from './components';

export interface ScreenProps extends BoxProps {
  children: React.ReactNode;
  HeaderComponent?: React.ReactNode;
  canGoBack?: boolean;
  isHome?: boolean;
  scrollable?: boolean;
  title?: string;
}

export function Screen({
  children,
  canGoBack = false,
  isHome = false,
  scrollable = false,
  style,
  title,
  HeaderComponent,
  ...boxProps
}: ScreenProps) {
  const { bottom, top } = useAppSafeArea();
  const { colors } = useAppTheme();

  const colorSchema = Appearance.getColorScheme();

  const Container = scrollable ? ScrollViewContainer : ViewContainer;
  return (
    <>
      <StatusBar
        barStyle={colorSchema === 'dark' ? 'light-content' : 'dark-content'}
        backgroundColor={colors.background}
      />
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
        <Box
          style={{ backgroundColor: colors.background, paddingTop: top }}
          alignContent="center">
          <ScreenHeader
            HeaderComponent={HeaderComponent}
            canGoBack={canGoBack}
            isHome={isHome}
            title={title}
          />
        </Box>
        <Container backgroundColor={colors.background}>
          <Box
            paddingHorizontal="s16"
            style={[{ paddingTop: top, paddingBottom: bottom }, style]}
            {...boxProps}>
            {children}
          </Box>
        </Container>
      </KeyboardAvoidingView>
    </>
  );
}
