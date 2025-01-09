import React from 'react'
import {
  calculateInvestmentResults,
  formatter,
} from '../../util/investment.jsx'


const Results = ({ input }) => {
  const results = []
  calculateInvestmentResults(input, results)
  if(results.length==0)
  {
    return <p className='center'>Invalid Input data</p>
  }
  // const resultsData = calculateInvestmentResults(input)
  const initialInvestment =
    results[0].valueEndOfYear - 
    results[0].interest -
    results[0].annualInvestment
  return (
    <table id="result">
      <thead>
        <tr>
          <th>year</th>
          <th>Investment Value</th>
          <th>Interest (Year)</th>
          <th>Total Year</th>
          <th>Invested Captital</th>
        </tr>
      </thead>
      <tbody>
        {results.map((yearData) => {
          const totalInterset =
            yearData.valueEndOfYear -
            yearData.annualInvestment * yearData.year -
            initialInvestment
          const totalAmountInvested = yearData.valueEndOfYear - totalInterset
          return (
            <tr key={yearData.year}>
              <td>{yearData.year}</td>
              <td>{formatter.format(yearData.valueEndOfYear)}</td>
              <td>{formatter.format(yearData.interest)}</td>
              <td>{formatter.format(totalInterset)}</td>
              <td>{formatter.format(totalAmountInvested)}</td>
            </tr>
          )
        })}
      </tbody>
    </table>
  )
}

export default Results
