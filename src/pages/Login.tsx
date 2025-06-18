import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Checkbox } from '@/components/ui/checkbox';
import { useAuth } from '@/components/Auth/AuthProvider';
import { Link, Navigate } from 'react-router-dom';
import {
  BookOpen,
  Mail,
  Lock,
  Eye,
  EyeOff,
  ArrowRight,
  Shield,
  Users,
  GraduationCap
} from 'lucide-react';
import PageContainer from '@/components/ui/page-container';
import SectionCard from '@/components/ui/section-card';

export default function Login() {
  const { user, login } = useAuth();
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    rememberMe: false
  });

  // Redirect if already logged in
  if (user) {
    return <Navigate to="/dashboard" replace />;
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    try {
      await login(formData.email, formData.password);
    } catch (error) {
      console.error('Login error:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const features = [
    {
      icon: BookOpen,
      title: 'Akademik Hub',
      description: 'Tüm derslerinizi tek platformda yönetin'
    },
    {
      icon: Users,
      title: 'Sosyal Ağ',
      description: 'Kampüs arkadaşlarınızla bağlantı kurun'
    },
    {
      icon: GraduationCap,
      title: 'Kariyer Desteği',
      description: 'Mezun ağı ve iş fırsatları'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50/30 to-indigo-50/40">
      {/* Header */}
      <div className="sticky top-0 z-50 w-full border-b border-slate-200/60 bg-white/80 backdrop-blur-md">
        <PageContainer maxWidth="2xl" padding="md">
          <div className="flex items-center justify-between py-4">
            <Link to="/" className="flex items-center space-x-3 transition-all duration-200 hover:scale-105">
              <div className="relative">
                <div className="w-9 h-9 bg-gradient-to-r from-blue-600 via-blue-500 to-indigo-600 rounded-xl flex items-center justify-center shadow-lg shadow-blue-500/25">
                  <BookOpen className="w-5 h-5 text-white" />
                </div>
                <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-xl blur opacity-20 animate-pulse"></div>
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-slate-900 to-slate-700 bg-clip-text text-transparent">
                KLU Connect
              </span>
            </Link>
            <div className="flex items-center space-x-3">
              <Button variant="ghost" asChild className="text-slate-600 hover:text-slate-900">
                <Link to="/#features">Özellikler</Link>
              </Button>
              <Button variant="outline" asChild>
                <Link to="/">Ana Sayfa</Link>
              </Button>
            </div>
          </div>
        </PageContainer>
      </div>

      <PageContainer maxWidth="2xl" className="py-12">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Branding */}
          <div className="space-y-8">
            <div className="space-y-6">
              <div className="space-y-4">
                <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
                  <span className="bg-gradient-to-r from-blue-600 via-blue-700 to-indigo-700 bg-clip-text text-transparent">
                    Hoş Geldiniz
                  </span>
                </h1>
                <p className="text-xl text-slate-600 leading-relaxed">
                  KLU Connect'e giriş yaparak akademik yaşamınızı dijitalleştirin
                </p>
              </div>
              
              <div className="flex items-center gap-3 p-4 bg-blue-50 border border-blue-200 rounded-xl">
                <Shield className="w-6 h-6 text-blue-600" />
                <div>
                  <p className="font-medium text-blue-900">Güvenli Giriş</p>
                  <p className="text-sm text-blue-700">Üniversite kimlik bilgilerinizle giriş yapın</p>
                </div>
              </div>
            </div>

            {/* Features */}
            <div className="space-y-6">
              <h2 className="text-2xl font-bold text-slate-900">Platform Özellikleri</h2>
              <div className="space-y-4">
                {features.map((feature, index) => {
                  const Icon = feature.icon;
                  return (
                    <div key={index} className="flex items-center gap-4 p-4 bg-white/50 rounded-xl border border-slate-200/50">
                      <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-xl flex items-center justify-center">
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-slate-900">{feature.title}</h3>
                        <p className="text-sm text-slate-600">{feature.description}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Right Side - Login Form */}
          <div className="flex justify-center lg:justify-end">
            <SectionCard
              variant="elevated"
              className="w-full max-w-md shadow-2xl border-0"
              padding="lg"
            >
              <div className="space-y-6">
                <div className="text-center space-y-2">
                  <h2 className="text-2xl font-bold text-slate-900">Giriş Yap</h2>
                  <p className="text-slate-600">Hesabınıza erişim sağlayın</p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-sm font-medium text-slate-700">
                      E-posta Adresi
                    </Label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 w-4 h-4" />
                      <Input
                        id="email"
                        type="email"
                        placeholder="ogrenci@klu.edu.tr"
                        value={formData.email}
                        onChange={(e) => setFormData({...formData, email: e.target.value})}
                        className="pl-10 focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500"
                        required
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="password" className="text-sm font-medium text-slate-700">
                      Şifre
                    </Label>
                    <div className="relative">
                      <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 w-4 h-4" />
                      <Input
                        id="password"
                        type={showPassword ? 'text' : 'password'}
                        placeholder="Şifrenizi girin"
                        value={formData.password}
                        onChange={(e) => setFormData({...formData, password: e.target.value})}
                        className="pl-10 pr-10 focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500"
                        required
                      />
                      <Button
                        type="button"
                        variant="ghost"
                        size="sm"
                        className="absolute right-2 top-1/2 transform -translate-y-1/2 hover:bg-transparent"
                        onClick={() => setShowPassword(!showPassword)}
                      >
                        {showPassword ? (
                          <EyeOff className="w-4 h-4 text-slate-400" />
                        ) : (
                          <Eye className="w-4 h-4 text-slate-400" />
                        )}
                      </Button>
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <Checkbox
                        id="remember"
                        checked={formData.rememberMe}
                        onCheckedChange={(checked) => setFormData({...formData, rememberMe: checked as boolean})}
                      />
                      <Label htmlFor="remember" className="text-sm text-slate-600 cursor-pointer">
                        Beni hatırla
                      </Label>
                    </div>
                    <Button variant="link" className="text-sm text-blue-600 hover:text-blue-700 p-0">
                      Şifremi unuttum
                    </Button>
                  </div>

                  <Button
                    type="submit"
                    disabled={isLoading}
                    className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 shadow-lg shadow-blue-500/25 py-6 text-lg font-medium"
                  >
                    {isLoading ? (
                      <div className="flex items-center gap-2">
                        <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                        Giriş yapılıyor...
                      </div>
                    ) : (
                      <div className="flex items-center gap-2">
                        Giriş Yap
                        <ArrowRight className="w-4 h-4" />
                      </div>
                    )}
                  </Button>
                </form>

                <div className="space-y-4">
                  <div className="relative">
                    <div className="absolute inset-0 flex items-center">
                      <div className="w-full border-t border-slate-200" />
                    </div>
                    <div className="relative flex justify-center text-sm">
                      <span className="px-2 bg-white text-slate-500">veya</span>
                    </div>
                  </div>

                  <div className="text-center space-y-2">
                    <p className="text-sm text-slate-600">Henüz hesabınız yok mu?</p>
                    <Button variant="outline" className="w-full" asChild>
                      <Link to="/register">
                        Hesap Oluştur
                      </Link>
                    </Button>
                  </div>
                </div>

                <div className="text-center">
                  <p className="text-xs text-slate-500">
                    Giriş yaparak{' '}
                    <Button variant="link" className="text-xs p-0 h-auto">
                      Kullanım Şartları
                    </Button>
                    {' '}ve{' '}
                    <Button variant="link" className="text-xs p-0 h-auto">
                      Gizlilik Politikası
                    </Button>
                    'nı kabul etmiş olursunuz.
                  </p>
                </div>
              </div>
            </SectionCard>
          </div>
        </div>
      </PageContainer>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-8 mt-16">
        <PageContainer maxWidth="2xl">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-3 mb-4 md:mb-0">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-lg flex items-center justify-center">
                <BookOpen className="w-5 h-5 text-white" />
              </div>
              <span className="text-lg font-bold">KLU Connect</span>
            </div>
            <div className="text-slate-400 text-sm">
              © 2024 Kırklareli Üniversitesi. Tüm hakları saklıdır.
            </div>
          </div>
        </PageContainer>
      </footer>
    </div>
  );
}