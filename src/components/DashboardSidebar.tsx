import { LogOut, UserCircle, ClipboardList, Calendar, Settings } from "lucide-react";
import { useNavigate } from "react-router-dom";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { Button } from "./ui/button";

export function DashboardSidebar() {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("currentUser") || "{}");
  const isStudent = user.role === "student";

  const handleLogout = () => {
    localStorage.removeItem("currentUser");
    navigate("/");
  };

  const menuItems = isStudent
    ? [
        { title: "Profile", icon: UserCircle, path: "/dashboard/student" },
        { title: "Punishments", icon: ClipboardList, path: "/dashboard/student/punishments" },
        { title: "Attendance", icon: Calendar, path: "/dashboard/student/attendance" },
        { title: "Settings", icon: Settings, path: "/dashboard/student/settings" },
      ]
    : [
        { title: "Profile", icon: UserCircle, path: "/dashboard/staff" },
        { title: "Manage Punishments", icon: ClipboardList, path: "/dashboard/staff/punishments" },
        { title: "Settings", icon: Settings, path: "/dashboard/staff/settings" },
      ];

  return (
    <Sidebar>
      <SidebarContent>
        <div className="p-4">
          <h2 className="text-lg font-semibold text-gray-900">Welcome, {user.name}</h2>
          <p className="text-sm text-gray-600">{user.id}</p>
        </div>
        <SidebarGroup>
          <SidebarGroupLabel>Menu</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {menuItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <Button
                      variant="ghost"
                      className="w-full justify-start"
                      onClick={() => navigate(item.path)}
                    >
                      <item.icon className="mr-2 h-4 w-4" />
                      <span>{item.title}</span>
                    </Button>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
        <div className="mt-auto p-4">
          <Button
            variant="outline"
            className="w-full justify-start text-red-600 hover:text-red-700"
            onClick={handleLogout}
          >
            <LogOut className="mr-2 h-4 w-4" />
            Logout
          </Button>
        </div>
      </SidebarContent>
    </Sidebar>
  );
}