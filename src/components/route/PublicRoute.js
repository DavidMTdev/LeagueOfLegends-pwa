import { Route } from 'react-router-dom'

// eslint-disable-next-line react/prop-types
const PrivateRoute = ({ children, ...rest }) => {
  return <Route {...rest} render={() => children} />
}

export default PrivateRoute
