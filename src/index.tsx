```tsx
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom';
import { UserContextProvider } from './auth/UserContext';
import { RideContextProvider } from './ride/RideContext';
import { WalletContextProvider } from './user/WalletContext';
import { LocalizationContextProvider } from './localization/Localization';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <UserContextProvider>
        <RideContextProvider>
          <WalletContextProvider>
            <LocalizationContextProvider>
              <App />
            </LocalizationContextProvider>
          </WalletContextProvider>
        </RideContextProvider>
      </UserContextProvider>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);
```