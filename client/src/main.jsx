import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

// Page components
import App from './App'
import Home from './components/Home'
import WineryIndex from './components/WineryIndex'
import WinerySingle from './components/WinerySingle'
import Register from './components/Register'
import Login from './components/Login'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: '/wineryIndex',
        element: <WineryIndex />
      },      {
        path: '/wineryIndex/:wineryId',
        element: <WinerySingle />
      },      {
        path: '/register',
        element: <Register />
      },      {
        path: '/login',
        element: <Login />
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)
