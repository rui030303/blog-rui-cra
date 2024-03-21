import React from 'react'
import ReactDOM from 'react-dom/client'

import { RouterProvider } from 'react-router-dom'
import router from './router/router.js'
import { AuthContextProvider } from './context/authContext.js'

ReactDOM.createRoot(document.getElementById('root')).render(
  <>
  <AuthContextProvider>
  <RouterProvider router={router}>
    
  </RouterProvider>
  </AuthContextProvider>
  </>
)
