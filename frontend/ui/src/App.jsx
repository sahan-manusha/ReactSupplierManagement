import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import SearchBar from './components/SearchBar'
import Image from './components/Image'
import SupplierList from './components/SupplierList'
import InsertSupplier from './components/InsertSupplier'
import {BrowserRouter as Router,Routes,Route} from "react-router-dom"
import UpdateSupplier from './components/UpdateSupplier'










function App() {

  return (
    <>
    <Router>
      <Navbar/>
      <SearchBar/>
      <Routes>
        <Route path="/" element={<SupplierList/>} />
        <Route path="/insert" element={<InsertSupplier/>} />   
        <Route path="/update" element={<UpdateSupplier/>} /> 
      </Routes>
    </Router>
    </>
  )
}

export default App;
