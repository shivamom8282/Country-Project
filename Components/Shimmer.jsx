import React from 'react'
import './shimmer.css'

function Shimmer() {
   
  return (
    <div className='countries-container'>
        
        {
            Array.from({length:10}).map((e,i)=>
                {
                    return    <div key={i} className="country-card shimmer-card shimmer-effect"></div>
                })
        }
      
    </div>
  )
}

export default Shimmer
