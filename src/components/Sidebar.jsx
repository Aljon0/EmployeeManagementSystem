import React from "react";
import {
  HomeIcon,
  UsersIcon,
  UserPlusIcon,
  ClockIcon,
  CalendarIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
} from "lucide-react";

const Sidebar = ({ currentPage, setCurrentPage, collapsed }) => {
  const menuItems = [
    { id: "dashboard", label: "Dashboard", icon: <HomeIcon size={20} /> },
    { id: "employees", label: "Employees", icon: <UsersIcon size={20} /> },
    {
      id: "add-employee",
      label: "Add Employee",
      icon: <UserPlusIcon size={20} />,
    },
    { id: "attendance", label: "Attendance", icon: <ClockIcon size={20} /> },
    {
      id: "leave",
      label: "Leave Management",
      icon: <CalendarIcon size={20} />,
    },
  ];

  return (
    <aside
      className={`bg-[#333138] text-white transition-all duration-300 ${
        collapsed ? "w-16" : "w-64"
      }`}
    >
      <div className="flex items-center justify-between p-4 border-b border-[#515052]">
        {!collapsed && (
          <div className="text-lg font-bold text-[#FF312E]">NexaStaff</div>
        )}
        <button
          className="p-1 rounded-full hover:bg-[#515052] focus:outline-none"
          onClick={() => setCurrentPage("dashboard")}
        >
          {collapsed ? (
            <ChevronRightIcon size={20} className="text-[#FF312E]" />
          ) : (
            <ChevronLeftIcon size={20} className="text-[#FF312E]" />
          )}
        </button>
      </div>
      <nav className="mt-6">
        <ul>
          {menuItems.map((item) => (
            <li key={item.id}>
              <button
                className={`flex items-center w-full p-3 ${
                  currentPage === item.id
                    ? "bg-[#000103] text-[#FF312E]"
                    : "text-gray-300 hover:bg-[#515052]"
                } transition-colors duration-200 ${
                  collapsed ? "justify-center" : "justify-start"
                }`}
                onClick={() => setCurrentPage(item.id)}
              >
                <span className="flex-shrink-0">{item.icon}</span>
                {!collapsed && <span className="ml-3">{item.label}</span>}
              </button>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
