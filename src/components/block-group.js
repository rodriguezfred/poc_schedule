import React, { Component } from 'react'

class Blockgroup extends Component {
  render () {
    return (
      <div className='block-group'>
        <div className='group-color'>
              G
        </div>
        <div className='group-name'>
            perf 1
        </div>
        <div className='group-time'>
            Temps disponible : 3h
        </div>
        <div className='group-time-remaining'>
            Temps restant : 1,5h
        </div>
      </div>
    )
  }
}

export default Blockgroup
