import React from 'react';
import AppLayout from '@/components/Layout/AppLayout';
import { useAuth } from '@/components/Auth/AuthProvider';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Edit, Mail, Phone, MapPin, User } from 'lucide-react';

export default function Profile() {
  const { user } = useAuth();

  return (
    <AppLayout showSidebar>
      <div className="min-h-screen p-6 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 dark:from-slate-900 dark:via-blue-900 dark:to-indigo-950">
        <Card className="max-w-3xl mx-auto bg-white/80 dark:bg-slate-800/80 backdrop-blur-xl border-white/20 shadow-xl">
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
              <User className="w-6 h-6 text-indigo-600" />
              Profil Bilgilerim
            </CardTitle>
          </CardHeader>
          <CardContent className="flex flex-col items-center gap-6 p-8">
            <Avatar className="w-24 h-24 border-4 border-indigo-400 shadow-lg">
              <AvatarFallback className="bg-indigo-100 text-indigo-600 text-4xl font-bold">
                {user?.name?.charAt(0) || 'U'}
              </AvatarFallback>
            </Avatar>

            <h2 className="text-xl font-semibold text-slate-900 dark:text-white">{user?.name || 'Kullanıcı Adı'}</h2>
            <Badge className="px-4 py-1 text-indigo-700 bg-indigo-100 dark:bg-indigo-900">
              {user?.department || 'Bölüm'}
            </Badge>

            <div className="w-full max-w-md space-y-4">
              <div className="flex items-center gap-3 text-slate-700 dark:text-slate-300">
                <Mail className="w-5 h-5 text-indigo-500" />
                <span>{user?.email || 'email@domain.com'}</span>
              </div>
              <div className="flex items-center gap-3 text-slate-700 dark:text-slate-300">
                <Phone className="w-5 h-5 text-indigo-500" />
                <span>{user?.phone || 'Telefon numarası yok'}</span>
              </div>
              <div className="flex items-center gap-3 text-slate-700 dark:text-slate-300">
                <MapPin className="w-5 h-5 text-indigo-500" />
                <span>{user?.address || 'Adres bilgisi yok'}</span>
              </div>
            </div>

            <Button variant="outline" className="mt-6" onClick={() => alert('Profil düzenleme fonksiyonu henüz aktif değil.')}>
              <Edit className="w-5 h-5 mr-2" />
              Profili Düzenle
            </Button>
          </CardContent>
        </Card>
      </div>
    </AppLayout>
  );
}
