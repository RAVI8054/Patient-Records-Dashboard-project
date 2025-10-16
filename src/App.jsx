import React, { useEffect } from 'react'
import { Routes, Route, Link } from 'react-router-dom'
import Home from './pages/Home'

import PatientsPage from './pages/PatientsPage'
import About from './pages/About'
import { useDispatch } from 'react-redux'
import { fetchPatients } from './store/patientsSlice'
import Header from './components/Header'

export default function App() {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchPatients())
  }, [dispatch])

  return (
    <div className="min-h-screen">
      <Header />
      <main className="container mx-auto px-4 py-6">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/patients" element={<PatientsPage />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </main>
    </div>
  )
}


