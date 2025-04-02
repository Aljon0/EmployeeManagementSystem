import React, { useState } from "react";
import { CalendarIcon, FilterIcon, DownloadIcon } from "lucide-react";
import Calendar from "../components/Calendar";

const AttendanceTracker = () => {
  const [viewMode, setViewMode] = useState("daily");

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-[#333138]">
          Attendance Tracker
        </h1>
        <div className="flex space-x-2">
          <button className="flex items-center px-3 py-2 bg-gray-100 rounded-md hover:bg-gray-200 transition-colors duration-200">
            <FilterIcon size={16} className="mr-2 text-gray-600" />
            <span className="text-sm text-gray-600">Filter</span>
          </button>
          <button className="flex items-center px-3 py-2 bg-gray-100 rounded-md hover:bg-gray-200 transition-colors duration-200">
            <DownloadIcon size={16} className="mr-2 text-gray-600" />
            <span className="text-sm text-gray-600">Export</span>
          </button>
        </div>
      </div>

      <div className="bg-white p-4 rounded-lg shadow">
        <div className="flex flex-col sm:flex-row justify-between space-y-4 sm:space-y-0 mb-6">
          <div className="flex items-center space-x-4">
            <div className="relative">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <CalendarIcon size={16} className="text-gray-400" />
              </div>
              <input
                type="date"
                className="block w-full py-2 pl-10 pr-3 leading-5 text-gray-700 placeholder-gray-400 bg-gray-100 border border-gray-200 rounded-md focus:outline-none focus:bg-white focus:border-[#FF312E]"
              />
            </div>
          </div>

          <div className="flex border border-gray-200 rounded-md overflow-hidden">
            <button
              className={`px-3 py-2 text-sm ${
                viewMode === "daily"
                  ? "bg-[#333138] text-white"
                  : "bg-gray-100 text-gray-600"
              }`}
              onClick={() => setViewMode("daily")}
            >
              Daily
            </button>
            <button
              className={`px-3 py-2 text-sm ${
                viewMode === "weekly"
                  ? "bg-[#333138] text-white"
                  : "bg-gray-100 text-gray-600"
              }`}
              onClick={() => setViewMode("weekly")}
            >
              Weekly
            </button>
            <button
              className={`px-3 py-2 text-sm ${
                viewMode === "monthly"
                  ? "bg-[#333138] text-white"
                  : "bg-gray-100 text-gray-600"
              }`}
              onClick={() => setViewMode("monthly")}
            >
              Monthly
            </button>
          </div>
        </div>

        {viewMode === "daily" ? (
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Employee
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Status
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Check In
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Check Out
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Hours
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Notes
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                <tr>
                  <td
                    colSpan="6"
                    className="px-6 py-4 text-center text-sm text-gray-500"
                  >
                    No attendance records found
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        ) : viewMode === "weekly" ? (
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Employee
                  </th>
                  <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Mon
                  </th>
                  <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Tue
                  </th>
                  <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Wed
                  </th>
                  <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Thu
                  </th>
                  <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Fri
                  </th>
                  <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Total
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                <tr>
                  <td
                    colSpan="7"
                    className="px-6 py-4 text-center text-sm text-gray-500"
                  >
                    No attendance records found
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        ) : (
          <div className="h-96">
            <Calendar />
          </div>
        )}
      </div>
    </div>
  );
};

export default AttendanceTracker;
