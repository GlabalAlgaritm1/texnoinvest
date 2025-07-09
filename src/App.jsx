import React from 'react'
import 'bootstrap-icons/font/bootstrap-icons.css';
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router'
import Mainlayout from './Layout/Mainlayout'
import Home from './Pages/Home'
import PNF from './Pages/PNF';
const App = () => {
  const routes = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route element={<Mainlayout />}>
          <Route path='/' element={<Home/>}/>
        </Route>

        <Route path='*' element={<PNF/>}/>
      </>
    )
  )

  return (
    <>
      <RouterProvider router={routes} />
    </>
  )
}

export default App