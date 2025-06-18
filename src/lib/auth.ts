// src/lib/auth.ts
import { User } from './types';

export interface AuthTokens {
  accessToken: string;
  refreshToken: string;
  expiresAt: number;
}

export interface LoginCredentials {
  email: string;
  password: string;
  userType: 'student' | 'academic' | 'admin' | 'system_admin';
}

export interface AuthState {
  user: User | null;
  tokens: AuthTokens | null;
  isAuthenticated: boolean;
  isLoading: boolean;
}

// Token management
export const tokenStorage = {
  getTokens(): AuthTokens | null {
    try {
      const tokens = localStorage.getItem('klu_connect_tokens');
      return tokens ? JSON.parse(tokens) : null;
    } catch {
      return null;
    }
  },

  setTokens(tokens: AuthTokens): void {
    localStorage.setItem('klu_connect_tokens', JSON.stringify(tokens));
  },

  removeTokens(): void {
    localStorage.removeItem('klu_connect_tokens');
    localStorage.removeItem('klu_connect_user');
  },

  isTokenExpired(token: string): boolean {
    try {
      const payload = JSON.parse(atob(token.split('.')[1]));
      return Date.now() >= payload.exp * 1000;
    } catch {
      return true;
    }
  }
};

// User management
export const userStorage = {
  getUser(): User | null {
    try {
      const user = localStorage.getItem('klu_connect_user');
      return user ? JSON.parse(user) : null;
    } catch {
      return null;
    }
  },

  setUser(user: User): void {
    localStorage.setItem('klu_connect_user', JSON.stringify(user));
  },

  removeUser(): void {
    localStorage.removeItem('klu_connect_user');
  }
};

// Email validation
export const validateKLUEmail = (email: string): boolean => {
  const kluEmailRegex = /^[a-zA-Z0-9._%+-]+@klu\.edu\.tr$/;
  return kluEmailRegex.test(email);
};

// Password validation
export const validatePassword = (password: string): { isValid: boolean; errors: string[] } => {
  const errors: string[] = [];
  
  if (password.length < 8) {
    errors.push('Şifre en az 8 karakter olmalıdır');
  }
  
  if (!/[A-Z]/.test(password)) {
    errors.push('Şifre en az bir büyük harf içermelidir');
  }
  
  if (!/[a-z]/.test(password)) {
    errors.push('Şifre en az bir küçük harf içermelidir');
  }
  
  if (!/[0-9]/.test(password)) {
    errors.push('Şifre en az bir rakam içermelidir');
  }

  return {
    isValid: errors.length === 0,
    errors
  };
};

// Role-based access control
export const hasPermission = (userRole: string, requiredRole: string): boolean => {
  const roleHierarchy = {
    'student': 0,
    'academic': 1,
    'admin': 2,
    'system_admin': 3
  };

  const userLevel = roleHierarchy[userRole as keyof typeof roleHierarchy] ?? -1;
  const requiredLevel = roleHierarchy[requiredRole as keyof typeof roleHierarchy] ?? 999;

  return userLevel >= requiredLevel;
};

// Session management
export const sessionManager = {
  startSession(user: User, tokens: AuthTokens): void {
    userStorage.setUser(user);
    tokenStorage.setTokens(tokens);
    
    // Set session timeout
    const sessionTimeout = setTimeout(() => {
      this.endSession();
    }, tokens.expiresAt - Date.now());
    
    // Store timeout ID
    sessionStorage.setItem('klu_session_timeout', sessionTimeout.toString());
  },

  endSession(): void {
    // Clear timeout
    const timeoutId = sessionStorage.getItem('klu_session_timeout');
    if (timeoutId) {
      clearTimeout(parseInt(timeoutId));
      sessionStorage.removeItem('klu_session_timeout');
    }
    
    // Clear stored data
    tokenStorage.removeTokens();
    userStorage.removeUser();
    
    // Clear all session storage
    sessionStorage.clear();
    
    // Redirect to login
    window.location.href = '/login';
  },

  refreshSession(): boolean {
    const tokens = tokenStorage.getTokens();
    if (!tokens) return false;

    if (tokenStorage.isTokenExpired(tokens.accessToken)) {
      // In a real app, this would call the refresh token endpoint
      this.endSession();
      return false;
    }

    return true;
  },

  isSessionValid(): boolean {
    const user = userStorage.getUser();
    const tokens = tokenStorage.getTokens();
    
    if (!user || !tokens) return false;
    
    return !tokenStorage.isTokenExpired(tokens.accessToken);
  }
};

// Authentication utilities
export const authUtils = {
  generateMockToken(email: string, role: string): AuthTokens {
    const now = Date.now();
    const expiresAt = now + (24 * 60 * 60 * 1000); // 24 hours
    
    // Mock JWT structure
    const header = btoa(JSON.stringify({ typ: 'JWT', alg: 'HS256' }));
    const payload = btoa(JSON.stringify({
      email,
      role,
      iat: Math.floor(now / 1000),
      exp: Math.floor(expiresAt / 1000)
    }));
    const signature = btoa(`${header}.${payload}.mock_signature`);
    
    return {
      accessToken: `${header}.${payload}.${signature}`,
      refreshToken: btoa(`refresh_${email}_${now}`),
      expiresAt
    };
  },

  parseUserFromToken(token: string): Partial<User> | null {
    try {
      const payload = JSON.parse(atob(token.split('.')[1]));
      return {
        email: payload.email,
        role: payload.role
      };
    } catch {
      return null;
    }
  },

  formatDisplayName(user: User): string {
    if (user.name) return user.name;
    
    // Fallback to email username
    const emailUsername = user.email.split('@')[0];
    return emailUsername.charAt(0).toUpperCase() + emailUsername.slice(1);
  },

  getRoleDisplayName(role: string): string {
    const roleNames = {
      'student': 'Öğrenci',
      'academic': 'Akademisyen',
      'admin': 'İdari Personel',
      'system_admin': 'Sistem Yöneticisi'
    };
    
    return roleNames[role as keyof typeof roleNames] || role;
  },

  getUserAvatarUrl(user: User): string {
    if (user.avatar) return user.avatar;
    
    // Generate avatar from initials
    const initials = user.name ? 
      user.name.split(' ').map(n => n[0]).join('').toUpperCase() :
      user.email.split('@')[0].charAt(0).toUpperCase();
    
    return `/api/placeholder/40/40?text=${encodeURIComponent(initials)}`;
  }
};

// Security utilities
export const securityUtils = {
  sanitizeInput(input: string): string {
    return input
      .replace(/[<>]/g, '') // Remove potential HTML tags
      .trim();
  },

  validateFileUpload(file: File): { isValid: boolean; error?: string } {
    const maxSize = 10 * 1024 * 1024; // 10MB
    const allowedTypes = [
      'image/jpeg', 'image/png', 'image/gif',
      'application/pdf', 'application/msword',
      'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
      'text/plain'
    ];

    if (file.size > maxSize) {
      return { isValid: false, error: 'Dosya boyutu 10MB\'dan küçük olmalıdır' };
    }

    if (!allowedTypes.includes(file.type)) {
      return { isValid: false, error: 'Desteklenmeyen dosya türü' };
    }

    return { isValid: true };
  },

  generateCSRFToken(): string {
    return btoa(Math.random().toString(36).substr(2) + Date.now().toString(36));
  }
};

// Export all utilities
export default {
  tokenStorage,
  userStorage,
  validateKLUEmail,
  validatePassword,
  hasPermission,
  sessionManager,
  authUtils,
  securityUtils
};