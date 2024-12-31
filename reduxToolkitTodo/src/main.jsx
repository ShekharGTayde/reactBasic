import React from 'react';
import App from './App.jsx';
import { createRoot } from 'react-dom/client';
import './index.css';
import { store } from './App/Store.jsx'; // Adjust path if needed
import { Provider } from 'react-redux';
import { StrictMode } from 'react';

const root = createRoot(document.getElementById('root'));

root.render(
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>
);
