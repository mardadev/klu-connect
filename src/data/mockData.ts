// src/data/mockData.ts
import { User, Course, Assignment, Post, Announcement, Chat, Message, Connection, Event, Grade, Notification } from '@/lib/types';

// Mock Users
export const mockUsers: User[] = [
  {
    id: 1,
    name: 'Ahmet Yılmaz',
    email: 'ahmet.yilmaz@klu.edu.tr',
    role: 'student',
    studentNumber: '2021001001',
    department: 'Bilgisayar Mühendisliği',
    faculty: 'Mühendislik Fakültesi',
    avatar: '/api/placeholder/40/40',
    phone: '+90 555 123 4567',
    location: 'Kırklareli',
    bio: 'Bilgisayar mühendisliği öğrencisiyim. Web geliştirme ve yapay zeka konularına ilgi duyuyorum.',
    skills: ['JavaScript', 'React', 'Python', 'Node.js', 'MongoDB'],
    socialLinks: {
      linkedin: 'https://linkedin.com/in/ahmetyilmaz',
      github: 'https://github.com/ahmetyilmaz',
      twitter: 'https://twitter.com/ahmetyilmaz'
    }
  },
  {
    id: 2,
    name: 'Dr. Mehmet Ali',
    email: 'mehmet.ali@klu.edu.tr',
    role: 'academic',
    department: 'Bilgisayar Mühendisliği',
    faculty: 'Mühendislik Fakültesi',
    avatar: '/api/placeholder/40/40',
    phone: '+90 555 987 6543',
    location: 'Kırklareli',
    bio: 'Bilgisayar Mühendisliği bölümünde akademisyen olarak görev yapmaktayım. Veri yapıları ve algoritmalar konularında uzmanım.',
    skills: ['C++', 'Data Structures', 'Algorithms', 'Teaching', 'Research']
  },
  {
    id: 3,
    name: 'Ayşe Kaya',
    email: 'ayse.kaya@klu.edu.tr',
    role: 'admin',
    department: 'Öğrenci İşleri',
    faculty: 'İdari Birimler',
    avatar: '/api/placeholder/40/40',
    phone: '+90 555 456 7890',
    location: 'Kırklareli',
    bio: 'Öğrenci İşleri departmanında idari personel olarak çalışmaktayım.'
  },
  {
    id: 4,
    name: 'Sistem Yöneticisi',
    email: 'admin@klu.edu.tr',
    role: 'system_admin',
    department: 'Bilgi İşlem',
    faculty: 'İdari Birimler',
    avatar: '/api/placeholder/40/40'
  }
];

// Mock Courses
export const mockCourses: Course[] = [
  {
    id: 1,
    code: 'BIL301',
    name: 'Veri Yapıları ve Algoritmalar',
    instructor: 'Prof. Dr. Mehmet Ali',
    credits: 4,
    students: 45,
    color: 'bg-blue-500',
    progress: 75,
    nextClass: '2024-01-15T09:00:00',
    unreadMessages: 3,
    pendingAssignments: 2,
    description: 'Temel veri yapıları ve algoritmaların incelenmesi',
    semester: 'Güz',
    year: 2024
  },
  {
    id: 2,
    code: 'BIL302',
    name: 'Nesne Yönelimli Programlama',
    instructor: 'Doç. Dr. Ayşe Kaya',
    credits: 3,
    students: 38,
    color: 'bg-green-500',
    progress: 60,
    nextClass: '2024-01-15T11:00:00',
    unreadMessages: 1,
    pendingAssignments: 1,
    description: 'Java dilinde nesne yönelimli programlama prensipleri',
    semester: 'Güz',
    year: 2024
  },
  {
    id: 3,
    code: 'MAT201',
    name: 'Matematik Analizi II',
    instructor: 'Dr. Can Özkan',
    credits: 4,
    students: 52,
    color: 'bg-purple-500',
    progress: 45,
    nextClass: '2024-01-15T14:00:00',
    unreadMessages: 0,
    pendingAssignments: 3,
    description: 'İleri matematik analizi konuları',
    semester: 'Güz',
    year: 2024
  }
];

