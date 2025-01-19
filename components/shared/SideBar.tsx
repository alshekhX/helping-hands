"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import { 
  MdDashboard, 
  MdBusinessCenter, 
  MdDescription,
  MdGroups,
  MdAttachMoney 
} from "react-icons/md";

const SideBar = () => {
  const pathname = usePathname();

  const sidebarItems = [
    {
      icon: <MdDashboard size={24} />,
      label: "Dashboard",
      href: "/",
    },
    {
      icon: <MdBusinessCenter size={24} />,
      label: "Startups",
      href: "/startups",
    },
    {
      icon: <MdDescription size={24} />,
      label: "Proposals",
      href: "/proposals",
    },
    {
      icon: <MdGroups size={24} />,
      label: "Mentors",
      href: "/mentors",
    },
    {
      icon: <MdAttachMoney size={24} />,
      label: "Investors",
      href: "/investors",
    },
  ];

  return (
    <div className="h-screen w-64 bg-white border-r pt-20 border-gray-300 px-4 py-6">
      <nav className="space-y-2">
        {sidebarItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-colors
              ${pathname === item.href 
                ? "bg-blue-50 text-blue-600" 
                : "text-gray-700 hover:bg-gray-100"
              }`}
          >
            {item.icon}
            <span className="font-medium">{item.label}</span>
          </Link>
        ))}
      </nav>
    </div>
  );
};

export default SideBar;