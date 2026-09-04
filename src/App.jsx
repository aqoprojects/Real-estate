import { useState } from 'react'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
// import Homepage from './Homepage.jsx'
import LandingPage from './Pages/LandingPage.jsx'
import HousesPage from './Pages/HousesPage.jsx'
import HousePage from './Pages/HousePage'
function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<LandingPage/>}/>
        {/* <Route path='/design' element={<Homepage/>} /> */}
        <Route path='/search' element={<HousesPage/>} />
        <Route path='/house' element={<HousePage/>} />
      </Routes>      
    </BrowserRouter>
  )
}

export default App
