import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { useAuth } from '@/components/Auth/AuthProvider';
import {
  Home,
  BookOpen,
  Users,
  MessageSquare,
  Bell,
  User,
  Settings,
  LogOut,
  GraduationCap
} from 'lucide-react';

const sidebarItems = [
  {
    name: 'Dashboard',
    href: '/dashboard',
    icon: Home,
  },
  {
    name: 'Dersler',
    href: '/courses',
    icon: BookOpen,
    badge: '4'
  },
  {
    name: 'Sosyal',
    href: '/social',
    icon: Users,
  },
  {
    name: 'Mesajlar',
    href: '/messages',
    icon: MessageSquare,
    badge: '2'
  },
  {
    name: 'Duyurular',
    href: '/announcements',
    icon: Bell,
    badge: '3'
  },
  {
    name: 'Profil',
    href: '/profile',
    icon: User,
  },
];

interface SidebarProps {
  className?: string;
}

export const Sidebar: React.FC<SidebarProps> = ({ className }) => {
  const location = useLocation();
  const { user, logout } = useAuth();

  return (
    <div className={`w-64 bg-white border-r border-slate-200 flex flex-col ${className}`}>
      {/* Logo */}
      <div className="p-6 border-b border-slate-200">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center">
            <GraduationCap className="w-6 h-6 text-white" />
          </div>
          <div>
            <h1 className="font-bold text-xl text-slate-800">KLU Connect</h1>
            <p className="text-xs text-slate-500">Öğrenci Portalı</p>
          </div>
        </div>
      </div>

      {/* User Info */}
      <div className="p-4 border-b border-slate-200">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
            <span className="text-blue-600 font-semibold text-lg">
              {user?.name?.charAt(0) || 'U'}
            </span>
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-sm font-medium text-slate-700 truncate">
              {user?.name || 'Kullanıcı'}
            </p>
            <p className="text-xs text-slate-500 truncate">
              {user?.department || 'Bölüm'}
            </p>
            <Badge variant="outline" className="mt-1 text-xs">
              {user?.year || 'Öğrenci'}
            </Badge>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 p-4 space-y-2">
        {sidebarItems.map((item) => {
          const Icon = item.icon;
          const isActive = location.pathname === item.href;
          
          return (
            <Link key={item.name} to={item.href}>
              <Button
                variant={isActive ? "default" : "ghost"}
                className={`w-full justify-start gap-3 ${
                  isActive 
                    ? 'bg-blue-600 text-white hover:bg-blue-700' 
                    : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
                }`}
              >
                <Icon className="w-5 h-5" />
                <span className="flex-1 text-left">{item.name}</span>
                {item.badge && (
                  <Badge 
                    variant={isActive ? "secondary" : "outline"} 
                    className={`text-xs ${
                      isActive 
                        ? 'bg-white/20 text-white border-white/30' 
                        : 'bg-blue-50 text-blue-600 border-blue-200'
                    }`}
                  >
                    {item.badge}
                  </Badge>
                )}
              </Button>
            </Link>
          );
        })}
      </nav>

      {/* Bottom Actions */}
      <div className="p-4 border-t border-slate-200 space-y-2">
        <Button variant="ghost" className="w-full justify-start gap-3 text-slate-600 hover:text-slate-900">
          <Settings className="w-5 h-5" />
          <span>Ayarlar</span>
        </Button>
        <Button 
          variant="ghost" 
          onClick={logout}
          className="w-full justify-start gap-3 text-red-600 hover:text-red-700 hover:bg-red-50"
        >
          <LogOut className="w-5 h-5" />
          <span>Çıkış Yap</span>
        </Button>
      </div>
    </div>
  );
};