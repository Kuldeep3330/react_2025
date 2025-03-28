import React from 'react'

const CoreConcept = ({title, description, image}) => {
  return (
    <li>
        <img src={image} alt="" />
        <h3>{title}</h3>
        <p>{description}</p>
    </li>
  )
}

export default CoreConcept