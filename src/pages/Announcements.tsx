import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { useAuth } from '@/components/Auth/AuthProvider';
import {
  Search,
  Bell,
  Calendar,
  MapPin,
  Clock,
  Users,
  BookOpen,
  Briefcase,
  GraduationCap,
  Star,
  Pin,
  Filter,
  Eye,
  Heart,
  Share2
} from 'lucide-react';
import AppLayout from '@/components/Layout/AppLayout';
import PageContainer from '@/components/ui/page-container';
import SectionCard from '@/components/ui/section-card';
import StatsCard from '@/components/ui/stats-card';

export default function Announcements() {
  const { user } = useAuth();
  const [searchTerm, setSearchTerm] = useState('');
  const [activeTab, setActiveTab] = useState('all');

  const announcementStats = [
    {
      title: 'Yeni Duyuru',
      value: '12',
      icon: Bell,
      variant: 'warning' as const,
      trend: { value: 3, label: 'bugün', direction: 'up' as const }
    },
    {
      title: 'Yaklaşan Etkinlik',
      value: '5',
      icon: Calendar,
      variant: 'info' as const,
      trend: { value: 2, label: 'bu hafta', direction: 'up' as const }
    },
    {
      title: 'Önemli Duyuru',
      value: '3',
      icon: Star,
      variant: 'danger' as const,
      trend: { value: 1, label: 'bu ay', direction: 'up' as const }
    }
  ];

  const announcements = [
    {
      id: 1,
      title: 'Bahar Dönemi Kayıt Tarihleri Açıklandı',
      content: '2024 Bahar dönemi ders kayıtları 15-20 Ocak tarihleri arasında yapılacaktır. Öğrencilerimizin kayıt takvimini takip etmeleri önemle duyurulur.',
      author: {
        name: 'Öğrenci İşleri Daire Başkanlığı',
        avatar: 'Öİ',
        verified: true
      },
      category: 'academic',
      priority: 'high',
      timestamp: '2 saat önce',
      readTime: '2 dk',
      views: 1247,
      likes: 89,
      pinned: true,
      tags: ['Kayıt', 'Bahar Dönemi', 'Önemli']
    },
    {
      id: 2,
      title: 'Teknoloji Zirvesi 2024 - Kayıtlar Başladı',
      content: 'Üniversitemizde düzenlenecek Teknoloji Zirvesi\'ne katılım için kayıtlar başlamıştır. Sektör liderleri, akademisyenler ve öğrenciler bir araya gelecek.',
      author: {
        name: 'Etkinlik Koordinatörlüğü',
        avatar: 'EK',
        verified: true
      },
      category: 'event',
      priority: 'medium',
      timestamp: '5 saat önce',
      readTime: '3 dk',
      views: 892,
      likes: 156,
      pinned: false,
      tags: ['Etkinlik', 'Teknoloji', 'Kayıt'],
      eventDate: '2024-02-15',
      location: 'Ana Kampüs Konferans Salonu'
    },
    {
      id: 3,
      title: 'Kütüphane Çalışma Saatleri Güncellendi',
      content: 'Merkez kütüphanemiz sınav döneminde 7/24 hizmet verecektir. Öğrencilerimiz sessiz çalışma alanlarından ve grup çalışma odalarından faydalanabilirler.',
      author: {
        name: 'Kütüphane ve Dokümantasyon Daire Başkanlığı',
        avatar: 'KD',
        verified: true
      },
      category: 'facility',
      priority: 'low',
      timestamp: '1 gün önce',
      readTime: '1 dk',
      views: 634,
      likes: 42,
      pinned: false,
      tags: ['Kütüphane', 'Çalışma Saatleri', 'Sınav Dönemi']
    },
    {
      id: 4,
      title: 'Mezuniyet Töreni Hazırlıkları',
      content: '2024 mezuniyet töreni 25 Haziran\'da düzenlenecektir. Mezun adaylarının törenle ilgili bilgileri takip etmeleri ve gerekli işlemleri tamamlamaları gerekmektedir.',
      author: {
        name: 'Mezun İlişkileri Ofisi',
        avatar: 'MO',
        verified: true
      },
      category: 'graduation',
      priority: 'high',
      timestamp: '2 gün önce',
      readTime: '4 dk',
      views: 2341,
      likes: 234,
      pinned: true,
      tags: ['Mezuniyet', 'Tören', '2024'],
      eventDate: '2024-06-25',
      location: 'Merkez Kampüs Amfi Tiyatro'
    },
    {
      id: 5,
      title: 'Burs Başvuruları İçin Son Tarih',
      content: 'Bahar dönemi burs başvuruları için son tarih 30 Ocak\'tır. Başvuru formları ve gerekli belgeler öğrenci bilgi sisteminden indirilebilir.',
      author: {
        name: 'Sosyal Hizmetler Koordinatörlüğü',
        avatar: 'SH',
        verified: true
      },
      category: 'financial',
      priority: 'medium',
      timestamp: '3 gün önce',
      readTime: '2 dk',
      views: 987,
      likes: 67,
      pinned: false,
      tags: ['Burs', 'Başvuru', 'Son Tarih']
    }
  ];

  const categories = [
    { id: 'all', name: 'Tümü', count: announcements.length },
    { id: 'academic', name: 'Akademik', count: announcements.filter(a => a.category === 'academic').length },
    { id: 'event', name: 'Etkinlik', count: announcements.filter(a => a.category === 'event').length },
    { id: 'facility', name: 'Tesis', count: announcements.filter(a => a.category === 'facility').length },
    { id: 'graduation', name: 'Mezuniyet', count: announcements.filter(a => a.category === 'graduation').length },
    { id: 'financial', name: 'Mali', count: announcements.filter(a => a.category === 'financial').length }
  ];

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'academic': return <BookOpen className="w-4 h-4" />;
      case 'event': return <Calendar className="w-4 h-4" />;
      case 'facility': return <MapPin className="w-4 h-4" />;
      case 'graduation': return <GraduationCap className="w-4 h-4" />;
      case 'financial': return <Briefcase className="w-4 h-4" />;
      default: return <Bell className="w-4 h-4" />;
    }
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'high': return 'border-red-200 bg-red-50 text-red-700';
      case 'medium': return 'border-orange-200 bg-orange-50 text-orange-700';
      case 'low': return 'border-blue-200 bg-blue-50 text-blue-700';
      default: return 'border-slate-200 bg-slate-50 text-slate-700';
    }
  };

  const filteredAnnouncements = announcements.filter(announcement => {
    const matchesSearch = announcement.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         announcement.content.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = activeTab === 'all' || announcement.category === activeTab;
    return matchesSearch && matchesCategory;
  });

  return (
    <AppLayout showSidebar title="Duyurular">
      <PageContainer className="space-y-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="space-y-1">
            <h1 className="text-3xl md:text-4xl font-bold tracking-tight bg-gradient-to-r from-slate-900 to-slate-700 bg-clip-text text-transparent">
              Duyurular
            </h1>
            <p className="text-slate-600 text-lg">Kampüs haberleri, etkinlikler ve önemli bilgilendirmeler</p>
          </div>
          <div className="flex items-center gap-3">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 w-4 h-4" />
              <Input
                placeholder="Duyuru ara..."
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

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {announcementStats.map((stat, index) => (
            <StatsCard
              key={index}
              title={stat.title}
              value={stat.value}
              icon={stat.icon}
              variant={stat.variant}
              trend={stat.trend}
              className="hover:scale-105 transition-transform duration-200"
            />
          ))}
        </div>

        <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
          <TabsList className="grid w-full md:w-auto md:inline-grid grid-cols-6 bg-slate-100 p-1">
            {categories.map((category) => (
              <TabsTrigger 
                key={category.id} 
                value={category.id} 
                className="data-[state=active]:bg-white data-[state=active]:shadow-sm text-sm"
              >
                <div className="flex items-center gap-2">
                  {getCategoryIcon(category.id)}
                  <span className="hidden sm:inline">{category.name}</span>
                  <Badge variant="secondary" className="text-xs">
                    {category.count}
                  </Badge>
                </div>
              </TabsTrigger>
            ))}
          </TabsList>

          <TabsContent value={activeTab} className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {/* Main Content */}
              <div className="lg:col-span-2 space-y-6">
                {filteredAnnouncements.map((announcement) => (
                  <SectionCard 
                    key={announcement.id} 
                    variant="elevated" 
                    className={`relative overflow-hidden hover:shadow-xl transition-all duration-300 ${
                      announcement.pinned ? 'ring-2 ring-yellow-200 bg-yellow-50/30' : ''
                    }`}
                  >
                    {announcement.pinned && (
                      <div className="absolute top-4 right-4">
                        <Pin className="w-5 h-5 text-yellow-600 transform rotate-45" />
                      </div>
                    )}
                    
                    <div className="space-y-4">
                      {/* Header */}
                      <div className="flex items-start justify-between gap-4">
                        <div className="flex items-center gap-3">
                          <Avatar className="w-12 h-12">
                            <AvatarImage src="" />
                            <AvatarFallback className="bg-gradient-to-r from-blue-500 to-indigo-500 text-white font-semibold">
                              {announcement.author.avatar}
                            </AvatarFallback>
                          </Avatar>
                          <div>
                            <div className="flex items-center gap-2">
                              <h4 className="font-semibold text-slate-900 text-sm">{announcement.author.name}</h4>
                              {announcement.author.verified && (
                                <Badge variant="secondary" className="text-xs">
                                  <Star className="w-3 h-3 mr-1" />
                                  Resmi
                                </Badge>
                              )}
                            </div>
                            <div className="flex items-center gap-3 text-xs text-slate-500">
                              <span>{announcement.timestamp}</span>
                              <span>•</span>
                              <span>{announcement.readTime} okuma</span>
                            </div>
                          </div>
                        </div>
                        <Badge className={`text-xs ${getPriorityColor(announcement.priority)}`}>
                          {announcement.priority === 'high' ? 'Önemli' :
                           announcement.priority === 'medium' ? 'Orta' : 'Düşük'}
                        </Badge>
                      </div>

                      {/* Content */}
                      <div className="space-y-3">
                        <h3 className="text-xl font-bold text-slate-900 leading-tight">
                          {announcement.title}
                        </h3>
                        <p className="text-slate-700 leading-relaxed">
                          {announcement.content}
                        </p>
                      </div>

                      {/* Event Details */}
                      {(announcement.eventDate || announcement.location) && (
                        <div className="flex flex-wrap items-center gap-4 p-4 bg-blue-50 border border-blue-200 rounded-xl">
                          {announcement.eventDate && (
                            <div className="flex items-center gap-2 text-blue-700">
                              <Calendar className="w-4 h-4" />
                              <span className="text-sm font-medium">
                                {new Date(announcement.eventDate).toLocaleDateString('tr-TR', {
                                  day: 'numeric',
                                  month: 'long',
                                  year: 'numeric'
                                })}
                              </span>
                            </div>
                          )}
                          {announcement.location && (
                            <div className="flex items-center gap-2 text-blue-700">
                              <MapPin className="w-4 h-4" />
                              <span className="text-sm font-medium">{announcement.location}</span>
                            </div>
                          )}
                        </div>
                      )}

                      {/* Tags */}
                      <div className="flex flex-wrap gap-2">
                        {announcement.tags.map((tag, index) => (
                          <Badge key={index} variant="outline" className="text-xs">
                            {tag}
                          </Badge>
                        ))}
                      </div>

                      {/* Footer */}
                      <div className="flex items-center justify-between pt-4 border-t border-slate-100">
                        <div className="flex items-center gap-6 text-sm text-slate-600">
                          <div className="flex items-center gap-2">
                            <Eye className="w-4 h-4" />
                            <span>{announcement.views}</span>
                          </div>
                          <Button variant="ghost" size="sm" className="gap-2 hover:bg-red-50 hover:text-red-600">
                            <Heart className="w-4 h-4" />
                            <span>{announcement.likes}</span>
                          </Button>
                          <Button variant="ghost" size="sm" className="gap-2 hover:bg-blue-50 hover:text-blue-600">
                            <Share2 className="w-4 h-4" />
                            <span>Paylaş</span>
                          </Button>
                        </div>
                        <Button size="sm" className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700">
                          Detaylar
                        </Button>
                      </div>
                    </div>
                  </SectionCard>
                ))}
              </div>

              {/* Sidebar */}
              <div className="space-y-6">
                {/* Quick Actions */}
                <SectionCard
                  title="Hızlı Erişim"
                  description="Sık kullanılan bağlantılar"
                  variant="elevated"
                >
                  <div className="space-y-3">
                    {[
                      { name: 'Akademik Takvim', icon: Calendar, href: '/calendar' },
                      { name: 'Öğrenci Bilgi Sistemi', icon: BookOpen, href: '/student-portal' },
                      { name: 'Kütüphane', icon: Users, href: '/library' },
                      { name: 'Kariyer Merkezi', icon: Briefcase, href: '/career' }
                    ].map((item, index) => {
                      const Icon = item.icon;
                      return (
                        <div key={index} className="flex items-center gap-3 p-3 rounded-lg hover:bg-slate-50 transition-colors cursor-pointer">
                          <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center">
                            <Icon className="w-4 h-4 text-blue-600" />
                          </div>
                          <span className="text-sm font-medium text-slate-700">{item.name}</span>
                        </div>
                      );
                    })}
                  </div>
                </SectionCard>

                {/* Recent Updates */}
                <SectionCard
                  title="Son Güncellemeler"
                  description="Yakın zamanda eklenen duyurular"
                  variant="elevated"
                >
                  <div className="space-y-3">
                    {announcements.slice(0, 3).map((announcement) => (
                      <div key={announcement.id} className="p-3 rounded-lg border border-slate-100 hover:bg-slate-50 transition-colors">
                        <h5 className="font-medium text-slate-900 text-sm mb-1 line-clamp-2">
                          {announcement.title}
                        </h5>
                        <div className="flex items-center justify-between">
                          <span className="text-xs text-slate-500">{announcement.timestamp}</span>
                          <Badge variant="outline" className="text-xs">
                            {getCategoryIcon(announcement.category)}
                          </Badge>
                        </div>
                      </div>
                    ))}
                  </div>
                </SectionCard>

                {/* Notification Settings */}
                <SectionCard
                  title="Bildirim Ayarları"
                  description="Hangi duyuruları almak istiyorsunuz?"
                  variant="elevated"
                >
                  <div className="space-y-3">
                    {[
                      { name: 'Akademik Duyurular', enabled: true },
                      { name: 'Etkinlik Bildirimleri', enabled: true },
                      { name: 'Tesis Güncellemeleri', enabled: false },
                      { name: 'Mali Duyurular', enabled: true }
                    ].map((setting, index) => (
                      <div key={index} className="flex items-center justify-between p-3 rounded-lg border border-slate-100">
                        <span className="text-sm font-medium text-slate-700">{setting.name}</span>
                        <div className={`w-10 h-6 rounded-full transition-colors ${
                          setting.enabled ? 'bg-blue-600' : 'bg-slate-300'
                        }`}>
                          <div className={`w-4 h-4 bg-white rounded-full mt-1 transition-transform ${
                            setting.enabled ? 'translate-x-5' : 'translate-x-1'
                          }`} />
                        </div>
                      </div>
                    ))}
                  </div>
                </SectionCard>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </PageContainer>
    </AppLayout>
  );
}