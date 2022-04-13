import React from 'react'

export default function TimeRegistered({
    beginTime = '08:00',
    endTime = '12:00',
    duration = '04:00'
}) {
    return (
        <div className="time-container">
            <input className="description" type="text"></input>
            <div className='information'>
                <span className='begin-time' name="beginTime">{beginTime}</span>
                <span className='end-time' name="endTime">{endTime}</span>
                <span className='duration' name="duration">{duration}</span>
            </div>
        </div>
    )
}
