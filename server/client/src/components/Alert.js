import React from 'react'

function Alert(props) {
  return (
    <div>
        {props.type=="unsuccess"?<div class="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative" role="alert">
  <strong class="font-bold text-sm font-sans">{props.title}!</strong>
  <span class="block sm:inline text-sm font-sans"> {props.message}</span>
  <span class="absolute top-0 bottom-0 right-0 px-4 py-3">
  
  </span>
</div>:<div class="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative" role="alert">
  <strong class="font-bold text-sm font-sans">{props.title}!</strong>
  <span class="block sm:inline text-sm font-sans"> {props.message}</span>
  <span class="absolute top-0 bottom-0 right-0 px-4 py-3">
    
  </span>
</div>}
    
</div>
  )
}

export default Alert