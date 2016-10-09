function createRootRoute (store) {

  const rootRoute = {
    path: '/',
    indexRoute: {
      component: require('./Login').default,
    },
    childRoutes: [
      {
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
