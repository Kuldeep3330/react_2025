import { useRef, useState } from 'react'

export default function Player() {
  const inputRef = useRef('')
  const [playerName, setPlayerName] = useState(null)
  // const [submitted, setSubmitted] = useState(false)

  // const handleChange = (e) => {
    // setPlayerName(e.target.value)
  // }

  const handleClick = () => {
    // console.log(inputRef.current.value);
    setPlayerName(inputRef.current.value)
    inputRef.current.value=''

    // setSubmitted(prev=>!prev)
  }
  return (
    <section id="player">
      <h2>Welcome { playerName ?? 'unknown entity'} </h2>
      <p>
        {/* <input ref={inputRef} type="text" value={playerName} onChange={handleChange}/> */}
        <input ref={inputRef} type="text" />
        <button onClick={handleClick}>Set Name</button>
      </p>
    </section>
  )
}
