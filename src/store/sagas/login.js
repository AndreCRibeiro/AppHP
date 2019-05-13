import Api from '../../services/api';
import { call, put } from 'redux-saga/effects';

import { Creators as LoginActions } from '../ducks/login';

export function* getLoginRequest(action) {
  try {
    const response = yield call(Api.user.loginUser,
      { matricula: action.payload.data.inputSave, pass: action.payload.data.password });
    
    if (response.status === 206) {
      yield put(LoginActions.getLoginFailure(response.data.mensagem));
    } else {
      yield put(LoginActions.getLoginSucsses(response.data, action.payload.data.inputSave));
    }    
  } catch (err) {
    yield put(LoginActions.getLoginFailure(err));
  } 
}
