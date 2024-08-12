import React from 'react'

function Sectionbar({setquery}) {
  return (
    <div>
        <div className="search-container">
  <i className="fa-solid fa-magnifying-glass" />
  <input onChange={(e)=>{setquery(e.target.value.toLowerCase())}} type="text" placeholder="Search for a country..." />
</div>
      
    </div>
  )
}

export default Sectionbar

