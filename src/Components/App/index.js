import React from 'react';
import Routes from '../Routes';
import Store from '../../store';
import {Provider} from 'react-redux';

export default () => (
  <Provider store={Store}>
    <Routes />
  </Provider>
);
