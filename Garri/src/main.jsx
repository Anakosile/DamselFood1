import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './index.css'
import Details from './DetailsPage'
import Error from './notFoundPage'
import LandingPage from './Landingpage'
import HomePage from './HomePage'


function App () {
const router = createBrowserRouter([
    {
      path: '/',
      element: <LandingPage/>,
      children: [
        {
          index: true,
          element: <HomePage/>
        },
        {
          path: 'details/:id',
          element: <Details/>
        }
      ]
    },
    {
      path: '*',
      element: <Error />
    }
  ])
  return <RouterProvider router={router}/>
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
