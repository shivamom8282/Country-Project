import React, { useContext, useState } from 'react'
import { Themecontext } from '../contexts/themecontexts'
import { usetheme } from '../hooks/useTheme'



function Header() {
  const [isdark,setdark]=usetheme()

  // if(isdark)
  // {
  //       document.body.classList.add("dark")
  // }
  // else
  // {
  //       document.body.classList.remove("dark")
  // }
  return (
    <div>
      <header className={`header-container ${isdark ?'dark' :''} `}>
            <div className="header-content">
                <h2 className="title">
                     <a href="/">Where in the world?</a>
                </h2>
            
                      <p className="theme-changer"  onClick={()=>
                        { 
                          // document.body.classList.toggle("dark")
                          setdark(!isdark)
                          
                          
                          localStorage.setItem("isdarkmode",!isdark)
                        }}>
                          
                                 <i className={`fa-solid fa-${isdark ?'moon' : 'sun'}`}/>
                                     &nbsp;&nbsp;{isdark ? 'Dark' : 'Light'} Mode

                     </p>
            </div>
    </header>
    </div>
  )
}

export default Header
