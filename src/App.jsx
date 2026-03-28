import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import ResetPassword from './pages/ResetPassword'
import Success from './pages/Success'
import './App.css'

function App() {
  return (
    <Router future={{ v7_relativeSplatPath: true }}>
      <Routes>
        <Route path="/:everything" element={<ResetPassword />} />
        <Route path="/success" element={<Success />} />
      </Routes>
    </Router>
  )
}

export default App
