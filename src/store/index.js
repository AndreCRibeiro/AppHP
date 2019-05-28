import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';

import sagas from './sagas';
import reducers from './ducks';

import Api from '../services/api';


const saveAuthToken = store => next => action => {
  if (action.type === 'login/GET_SUCSSES') {
    // after a successful login, update the token in the API
    Api.setToken(action.payload.response.token, action.payload.userID);
  }
  // continue processing this action
  return next(action);
}

const sagaMonitor = __DEV__ ? console.tron.createSagaMiddleware : null;
const sagaMiddleware = createSagaMiddleware({ sagaMonitor });

const middleware = [
  sagaMiddleware,
  saveAuthToken,
];

const createAppropriateStore = __DEV__ ? console.tron.createStore : createStore;
const store = createAppropriateStore(reducers, applyMiddleware(...middleware));

sagaMiddleware.run(sagas);

export default store;