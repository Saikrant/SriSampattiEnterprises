import { StrictMode } from 'react'
import { ViteReactSSG } from 'vite-react-ssg'
import './styles/global.css'
import App from './App.jsx'
import routes from './routes.jsx'

export const createRoot = ViteReactSSG(
  {
    routes: [
      {
        path: '/',
        element: <App />,
        children: routes
      }
    ]
  },
  (ctx) => {
    // context setup
  }
)
