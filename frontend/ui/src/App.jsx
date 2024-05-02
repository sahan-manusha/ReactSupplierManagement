import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import SupplierList from './components/SupplierList'






function App() {

  return (
    <>
    <Navbar/>
    <SupplierList/>
    </>
  )
}

export default App;
