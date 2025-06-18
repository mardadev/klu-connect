import { useState, useEffect } from 'react';

interface Notification {
  id: number;
  type: 'assignment' | 'message' | 'announcement' | 'grade' | 'event';
  title: string;
  message: string;
  time: string;
  isRead: boolean;
  actionUrl?: string;
}

export function useNotifications() {
  const [notifications, setNotifications] = useState<Notification[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  // Mock notifications data
  const mockNotifications: Notification[] = [
    {
      id: 1,
      type: 'assignment',
      title: 'Yeni Ödev Teslimi',
      message: 'Matematik Analizi ödevi yarın teslim edilmeli',
      time: '2 saat önce',
      isRead: false,
      actionUrl: '/courses/math-101/assignments/1'
    },
    {
      id: 2,
      type: 'message',
      title: 'Yeni Mesaj',
      message: 'Dr. Mehmet Ali size bir mesaj gönderdi',
      time: '4 saat önce',
      isRead: false,
      actionUrl: '/messages/2'
    },
    {
      id: 3,
      type: 'announcement',
      title: 'Önemli Duyuru',
      message: 'Final sınavları tarihleri açıklandı',
      time: '1 gün önce',
      isRead: true,
      actionUrl: '/announcements/3'
    },
    {
      id: 4,
      type: 'grade',
      title: 'Not Güncellendi',
      message: 'Veri Yapıları dersi vize notu girildi',
      time: '2 gün önce',
      isRead: true,
      actionUrl: '/grades'
    },
    {
      id: 5,
      type: 'event',
      title: 'Etkinlik Hatırlatması',
      message: 'Kariyer günleri etkinliği yarın başlıyor',
      time: '3 gün önce',
      isRead: false,
      actionUrl: '/events/5'
    }
  ];

  useEffect(() => {
    // Simulate API call
    const fetchNotifications = async () => {
      setIsLoading(true);
      try {
        // In a real app, this would be an API call
        await new Promise(resolve => setTimeout(resolve, 1000));
        setNotifications(mockNotifications);
      } catch (error) {
        console.error('Failed to fetch notifications:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchNotifications();
  }, []);

  const markAsRead = (id: number) => {
    setNotifications(prev =>
      prev.map(notification =>
        notification.id === id
          ? { ...notification, isRead: true }
          : notification
      )
    );
  };

  const markAllAsRead = () => {
    setNotifications(prev =>
      prev.map(notification => ({ ...notification, isRead: true }))
    );
  };

  const removeNotification = (id: number) => {
    setNotifications(prev =>
      prev.filter(notification => notification.id !== id)
    );
  };

  const addNotification = (notification: Omit<Notification, 'id'>) => {
    const newNotification = {
      ...notification,
      id: Date.now() // Simple ID generation
    };
    setNotifications(prev => [newNotification, ...prev]);
  };

  const unreadCount = notifications.filter(n => !n.isRead).length;

  return {
    notifications,
    isLoading,
    unreadCount,
    markAsRead,
    markAllAsRead,
    removeNotification,
    addNotification
  };
}