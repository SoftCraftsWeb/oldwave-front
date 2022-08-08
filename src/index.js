import React from 'react';
import ReactDOM from 'react-dom/client';
import App from 'App.jsx';
import 'presentation/assets/styles/index.scss';
import { BrowserRouter } from 'react-router-dom';
import reportWebVitals from 'reportWebVitals.js';
import { Provider } from 'react-redux';
import { store } from 'domain/helpers/store';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);

reportWebVitals();
