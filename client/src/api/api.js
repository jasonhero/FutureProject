require('es6-promise').polyfill();
import 'isomorphic-fetch';
import _ from 'lodash';

class API {
  constructor(url) {
    this.service = url;
  }

  mergeEndpoint(endpoint) {
    return `${this.service}${endpoint}`
  }

  checkStatus(response) {
    if (response.ok) {
      return response;
    }

    throw new Error(response.statusCode)
  }

  getDefaultOptions() {
    return {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      }
      timeout: 10000,
      mode: 'cors',
    }
  }

  makeRequest(endpoint, options) {
    fetch(this.mergeEndpoint(endpoint), this.getDefaultOptions())
      .then(this.checkStatus)
      .then(response => response.json())
  }
}


const APP_API = new API('');

export default APP_API;
