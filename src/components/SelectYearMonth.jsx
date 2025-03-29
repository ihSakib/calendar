import React from "react";

export default function SelectYearMonth({ yearMonthData, setYearMonth }) {
 
  function handleSelectYear(e) {
    const year = e.target.value;
    if (year > 0 || year === "") {
      setYearMonth((prev) => {
        return { ...prev, [e.target.name]: year };
      });
    }
  }

  function handleSelectMonth(e) {
    setYearMonth((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  }

  return (
    <div>
      <div className="flex flex-row gap-4 pb-2 w-fit">
        <input
          type="number"
          name="year"
          min={1}
          value={yearMonthData.year}
          className="border border-gray-300 rounded-md w-24 md:w-auto p-2 focus:ring-2 focus:ring-blue-400 outline-none"
          onChange={handleSelectYear}
          placeholder="Enter Year"
        />
        <select
          name="month"
          className="border border-gray-300 w-30 md:w-auto rounded-md p-2 focus:ring-2 focus:ring-blue-400 outline-none"
          onChange={handleSelectMonth}
          value={yearMonthData.month}
        >
          <option value="">Choose Month</option>
          <option value="1">January</option>
          <option value="2">February</option>
          <option value="3">March</option>
          <option value="4">April</option>
          <option value="5">May</option>
          <option value="6">June</option>
          <option value="7">July</option>
          <option value="8">August</option>
          <option value="9">September</option>
          <option value="10">October</option>
          <option value="11">November</option>
          <option value="12">December</option>
        </select>
      </div>
      <div>
        {yearMonthData.year < 1970 &&
          Math.ceil(Math.log10(yearMonthData.year)) === 4 && (
            <p className="text-red-500">Year must be more than 1970</p>
          )}
      </div>
    </div>
  );
}
