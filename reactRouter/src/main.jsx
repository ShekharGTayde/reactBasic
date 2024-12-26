import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import Layout from './Layout.jsx'
import Home from './components/home/Home.jsx'
import About from './components/about/About.jsx'
import ContactMe from './components/contactMe/ContactMe.jsx'




const router=createBrowserRouter(  //it is used to create a route to their component
  createRoutesFromElements(  //create a route from their element
    <Route path="/" element={<Layout/>}>  
    <Route path="" element={<Home/>} /> 
    <Route path="about" element={<About/>} /> 
    <Route path="contactMe" element={<ContactMe/>} /> 
   </Route>
   //in route path is used for giving a ref to URL and element for showing which compnent is used 
  )
)


createRoot(document.getElementById('root')).render(
  <StrictMode>
   <RouterProvider router={router} />   
  </StrictMode>,
)
//router provider hook is provide a route the given declare components,it just like a wrapper for its routes