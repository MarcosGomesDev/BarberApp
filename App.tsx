import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { ThemeProvider } from '@shopify/restyle';
import { theme } from '@theme';
import { Router } from '@routes';
import { Toast } from '@components';

function App() {
  return (
    <>
      <SafeAreaProvider>
        <ThemeProvider theme={theme}>
          <Router />
          <Toast />
        </ThemeProvider>
      </SafeAreaProvider>
    </>
  );
}

export default App;
