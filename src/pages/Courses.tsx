import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Progress } from '@/components/ui/progress';
import {
  BookOpen,
  Search,
  Filter,
  Clock,
  Users,
  Video,
  FileText,
  Download,
  Play,
  CheckCircle,
  Calendar,
  User,
  Plus,
  Star,
  Award
} from 'lucide-react';
import AppLayout from '@/components/Layout/AppLayout';
import PageContainer from '@/components/ui/page-container';
import SectionCard from '@/components/ui/section-card';
import StatsCard from '@/components/ui/stats-card';

export default function Courses() {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeTab, setActiveTab] = useState('enrolled');

  const enrolledCourses = [
    {
      id: 1,
      code: 'CSE401',
      title: 'Yapay Zeka',
      instructor: 'Prof. Dr. Mehmet Yılmaz',
      semester: '2024 Güz',
      progress: 75,
      nextClass: '2024-01-15 14:00',
      students: 45,
      color: 'bg-gradient-to-r from-blue-500 to-blue-600'
    },
    {
      id: 2,
      code: 'CSE301',
      title: 'Yazılım Mühendisliği',
      instructor: 'Dr. Ayşe Demir',
      semester: '2024 Güz',
      progress: 60,
      nextClass: '2024-01-16 10:00',
      students: 38,
      color: 'bg-gradient-to-r from-green-500 to-green-600'
    },
    {
      id: 3,
      code: 'CSE201',
      title: 'Veritabanı Yönetim Sistemleri',
      instructor: 'Doç. Dr. Ali Kaya',
      semester: '2024 Güz',
      progress: 85,
      nextClass: '2024-01-17 13:00',
      students: 52,
      color: 'bg-gradient-to-r from-purple-500 to-purple-600'
    },
    {
      id: 4,
      code: 'MAT201',
      title: 'Matematik II',
      instructor: 'Prof. Dr. Fatma Özkan',
      semester: '2024 Güz',
      progress: 40,
      nextClass: '2024-01-18 09:00',
      students: 60,
      color: 'bg-gradient-to-r from-orange-500 to-orange-600'
    }
  ];

  const availableCourses = [
    {
      id: 5,
      code: 'CSE501',
      title: 'Makine Öğrenmesi',
      instructor: 'Dr. Okan Bilge',
      semester: '2024 Bahar',
      students: 0,
      maxStudents: 30,
      description: 'Makine öğrenmesi algoritmalarına giriş ve uygulamalar',
      color: 'bg-gradient-to-r from-red-500 to-red-600'
    },
    {
      id: 6,
      code: 'CSE401',
      title: 'Bilgisayar Grafikleri',
      instructor: 'Doç. Dr. Zehra Çelik',
      semester: '2024 Bahar',
      students: 12,
      maxStudents: 25,
      description: '2D ve 3D grafik programlama teknikleri',
      color: 'bg-gradient-to-r from-indigo-500 to-indigo-600'
    }
  ];

  const assignments = [
    {
      id: 1,
      courseCode: 'CSE401',
      courseName: 'Yapay Zeka',
      title: 'Neural Network Implementation',
      dueDate: '2024-01-20',
      status: 'pending',
      submitted: false,
      priority: 'high'
    },
    {
      id: 2,
      courseCode: 'CSE301',
      courseName: 'Yazılım Mühendisliği',
      title: 'Software Design Document',
      dueDate: '2024-01-18',
      status: 'completed',
      submitted: true,
      grade: 'A',
      priority: 'medium'
    },
    {
      id: 3,
      courseCode: 'CSE201',
      courseName: 'Veritabanı Yönetim Sistemleri',
      title: 'Database Schema Design',
      dueDate: '2024-01-22',
      status: 'pending',
      submitted: false,
      priority: 'medium'
    }
  ];

  const courseStats = [
    {
      title: 'Aktif Dersler',
      value: enrolledCourses.length.toString(),
      icon: BookOpen,
      variant: 'info' as const
    },
    {
      title: 'Tamamlanan Ödev',
      value: assignments.filter(a => a.status === 'completed').length.toString(),
      icon: CheckCircle,
      variant: 'success' as const
    },
    {
      title: 'Bekleyen Görev',
      value: assignments.filter(a => a.status === 'pending').length.toString(),
      icon: Clock,
      variant: 'warning' as const
    }
  ];

  const filteredCourses = enrolledCourses.filter(course =>
    course.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    course.code.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <AppLayout 
      showSidebar 
      title="Dersler"
    >
      <PageContainer className="space-y-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="space-y-1">
            <h1 className="text-3xl md:text-4xl font-bold tracking-tight bg-gradient-to-r from-slate-900 to-slate-700 bg-clip-text text-transparent">
              Derslerim
            </h1>
            <p className="text-slate-600 text-lg">Kayıtlı olduğunuz dersler ve akademik ilerlemeleriniz</p>
          </div>
          <div className="flex items-center gap-3">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 w-4 h-4" />
              <Input
                placeholder="Ders ara..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 w-64 focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500"
              />
            </div>
            <Button variant="outline" size="sm" className="gap-2">
              <Filter className="w-4 h-4" />
              Filtrele
            </Button>
          </div>
        </div>

        {/* Course Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {courseStats.map((stat, index) => (
            <StatsCard
              key={index}
              title={stat.title}
              value={stat.value}
              icon={stat.icon}
              variant={stat.variant}
              className="hover:scale-105 transition-transform duration-200"
            />
          ))}
        </div>

        <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
          <TabsList className="grid w-full md:w-auto md:inline-grid grid-cols-3 bg-slate-100">
            <TabsTrigger value="enrolled" className="data-[state=active]:bg-white data-[state=active]:shadow-sm">
              Kayıtlı Dersler
            </TabsTrigger>
            <TabsTrigger value="available" className="data-[state=active]:bg-white data-[state=active]:shadow-sm">
              Mevcut Dersler
            </TabsTrigger>
            <TabsTrigger value="assignments" className="data-[state=active]:bg-white data-[state=active]:shadow-sm">
              Ödevler
            </TabsTrigger>
          </TabsList>

          <TabsContent value="enrolled" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {filteredCourses.map((course) => (
                <SectionCard
                  key={course.id}
                  variant="elevated"
                  className="group hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
                >
                  <div className="space-y-4">
                    {/* Course Header */}
                    <div className="flex items-start justify-between">
                      <div className="flex items-center gap-4">
                        <div className={`w-16 h-16 ${course.color} rounded-2xl flex items-center justify-center shadow-lg`}>
                          <BookOpen className="w-8 h-8 text-white" />
                        </div>
                        <div>
                          <h3 className="text-xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                            {course.title}
                          </h3>
                          <p className="text-slate-600 font-medium">{course.code}</p>
                        </div>
                      </div>
                      <Badge variant="secondary" className="font-medium">
                        {course.semester}
                      </Badge>
                    </div>

                    {/* Instructor */}
                    <div className="flex items-center gap-2 text-slate-600">
                      <User className="w-4 h-4" />
                      <span className="font-medium">{course.instructor}</span>
                    </div>
                    
                    {/* Progress */}
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm font-medium">
                        <span className="text-slate-700">İlerleme</span>
                        <span className="text-blue-600">{course.progress}%</span>
                      </div>
                      <Progress 
                        value={course.progress} 
                        className="h-3 bg-slate-200"
                      />
                    </div>

                    {/* Course Info */}
                    <div className="grid grid-cols-2 gap-4 p-4 bg-slate-50 rounded-xl">
                      <div className="text-center">
                        <div className="flex items-center justify-center gap-2 text-slate-600 mb-1">
                          <Clock className="w-4 h-4" />
                          <span className="text-xs font-medium">Sonraki Ders</span>
                        </div>
                        <p className="text-sm font-semibold text-slate-900">
                          {new Date(course.nextClass).toLocaleDateString('tr-TR', { 
                            month: 'short', 
                            day: 'numeric' 
                          })}<br/>
                          {new Date(course.nextClass).toLocaleTimeString('tr-TR', { 
                            hour: '2-digit', 
                            minute: '2-digit' 
                          })}
                        </p>
                      </div>
                      <div className="text-center">
                        <div className="flex items-center justify-center gap-2 text-slate-600 mb-1">
                          <Users className="w-4 h-4" />
                          <span className="text-xs font-medium">Öğrenci</span>
                        </div>
                        <p className="text-sm font-semibold text-slate-900">{course.students}</p>
                      </div>
                    </div>

                    {/* Actions */}
                    <div className="flex gap-2">
                      <Button size="sm" className="flex-1 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700">
                        <Video className="w-4 h-4 mr-2" />
                        Derse Katıl
                      </Button>
                      <Button variant="outline" size="sm" className="px-3">
                        <FileText className="w-4 h-4" />
                      </Button>
                      <Button variant="outline" size="sm" className="px-3">
                        <Download className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                </SectionCard>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="available">
            <SectionCard
              title="Kayıt Açık Dersler"
              description="2024 Bahar döneminde kayıt yaptırabileceğiniz dersler"
              variant="elevated"
              headerContent={
                <Button size="sm" className="gap-2">
                  <Plus className="w-4 h-4" />
                  Yeni Ders
                </Button>
              }
            >
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {availableCourses.map((course) => (
                  <div key={course.id} className="p-6 border border-slate-200 rounded-xl hover:shadow-lg transition-all duration-200 group">
                    <div className="space-y-4">
                      <div className="flex items-start justify-between">
                        <div className="flex items-center gap-4">
                          <div className={`w-12 h-12 ${course.color} rounded-xl flex items-center justify-center`}>
                            <BookOpen className="w-6 h-6 text-white" />
                          </div>
                          <div>
                            <h4 className="text-lg font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                              {course.title}
                            </h4>
                            <p className="text-slate-600 font-medium">{course.code}</p>
                          </div>
                        </div>
                        <Badge variant="outline" className="font-medium">{course.semester}</Badge>
                      </div>
                      
                      <div className="flex items-center gap-2 text-slate-600">
                        <User className="w-4 h-4" />
                        <span className="font-medium">{course.instructor}</span>
                      </div>
                      
                      <p className="text-slate-600 leading-relaxed">{course.description}</p>
                      
                      <div className="space-y-2">
                        <div className="flex items-center justify-between text-sm font-medium">
                          <span className="text-slate-700">Kayıtlı Öğrenci</span>
                          <span className="text-blue-600">{course.students}/{course.maxStudents}</span>
                        </div>
                        <Progress 
                          value={(course.students / course.maxStudents) * 100} 
                          className="h-2 bg-slate-200" 
                        />
                      </div>

                      <Button 
                        className="w-full bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700" 
                        disabled={course.students >= course.maxStudents}
                      >
                        {course.students >= course.maxStudents ? 'Kontenjan Dolu' : 'Kayıt Ol'}
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </SectionCard>
          </TabsContent>

          <TabsContent value="assignments">
            <SectionCard
              title="Ödevler ve Projeler"
              description="Yaklaşan teslim tarihleri ve tamamlanan görevler"
              variant="elevated"
            >
              <div className="space-y-4">
                {assignments.map((assignment) => (
                  <div key={assignment.id} className="p-6 border border-slate-200 rounded-xl hover:shadow-md transition-all duration-200">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4">
                        <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${
                          assignment.status === 'completed' 
                            ? 'bg-green-100 text-green-600' 
                            : assignment.priority === 'high'
                            ? 'bg-red-100 text-red-600'
                            : 'bg-orange-100 text-orange-600'
                        }`}>
                          {assignment.status === 'completed' ? (
                            <CheckCircle className="w-6 h-6" />
                          ) : (
                            <Clock className="w-6 h-6" />
                          )}
                        </div>
                        <div className="space-y-1">
                          <h4 className="font-bold text-slate-900 text-lg">{assignment.title}</h4>
                          <div className="flex items-center gap-3 text-sm text-slate-600">
                            <span className="font-medium">{assignment.courseName}</span>
                            <span>•</span>
                            <span>{assignment.courseCode}</span>
                            <span>•</span>
                            <span>Teslim: {new Date(assignment.dueDate).toLocaleDateString('tr-TR')}</span>
                          </div>
                          {assignment.grade && (
                            <Badge variant="default" className="mt-2">
                              Not: {assignment.grade}
                            </Badge>
                          )}
                        </div>
                      </div>
                      <div className="flex items-center gap-3">
                        <Badge 
                          variant={
                            assignment.priority === 'high' ? 'destructive' :
                            assignment.priority === 'medium' ? 'default' : 'secondary'
                          }
                        >
                          {assignment.priority === 'high' ? 'Yüksek' :
                           assignment.priority === 'medium' ? 'Orta' : 'Düşük'}
                        </Badge>
                        {assignment.status === 'pending' ? (
                          <Button size="sm" className="gap-2">
                            <FileText className="w-4 h-4" />
                            Teslim Et
                          </Button>
                        ) : (
                          <Badge variant="secondary" className="gap-1">
                            <CheckCircle className="w-3 h-3" />
                            Teslim Edildi
                          </Badge>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </SectionCard>
          </TabsContent>
        </Tabs>
      </PageContainer>
    </AppLayout>
  );
}