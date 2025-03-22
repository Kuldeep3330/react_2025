import { useState } from 'react'
import Header from './components/Header'
import UserInput from './components/UserInput'
import './Ex1.css'
import Results from './components/Results'

function Ex1() {
  const [userInput, setUserInput]=useState({
          initialInvestment:4000,
          annualInvestment:1200,
          expectedReturn:6,
          duration:10
      })
      const handleChange=(inputIdentifier, newValue)=>{
        setUserInput(prevUserInput=>{
            return{
                ...prevUserInput,
                [inputIdentifier]:newValue
            }
        })
    }
  return (
    <>
    <Header/>
    <UserInput userInput={userInput} onChange={handleChange}/>
    <Results input={userInput}/>
    </>
  )
}

export default Ex1