// Mock Assignments
export const mockAssignments: Assignment[] = [
  {
    id: 1,
    courseId: 1,
    title: 'Binary Search Tree Implementation',
    description: 'BST veri yapısını implement edin ve test edin',
    dueDate: '2024-01-20T23:59:00',
    status: 'pending',
    maxScore: 100,
    submissions: 23,
    instructions: 'C++ veya Java kullanarak BST implementasyonu yapın. Insertion, deletion ve search operasyonlarını içermelidir.'
  },
  {
    id: 2,
    courseId: 2,
    title: 'Java GUI Uygulaması',
    description: 'Swing kullanarak basit bir hesap makinesi yapın',
    dueDate: '2024-01-18T23:59:00',
    status: 'submitted',
    maxScore: 80,
    score: 75,
    submissions: 35
  },
  {
    id: 3,
    courseId: 3,
    title: 'İntegral Problemleri',
    description: 'Verilen fonksiyonların integrallerini çözün',
    dueDate: '2024-01-25T23:59:00',
    status: 'pending',
    maxScore: 60,
    submissions: 15
  }
];

// Mock Posts for Social Feed
export const mockPosts: Post[] = [
  {
    id: 1,
    authorId: 1,
    author: {
      name: 'Ayşe Kaya',
      avatar: '/api/placeholder/40/40',
      title: 'Bilgisayar Mühendisliği Öğrencisi',
      department: 'Mühendislik Fakültesi'
    },
    content: 'Yeni web projemi tamamladım! React ve Node.js kullanarak geliştirdiğim e-ticaret platformunu sizlerle paylaşmak istiyorum. Feedback\'lerinizi bekliyorum! 🚀',
    timestamp: '2 saat önce',
    likes: 24,
    comments: 8,
    shares: 3,
    isLiked: false,
    images: ['/api/placeholder/400/200'],
    type: 'project',
    tags: ['#react', '#nodejs', '#eticaret', '#proje']
  },
  {
    id: 2,
    authorId: 2,
    author: {
      name: 'Mehmet Ali Özkan',
      avatar: '/api/placeholder/40/40',
      title: 'Akademisyen - Yapay Zeka',
      department: 'Bilgisayar Mühendisliği'
    },
    content: 'Makine öğrenmesi alanında yeni bir makale yayınladık. "Deep Learning Applications in Healthcare" başlıklı çalışmamız IEEE dergisinde kabul edildi. Öğrencilerimle gurur duyuyorum! 📊',
    timestamp: '4 saat önce',
    likes: 45,
    comments: 12,
    shares: 8,
    isLiked: true,
    type: 'achievement',
    tags: ['#makineöğrenmesi', '#yapayzeeka', '#araştırma']
  }
];

// Mock Announcements
export const mockAnnouncements: Announcement[] = [
  {
    id: 1,
    title: 'Final Sınavları Programı Açıklandı',
    content: 'Güz dönemi final sınavları 15-25 Ocak tarihleri arasında gerçekleştirilecektir. Detaylı program öğrenci bilgi sisteminde yayınlanmıştır.',
    author: {
      name: 'Öğrenci İşleri',
      avatar: '/api/placeholder/40/40',
      role: 'admin'
    },
    category: 'general',
    priority: 'high',
    timestamp: '2024-01-10T09:00:00',
    isPinned: true,
    targetAudience: 'all',
    views: 1250,
    department: undefined,
    faculty: undefined
  },
  {
    id: 2,
    title: 'Bilgisayar Mühendisliği Bölümü Staj Başvuruları',
    content: 'Yaz dönemi staj başvuruları için gerekli belgeler ve son başvuru tarihi hakkında bilgilendirme toplantısı 20 Ocak Cumartesi günü saat 14:00\'te B-201 dersliğinde yapılacaktır.',
    author: {
      name: 'Prof. Dr. Mehmet Ali',
      avatar: '/api/placeholder/40/40',
      role: 'academic'
    },
    category: 'department',
    priority: 'normal',
    timestamp: '2024-01-08T14:30:00',
    isPinned: false,
    targetAudience: 'department',
    views: 345,
    department: 'Bilgisayar Mühendisliği',
    faculty: 'Mühendislik Fakültesi'
  }
];

