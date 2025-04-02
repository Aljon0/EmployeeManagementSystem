import React from "react";
import {
  UsersIcon,
  ClockIcon,
  CalendarIcon,
  AlertCircleIcon,
} from "lucide-react";
import StatCard from "../components/StatCard";
import LineChart from "../components/charts/LineChart";
import PieChart from "../components/charts/PieChart";

const Dashboard = () => {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold text-[#333138]">Dashboard</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <StatCard
          title="Total Employees"
          value="--"
          icon={<UsersIcon size={20} />}
          color="#FF312E"
        />
        <StatCard
          title="Present Today"
          value="--"
          icon={<ClockIcon size={20} />}
          color="#333138"
        />
        <StatCard
          title="On Leave"
          value="--"
          icon={<CalendarIcon size={20} />}
          color="#515052"
        />
        <StatCard
          title="Pending Requests"
          value="--"
          icon={<AlertCircleIcon size={20} />}
          color="#FF312E"
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white p-4 rounded-lg shadow">
          <h2 className="text-lg font-semibold mb-4 text-[#333138]">
            Attendance Overview
          </h2>
          <div className="h-64">
            <LineChart />
          </div>
        </div>

        <div className="bg-white p-4 rounded-lg shadow">
          <h2 className="text-lg font-semibold mb-4 text-[#333138]">
            Department Distribution
          </h2>
          <div className="h-64">
            <PieChart />
          </div>
        </div>
      </div>

      <div className="bg-white p-4 rounded-lg shadow">
        <h2 className="text-lg font-semibold mb-4 text-[#333138]">
          Recent Activities
        </h2>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Activity
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Employee
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Time
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Status
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {/* Empty state */}
              <tr>
                <td
                  colSpan="4"
                  className="px-6 py-4 text-center text-sm text-gray-500"
                >
                  No recent activities
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
