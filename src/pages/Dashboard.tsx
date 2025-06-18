import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import {
  Bell,
  BookOpen,
  Calendar,
  GraduationCap,
  MessageCircle,
  Star,
  TrendingUp,
  Users,
  Award,
  Clock,
  Target,
  Zap,
  Heart,
  Plus,
  ArrowRight,
  Activity,
  CheckCircle,
  AlertCircle,
  Settings,
  Sparkles
} from 'lucide-react';
import { useAuth } from '@/components/Auth/AuthProvider';
import AppLayout from '@/components/Layout/AppLayout';

export default function Dashboard() {
  const { user } = useAuth();
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const stats = [
    {
      title: 'GPA',
      value: '3.85',
      change: '+0.12',
      trend: 'up',
      icon: Star,
      gradient: 'from-yellow-400 to-orange-500',
      bgGradient: 'from-yellow-50 to-orange-50',
      description: 'Bu dönem'
    },
    {
      title: 'Tamamlanan Ders',
      value: '24',
      change: '+3',
      trend: 'up',
      icon: BookOpen,
      gradient: 'from-blue-500 to-indigo-600',
      bgGradient: 'from-blue-50 to-indigo-50',
      description: 'Toplam'
    },
    {
      title: 'Aktif Proje',
      value: '5',
      change: '+2',
      trend: 'up',
      icon: Target,
      gradient: 'from-green-500 to-emerald-600',
      bgGradient: 'from-green-50 to-emerald-50',
      description: 'Devam ediyor'
    },
    {
      title: 'Sosyal Puan',
      value: '92',
      change: '+8',
      trend: 'up',
      icon: Users,
      gradient: 'from-purple-500 to-pink-600',
      bgGradient: 'from-purple-50 to-pink-50',
      description: 'Bu ay'
    }
  ];

  const quickActions = [
    {
      title: 'Yeni Ders Kayıt',
      description: 'Gelecek dönem için ders seçimi yapın',
      icon: Plus,
      gradient: 'from-blue-500 to-indigo-600',
      action: () => {}
    },
    {
      title: 'Ödev Takip',
      description: 'Yaklaşan ödevlerinizi görüntüleyin',
      icon: CheckCircle,
      gradient: 'from-green-500 to-emerald-600',
      action: () => {}
    },
    {
      title: 'Mesajlar',
      description: 'Yeni mesajlarınızı kontrol edin',
      icon: MessageCircle,
      gradient: 'from-purple-500 to-pink-600',
      action: () => {}
    },
    {
      title: 'Etkinlikler',
      description: 'Yaklaşan etkinlikleri keşfedin',
      icon: Calendar,
      gradient: 'from-orange-500 to-red-600',
      action: () => {}
    }
  ];

  const recentActivities = [
    {
      type: 'achievement',
      title: 'Yeni Başarı Kazandınız!',
      description: 'Veri Yapıları dersinde AA aldınız',
      time: '2 saat önce',
      icon: Award,
      color: 'text-yellow-600',
      bgColor: 'bg-yellow-50'
    },
    {
      type: 'message',
      title: 'Yeni Mesaj',
      description: 'Prof. Dr. Ahmet Yılmaz sizinle iletişime geçti',
      time: '4 saat önce',
      icon: MessageCircle,
      color: 'text-blue-600',
      bgColor: 'bg-blue-50'
    },
    {
      type: 'assignment',
      title: 'Ödev Hatırlatması',
      description: 'Algoritma Analizi ödevi yarın teslim',
      time: '6 saat önce',
      icon: AlertCircle,
      color: 'text-orange-600',
      bgColor: 'bg-orange-50'
    },
    {
      type: 'social',
      title: 'Etkinlik Daveti',
      description: 'Yapay Zeka Semineri - 15 Kasım',
      time: '1 gün önce',
      icon: Users,
      color: 'text-purple-600',
      bgColor: 'bg-purple-50'
    },
    {
      type: 'grade',
      title: 'Not Güncellendi',
      description: 'Veritabanı Yönetimi - Vize sonucu açıklandı',
      time: '2 gün önce',
      icon: TrendingUp,
      color: 'text-green-600',
      bgColor: 'bg-green-50'
    }
  ];

  const upcomingSchedule = [
    {
      time: '09:00',
      title: 'Algoritma Analizi',
      type: 'Ders',
      location: 'A-101',
      status: 'active'
    },
    {
      time: '11:00',
      title: 'Proje Toplantısı',
      type: 'Toplantı',
      location: 'B-205',
      status: 'upcoming'
    },
    {
      time: '14:00',
      title: 'Veritabanı Lab',
      type: 'Laboratuvar',
      location: 'Lab-3',
      status: 'upcoming'
    },
    {
      time: '16:00',
      title: 'Öğrenci Kulübü',
      type: 'Etkinlik',
      location: 'Konferans Salonu',
      status: 'upcoming'
    }
  ];

  const performanceData = {
    currentSemester: 85,
    previousSemester: 78,
    target: 90
  };

  return (
    <AppLayout showSidebar>
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 dark:from-slate-900 dark:via-blue-900 dark:to-indigo-950 p-6">
        {/* Welcome Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: isLoaded ? 1 : 0, y: isLoaded ? 0 : 20 }}
          transition={{ duration: 0.6 }}
          className="mb-8"
        >
          <div className="bg-gradient-to-r from-blue-500 to-indigo-600 rounded-3xl p-8 text-white shadow-2xl relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-indigo-700/20 backdrop-blur-sm"></div>
            <div className="relative z-10">
              <div className="flex items-center justify-between">
                <div>
                  <div className="flex items-center space-x-3 mb-4">
                    <Avatar className="w-16 h-16 border-4 border-white/30 shadow-lg">
                      <AvatarFallback className="bg-white/20 text-white text-xl font-bold">
                        {user?.name?.charAt(0) || 'U'}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <h1 className="text-3xl font-bold">Hoş geldin, {user?.name || 'Öğrenci'}!</h1>
                      <p className="text-blue-100 text-lg">Bilgisayar Mühendisliği - 3. Sınıf</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <Badge className="bg-white/20 text-white border-white/30 hover:bg-white/30">
                      GPA: 3.85
                    </Badge>
                    <Badge className="bg-white/20 text-white border-white/30 hover:bg-white/30">
                      5 Aktif Proje
                    </Badge>
                    <Badge className="bg-white/20 text-white border-white/30 hover:bg-white/30">
                      24 Tamamlanan Ders
                    </Badge>
                  </div>
                </div>
                <div className="hidden md:flex items-center space-x-4">
                  <div className="text-right">
                    <p className="text-sm text-blue-100">Bugün</p>
                    <p className="text-2xl font-bold">{new Date().toLocaleDateString('tr-TR', { 
                      day: 'numeric', 
                      month: 'long' 
                    })}</p>
                  </div>
                  <Sparkles className="w-12 h-12 text-white/60" />
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Stats Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: isLoaded ? 1 : 0, y: isLoaded ? 0 : 20 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8"
        >
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <Card key={index} className="bg-white/70 dark:bg-slate-800/70 backdrop-blur-xl border-white/20 shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-105">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className={`w-12 h-12 bg-gradient-to-br ${stat.gradient} rounded-xl flex items-center justify-center shadow-lg`}>
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <div className={`px-3 py-1 bg-gradient-to-r ${stat.bgGradient} rounded-full`}>
                      <span className={`text-sm font-semibold bg-gradient-to-r ${stat.gradient} bg-clip-text text-transparent`}>
                        {stat.change}
                      </span>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-1">
                      {stat.value}
                    </h3>
                    <p className="text-slate-600 dark:text-slate-400 font-medium">
                      {stat.title}
                    </p>
                    <p className="text-xs text-slate-500 dark:text-slate-500 mt-1">
                      {stat.description}
                    </p>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Quick Actions */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: isLoaded ? 1 : 0, x: isLoaded ? 0 : -20 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-1"
          >
            <Card className="bg-white/70 dark:bg-slate-800/70 backdrop-blur-xl border-white/20 shadow-xl">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-slate-900 dark:text-white">
                  <Zap className="w-6 h-6 text-blue-500" />
                  Hızlı İşlemler
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {quickActions.map((action, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className={`p-4 bg-gradient-to-r ${action.gradient} rounded-xl text-white cursor-pointer shadow-lg hover:shadow-xl transition-all duration-300`}
                    onClick={action.action}
                  >
                    <div className="flex items-center gap-3">
                      <action.icon className="w-6 h-6" />
                      <div className="flex-1">
                        <h4 className="font-semibold">{action.title}</h4>
                        <p className="text-sm opacity-90">{action.description}</p>
                      </div>
                      <ArrowRight className="w-5 h-5" />
                    </div>
                  </motion.div>
                ))}
              </CardContent>
            </Card>
          </motion.div>

          {/* Recent Activities */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: isLoaded ? 1 : 0, y: isLoaded ? 0 : 20 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="lg:col-span-2"
          >
            <Card className="bg-white/70 dark:bg-slate-800/70 backdrop-blur-xl border-white/20 shadow-xl">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-slate-900 dark:text-white">
                  <Activity className="w-6 h-6 text-green-500" />
                  Son Aktiviteler
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4 max-h-96 overflow-y-auto custom-scrollbar">
                  {recentActivities.map((activity, index) => {
                    const Icon = activity.icon;
                    return (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.3, delay: index * 0.1 }}
                        className="flex items-center gap-4 p-4 bg-slate-50/80 dark:bg-slate-700/50 rounded-xl hover:bg-slate-100/80 dark:hover:bg-slate-700/80 transition-colors duration-200"
                      >
                        <div className={`w-12 h-12 ${activity.bgColor} rounded-xl flex items-center justify-center`}>
                          <Icon className={`w-6 h-6 ${activity.color}`} />
                        </div>
                        <div className="flex-1">
                          <h4 className="font-semibold text-slate-900 dark:text-white">{activity.title}</h4>
                          <p className="text-sm text-slate-600 dark:text-slate-400">{activity.description}</p>
                          <p className="text-xs text-slate-500 dark:text-slate-500 mt-1">{activity.time}</p>
                        </div>
                      </motion.div>
                    );
                  })}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        {/* Schedule and Performance */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-8">
          {/* Today's Schedule */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: isLoaded ? 1 : 0, x: isLoaded ? 0 : -20 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <Card className="bg-white/70 dark:bg-slate-800/70 backdrop-blur-xl border-white/20 shadow-xl">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-slate-900 dark:text-white">
                  <Clock className="w-6 h-6 text-indigo-500" />
                  Bugünkü Program
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {upcomingSchedule.map((item, index) => (
                    <div
                      key={index}
                      className={`flex items-center gap-4 p-4 rounded-xl transition-all duration-200 ${
                        item.status === 'active' 
                          ? 'bg-gradient-to-r from-blue-50 to-indigo-50 border-2 border-blue-200' 
                          : 'bg-slate-50/80 dark:bg-slate-700/50 hover:bg-slate-100/80 dark:hover:bg-slate-700/80'
                      }`}
                    >
                      <div className={`w-16 h-16 rounded-xl flex flex-col items-center justify-center font-bold text-sm ${
                        item.status === 'active' 
                          ? 'bg-gradient-to-br from-blue-500 to-indigo-600 text-white' 
                          : 'bg-slate-200 dark:bg-slate-600 text-slate-700 dark:text-slate-300'
                      }`}>
                        <span>{item.time.split(':')[0]}</span>
                        <span className="text-xs">{item.time.split(':')[1]}</span>
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold text-slate-900 dark:text-white">{item.title}</h4>
                        <div className="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-400">
                          <Badge variant="outline" className="text-xs">{item.type}</Badge>
                          <span>•</span>
                          <span>{item.location}</span>
                        </div>
                      </div>
                      {item.status === 'active' && (
                        <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                      )}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Performance Chart */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: isLoaded ? 1 : 0, x: isLoaded ? 0 : 20 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <Card className="bg-white/70 dark:bg-slate-800/70 backdrop-blur-xl border-white/20 shadow-xl">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-slate-900 dark:text-white">
                  <TrendingUp className="w-6 h-6 text-green-500" />
                  Akademik Performans
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-medium text-slate-700 dark:text-slate-300">Bu Dönem</span>
                      <span className="text-sm font-bold text-blue-600 dark:text-blue-400">{performanceData.currentSemester}%</span>
                    </div>
                    <Progress value={performanceData.currentSemester} className="h-3 bg-slate-200 dark:bg-slate-700">
                      <div className="h-full bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full transition-all duration-1000 ease-out" 
                           style={{ width: `${performanceData.currentSemester}%` }}></div>
                    </Progress>
                  </div>
                  
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-medium text-slate-700 dark:text-slate-300">Geçen Dönem</span>
                      <span className="text-sm font-bold text-slate-600 dark:text-slate-400">{performanceData.previousSemester}%</span>
                    </div>
                    <Progress value={performanceData.previousSemester} className="h-3 bg-slate-200 dark:bg-slate-700">
                      <div className="h-full bg-gradient-to-r from-slate-400 to-slate-500 rounded-full transition-all duration-1000 ease-out" 
                           style={{ width: `${performanceData.previousSemester}%` }}></div>
                    </Progress>
                  </div>
                  
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-medium text-slate-700 dark:text-slate-300">Hedef</span>
                      <span className="text-sm font-bold text-green-600 dark:text-green-400">{performanceData.target}%</span>
                    </div>
                    <Progress value={performanceData.target} className="h-3 bg-slate-200 dark:bg-slate-700">
                      <div className="h-full bg-gradient-to-r from-green-500 to-emerald-600 rounded-full transition-all duration-1000 ease-out" 
                           style={{ width: `${performanceData.target}%` }}></div>
                    </Progress>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 rounded-xl p-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl flex items-center justify-center">
                      <TrendingUp className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-green-800 dark:text-green-300">Mükemmel İlerleme!</h4>
                      <p className="text-sm text-green-600 dark:text-green-400">Bu dönem %7 artış gösterdiniz</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        {/* Floating Action Button */}
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: isLoaded ? 1 : 0, scale: isLoaded ? 1 : 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="fixed bottom-8 right-8 z-50"
        >
          <Button
            size="lg"
            className="w-16 h-16 rounded-full bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 shadow-2xl hover:shadow-blue-500/25 transition-all duration-300 transform hover:scale-110"
          >
            <Plus className="w-8 h-8 text-white" />
          </Button>
        </motion.div>
      </div>
    </AppLayout>
  );
}