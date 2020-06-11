import React from 'react'

const Schedulesession = ({ timeSlot, place, row }) => {
  return (<>
    <span className='time-slot'> {timeSlot} </span>
    <div className={ place } style={{ gridColumn: { place }, gridRow: { row } }}>
      <span className='session-time'>09:00 - 9:30</span>
      <span className='session-group'>Perf. 1</span>
    </div>
  </>)
}

export default Schedulesession
