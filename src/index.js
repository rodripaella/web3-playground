import React from 'react';
import ReactDOM from 'react-dom/client'; // Correct import
import './index.css';
import { PrivyProvider } from '@privy-io/react-auth';
import App from './App';
import reportWebVitals from './reportWebVitals';

const privyConfig = {
  appId: 'clw7bcjee07h5tq011ihw54pf', // Replace with your Privy app ID
  config: {
    appearance: {
      theme: 'light',
      accentColor: '#676FFF',
      logo: 'https://your-logo-url',
    },
    embeddedWallets: {
      createOnLogin: 'users-without-wallets',
    },
  },
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <PrivyProvider {...privyConfig}>
      <App />
    </PrivyProvider>
  </React.StrictMode>
);

reportWebVitals();
