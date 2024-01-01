import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'


import BusinessUser from './component/BusinessUser.jsx'
import { createBrowserRouter } from 'react-router-dom'
import BusinessAdmin from './component/BusinnesAdmin.jsx'
import ShowServices from './component/showServices.jsx'
import ShowMeeting from './component/showMeeting.jsx'
import { RouterProvider } from 'react-router-dom'

const router = createBrowserRouter([
  {
    path: '/',
    element: <BusinessUser/>,
    errorElement: <div>error contants</div>,
  }
  ,
  {
    path: '/admin',
    element:<BusinessAdmin/>,
    errorElement: <div>error contants</div>,
    children: [
      {
        path: 'services',
        element:<ShowServices/>,
        errorElement: <div>error contant not found</div>,
      },
      {
        path: 'meeting',
        element: <ShowMeeting/>,
        errorElement: <div>error contant not found</div>
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>  
    <RouterProvider router={router} />
  </React.StrictMode>,
)



// ReactDOM.createRoot(document.getElementById('root')).render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
// )
