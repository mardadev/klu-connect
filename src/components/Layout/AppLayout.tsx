import React from 'react';
import { Outlet } from 'react-router-dom';
import PageHeader from './PageHeader';
import { Sidebar } from './Sidebar';
import { cn } from '@/lib/utils';

interface AppLayoutProps {
  children?: React.ReactNode;
  showSidebar?: boolean;
  sidebarCollapsed?: boolean;
  className?: string;
}

export default function AppLayout({ 
  children, 
  showSidebar = false, 
  sidebarCollapsed = false,
  className 
}: AppLayoutProps) {
  return (
    <div className={cn("min-h-screen bg-gradient-to-br from-slate-50 via-blue-50/30 to-indigo-50/40", className)}>
      <PageHeader />
      
      <div className="flex">
        {showSidebar && (
          <Sidebar collapsed={sidebarCollapsed} />
        )}
        
        <main className={cn(
          "flex-1 transition-all duration-300",
          showSidebar ? (sidebarCollapsed ? "ml-16" : "ml-64") : "ml-0"
        )}>
          {children || <Outlet />}
        </main>
      </div>
    </div>
  );
}