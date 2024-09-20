import Logo from "@/components/ui/Logo";
import SidebarRoutes from "./SiderbarRoutes";

const Sidebar = () =>{
    return(
        <div className=" h-full boder-r flex flex-col overflow-y-auto bg-white shadow-sm">
            <div className="p-6">
                <Logo />
            </div>
            <div className="flex flex-col w-full">
                <SidebarRoutes/>
            </div>
        </div>
    )
};

export default Sidebar;