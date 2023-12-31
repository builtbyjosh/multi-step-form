import { ChakraProvider, extendTheme } from '@chakra-ui/react';
import React, { StrictMode } from 'react';
import * as ReactDOM from 'react-dom/client';
import App from './App';
import '@fontsource/ubuntu';
import { FormProvider } from './context/FormContext';

const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);
const theme = extendTheme({
  colors: {
    'marine-blue': 'hsl(213, 96%, 18%)',
    'purplish-blue': 'hsl(243, 100%, 62%)',
    'pastel-blue': 'hsl(228, 100%, 84%)',
    'light-blue': 'hsl(206, 94%, 87%)',
    'strawberry-red': 'hsl(354, 84%, 57%)',
    'cool-gray': 'hsl(231, 11%, 63%)',
    'light-gray': 'hsl(229, 24%, 87%)',
    magnolia: 'hsl(217, 100%, 97%)',
    alabaster: 'hsl(231, 100%, 99%)',
    white: 'hsl(0, 0%, 100%)',
  },
  fonts: {
    body: 'Ubuntu',
    size: '16px',
  },
  styles: {
    global: {
      body: {
        bg: 'light-gray',
      },
    },
  },
});

root.render(
  <StrictMode>
    <ChakraProvider theme={theme}>
      <FormProvider>
        <App />
      </FormProvider>
    </ChakraProvider>
  </StrictMode>
);
