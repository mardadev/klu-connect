// User types
export interface User {
  id: number;
  name: string;
  email: string;
  role: 'student' | 'academic' | 'admin' | 'system_admin';
  studentNumber?: string;
  department?: string;
  faculty?: string;
  avatar?: string;
  phone?: string;
  location?: string;
  bio?: string;
  skills?: string[];
  socialLinks?: {
    linkedin?: string;
    github?: string;
    twitter?: string;
  };
}

// Course types
export interface Course {
  id: number;
  code: string;
  name: string;
  instructor: string;
  credits: number;
  students: number;
  color: string;
  progress: number;
  nextClass?: string;
  unreadMessages: number;
  pendingAssignments: number;
  description?: string;
  semester: string;
  year: number;
}

// Assignment types
export interface Assignment {
  id: number;
  courseId: number;
  title: string;
  description: string;
  dueDate: string;
  status: 'pending' | 'submitted' | 'graded' | 'overdue';
  maxScore: number;
  score?: number;
  submissions?: number;
  attachments?: File[];
  instructions?: string;
}

// Message types
export interface Message {
  id: number;
  senderId: number;
  receiverId?: number;
  chatId: number;
  content: string;
  timestamp: string;
  isRead: boolean;
  type: 'text' | 'image' | 'file' | 'link';
  fileUrl?: string;
  fileName?: string;
  fileSize?: number;
}

export interface Chat {
  id: number;
  type: 'individual' | 'group' | 'course';
  name: string;
  avatar: string;
  lastMessage: string;
  lastMessageTime: string;
  unreadCount: number;
  isOnline: boolean;
  participants?: number;
  courseCode?: string;
  members?: User[];
}

// Post types for social feed
export interface Post {
  id: number;
  authorId: number;
  author: {
    name: string;
    avatar: string;
    title: string;
    department: string;
  };
  content: string;
  timestamp: string;
  likes: number;
  comments: number;
  shares: number;
  isLiked: boolean;
  images?: string[];
  type?: 'project' | 'achievement' | 'event' | 'general';
  tags?: string[];
}

// Announcement types
export interface Announcement {
  id: number;
  title: string;
  content: string;
  author: {
    name: string;
    avatar: string;
    role: string;
  };
  category: 'general' | 'faculty' | 'department' | 'course';
  priority: 'low' | 'normal' | 'medium' | 'high';
  timestamp: string;
  isPinned: boolean;
  targetAudience: 'all' | 'faculty' | 'department' | 'course';
  views: number;
  department?: string;
  faculty?: string;
  courseId?: number;
}

// Notification types
export interface Notification {
  id: number;
  type: 'assignment' | 'message' | 'announcement' | 'grade' | 'event' | 'system';
  title: string;
  message: string;
  time: string;
  isRead: boolean;
  actionUrl?: string;
  data?: Record<string, unknown>;
}

// API Response types
export interface ApiResponse<T> {
  success: boolean;
  data?: T;
  message?: string;
  error?: string;
}

export interface PaginatedResponse<T> {
  data: T[];
  total: number;
  page: number;
  limit: number;
  hasMore: boolean;
}

// Form types
export interface LoginForm {
  email: string;
  password: string;
  userType: string;
}

export interface ProfileForm {
  name: string;
  phone?: string;
  location?: string;
  bio?: string;
  skills: string[];
  socialLinks: {
    linkedin?: string;
    github?: string;
    twitter?: string;
  };
}

// Navigation types
export interface NavItem {
  title: string;
  href: string;
  icon: React.ComponentType<{ className?: string }>;
  badge?: number;
  description?: string;
  children?: NavItem[];
}

// Theme types
export type Theme = 'light' | 'dark';

// Connection types
export interface Connection {
  id: number;
  name: string;
  title: string;
  avatar: string;
  mutualConnections: number;
  isConnected: boolean;
  department?: string;
  faculty?: string;
  company?: string;
}

// Event types
export interface Event {
  id: number;
  title: string;
  description: string;
  startDate: string;
  endDate: string;
  location: string;
  organizer: string;
  category: 'academic' | 'social' | 'career' | 'sports' | 'cultural';
  attendees: number;
  maxAttendees?: number;
  isRegistered: boolean;
  tags: string[];
}

// Grade types
export interface Grade {
  id: number;
  courseId: number;
  courseName: string;
  courseCode: string;
  examType: 'midterm' | 'final' | 'quiz' | 'assignment' | 'project';
  grade: string;
  score: number;
  maxScore: number;
  date: string;
  semester: string;
  year: number;
}

// Statistics types
export interface UserStats {
  activeCourses: number;
  completedAssignments: number;
  pendingAssignments: number;
  connections: number;
  unreadMessages: number;
  gpa: number;
  attendanceRate: number;
}