// Mock Chats
export const mockChats: Chat[] = [
  {
    id: 1,
    type: 'individual',
    name: 'Dr. Mehmet Ali',
    avatar: '/api/placeholder/40/40',
    lastMessage: 'Ödevinizi bugün teslim etmeyi unutmayın.',
    lastMessageTime: '10:30',
    unreadCount: 2,
    isOnline: true
  },
  {
    id: 2,
    type: 'course',
    name: 'Veri Yapıları ve Algoritmalar',
    avatar: '/api/placeholder/40/40',
    lastMessage: 'Ayşe: Lab raporu için ek süre verilecek mi?',
    lastMessageTime: '09:45',
    unreadCount: 5,
    isOnline: false,
    participants: 45,
    courseCode: 'BIL301'
  },
  {
    id: 3,
    type: 'group',
    name: 'Proje Grubu - E-Ticaret',
    avatar: '/api/placeholder/40/40',
    lastMessage: 'Can: Frontend tasarımı tamamlandı.',
    lastMessageTime: 'Dün',
    unreadCount: 0,
    isOnline: false,
    participants: 4
  }
];

// Mock Messages
export const mockMessages: Message[] = [
  {
    id: 1,
    senderId: 2,
    chatId: 1,
    content: 'Merhaba, bugünkü ders için hazırlığınız nasıl?',
    timestamp: '10:00',
    isRead: true,
    type: 'text'
  },
  {
    id: 2,
    senderId: 1,
    chatId: 1,
    content: 'Merhaba hocam, dersi takip ediyorum. Bir kaç sorum var aslında.',
    timestamp: '10:05',
    isRead: true,
    type: 'text'
  },
  {
    id: 3,
    senderId: 2,
    chatId: 1,
    content: 'Tabii ki, sorularınızı bekliyorum.',
    timestamp: '10:06',
    isRead: true,
    type: 'text'
  }
];

// Mock Connections
export const mockConnections: Connection[] = [
  {
    id: 1,
    name: 'Dr. Fatma Yılmaz',
    title: 'Matematik Bölümü',
    avatar: '/api/placeholder/50/50',
    mutualConnections: 12,
    isConnected: true,
    department: 'Matematik',
    faculty: 'Fen Edebiyat Fakültesi'
  },
  {
    id: 2,
    name: 'Can Özdemir',
    title: 'Bilgisayar Mühendisliği - 4. Sınıf',
    avatar: '/api/placeholder/50/50',
    mutualConnections: 8,
    isConnected: false,
    department: 'Bilgisayar Mühendisliği',
    faculty: 'Mühendislik Fakültesi'
  }
];

// Mock Events
export const mockEvents: Event[] = [
  {
    id: 1,
    title: 'KLU Kariyer Günleri 2024',
    description: 'Sektör temsilcileri ile buluşma ve staj/iş fırsatları',
    startDate: '2024-01-25T09:00:00',
    endDate: '2024-01-26T17:00:00',
    location: 'Ana Kampüs - Konferans Salonu',
    organizer: 'Kariyer Merkezi',
    category: 'career',
    attendees: 245,
    maxAttendees: 300,
    isRegistered: false,
    tags: ['kariyer', 'staj', 'iş', 'networking']
  },
  {
    id: 2,
    title: 'Teknoloji Kulübü Hackathon',
    description: '48 saatlik yazılım geliştirme yarışması',
    startDate: '2024-02-10T18:00:00',
    endDate: '2024-02-12T18:00:00',
    location: 'Bilgisayar Mühendisliği Binası',
    organizer: 'KLU Teknoloji Kulübü',
    category: 'academic',
    attendees: 67,
    maxAttendees: 80,
    isRegistered: true,
    tags: ['hackathon', 'yazılım', 'yarişma', 'teknoloji']
  }
];

// Mock Grades
export const mockGrades: Grade[] = [
  {
    id: 1,
    courseId: 1,
    courseName: 'Veri Yapıları ve Algoritmalar',
    courseCode: 'BIL301',
    examType: 'midterm',
    grade: 'AA',
    score: 87,
    maxScore: 100,
    date: '2023-11-15',
    semester: 'Güz',
    year: 2023
  },
  {
    id: 2,
    courseId: 2,
    courseName: 'Nesne Yönelimli Programlama',
    courseCode: 'BIL302',
    examType: 'assignment',
    grade: 'AB',
    score: 75,
    maxScore: 80,
    date: '2023-12-01',
    semester: 'Güz',
    year: 2023
  }
];

// Mock Notifications
export const mockNotifications: Notification[] = [
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
  }
];

// Export all mock data
export const mockData = {
  users: mockUsers,
  courses: mockCourses,
  assignments: mockAssignments,
  posts: mockPosts,
  announcements: mockAnnouncements,
  chats: mockChats,
  messages: mockMessages,
  connections: mockConnections,
  events: mockEvents,
  grades: mockGrades,
  notifications: mockNotifications
};

export default mockData;