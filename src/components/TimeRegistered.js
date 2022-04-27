import React, { useEffect, useState } from "react";
import getCurrentTime from "../getCurrentTime";
import transformAsTime from "../transformAsTime";

export default function TimeRegistered({ beginTime, endTime, duration }) {
  return (
    <div className="time-container">
      <input className="description" type="text" />
      <div className="information">
        <span className="begin-time" name="beginTime">
          {transformAsTime(beginTime)}
        </span>
        <span className="end-time" name="endTime">
          {transformAsTime(endTime)}
        </span>
        <span className="duration" name="duration">
          {transformAsTime(duration)}
        </span>
      </div>
    </div>
  );
}
