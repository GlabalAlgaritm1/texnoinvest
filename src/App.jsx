import React from 'react'
import 'bootstrap-icons/font/bootstrap-icons.css';
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router'
import Mainlayout from './Layout/Mainlayout'
import Home from './Pages/Home'
import PNF from './Pages/PNF';
import Services from './Pages/Services';
import Faq from './Pages/Faq';
import Career from './Pages/Career';
import Get from './Pages/Get';
import Production from './Pages/Production';
import New from './Pages/New';
import Laminated from './Pages/Laminated';
import Float from './Pages/Float';
import Bend from './Pages/Bend';
import Fasade from './Pages/Fasade';
import Artistic from './Pages/Artistic';
import ArtisticM from './Pages/ArtisticM';
import Furniture from './Pages/Furniture';
import Plastic from './Pages/Plastic';
import MoreOne from './Pages/MoreOne';
import MoreThree from './Pages/MoreThree';
import MoreTwo from './Pages/MoreTwo';


const App = () => {

  const routes = createBrowserRouter(
    createRoutesFromElements( 
      <>
        <Route element={<Mainlayout />}>
          <Route path='/' element={<Home />} />
          <Route path='/Services' element={<Services />} />
          <Route path='/Faq' element={<Faq />} />
          <Route path='/New' element={<New />} />

          <Route path='/New/MoreOne' element={<MoreOne />} />
          <Route path='/New/MoreTwo' element={<MoreTwo />} />
          <Route path='/New/MoreThree' element={<MoreThree/>} />


          <Route path='/Production' element={<Production />} />
          <Route path='/Career' element={<Career />} />
          <Route path='/Get' element={<Get />} />
          <Route path='/Laminated' element={<Laminated />} />
          <Route path='/Float' element={<Float />} />
          <Route path='/Bend' element={<Bend />} />
          <Route path='/Fasade' element={<Fasade />} />
          <Route path='/Artistic' element={<Artistic />} />
          <Route path='/ArtisticM' element={<ArtisticM />} />
          <Route path='/Furniture' element={<Furniture />} />
          <Route path='/Plastic' element={<Plastic />} />

        </Route>

        <Route path='*' element={<PNF />} />
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