import { ApiResponse, PaginatedResponse } from './types';

const API_BASE_URL = process.env.REACT_APP_API_URL || 'http://localhost:3001/api';

class ApiClient {
  private baseURL: string;

  constructor(baseURL: string) {
    this.baseURL = baseURL;
  }

  private async request<T>(
    endpoint: string,
    options: RequestInit = {}
  ): Promise<ApiResponse<T>> {
    const url = `${this.baseURL}${endpoint}`;
    const token = localStorage.getItem('klu_connect_token');

    const defaultHeaders: HeadersInit = {
      'Content-Type': 'application/json',
    };

    if (token) {
      defaultHeaders.Authorization = `Bearer ${token}`;
    }

    try {
      const response = await fetch(url, {
        headers: { ...defaultHeaders, ...options.headers },
        ...options,
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || 'An error occurred');
      }

      return {
        success: true,
        data: data.data || data,
        message: data.message,
      };
    } catch (error) {
      console.error('API request failed:', error);
      return {
        success: false,
        error: error instanceof Error ? error.message : 'Unknown error',
      };
    }
  }

  // Auth endpoints
  async login(email: string, password: string, userType: string) {
    return this.request('/auth/login', {
      method: 'POST',
      body: JSON.stringify({ email, password, userType }),
    });
  }

  async logout() {
    return this.request('/auth/logout', {
      method: 'POST',
    });
  }

  async refreshToken() {
    return this.request('/auth/refresh', {
      method: 'POST',
    });
  }

  // User endpoints
  async getProfile() {
    return this.request('/user/profile');
  }

  async updateProfile(data: Record<string, unknown>) {
    return this.request('/user/profile', {
      method: 'PUT',
      body: JSON.stringify(data),
    });
  }

  async uploadAvatar(file: File) {
    const formData = new FormData();
    formData.append('avatar', file);

    return this.request('/user/avatar', {
      method: 'POST',
      body: formData,
      headers: {}, // Let browser set Content-Type for multipart/form-data
    });
  }

  // Course endpoints
  async getCourses() {
    return this.request('/courses');
  }

  async getCourse(id: number) {
    return this.request(`/courses/${id}`);
  }

  async getCourseMembers(id: number) {
    return this.request(`/courses/${id}/members`);
  }

  async joinCourse(id: number) {
    return this.request(`/courses/${id}/join`, {
      method: 'POST',
    });
  }

  // Assignment endpoints
  async getAssignments(courseId?: number) {
    const endpoint = courseId ? `/courses/${courseId}/assignments` : '/assignments';
    return this.request(endpoint);
  }

  async getAssignment(id: number) {
    return this.request(`/assignments/${id}`);
  }

  async submitAssignment(id: number, files: File[]) {
    const formData = new FormData();
    files.forEach((file, index) => {
      formData.append(`file_${index}`, file);
    });

    return this.request(`/assignments/${id}/submit`, {
      method: 'POST',
      body: formData,
      headers: {},
    });
  }

  // Message endpoints
  async getChats() {
    return this.request('/messages/chats');
  }

  async getMessages(chatId: number, page = 1, limit = 50) {
    return this.request(`/messages/chats/${chatId}/messages?page=${page}&limit=${limit}`);
  }

  async sendMessage(chatId: number, content: string, type = 'text') {
    return this.request(`/messages/chats/${chatId}/messages`, {
      method: 'POST',
      body: JSON.stringify({ content, type }),
    });
  }

  async markMessageAsRead(messageId: number) {
    return this.request(`/messages/${messageId}/read`, {
      method: 'PUT',
    });
  }

  // Social endpoints
  async getFeed(page = 1, limit = 10) {
    return this.request(`/social/feed?page=${page}&limit=${limit}`);
  }

  async createPost(content: string, images?: File[], type?: string) {
    const formData = new FormData();
    formData.append('content', content);
    if (type) formData.append('type', type);
    
    images?.forEach((image, index) => {
      formData.append(`image_${index}`, image);
    });

    return this.request('/social/posts', {
      method: 'POST',
      body: formData,
      headers: {},
    });
  }

