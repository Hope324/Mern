import React, { Fragment } from 'react'

const Clock = ({timerdays,
  timerhours,
  timerminutes,
  timerseconds}) => {
  return (
    <>
      <section className='timer-container'>
        <section className='timer'>
          <div className='clock'>
            <section>
              <p>{timerdays}</p>
              <small>Days</small>
            </section>
            <span>:</span>
            <section>
              <p>{timerhours}</p>
              <small>Hours</small>
            </section>
            <span>:</span>
            <section>
              <p>{timerminutes}</p>
              <small>Minutes</small>
            </section>
            <span>:</span>
            <section>
              <p>{timerseconds}</p>
              <small>Seconds</small>
            </section>
          </div>
        </section>
      </section>
    </>
  )
}
Clock.defaultProps={
  timerdays:10,
  timerhours:10,
  timerminutes:10,
  timerseconds:10
}

export default Clock