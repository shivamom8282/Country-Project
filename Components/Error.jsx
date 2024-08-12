import React from 'react'
import { useRouteError } from 'react-router'

function Error() {
    const err=useRouteError()            // error hook
  return (
    <div>
        something went wrong :{err.status}
      
    </div>
  )
}

export default Error

