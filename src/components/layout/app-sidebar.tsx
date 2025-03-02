import {
  BarChart3,
  Calendar,
  FileText,
  Home,
  MessagesSquare,
  Settings,
} from "lucide-react";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import { Link, useLocation } from "react-router-dom";

const menuItems = [
  { icon: Home, label: "Dashboard", path: "/dashboard" },
  { icon: FileText, label: "Resume Analysis", path: "/resume-analysis" },
  { icon: Calendar, label: "Scheduling", path: "/scheduling" },
  { icon: MessagesSquare, label: "AI Assistant", path: "/ai-assistant" },
  { icon: BarChart3, label: "Analytics", path: "/analytics" },
  { icon: Settings, label: "Settings", path: "/settings" },
];

export function AppSidebar() {
  const location = useLocation();

  return (
    <>
      <div className="md:hidden fixed top-4 left-4 z-50">
        <SidebarTrigger />
      </div>

      <Sidebar className="[&_[data-sidebar=sidebar]]:bg-sidebar [&_[data-sidebar=sidebar]]:text-sidebar-foreground">
        <SidebarHeader className="h-14 flex items-center px-4 border-b border-sidebar-border">
          <img src="./logo.png" alt="logo" className="max-h-full max-w-full" />
        </SidebarHeader>
        <SidebarContent>
          <SidebarGroup>
            <SidebarGroupLabel className="text-sidebar-foreground/80">
            Menu
            </SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                {menuItems.map((item) => (
                  <SidebarMenuItem key={item.path}>
                    <SidebarMenuButton
                      asChild
                      tooltip={item.label}
                      isActive={location.pathname === item.path}
                      className="hover:bg-accent hover:text-accent-foreground"
                    >
                      <Link
                        to={item.path}
                        className="flex items-center gap-3 px-3 py-2 rounded-md"
                      >
                        <item.icon className="w-5 h-5 text-sidebar-foreground" />
                        <span className="text-sidebar-foreground">
                          {item.label}
                        </span>
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        </SidebarContent>
      </Sidebar>
    </>
  );
}