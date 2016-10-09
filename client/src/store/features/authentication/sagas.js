import * as c from './constants'
import { take, call, put, fork, cancel } from 'redux-saga/effects'

import Api from 'api/index'
import { clearToken, setToken } from 'utils/storage'

function* authorize(user, password) {
  try {
    const token = yield call(Api.login, user, password)
    yield put({ type: c.LOGIN_SUCCESS, token })
    yield call(setToken, { token })
    return token
  } catch (error) {
    yield put({ type: c.LOGIN_FAILURE, error })
  } finally {
    if (yield cancelled()) {

    }
  }
}



export function* loginFlow() {
  while (true) {
      const { user, password } = yield take(c.LOGIN_REQUEST)

      const task = yield fork(authorize, user, password)
      const action = yield take([c.LOGOUT, c.LOGIN_FAILURE])

      if (action.type === c.LOGOUT) yield cancel(task);

      yield call(clearToken)
  }
}
