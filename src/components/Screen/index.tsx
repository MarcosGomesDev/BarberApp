import React from 'react';
import {
  Appearance,
  KeyboardAvoidingView,
  Platform,
  ScrollViewProps,
  StatusBar,
} from 'react-native';

import { Box, BoxProps } from '@components';
import { useAppSafeArea, useAppTheme } from '@hooks';

import { ScreenHeader, ScrollViewContainer, ViewContainer } from './components';

export interface ScreenProps
  extends BoxProps,
    Omit<ScrollViewProps, 'children'> {
  children: React.ReactNode;
  HeaderComponent?: React.ReactNode;
  canGoBack?: boolean;
  isHome?: boolean;
  scrollable?: boolean;
  hasHeader?: boolean;
  title?: string;
  statusBarTranslucent?: boolean;
  scrollPointShowBackgroundStatusBar?: number;
}

export function Screen({
  children,
  canGoBack = false,
  isHome = false,
  statusBarTranslucent = false,
  scrollPointShowBackgroundStatusBar = 1,
  hasHeader = false,
  scrollable = true,
  style,
  title,
  HeaderComponent,
  ...boxProps
}: ScreenProps) {
  const { bottom, top } = useAppSafeArea();
  const { colors } = useAppTheme();

  const [scrolled, setScrolled] = React.useState(false);

  const colorSchema = Appearance.getColorScheme();

  const Container = scrollable ? ScrollViewContainer : ViewContainer;

  function handleScroll(event: any) {
    const scrollPosition = event.nativeEvent.contentOffset.y;
    const threshold = scrollPointShowBackgroundStatusBar;

    if (scrollPosition > threshold) {
      setScrolled(true);
    } else if (scrollPosition < threshold) {
      setScrolled(false);
    }
  }

  return (
    <>
      <StatusBar
        barStyle={
          statusBarTranslucent || colorSchema === 'dark'
            ? 'light-content'
            : 'dark-content'
        }
        animated
        showHideTransition={'fade'}
        backgroundColor={scrolled ? colors.background : 'transparent'}
        translucent={statusBarTranslucent}
      />
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
        {hasHeader && (
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
        )}
        <Container
          backgroundColor={colors.background}
          {...boxProps}
          onScroll={
            scrollable
              ? e => {
                  handleScroll(e);
                  boxProps.onScroll && boxProps.onScroll(e);
                }
              : undefined
          }>
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
