import { loginFlow } from './features/authentication/sagas'


export default function* rootSaga() {
  yield [
    loginFlow()
  ]
}
