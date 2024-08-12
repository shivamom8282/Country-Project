import React from 'react'
import CountriesList from './CountriesList'

function SelectMenu({setupdate1}) {
 
  return (
    <div>
      <select className="filter-by-region" onChange={(e)=>
        {
          setupdate1(e.target.value)
        }
      }>
            <option value="">Filter by Region</option>
            <option value="Africa">Africa</option>
            <option value="America">America</option>
            <option value="Asia">Asia</option>
            <option value="Europe">Europe</option>
            <option value="Oceania">Oceania</option>
    </select>
    </div>
  )
}

export default SelectMenu
