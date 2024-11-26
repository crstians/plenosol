import { Bold, Calendar, Home, Inbox, Search, Settings } from "lucide-react";

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

// Menu items.
const items = [
  {
    title: "Inicio",
    url: "#",
    icon: Home,
    size: "w-7 h-7",
  },
  {
    title: "Notificações",
    url: "#",
    icon: Inbox,
  },
  {
    title: "Calendario",
    url: "#",
    icon: Calendar,
  },
  {
    title: "Pesquisar",
    url: "#",
    icon: Search,
    font: Bold,
  },
  {
    title: "Configurações",
    url: "#",
    icon: Settings,
  },
];

export function AppSidebar() {
  return (
    <Sidebar className="bg-[hsl(var(--background))] text-[hsl(var(--foreground))] border-[hsl(var(--border))]">
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel className="text-white">
            INÍCIO
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <a
                      href={item.url}
                      className="flex items-center gap-2 px-3 py-2 rounded-md hover:bg-[hsl(var(--muted))] hover:text-[hsl(var(--primary-foreground))]"
                    >
                      <item.icon className="text-[hsl(var(--primary))]" />
                      <span>{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
