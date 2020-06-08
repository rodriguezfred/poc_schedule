import React, { Component } from 'react'

class Facilityschedule extends Component {
  render () {
    return (
      <div className='facility-schedule'>
        <span className='heading'>en-tête</span>
        <span className='area-slot' style={{ gridColumn: 'area-1', gridRow: 'areas' }}>Espace SOL</span>
        <span className='area-slot' style={{ gridColumn: 'area-2', gridRow: 'areas' }}>Espace BARRES</span>
        <span className='time-slot'>09:00</span>
        <div className='session session-1 area-1'>
          <span className='session-time'>09:00 - 9:30</span>
          <span className='session-group'>Perf. 1</span>
        </div>
        <span className='time-slot'>09:30</span>
        <div className='session session-2 area-1'>
          <span className='session-time'>09:30 - 10:00</span>
          <span className='session-group'>Fed. 2</span>
        </div>
        <span className='time-slot'>09:30</span>
        <div className='session session-3 area-2'>
          <span className='session-time'>09:30 - 10:00</span>
          <span className='session-group'>Loisirs 1</span>
        </div>
        <span className='time-slot'>10:00</span>
        <div className='session session-4 area-2'>
          <span className='session-time'>10:00 - 11:00</span>
          <span className='session-group'>Adultes</span>
        </div>
      </div>
    )
  }
}

export default Facilityschedule
