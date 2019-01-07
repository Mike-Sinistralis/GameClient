import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import * as effects from 'redux-saga/effects';
import * as lodash from 'lodash';
import * as immutable from 'immutable';
import { routerMiddleware } from 'connected-react-router';
import { createHashHistory } from 'history';

import sagas from '../sagas';
import CreateRootReducer from '../reducers';

const sagaMiddleware = createSagaMiddleware();
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const history = createHashHistory();

const store = createStore(
  CreateRootReducer(history),
  {},
  composeEnhancers(
    applyMiddleware(sagaMiddleware, routerMiddleware(history))
  )
);

sagas.map(saga => sagaMiddleware.run(saga));
sagaMiddleware.run(navigateDaemon);

window.store = store;
window.lodash = lodash;
window.immutable = immutable;
window.saga = {
  effects,
  run: sagaMiddleware.run,
};

export { store, history };