  async likePost(postId: number) {
    return this.request(`/social/posts/${postId}/like`, {
      method: 'POST',
    });
  }

  async commentOnPost(postId: number, content: string) {
    return this.request(`/social/posts/${postId}/comments`, {
      method: 'POST',
      body: JSON.stringify({ content }),
    });
  }

  async getConnections() {
    return this.request('/social/connections');
  }

  async sendConnectionRequest(userId: number) {
    return this.request('/social/connections/request', {
      method: 'POST',
      body: JSON.stringify({ userId }),
    });
  }

  // Announcement endpoints
  async getAnnouncements(category?: string, page = 1, limit = 10) {
    const params = new URLSearchParams();
    if (category && category !== 'all') params.append('category', category);
    params.append('page', page.toString());
    params.append('limit', limit.toString());

    return this.request(`/announcements?${params}`);
  }

  async getAnnouncement(id: number) {
    return this.request(`/announcements/${id}`);
  }

  async createAnnouncement(data: Record<string, unknown>) {
    return this.request('/announcements', {
      method: 'POST',
      body: JSON.stringify(data),
    });
  }

  // Notification endpoints
  async getNotifications() {
    return this.request('/notifications');
  }

  async markNotificationAsRead(id: number) {
    return this.request(`/notifications/${id}/read`, {
      method: 'PUT',
    });
  }

  async markAllNotificationsAsRead() {
    return this.request('/notifications/read-all', {
      method: 'PUT',
    });
  }

  // Search endpoints
  async search(query: string, type?: string) {
    const params = new URLSearchParams();
    params.append('q', query);
    if (type) params.append('type', type);

    return this.request(`/search?${params}`);
  }

  // File upload endpoints
  async uploadFile(file: File, type = 'general') {
    const formData = new FormData();
    formData.append('file', file);
    formData.append('type', type);

    return this.request('/files/upload', {
      method: 'POST',
      body: formData,
      headers: {},
    });
  }

  async deleteFile(fileId: string) {
    return this.request(`/files/${fileId}`, {
      method: 'DELETE',
    });
  }

  // Statistics endpoints
  async getUserStats() {
    return this.request('/stats/user');
  }

  async getCourseStats(courseId: number) {
    return this.request(`/stats/courses/${courseId}`);
  }
}

// Create and export API client instance
export const api = new ApiClient(API_BASE_URL);

// Helper functions for common operations
export const apiHelpers = {
  // Handle file downloads
  downloadFile: (url: string, filename: string) => {
    const link = document.createElement('a');
    link.href = url;
    link.download = filename;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  },

  // Format file size
  formatFileSize: (bytes: number): string => {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
  },

  // Validate file type
  validateFileType: (file: File, allowedTypes: string[]): boolean => {
    const fileType = file.type.toLowerCase();
    const fileExtension = file.name.split('.').pop()?.toLowerCase();
    
    return allowedTypes.some(type => 
      fileType.includes(type) || fileExtension === type.replace('.', '')
    );
  },

  // Create form data from object
  objectToFormData: (obj: Record<string, unknown>, formData = new FormData(), prefix = ''): FormData => {
    for (const key in obj) {
      if (Object.prototype.hasOwnProperty.call(obj, key)) {
        const value = obj[key];
        const formKey = prefix ? `${prefix}[${key}]` : key;

        if (value instanceof File) {
          formData.append(formKey, value);
        } else if (Array.isArray(value)) {
          value.forEach((item, index) => {
            if (item instanceof File) {
              formData.append(`${formKey}[${index}]`, item);
            } else {
              formData.append(`${formKey}[${index}]`, String(item));
            }
          });
        } else if (typeof value === 'object' && value !== null) {
          apiHelpers.objectToFormData(value, formData, formKey);
        } else {
          formData.append(formKey, String(value));
        }
      }
    }
    return formData;
  }
};

export default api;