
import { SidebarProvider } from "@/components/ui/sidebar";
import { AppSidebar } from "./app-sidebar";

export function AppLayout({ children }: { children: React.ReactNode }) {
  return (
    <SidebarProvider defaultOpen={false}>
      <div className="min-h-screen flex w-full bg-background">
        <AppSidebar />
        <main className="flex-1 overflow-y-auto">
          <div className="container mx-auto p-4 md:p-6 lg:p-8 max-w-7xl">
            {children}
          </div>
        </main>
      </div>
    </SidebarProvider>
  );
}
