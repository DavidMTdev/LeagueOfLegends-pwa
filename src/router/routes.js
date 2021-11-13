import Login from '../views/Login'
import Champions from '../views/Champions'
import Items from '../views/Items'
import Builds from '../views/Builds'

const routes = [
  {
    path: '/',
    component: Login
  },
  {
    path: '/champions',
    component: Champions
  },
  {
    path: '/items',
    component: Items
  },
  {
    path: '/builds',
    component: Builds,
    meta: { requiresAuth: false }
  }
]

export default routes
