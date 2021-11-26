import Login from '../views/Login'
import Champions from '../views/Champions'
import Items from '../views/Items'
import Builds from '../views/Builds'
import Champion from '../views/Champion'

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
    path: '/champions/:name',
    component: Champion
  },
  {
    path: '/items',
    component: Items
  },
  {
    path: '/builds',
    component: Builds,
    meta: { requiresAuth: true }
  }
]

export default routes
