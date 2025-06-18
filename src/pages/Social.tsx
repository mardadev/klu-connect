import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { useAuth } from '@/components/Auth/AuthProvider';
import {
  Search,
  Users,
  UserPlus,
  MessageCircle,
  Heart,
  Share2,
  MoreHorizontal,
  MapPin,
  Briefcase,
  GraduationCap,
  Calendar,
  Filter,
  Star,
  Award
} from 'lucide-react';
import AppLayout from '@/components/Layout/AppLayout';
import PageContainer from '@/components/ui/page-container';
import SectionCard from '@/components/ui/section-card';
import StatsCard from '@/components/ui/stats-card';

export default function Social() {
  const { user } = useAuth();
  const [searchTerm, setSearchTerm] = useState('');
  const [activeTab, setActiveTab] = useState('feed');

  const socialStats = [
    {
      title: 'Bağlantılar',
      value: '142',
      icon: Users,
      variant: 'success' as const,
      trend: { value: 8, label: 'bu ay', direction: 'up' as const }
    },
    {
      title: 'Takipçi',
      value: '98',
      icon: UserPlus,
      variant: 'info' as const,
      trend: { value: 5, label: 'bu hafta', direction: 'up' as const }
    },
    {
      title: 'Paylaşım',
      value: '24',
      icon: Share2,
      variant: 'default' as const,
      trend: { value: 3, label: 'bu ay', direction: 'up' as const }
    }
  ];

  const posts = [
    {
      id: 1,
      author: {
        name: 'Dr. Ayşe Demir',
        title: 'Yazılım Mühendisliği Öğretim Üyesi',
        avatar: 'AD',
        verified: true
      },
      content: 'Yeni araştırma makalemiz kabul edildi! Yapay zeka ve eğitim teknolojileri üzerine çalışmalarımız devam ediyor. Öğrencilerimizle birlikte harika işler çıkarıyoruz.',
      timestamp: '2 saat önce',
      likes: 24,
      comments: 8,
      shares: 3,
      liked: false
    },
    {
      id: 2,
      author: {
        name: 'Ahmet Yılmaz',
        title: 'Bilgisayar Mühendisliği - 4. Sınıf',
        avatar: 'AY',
        verified: false
      },
      content: 'Bitirme projesi sunumu tamamlandı! Takım arkadaşlarımla birlikte geliştirdiğimiz mobil uygulama çok beğenildi. Teşekkürler Prof. Mehmet Bey.',
      timestamp: '4 saat önce',
      likes: 31,
      comments: 12,
      shares: 5,
      liked: true
    },
    {
      id: 3,
      author: {
        name: 'KLU Kariyer Merkezi',
        title: 'Resmi Hesap',
        avatar: 'KM',
        verified: true
      },
      content: 'Bu hafta düzenlenecek kariyer fuarı için kayıtlar devam ediyor. 50+ firma katılacak. Mezunlarımız ve son sınıf öğrencilerimizi bekliyoruz!',
      timestamp: '6 saat önce',
      likes: 89,
      comments: 23,
      shares: 15,
      liked: false
    }
  ];

  const connections = [
    {
      id: 1,
      name: 'Zehra Çelik',
      title: 'Endüstri Mühendisliği - 3. Sınıf',
      avatar: 'ZÇ',
      department: 'Endüstri Mühendisliği',
      mutualConnections: 12,
      connected: true
    },
    {
      id: 2,
      name: 'Mehmet Kaya',
      title: 'Mezun - Yazılım Geliştirici',
      avatar: 'MK',
      department: 'Bilgisayar Mühendisliği',
      company: 'TechCorp',
      mutualConnections: 8,
      connected: false
    },
    {
      id: 3,
      name: 'Fatma Özkan',
      title: 'Makine Mühendisliği - 2. Sınıf',
      avatar: 'FÖ',
      department: 'Makine Mühendisliği',
      mutualConnections: 5,
      connected: false
    },
    {
      id: 4,
      name: 'Can Demir',
      title: 'Mezun - Proje Yöneticisi',
      avatar: 'CD',
      department: 'Endüstri Mühendisliği',
      company: 'StartupXYZ',
      mutualConnections: 15,
      connected: true
    }
  ];

  const groups = [
    {
      id: 1,
      name: 'KLU Yazılım Kulübü',
      description: 'Yazılım geliştirme, hackathon ve teknik paylaşımlar',
      members: 234,
      posts: 45,
      joined: true,
      avatar: 'YK'
    },
    {
      id: 2,
      name: 'Kariyer ve Networking',
      description: 'Mezun ağı, iş fırsatları ve kariyer tavsiyeleri',
      members: 567,
      posts: 128,
      joined: false,
      avatar: 'KN'
    },
    {
      id: 3,
      name: 'Bilgisayar Mühendisliği 2021',
      description: '2021 mezunları için özel grup',
      members: 89,
      posts: 67,
      joined: true,
      avatar: 'BM'
    }
  ];

  const handleLike = (postId: number) => {
    // Toggle like functionality
  };

  const handleConnect = (userId: number) => {
    // Connect functionality
  };

  return (
    <AppLayout showSidebar title="Sosyal">
      <PageContainer className="space-y-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="space-y-1">
            <h1 className="text-3xl md:text-4xl font-bold tracking-tight bg-gradient-to-r from-slate-900 to-slate-700 bg-clip-text text-transparent">
              Sosyal Ağ
            </h1>
            <p className="text-slate-600 text-lg">Kampüs topluluğu ile bağlantı kurun ve paylaşım yapın</p>
          </div>
          <div className="flex items-center gap-3">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 w-4 h-4" />
              <Input
                placeholder="Kişi, grup veya içerik ara..."
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

        {/* Social Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {socialStats.map((stat, index) => (
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
          <TabsList className="grid w-full md:w-auto md:inline-grid grid-cols-4 bg-slate-100">
            <TabsTrigger value="feed" className="data-[state=active]:bg-white data-[state=active]:shadow-sm">
              Ana Akış
            </TabsTrigger>
            <TabsTrigger value="connections" className="data-[state=active]:bg-white data-[state=active]:shadow-sm">
              Bağlantılar
            </TabsTrigger>
            <TabsTrigger value="groups" className="data-[state=active]:bg-white data-[state=active]:shadow-sm">
              Gruplar
            </TabsTrigger>
            <TabsTrigger value="profile" className="data-[state=active]:bg-white data-[state=active]:shadow-sm">
              Profilim
            </TabsTrigger>
          </TabsList>

          <TabsContent value="feed" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {/* Main Feed */}
              <div className="lg:col-span-2 space-y-6">
                {/* Create Post */}
                <SectionCard variant="elevated" className="p-4">
                  <div className="flex items-center gap-4">
                    <Avatar className="w-12 h-12">
                      <AvatarImage src="" />
                      <AvatarFallback className="bg-gradient-to-r from-blue-500 to-indigo-500 text-white font-semibold">
                        {user?.name?.charAt(0) || 'U'}
                      </AvatarFallback>
                    </Avatar>
                    <Input
                      placeholder="Ne düşünüyorsunuz?"
                      className="flex-1 bg-slate-50 border-slate-200 focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500"
                    />
                    <Button className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700">
                      Paylaş
                    </Button>
                  </div>
                </SectionCard>

                {/* Posts */}
                {posts.map((post) => (
                  <SectionCard key={post.id} variant="elevated" className="overflow-hidden">
                    <div className="space-y-4">
                      {/* Post Header */}
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <Avatar className="w-12 h-12">
                            <AvatarImage src="" />
                            <AvatarFallback className="bg-gradient-to-r from-slate-500 to-slate-600 text-white font-semibold">
                              {post.author.avatar}
                            </AvatarFallback>
                          </Avatar>
                          <div>
                            <div className="flex items-center gap-2">
                              <h4 className="font-semibold text-slate-900">{post.author.name}</h4>
                              {post.author.verified && (
                                <Badge variant="secondary" className="text-xs">
                                  <Star className="w-3 h-3 mr-1" />
                                  Doğrulanmış
                                </Badge>
                              )}
                            </div>
                            <p className="text-sm text-slate-600">{post.author.title}</p>
                            <p className="text-xs text-slate-500">{post.timestamp}</p>
                          </div>
                        </div>
                        <Button variant="ghost" size="sm">
                          <MoreHorizontal className="w-4 h-4" />
                        </Button>
                      </div>

                      {/* Post Content */}
                      <div className="space-y-3">
                        <p className="text-slate-800 leading-relaxed">{post.content}</p>
                      </div>

                      {/* Post Actions */}
                      <div className="flex items-center justify-between pt-3 border-t border-slate-100">
                        <div className="flex items-center gap-6">
                          <Button
                            variant="ghost"
                            size="sm"
                            className={`gap-2 hover:bg-red-50 hover:text-red-600 ${post.liked ? 'text-red-600' : 'text-slate-600'}`}
                            onClick={() => handleLike(post.id)}
                          >
                            <Heart className={`w-4 h-4 ${post.liked ? 'fill-current' : ''}`} />
                            {post.likes}
                          </Button>
                          <Button variant="ghost" size="sm" className="gap-2 hover:bg-blue-50 hover:text-blue-600">
                            <MessageCircle className="w-4 h-4" />
                            {post.comments}
                          </Button>
                          <Button variant="ghost" size="sm" className="gap-2 hover:bg-green-50 hover:text-green-600">
                            <Share2 className="w-4 h-4" />
                            {post.shares}
                          </Button>
                        </div>
                      </div>
                    </div>
                  </SectionCard>
                ))}
              </div>

              {/* Sidebar */}
              <div className="space-y-6">
                {/* Suggested Connections */}
                <SectionCard
                  title="Önerilen Bağlantılar"
                  description="Tanıyor olabileceğiniz kişiler"
                  variant="elevated"
                >
                  <div className="space-y-4">
                    {connections.slice(0, 3).map((connection) => (
                      <div key={connection.id} className="flex items-center gap-3 p-3 rounded-lg hover:bg-slate-50 transition-colors">
                        <Avatar className="w-10 h-10">
                          <AvatarImage src="" />
                          <AvatarFallback className="bg-slate-200 text-slate-600 font-medium">
                            {connection.avatar}
                          </AvatarFallback>
                        </Avatar>
                        <div className="flex-1 min-w-0">
                          <h5 className="font-medium text-slate-900 text-sm truncate">{connection.name}</h5>
                          <p className="text-xs text-slate-600 truncate">{connection.title}</p>
                          <p className="text-xs text-slate-500">{connection.mutualConnections} ortak bağlantı</p>
                        </div>
                        <Button size="sm" variant="outline" className="text-xs">
                          <UserPlus className="w-3 h-3" />
                        </Button>
                      </div>
                    ))}
                  </div>
                </SectionCard>

                {/* Active Groups */}
                <SectionCard
                  title="Gruplarım"
                  description="Katıldığınız gruplar"
                  variant="elevated"
                >
                  <div className="space-y-3">
                    {groups.filter(g => g.joined).map((group) => (
                      <div key={group.id} className="flex items-center gap-3 p-3 rounded-lg hover:bg-slate-50 transition-colors">
                        <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
                          <span className="text-white font-bold text-sm">{group.avatar}</span>
                        </div>
                        <div className="flex-1 min-w-0">
                          <h5 className="font-medium text-slate-900 text-sm truncate">{group.name}</h5>
                          <p className="text-xs text-slate-600">{group.members} üye</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </SectionCard>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="connections">
            <SectionCard
              title="Bağlantılarım"
              description="Profesyonel ağınızı yönetin"
              variant="elevated"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {connections.map((connection) => (
                  <div key={connection.id} className="p-6 border border-slate-200 rounded-xl hover:shadow-lg transition-all duration-200 group">
                    <div className="text-center space-y-4">
                      <Avatar className="w-16 h-16 mx-auto">
                        <AvatarImage src="" />
                        <AvatarFallback className="bg-gradient-to-r from-blue-500 to-indigo-500 text-white font-bold text-lg">
                          {connection.avatar}
                        </AvatarFallback>
                      </Avatar>
                      <div className="space-y-2">
                        <h4 className="font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                          {connection.name}
                        </h4>
                        <p className="text-sm text-slate-600">{connection.title}</p>
                        <div className="flex items-center justify-center gap-2 text-xs text-slate-500">
                          <MapPin className="w-3 h-3" />
                          <span>{connection.department}</span>
                        </div>
                        {connection.company && (
                          <div className="flex items-center justify-center gap-2 text-xs text-slate-500">
                            <Briefcase className="w-3 h-3" />
                            <span>{connection.company}</span>
                          </div>
                        )}
                        <p className="text-xs text-slate-500">
                          {connection.mutualConnections} ortak bağlantı
                        </p>
                      </div>
                      <div className="flex gap-2">
                        {connection.connected ? (
                          <Button size="sm" variant="outline" className="flex-1">
                            <MessageCircle className="w-4 h-4 mr-2" />
                            Mesaj
                          </Button>
                        ) : (
                          <Button 
                            size="sm" 
                            className="flex-1 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700"
                            onClick={() => handleConnect(connection.id)}
                          >
                            <UserPlus className="w-4 h-4 mr-2" />
                            Bağlan
                          </Button>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </SectionCard>
          </TabsContent>

          <TabsContent value="groups">
            <SectionCard
              title="Gruplar"
              description="İlgi alanlarınıza göre gruplara katılın"
              variant="elevated"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {groups.map((group) => (
                  <div key={group.id} className="p-6 border border-slate-200 rounded-xl hover:shadow-lg transition-all duration-200">
                    <div className="space-y-4">
                      <div className="flex items-center gap-4">
                        <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center">
                          <span className="text-white font-bold text-xl">{group.avatar}</span>
                        </div>
                        <div className="flex-1">
                          <h4 className="font-bold text-slate-900 text-lg">{group.name}</h4>
                          <p className="text-sm text-slate-600 leading-relaxed">{group.description}</p>
                        </div>
                      </div>
                      
                      <div className="grid grid-cols-2 gap-4 text-center">
                        <div className="p-3 bg-slate-50 rounded-lg">
                          <div className="flex items-center justify-center gap-2 text-slate-600 mb-1">
                            <Users className="w-4 h-4" />
                            <span className="text-xs font-medium">Üye</span>
                          </div>
                          <p className="font-bold text-slate-900">{group.members}</p>
                        </div>
                        <div className="p-3 bg-slate-50 rounded-lg">
                          <div className="flex items-center justify-center gap-2 text-slate-600 mb-1">
                            <MessageCircle className="w-4 h-4" />
                            <span className="text-xs font-medium">Gönderi</span>
                          </div>
                          <p className="font-bold text-slate-900">{group.posts}</p>
                        </div>
                      </div>

                      <Button 
                        className={`w-full ${
                          group.joined 
                            ? 'bg-green-600 hover:bg-green-700' 
                            : 'bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700'
                        }`}
                        disabled={group.joined}
                      >
                        {group.joined ? 'Katıldınız' : 'Gruba Katıl'}
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </SectionCard>
          </TabsContent>

          <TabsContent value="profile">
            <SectionCard
              title="Sosyal Profil"
              description="Profilinizi yönetin ve görünürlüğünüzü artırın"
              variant="elevated"
            >
              <div className="text-center py-12 space-y-4">
                <div className="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center mx-auto">
                  <Users className="w-8 h-8 text-blue-600" />
                </div>
                <div className="space-y-2">
                  <p className="text-slate-600">Sosyal profil özellikleri geliştiriliyor...</p>
                  <Button className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700">
                    Profil Ayarları
                  </Button>
                </div>
              </div>
            </SectionCard>
          </TabsContent>
        </Tabs>
      </PageContainer>
    </AppLayout>
  );
}