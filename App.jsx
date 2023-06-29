import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { ThemeProvider } from 'styled-components/native';
import { StackRoutes } from './src/routes/index';

import { Theme } from './src/styles/theme';

export default function App() {
  return (
    <ThemeProvider theme={Theme}>
      <StatusBar
        translucent
        backgroundColor="transparent"
      />
      <StackRoutes />
    </ThemeProvider>
  );
}
