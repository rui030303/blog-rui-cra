import {createBrowserRouter} from 'react-router-dom'
import Write from '../page/Write/index.js'
import Layout from '../page/Layout/index.js'
import Login from '../page/Login/index.js'
import Home from '../page/Home/index.js'
import Register from '../page/Register/index.js'
import Single from '../page/Single/index.js'

const router = createBrowserRouter([
    {
        path:'/',
        element: <Layout/>,
        children:[
            {
                path:'/',
                element: <Home/>
            },
            {
                path:'/write',
                element: <Write/>
            },
            {
                path:'/posts/:id',
                element: <Single/>
            }
        ]
    },
    {
        path:'/login',
        element: <Login/>
    },
    {
        path:'/register',
        element: <Register/>
    }
])

export default router