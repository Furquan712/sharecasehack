import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';
import App from './App';
import { ContextProvider } from './contexts/ContextProvider';
import UserContextProvider from './contexts/userContextProvider';

ReactDOM.render(
  <React.StrictMode>
  <UserContextProvider>
    <ContextProvider>
      <App />
    </ContextProvider>
    </UserContextProvider>
  </React.StrictMode>,
  document.getElementById('root'),
);
