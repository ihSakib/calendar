import React from "react";

export default function CalendarCell({ value, index }) {
  return (
    <div
      className={`h-12 w-full flex items-center justify-center text-gray-700 rounded-md box-border border font-semibold md:text-lg border-gray-300  transition duration-200 cursor-pointer ${
        index % 7 === 6 || index % 7 === 5
          ? "text-red-600 hover:bg-red-200"
          : "hover:bg-blue-200"
      }`}
    >
      {value}
    </div>
  );
}
