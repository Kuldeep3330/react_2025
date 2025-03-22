import React from 'react'
import investImg from "../assets/investment-calculator-logo.png"

const Header = () => {
  return (
    <header id='header'>
        <img src={investImg} alt="money bag" />
        <h1>Investment Calculator</h1>
    </header>
  )
}

export default Header