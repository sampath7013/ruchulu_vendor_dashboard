import React from 'react'
import NotFound from './vendorDashboard/components/forms/NotFound'
import LandingPage from './vendorDashboard/pages/LandingPage'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<LandingPage />} />
        <Route path='/*' element={<NotFound />} />
      </Routes>
    </div>
  )
}

export default App
