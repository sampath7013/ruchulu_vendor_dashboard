import React from 'react'
import LandingPage from './vendorDashboard/pages/LandingPage'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<LandingPage />} />
      </Routes>
    </div>
  )
}

export default App
