import React from 'react'
import investImg from '../../assets/investment-calculator-logo.png'
const Header = () => {
  return (
    <header id="header">
        <img src={investImg} alt='an investmenti image'/>
        <h2>Investment Title</h2>
    </header>
  )
}

export default Header