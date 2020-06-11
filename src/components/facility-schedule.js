import React, { Component } from 'react'
import Schedulesession from './schedule-session'

class Facilityschedule extends Component {
  render () {
    return (
      <div className='facility-schedule'>
        <span className='heading'>en-tête</span>
        <span className='place-slot' style={{ gridColumn: 'place-1', gridRow: 'places' }}>Espace SOL</span>
        <span className='place-slot' style={{ gridColumn: 'place-2', gridRow: 'places' }}>Espace BARRES</span>
        <Schedulesession timeSlot='09:00' place='place-1' row='time-0900 / time-0930' />
        <Schedulesession timeSlot='09:00' place='place-2' row='time-0900 / time-0930' />
        <span className='time-slot'>09:15</span>
        <div className='session session-2 place-1'>
          <span className='session-time'>09:30 - 10:00</span>
          <span className='session-group'>Fed. 2</span>
        </div>
        <span className='time-slot'>09:30</span>
        <div className='session session-3 place-2'>
          <span className='session-time'>09:30 - 10:00</span>
          <span className='session-group'>Loisirs 1</span>
        </div>
        <span className='time-slot'>09:45</span>
        <div className='session session-4 place-2'>
          <span className='session-time'>09:45 - 10:00</span>
          <span className='session-group'>Adultes</span>
        </div>
        <span className='time-slot'>10:00</span>
        <div className='session session-5 place-2'>
          <span className='session-time'>10:00 - 11:00</span>
          <span className='session-group'>Détection</span>
        </div>
      </div>
    )
  }
}

export default Facilityschedule
