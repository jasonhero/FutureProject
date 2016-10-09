import * as c from './constants'


export default (state = {
  token: '',
  error: ''
}, action) => {
  switch (action.type) {
    case c.LOGIN_SUCCESS:
      return Object.assign({}, state, { token: action.token })
    case c.LOGIN_FAILURE:
      return Object.assign({}, state, { error: action.error})
    default:
      return state;
  }
}
