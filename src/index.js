import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import finalProjectStore from './store/store'
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={finalProjectStore}>
      <App />
    </Provider>
  </React.StrictMode>
);