// @flow
import React from 'react';
import { Provider } from 'react-redux';
import { AsyncStorage } from 'react-native';
import App from './native/components/App';
import configureStore from './configureStore';

const store = configureStore(
  {
    initialState: {},
    platformDeps: {},
    platformEpics: [],
    platformReducers: {},
  },
  AsyncStorage,
);

const Native = () =>
  (<Provider store={store}>
    <App />
  </Provider>);

export default Native;
