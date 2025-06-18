import React from 'react';
import { Link } from 'react-router-dom';
import AppLayout from '@/components/Layout/AppLayout';
import { Button } from '@/components/ui/button';

export default function Index() {
  return (
    <AppLayout showSidebar={false} className="flex items-center justify-center min-h-screen bg-gradient-to-br from-sky-50 to-indigo-100">
      <div className="text-center p-8 rounded-xl bg-white/80 shadow-xl max-w-md">
        <h1 className="text-4xl font-extrabold mb-4 text-indigo-700">KLU Connect Öğrenci Portalına Hoş Geldin!</h1>
        <p className="text-lg text-indigo-600 mb-6">
          Derslerin, duyuruların, mesajların ve sosyal aktivitelerin tek çatı altında.
          Giriş yaparak veya kayıt olarak hemen başlayabilirsin.
        </p>

        <div className="flex justify-center gap-4">
          <Link to="/login">
            <Button size="lg" variant="default" className="px-10">
              Giriş Yap
            </Button>
          </Link>
          <Link to="/register">
            <Button size="lg" variant="outline" className="px-10">
              Kayıt Ol
            </Button>
          </Link>
        </div>
      </div>
    </AppLayout>
  );
}
