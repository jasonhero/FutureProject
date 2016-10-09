export function setToken({ token }) {
  window.localStorage.setItem('token', token)
}

export function clearToken() {
  window.localStorage.removeItem('token')
}
