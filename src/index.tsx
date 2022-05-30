import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import initStore from './config/store'
import './index.css';
import AppComponent from './App';
import { persistStore } from 'redux-persist'
import { PersistGate } from 'redux-persist/integration/react'

const store = initStore;
const root = document.getElementById('root') as HTMLElement;
const render = (Component: any) =>
  ReactDOM.render(
    <Provider store={store}>
      <PersistGate
        persistor={persistStore(store)}
      >
        <Component />
      </PersistGate>
    </Provider>,
    root
  );

render(AppComponent);
