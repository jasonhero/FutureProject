import FetchApi from './fetchApi'

const api = new FetchApi('http://localhost:4100')

const endpoints = {
  login: (username, password) => (
    {
      endpoint: '/account/login',
      request: {
        method: 'POST',
        body: {
          username,
          password,
        }
      }
    }
  ),
}

export default api.mapToApi(endpoints)
