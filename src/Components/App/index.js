import React from 'react';
import Routes from '../Routes';
import {Provider} from 'react-redux';
import Store from '../../store';

export default () => (
  <Provider store={Store}>
    <Routes />
  </Provider>
);
