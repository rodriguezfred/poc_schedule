import React, { Component } from 'react'

class Facilityschedule extends Component {
  render () {
    return (
      <div className='facility-schedule'>
        <div className='schedule-timeline'>
          <ul>
            <li><span>09:00</span></li>
            <li><span>09:30</span></li>
          </ul>
        </div>
        <div className='schedule-events'>
          <ul>
            <li className='schedule-group'>
              <div className='schedule-place-facility'><span>Praticable 1</span></div>
              <ul>
                <li className='schedule-time-slot'>
                  <a data-start='09:30' data-end='10:30' data-content='event-perf1' data-event='event-1' href='#0'>
                    <em className='schedule-time-slot-name'>Perf 1</em>
                  </a>
                </li>
              </ul>
            </li>
            <li className='schedule-group'>
              <div className='schedule-place-facility'><span>Espace saut</span></div>
              <ul />
            </li>
          </ul>
        </div>

        <div className='cd-schedule-modal'>
          <header className='cd-schedule-modal__header'>
            <div className='cd-schedule-modal__content'>
              <span className='cd-schedule-modal__date' />
              <h3 className='cd-schedule-modal__name' />
            </div>

            <div className='cd-schedule-modal__header-bg' />
          </header>

          <div className='cd-schedule-modal__body'>
            <div className='cd-schedule-modal__event-info' />
            <div className='cd-schedule-modal__body-bg' />
          </div>

          <a href='#0' className='cd-schedule-modal__close text-replace'>Close</a>
        </div>
      </div>
    )
  }
}

export default Facilityschedule
