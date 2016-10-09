import { AUTH_CHECK } from 'store/features/authentication/constants';

function createRootRoute (store) {

  const checkToken = () => {
    store.dispatch({ type: AUTH_CHECK })
  }

  const rootRoute = {
    path: '/',
    indexRoute: {
      component: require('./Login').default,
    },
    childRoutes: [
      {
        onEnter: checkToken,
        path: '/dashboard',
        component: require('containers/AppWrap').default,
        childRoutes: [
          {
            path: '/',
            component: require('./Dashboard').default
          }
        ]
      }
    ]
  }


  return rootRoute

}


export default createRootRoute;
