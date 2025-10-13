import { useState } from 'react'
import { createBrowserRouter } from "react-router";
import  '@fortawesome/fontawesome-free/css/all.min.css'
import './App.css'
import Layout from './Components/Layout/Layout';
import { RouterProvider } from 'react-router-dom';
import Home from './Components/Home/Home';
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
       <RouterProvider router={routes}/>  
       </div>
    </>
  )
}

export default App
