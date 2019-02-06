import App from './app'
import Home from './components/pages/home/home'
import About from './components/pages/about/about'
import Users from './components/pages/users/users'
import Admins from './components/pages/admins/admins'
import NotFound from './components/pages/not-found/not-found'

export default [
  {
    ...App,
    routes: [
      {
        ...Home,
        path: '/',
        exact: true
      },
      {
        ...About,
        path: '/about'
      },
      {
        ...Users,
        path: '/users'
      },
      {
        ...Admins,
        path: '/admins'
      },
      {
        ...NotFound
      }
    ]
  }
]
