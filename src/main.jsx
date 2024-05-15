import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { Add } from './pages/add.jsx'
import { Layout } from './layout/layout.jsx'
import { Edit } from './pages/edit.jsx'


const Router = createBrowserRouter([

  {
    path: "/",
    element: <Layout />,
    children: [
      {
      path: "/",
      element: <App />
      },
      {
        path : "/add",
        element : <Add/>
      },
      {
        path : '/edit/:id',
        element : <Edit/>
      },
    ]
  },

]



)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={Router} />
  </React.StrictMode>,
)
