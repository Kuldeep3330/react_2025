import React from 'react'



const Header = ({react_img,heading, content}) => {
  return (
    <header>
        <img src={react_img} alt="Stylized atom" />
        <h1>{heading}</h1>
        <p>
          {content}
        </p>
      </header>
  )
}

export default Header