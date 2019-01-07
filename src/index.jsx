import React from 'react';
import { render } from 'react-dom';

import './scss/app';

import { store, history } from './store/getStore';
import Root from './Components/Root';

render(
  <Root 
    store={store}
    history={history} 
  />,
  document.getElementById('app')
);
