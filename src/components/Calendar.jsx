import React from "react";

const Calendar = () => {
  const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  // Generate a simple calendar grid
  const generateCalendarDays = () => {
    const days = [];
    for (let i = 1; i <= 31; i++) {
      days.push(i);
    }
    return days;
  };

  const days = generateCalendarDays();

  return (
    <div className="calendar">
      <div className="flex justify-between items-center mb-4">
        <button className="p-2 rounded-full hover:bg-gray-100">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 text-gray-600"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
              clipRule="evenodd"
            />
          </svg>
        </button>
        <h2 className="text-lg font-semibold text-[#333138]">March 2025</h2>
        <button className="p-2 rounded-full hover:bg-gray-100">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 text-gray-600"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      </div>

      <div className="grid grid-cols-7 gap-1 mb-2">
        {daysOfWeek.map((day) => (
          <div
            key={day}
            className="text-center py-2 text-sm font-medium text-gray-600"
          >
            {day}
          </div>
        ))}
      </div>

      <div className="grid grid-cols-7 gap-1">
        {/* Empty cells for days before the month starts */}
        <div className="h-14 p-1 border border-gray-100 rounded bg-gray-50"></div>
        <div className="h-14 p-1 border border-gray-100 rounded bg-gray-50"></div>
        <div className="h-14 p-1 border border-gray-100 rounded bg-gray-50"></div>
        <div className="h-14 p-1 border border-gray-100 rounded bg-gray-50"></div>
        <div className="h-14 p-1 border border-gray-100 rounded bg-gray-50"></div>

        {days.map((day) => (
          <div
            key={day}
            className="h-14 p-1 border border-gray-100 rounded hover:bg-gray-50"
          >
            <div className="flex justify-between items-start">
              <span className="text-sm">{day}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Calendar;
