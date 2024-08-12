import React, { useContext, useEffect } from 'react'
import React, { useState } from 'react'
import Sectionbar from './Section_bar'
import SelectMenu from './SelectMenu'
import CountriesList from './CountriesList'
// import { Themecontext } from '../contexts/themecontexts'
// import { usewindowsize } from '../hooks/useWindowsize'
import { usetheme } from '../hooks/useTheme'






function Home() {
  const[isdark,setdark]=usetheme()
  const[query,setquery]=useState('')
  const[update1,setupdate1]=useState('')
  // const windowsize=usewindowsize()        // custom hook


  return (
    
    <main className={`${isdark?'dark':''}`}>
        <div className="search-filter-container ">
            <Sectionbar setquery={setquery}/>
            <SelectMenu setupdate1={setupdate1} />
          
        
         
        </div>
        {/* <div>
          <h1 style={{textAlign:"center"}}>{windowsize.height} x {windowsize.width}</h1>
        </div> */}
      
      <CountriesList update1={update1} query={query} />
      </main>

  )
}

export default Home
