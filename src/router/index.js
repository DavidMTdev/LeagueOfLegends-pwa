import { BrowserRouter, Switch, Redirect } from 'react-router-dom'

import routes from './routes'
import { PrivateRoute, PublicRoute } from '../components/route'
import Header from '../components/header'

const Router = () => {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        {routes.map(
          (
            {
              component: Views,
              path,
              exact = true,
              meta = { requiresAuth: false, admin: false }
            },
            index
          ) =>
            meta.requiresAuth ? (
              <PrivateRoute key={index} path={path} exact={exact}>
                <Views />
              </PrivateRoute>
            ) : (
              <PublicRoute key={index} path={path} exact={exact}>
                <Views />
              </PublicRoute>
            )
        )}
        <Redirect from='/*' to='/' />
      </Switch>
    </BrowserRouter>
  )
}

export default Router
