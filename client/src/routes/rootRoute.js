import Login from 'components/Login'


function createRootRoute (store) {

  const rootRoute = {
    path: '/',
    indexRoute: {
      component: Login,
    },
    childRoutes: [
    ]
  }


  return rootRoute

}


export default createRootRoute;
