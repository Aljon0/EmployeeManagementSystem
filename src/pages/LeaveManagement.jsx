import React, { useState } from "react";
import {
  PlusIcon,
  FilterIcon,
  CheckCircleIcon,
  XCircleIcon,
  ClockIcon,
  CalendarIcon,
} from "lucide-react";

const LeaveManagement = () => {
  const [activeTab, setActiveTab] = useState("requests");

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-[#333138]">Leave Management</h1>
        <button className="flex items-center px-4 py-2 bg-[#FF312E] text-white rounded-md hover:bg-red-600 transition-colors duration-200">
          <PlusIcon size={16} className="mr-2" />
          <span>Request Leave</span>
        </button>
      </div>

      <div className="bg-white rounded-lg shadow overflow-hidden">
        <div className="border-b border-gray-200">
          <div className="flex">
            <button
              className={`px-4 py-3 text-sm font-medium border-b-2 ${
                activeTab === "requests"
                  ? "border-[#FF312E] text-[#FF312E]"
                  : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
              }`}
              onClick={() => setActiveTab("requests")}
            >
              My Requests
            </button>
            <button
              className={`px-4 py-3 text-sm font-medium border-b-2 ${
                activeTab === "approvals"
                  ? "border-[#FF312E] text-[#FF312E]"
                  : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
              }`}
              onClick={() => setActiveTab("approvals")}
            >
              Pending Approvals
            </button>
            <button
              className={`px-4 py-3 text-sm font-medium border-b-2 ${
                activeTab === "calendar"
                  ? "border-[#FF312E] text-[#FF312E]"
                  : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
              }`}
              onClick={() => setActiveTab("calendar")}
            >
              Team Calendar
            </button>
          </div>
        </div>

        <div className="p-4">
          {activeTab === "requests" && (
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <div className="relative">
                  <input
                    type="text"
                    className="block w-full py-2 pl-3 pr-10 leading-5 text-gray-700 placeholder-gray-400 bg-gray-100 border border-gray-200 rounded-md focus:outline-none focus:bg-white focus:border-[#FF312E]"
                    placeholder="Search requests..."
                  />
                </div>
                <button className="flex items-center px-3 py-2 bg-gray-100 rounded-md hover:bg-gray-200 transition-colors duration-200">
                  <FilterIcon size={16} className="mr-2 text-gray-600" />
                  <span className="text-sm text-gray-600">Filter</span>
                </button>
              </div>

              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Type
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        From
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        To
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Days
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Status
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Actions
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    <tr>
                      <td
                        colSpan="6"
                        className="px-6 py-4 text-center text-sm text-gray-500"
                      >
                        No leave requests found
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {activeTab === "approvals" && (
            <div className="space-y-4">
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Employee
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Type
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        From
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        To
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Days
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Actions
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    <tr>
                      <td
                        colSpan="6"
                        className="px-6 py-4 text-center text-sm text-gray-500"
                      >
                        No pending approvals
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {activeTab === "calendar" && (
            <div className="h-96 flex items-center justify-center bg-gray-50 rounded-md">
              <div className="text-center">
                <div className="flex justify-center mb-4">
                  <CalendarIcon size={48} className="text-gray-300" />
                </div>
                <h3 className="text-lg font-medium text-gray-900">
                  Team Leave Calendar
                </h3>
                <p className="mt-1 text-sm text-gray-500">
                  View and manage team absences at a glance
                </p>
              </div>
            </div>
          )}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white p-4 rounded-lg shadow">
          <h2 className="text-lg font-semibold mb-4 text-[#333138]">
            Leave Balance
          </h2>
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <span className="text-sm text-gray-600">Annual Leave</span>
              <span className="font-medium">-- / -- days</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm text-gray-600">Sick Leave</span>
              <span className="font-medium">-- / -- days</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm text-gray-600">Personal Leave</span>
              <span className="font-medium">-- / -- days</span>
            </div>
          </div>
        </div>

        <div className="bg-white p-4 rounded-lg shadow">
          <h2 className="text-lg font-semibold mb-4 text-[#333138]">
            Upcoming Leaves
          </h2>
          <div className="flex items-center justify-center h-32 bg-gray-50 rounded-md">
            <span className="text-sm text-gray-500">No upcoming leaves</span>
          </div>
        </div>

        <div className="bg-white p-4 rounded-lg shadow">
          <h2 className="text-lg font-semibold mb-4 text-[#333138]">
            Request Status
          </h2>
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <CheckCircleIcon size={16} className="mr-2 text-green-500" />
                <span className="text-sm">Approved</span>
              </div>
              <span className="text-sm font-medium">0</span>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <XCircleIcon size={16} className="mr-2 text-red-500" />
                <span className="text-sm">Rejected</span>
              </div>
              <span className="text-sm font-medium">0</span>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <ClockIcon size={16} className="mr-2 text-yellow-500" />
                <span className="text-sm">Pending</span>
              </div>
              <span className="text-sm font-medium">0</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeaveManagement;
