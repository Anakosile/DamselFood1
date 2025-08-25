import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import LandingPage from './Landing'
import Navbar from './nabar'

export default function App () {

  const router = createBrowserRouter([
    {
      path: '/',
      element: <LandingPage/>,
      children: ([
        {
          path: 'details',
          index: true
        },
        {
          path: 'navbar',
          element: <Navbar/>
        }

      ])
    }
  ])

  return <RouterProvider router={router}/>
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
