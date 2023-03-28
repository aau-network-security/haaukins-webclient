import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from'react-redux';
import { ChakraProvider } from "@chakra-ui/react";
import store from './app/store'
import 'react-tooltip/dist/react-tooltip.css'

import App from './App';
import './App.css'
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ChakraProvider>
    <Provider store={store}>
      <App />
    </Provider>
  </ChakraProvider>
);


