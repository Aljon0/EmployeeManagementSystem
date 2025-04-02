import React, { useState } from "react";
import {
  PlusIcon,
  FilterIcon,
  SearchIcon,
  EditIcon,
  TrashIcon,
  EyeIcon,
  UsersIcon,
} from "lucide-react";
import EmptyState from "../components/EmptyState";

const EmployeeList = () => {
  const [view, setView] = useState("grid");

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-[#333138]">Employees</h1>
        <button className="flex items-center px-4 py-2 bg-[#FF312E] text-white rounded-md hover:bg-red-600 transition-colors duration-200">
          <PlusIcon size={16} className="mr-2" />
          <span>Add Employee</span>
        </button>
      </div>

      <div className="bg-white p-4 rounded-lg shadow">
        <div className="flex flex-col sm:flex-row justify-between space-y-4 sm:space-y-0 mb-6">
          <div className="relative">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <SearchIcon size={16} className="text-gray-400" />
            </div>
            <input
              type="text"
              className="block w-full py-2 pl-10 pr-3 leading-5 text-gray-700 placeholder-gray-400 bg-gray-100 border border-gray-200 rounded-md focus:outline-none focus:bg-white focus:border-[#FF312E]"
              placeholder="Search employees..."
            />
          </div>

          <div className="flex space-x-2">
            <button className="flex items-center px-3 py-2 bg-gray-100 rounded-md hover:bg-gray-200 transition-colors duration-200">
              <FilterIcon size={16} className="mr-2 text-gray-600" />
              <span className="text-sm text-gray-600">Filter</span>
            </button>
            <div className="flex border border-gray-200 rounded-md overflow-hidden">
              <button
                className={`px-3 py-2 text-sm ${
                  view === "grid"
                    ? "bg-[#333138] text-white"
                    : "bg-gray-100 text-gray-600"
                }`}
                onClick={() => setView("grid")}
              >
                Grid
              </button>
              <button
                className={`px-3 py-2 text-sm ${
                  view === "list"
                    ? "bg-[#333138] text-white"
                    : "bg-gray-100 text-gray-600"
                }`}
                onClick={() => setView("list")}
              >
                List
              </button>
            </div>
          </div>
        </div>

        {view === "grid" ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            <EmptyState
              icon={<UsersIcon size={48} className="text-gray-300" />}
              title="No employees found"
              description="Add your first employee to get started"
              buttonText="Add Employee"
              buttonIcon={<PlusIcon size={16} />}
            />
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Name
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    ID
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Department
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Position
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
                    No employees found
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
};

export default EmployeeList;
