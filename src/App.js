import React, { useState, useEffect } from "react";
import Calendar from "./components/Calendar";
import SelectYearMonth from "./components/SelectYearMonth";
function App() {
  const [yearMonthData, setYearMonth] = useState({
    year: new Date().getFullYear(),
    month: new Date().getMonth() + 1,
  });

  const [days, setDays] = useState(new Array(42).fill(null));

  useEffect(() => {
    if (yearMonthData.year && yearMonthData.month) {
      const date = new Date(yearMonthData.year, yearMonthData.month - 1);
      let firstDay = date.getDay();
      const lastDateOfMonth = new Date(
        yearMonthData.year,
        yearMonthData.month,
        0
      ).getDate();

      const updatedDays = new Array(42).fill(null);

      for (let i = 1; i <= lastDateOfMonth; i++) {
        updatedDays[firstDay++] = i;
      }

      setDays(updatedDays);
    }
  }, [yearMonthData]);

  return (
    <div className="App px-6 md:px-20 pt-10 max-w-screen-md mx-auto space-y-2">
      <SelectYearMonth
        yearMonthData={yearMonthData}
        setYearMonth={setYearMonth}
      />
      <Calendar days={days} />
    </div>
  );
}

export default App;
