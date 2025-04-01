import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Header from './components/custom/Header'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Skills from './components/custom/Skills'
import Skillover from './components/custom/Skillover'
import Project from './components/custom/Project'
import Creative from './components/custom/Creative'
import Certificate from './components/custom/Certificate'


const router=createBrowserRouter([
  {
    path:'/',
    element:<App/>
  },
  {
    path:'/skillover',
    element:<Skillover/>
  },
  {
    path:'/project',
    element:<Project/>
  },
  {
    path:'/creative',
    element:<Creative/>
  },
  {
    path:'/certificate',
    element:<Certificate/>
  }

  
  
])
createRoot(document.getElementById('root')).render(
  <StrictMode>
  <RouterProvider router={router} />
  </StrictMode>,
)
