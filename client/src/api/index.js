import FetchApi from './fetchApi'

const api = new FetchApi('http://test.com')

const endpoints = {
  login: (username, password) => (
    {
      endpoint: '/login',
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
