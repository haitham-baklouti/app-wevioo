import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import initStore from './config/store'
import './index.css';
import AppComponent from './App';

const store = initStore;
const root = document.getElementById('root') as HTMLElement;
const render = (Component: any) =>
  ReactDOM.render(
    <Provider store={store}>
      <Component />
    </Provider>,
    root
  );

render(AppComponent);
