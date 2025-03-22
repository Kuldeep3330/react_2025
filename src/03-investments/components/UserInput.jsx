import React, { useState } from 'react'

const UserInput = ({userInput,onChange}) => {
    // const [userInput, setUserInput]=useState({
    //     initialInvestment:4000,
    //     annualInvestment:1200,
    //     expectedReturn:6,
    //     duration:10
    // })

    // const handleChange = (e) => {
    //     const { name, value } = e.target;
    
    //     setUserInput((prev) => ({
    //         ...prev,
    //         [name]: name === "expectedReturn" || name === "duration" || name === "initialInvestment" || name === "annualInvestment" 
    //             ? +value // Convert to number
    //             : value
    //     }));
    // };

    
  return (
    <section id="user-input">
      <div className="input-group">
        <p>
          <label>Initial Investement</label>
          <input type="number" required 
          value={userInput.initialInvestment}
        //   onChange={handleChange}
        // onChange={(e)=>handleChange('initialInvestment', e.target.value)}
          
        onChange={(e)=>onChange('initialInvestment', e.target.value)}

          />
        </p>
        <p>
          <label>Annual Investment</label>
          <input type="number" required
          value={userInput.annualInvestment}
        //   onChange={handleChange}
        onChange={(e)=>onChange('annualInvestment', e.target.value)}
          />
        </p>
      </div>
      <div className="input-group">
        <p>
          <label>Expected Return</label>
          <input type="number" required 
          value={userInput.expectedReturn}
        //   onChange={handleChange}
        onChange={(e)=>onChange('expectedReturn', e.target.value)}
          />
        </p>
        <p>
          <label>Duration</label>
          <input type="number" required 
          value={userInput.duration}
        //   onChange={handleChange}
        onChange={(e)=>onChange('duration', e.target.value)}
          />
        </p>
      </div>
    </section>
  )
}

export default UserInput
