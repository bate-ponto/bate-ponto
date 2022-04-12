import React from 'react'

export default function TimeRegistered({
  beginTime = null,
  endTime = null,
  duration = null
}) {
  return (
    <div className="">
      <input id="description" className="description" type="text"></input>

      <span id="beginTime" name="beginTime">{beginTime}</span>
      <span id="endTime" name="endTime">{endTime}</span>
      <span id="duration" name="duration">{duration}</span>
      

    </div>
  )
}
