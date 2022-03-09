import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './store/store';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { persistStore } from "redux-persist";
import { PersistGate } from "redux-persist/integration/react";

const persistor = persistStore(store);

ReactDOM.render(
  <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
      <React.StrictMode>
      <App />
      </React.StrictMode>
      </PersistGate>
  </Provider>,
  document.getElementById('root')
);