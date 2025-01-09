import React, { useState } from 'react'

const UserInput = ({inputValue, onChange}) => {
  
  return (
    <section id="user-input">
      <div className="input-group">
        <p>
          <label>initial investment:</label>
          <input
            type="number"
            value={inputValue.initialInvestment}
            required
            onChange={(e) => onChange('initialInvestment', e.target.value)}
          />
        </p>
        <p>
          <label>annual investment:</label>
          <input
            type="number"
            value={inputValue.annualInvestment}
            required
            onChange={(e) => onChange('annualInvestment', e.target.value)}
          />{' '}
        </p>
      </div>
      <div className="input-group">
        <p>
          <label>Expected Return:</label>
          <input
            type="number"
            value={inputValue.expectedReturn}
            required
            onChange={(e) => onChange('expectedReturn', e.target.value)}
          />
        </p>
        <p>
          <label>Duration:</label>
          <input
            type="number"
            value={inputValue.duration}
            required
            onChange={(e) => onChange('duration', e.target.value)}
          />
        </p>
      </div>
    </section>
  )
}

export default UserInput
