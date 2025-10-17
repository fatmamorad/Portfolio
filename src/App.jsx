import { useState } from 'react'
import { createBrowserRouter } from "react-router";
import  '@fortawesome/fontawesome-free/css/all.min.css'
import './App.css'
import Layout from './Components/Layout/Layout';
import { RouterProvider } from 'react-router-dom';
import Home from './Components/Home/Home';
import { Toaster } from 'react-hot-toast';
const routes = createBrowserRouter([
  { path: "/", element: <Layout/>,children:[
    {index:true, element: <Home/>}
  ]}
]);
function App() {

  const [count, setCount] = useState(0)

  return (
    <>
    <div className=''>
      
      <Toaster/>
       <RouterProvider router={routes}>
         
        </RouterProvider> 
       </div>
    </>
  )
}

export default App
