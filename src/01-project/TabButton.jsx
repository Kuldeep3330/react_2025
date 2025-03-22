import React from 'react'

const TabButton = ({children, onClick}) => {
    // document.querySelectorAll('button').addEventListener('click', ()=>{

    // })

    
  return (
    <li><button onClick={onClick}>{children}</button></li>
  )
}

export default TabButton