import React from "react";
import CalendarCell from "./CalendarCell";
import DaysName from "./DaysName";
export default function Calendar({ days }) {
  return (
    <div>
      <DaysName />
      <div className="grid grid-cols-7 gap-3  justify-items-center mt-3">
        {days.map((value, index) => {
          return <CalendarCell key={index} index={index} value={value} />;
        })}
      </div>
    </div>
  );
}
