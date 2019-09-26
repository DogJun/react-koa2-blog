import * as React from 'react'
import { RouteProps, Route, Switch } from 'react-router-dom'
import Loading from '../components/Loading'

const { lazy, Suspense } = React
const Home = lazy(() => import(/* webpackChunkName: "home" */ '../page/Home'))
const routes: RouteProps[] = [
  {
    path: '/',
    exact: true,
    component: Home,
  },
]

const generateRoutes = (routes: RouteProps[]) => (
  <Suspense fallback={<Loading />}>
    <Switch>
      {routes.map((route, index) => {
        const { path, exact, component } = route
        return (
          <Route
            key={index}
            path={path}
            exact={exact}
            component={component}
          ></Route>
        )
      })}
    </Switch>
  </Suspense>
)

const Routes = generateRoutes(routes)
export default Routes
