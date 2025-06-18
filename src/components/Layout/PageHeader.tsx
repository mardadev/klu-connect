import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { useAuth } from '@/components/Auth/AuthProvider';
import {
  BookOpen,
  Bell,
  Search,
  Settings,
  LogOut,
  User,
  Moon,
  Sun
} from 'lucide-react';

interface PageHeaderProps {
  title?: string;
  showSearch?: boolean;
  actions?: React.ReactNode;
}

export default function PageHeader({ title, showSearch = true, actions }: PageHeaderProps) {
  const { user, logout } = useAuth();
  const location = useLocation();
  
  const isLandingPage = location.pathname === '/';

  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-200/60 bg-white/80 backdrop-blur-md supports-[backdrop-filter]:bg-white/60">
      <div className="container mx-auto px-4 lg:px-6">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link to={isLandingPage ? "/" : "/dashboard"} className="flex items-center space-x-3 transition-all duration-200 hover:scale-105">
            <div className="relative">
              <div className="w-9 h-9 bg-gradient-to-r from-blue-600 via-blue-500 to-indigo-600 rounded-xl flex items-center justify-center shadow-lg shadow-blue-500/25">
                <BookOpen className="w-5 h-5 text-white" />
              </div>
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-xl blur opacity-20 animate-pulse"></div>
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-bold bg-gradient-to-r from-slate-900 to-slate-700 bg-clip-text text-transparent">
                KLU Connect
              </span>
              {title && (
                <span className="text-xs text-slate-500 font-medium">{title}</span>
              )}
            </div>
          </Link>

          {/* Center Actions */}
          <div className="hidden md:flex items-center space-x-4 flex-1 max-w-md mx-8">
            {showSearch && (
              <div className="relative w-full">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 w-4 h-4" />
                <input
                  type="text"
                  placeholder="Platform içinde ara..."
                  className="w-full pl-10 pr-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all duration-200"
                />
              </div>
            )}
            {actions}
          </div>

          {/* Right Actions */}
          <div className="flex items-center space-x-3">
            {!isLandingPage && user ? (
              <>
                {/* Notifications */}
                <Button variant="ghost" size="sm" className="relative hover:bg-slate-100">
                  <Bell className="w-4 h-4" />
                  <Badge className="absolute -top-1 -right-1 h-5 w-5 flex items-center justify-center p-0 text-xs bg-red-500">
                    3
                  </Badge>
                </Button>

                {/* Theme Toggle */}
                <Button variant="ghost" size="sm" className="hover:bg-slate-100">
                  <Sun className="w-4 h-4" />
                </Button>

                {/* User Menu */}
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" className="relative h-10 w-10 rounded-full ring-2 ring-transparent hover:ring-blue-500/20 transition-all duration-200">
                      <Avatar className="h-9 w-9">
                        <AvatarImage src="" />
                        <AvatarFallback className="bg-gradient-to-r from-blue-500 to-indigo-500 text-white font-semibold">
                          {user?.name?.charAt(0) || 'U'}
                        </AvatarFallback>
                      </Avatar>
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent className="w-56 p-0" align="end" forceMount>
                    <DropdownMenuLabel className="p-4 bg-gradient-to-r from-blue-50 to-indigo-50">
                      <div className="flex items-center space-x-3">
                        <Avatar className="h-10 w-10">
                          <AvatarImage src="" />
                          <AvatarFallback className="bg-gradient-to-r from-blue-500 to-indigo-500 text-white">
                            {user?.name?.charAt(0) || 'U'}
                          </AvatarFallback>
                        </Avatar>
                        <div className="space-y-1">
                          <p className="text-sm font-semibold text-slate-900">{user?.name || 'Kullanıcı'}</p>
                          <p className="text-xs text-slate-600">{user?.email}</p>
                        </div>
                      </div>
                    </DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <div className="p-1">
                      <DropdownMenuItem asChild className="cursor-pointer">
                        <Link to="/profile" className="flex items-center space-x-2">
                          <User className="w-4 h-4" />
                          <span>Profil</span>
                        </Link>
                      </DropdownMenuItem>
                      <DropdownMenuItem className="cursor-pointer">
                        <Settings className="w-4 h-4 mr-2" />
                        <span>Ayarlar</span>
                      </DropdownMenuItem>
                      <DropdownMenuSeparator />
                      <DropdownMenuItem onClick={logout} className="cursor-pointer text-red-600 focus:text-red-600">
                        <LogOut className="w-4 h-4 mr-2" />
                        <span>Çıkış Yap</span>
                      </DropdownMenuItem>
                    </div>
                  </DropdownMenuContent>
                </DropdownMenu>
              </>
            ) : (
              <div className="flex items-center space-x-3">
                <Button variant="ghost" asChild className="text-slate-600 hover:text-slate-900">
                  <Link to="#features">Özellikler</Link>
                </Button>
                <Button asChild className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 shadow-lg shadow-blue-500/25">
                  <Link to="/login">Giriş Yap</Link>
                </Button>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}