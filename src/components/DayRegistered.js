import React from 'react'
import TimeRegistered from './TimeRegistered'

export default function DayComponent({CurrentStatus, setCurrentStatus}) {
    return (
        <div className='day-container'>
            <TimeRegistered />
            <TimeRegistered />
        </div>
    )
}
