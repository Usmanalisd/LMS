"use client";

import { IconType } from "react-icons";
import { usePathname, useRouter } from "next/navigation";
import Link from "next/link";

interface SidebarItemProps {
  icon: IconType;
  label: string;
  href: string;
  active?: boolean;
}

const SidebarItem = ({ icon: Icon, label, href, active }: SidebarItemProps) => {
  const pathname = usePathname();
  const router = useRouter();

  const isActive =
    (pathname === "/" && href === "/") ||
    pathname === href ||
    pathname?.startsWith(`${href}/`);

  const onClick = () => {
    router.push(href);
  };

  return (
    <div
      className={`flex items-center p-2 hover:bg-[#727CEB] hover:text-white cursor-pointer   ${
        isActive
          ? "bg-[#66B5DE] border-r-2 border-[#DE78A1] text-white font-bold"
          : ""
      }`}
      onClick={onClick}
    >
      <Icon className="w-6 h-6 mr-3" />
      <Link href={href} className="text-sm font-medium">
        {label}
      </Link>
    </div>
  );
};

export default SidebarItem;
