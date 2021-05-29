import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import { GlobalStyle } from './GlobalStyled'
import { store } from './Store'

ReactDOM.render(
  <React.StrictMode>
      <Provider store={store} >
        <BrowserRouter>
          <GlobalStyle/>
          <App />
        </BrowserRouter>
      </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

