"use client";

import { MdBusinessCenter, MdDescription, MdGroups, MdAttachMoney, MdTrendingUp } from "react-icons/md";

const Stats = () => {
  // This would typically come from an API or database
  const stats = [
    {
      label: "Registered Startups",
      value: "10",
      icon: <MdBusinessCenter size={24} className="text-blue-600" />,
    },
    {
      label: "Proposals", 
      value: "8",
      icon: <MdDescription size={24} className="text-green-600" />,
    },
    {
      label: "Available Mentors",
      value: "6",
      icon: <MdGroups size={24} className="text-purple-600" />,
    },
    {
      label: "Investors",
      value: "4",
      icon: <MdGroups size={24} className="text-green-600" />,
    },
    {
      label: "Available Funds",
      value: "$6.75M",
      icon: <MdAttachMoney size={24} className="text-orange-600" />,
    },
    {
      label: "Invested Funds",
      value: "$2.75M",
      icon: <MdTrendingUp size={24} className="text-red-600" />,
    }
   
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-6 p-6">
      {stats.map((stat, index) => (
        <div 
          key={index}
          className="bg-white rounded-xl shadow-sm p-6 border border-gray-200"
        >
          <div className="flex items-center justify-between mb-4">
            <div className="p-2 bg-gray-50 rounded-lg">
              {stat.icon}
            </div>
          </div>
          <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
          <p className="text-sm text-gray-500 mt-1">{stat.label}</p>
        </div>
      ))}
    </div>
  );
};

export default Stats;
