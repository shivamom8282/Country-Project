import React, { useState } from 'react'
import Header from './Components/Header'
import './style.css'
import { Outlet } from 'react-router'
import './countryPage.css'
import { Themecontext } from './contexts/themecontexts'




function App() {
  let a=JSON.parse(localStorage.getItem("isdarkmode"))
  const [isdark,setdark]=useState(a)

  return (
    <Themecontext.Provider value={[isdark,setdark]} >
        <Header />
      
        <Outlet />  {/* it control the children pass by in index.js */}
    
      
    </Themecontext.Provider >
  )
}

export default App
