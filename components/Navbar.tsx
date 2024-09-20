"use client";
import { MobileSidebar } from "@/components/MobileSidebar";
import NavbarRoutes from "@/components/NavbarRoutes";

const Navbar = () => {
  return (
    <div className="p-4 border-b h-full items-center bg-white shadow-sm flex">
      <MobileSidebar />
      <NavbarRoutes />
    </div>
  );
};

export default Navbar;
