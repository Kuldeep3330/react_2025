import React, { useRef, useState } from 'react'
import ResultModal from './ResultModal';

// let timer;
const TimerChallenge = ({ title, targetTime }) => {

    const timer=useRef();
    const dialog=useRef()

    const[timeRem, setTimeRem]= useState(targetTime*1000)
    // const[timerStarted, setTimerStarted]= useState(false)
    // const [timerExpired, setTimerExpired] = useState(false)

    const timerIsActive= timeRem>0 && timeRem<targetTime*1000

    if(timeRem<= 0)
    {
        clearInterval(timer.current)
        setTimeRem(targetTime*1000)
        dialog.current.open();
    }

  const handleStart = () => {
   timer.current= setInterval(() => {
      setTimeRem(prev=> prev-10);
    }, 10)

    // setTimerStarted(true)
  }

  const handleStop=()=>{
    clearInterval(timer.current)
  }

  return (
    <>
     <ResultModal ref={dialog} targetTime={targetTime} result="Lost"/>
    <section className="challenge">
      <h2>{title}</h2>
      {/* {timerExpired && <p>You Lost!</p>} */}
      <p className="challenge-time">
        {targetTime} second{targetTime > 1 ? 's' : ''}
      </p>
      <p>
        <button onClick={timerIsActive?handleStop:handleStart}>
            {timerIsActive?'Stop':'start'} challenge
        </button>
      </p>
      <p className={timerIsActive?'active':undefined}>
        {timerIsActive?'Timer is running...':'Timer inactive'}
        </p>
    </section>
    </>
  )
}

export default TimerChallenge
