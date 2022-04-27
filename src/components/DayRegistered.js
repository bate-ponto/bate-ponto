import React, { useEffect, useState } from "react";
import getCurrentTime from "../getCurrentTime";
import TimeRegistered from "./TimeRegistered";

export default function DayComponent({ currentStatus }) {
  const [children, setChildren] = useState([]);

  useEffect(() => {
    setChildren((prev) => {
      const newObject = {};
      if (currentStatus) {
        newObject.beginTime = getCurrentTime();
      } else {
        newObject.endTime = getCurrentTime();
        newObject.duration = Math.abs(newObject.endTime - newObject.beginTime);
      }

      return [...prev, newObject];
    });
  }, [currentStatus]);

  return (
    <div className="day-container">
      {children.map((object, index) => {
        return (
          <TimeRegistered
            key={index}
            beginTime={object.beginTime}
            endTime={object.endTime}
            duration={object.duration}
            currentStatus={currentStatus}
            active={object.active}
          />
        );
      })}
    </div>
  );
}
