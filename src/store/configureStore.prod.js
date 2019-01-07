import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { routerMiddleware } from 'connected-react-router';
import { createHashHistory } from 'history';

import sagas from '../sagas';
import CreateRootReducer from '../reducers/index';

const sagaMiddleware = createSagaMiddleware();
const history = createHashHistory();

const store = createStore(
  CreateRootReducer(history),
  {},
  applyMiddleware(sagaMiddleware, routerMiddleware(history))
);

sagas.map(saga => sagaMiddleware.run(saga));
sagaMiddleware.run(navigateDaemon);

export { store, history };
