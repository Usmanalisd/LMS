"use client";

import { FiCompass, FiLayout } from "react-icons/fi";

import SidebarItem from "./SidebarItem"; // Make sure this path is correct
import { BarChart, List } from "lucide-react";
import { usePathname } from "next/navigation";

const guestRoutes = [
  {
    icon: FiLayout,
    label: "Dashboard",
    href: "/",
  },
  {
    icon: FiCompass,
    label: "Browser",
    href: "/search",
  },
];

const teacherRoutes = [
  {
    icon: List,
    label: "Courses",
    href: "/teacher/courses",
  },
  {
    icon: BarChart,
    label: "Analytics",
    href: "/teacher/analytics",
  },
];

const SidebarRoutes = () => {
  const pathname = usePathname();

  const isTeacherPage = pathname?.startsWith("/teacher");

  const routes = isTeacherPage ? teacherRoutes : guestRoutes;

  return (
    <div className="flex flex-col">
      {routes.map((route) => (
        <SidebarItem
          key={route.href}
          icon={route.icon}
          label={route.label}
          href={route.href}
        />
      ))}
    </div>
  );
};

export default SidebarRoutes;
