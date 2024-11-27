import React from "react";

export default function DaysName() {
  return (
    <div className="grid grid-cols-7 bg-blue-500 md:text-lg font-bold text-white text-center  py-2 rounded-t-md ">
      <div className="h-8 flex items-center justify-center font-medium">
        Sun
      </div>
      <div className="h-8 flex items-center justify-center font-medium">
        Mon
      </div>
      <div className="h-8 flex items-center justify-center font-medium">
        Tue
      </div>
      <div className="h-8 flex items-center justify-center font-medium">
        Wed
      </div>
      <div className="h-8 flex items-center justify-center font-medium">
        Thu
      </div>
      <div className="h-8 flex items-center justify-center font-medium">
        Fri
      </div>
      <div className="h-8 flex items-center justify-center font-medium">
        Sat
      </div>
    </div>
  );
}
