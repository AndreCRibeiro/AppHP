import Api from '../../services/api';
import { call, put } from 'redux-saga/effects';

import { Creators as LoginActions } from '../ducks/login';

export function* getLoginRequest(action) {
  try {
    const response = yield call(Api.user.loginUser,
      { email: action.payload.data.inputSave, password: action.payload.data.password });
      yield put(LoginActions.getLoginSucsses(response.data, action.payload.data.inputSave));
  } catch (err) {
    yield put(LoginActions.getLoginFailure(err));
  } 
}