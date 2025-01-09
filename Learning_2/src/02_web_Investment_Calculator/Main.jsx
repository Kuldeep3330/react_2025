import React,{useState} from 'react'

import Header from './components/Header/Header'
import UserInput from './components/UserInput/UserInput'
import Results from './components/Results/Results'
const Main = () => {
  const [inputValue, setInputValue] = useState({
      initialInvestment: 10000,
      annualInvestment: 1200,
      expectedReturn: 6,
      duration: 10,
    })

    const inputIsValid=inputValue.duration>=1
    function handleChange(intitialValue, userValue) {
      setInputValue((prevUserInput) => {
        return {
          ...prevUserInput,
          [intitialValue]: +userValue,
        }
      })
    }
  return (
    <>
    <Header/>
    <UserInput inputValue={inputValue} onChange={handleChange}/>
    {/* {!inputIsValid && <p className='center'>Please enter a duration greater than 1</p>} */}
    {/* {inputIsValid && <Results input={inputValue}/>} */}
    <Results input={inputValue}/>
    </>
    
  )
}

export default Main