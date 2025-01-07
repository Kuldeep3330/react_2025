import React from 'react'
import Header from './components/Header/Header.js'
import CoreConcepts from './components/CoreConcepts.js'
import Examples from './components/Examples.js'
// Header();//in javascript

const Main = () => {
  return (
    <>
      <Header />
      <main>
        <CoreConcepts />
        <Examples />
      </main>
    </>
  )
}

export default Main
