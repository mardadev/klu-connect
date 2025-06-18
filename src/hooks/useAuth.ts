import { useContext } from 'react';
import { AuthProvider } from '@/components/Auth/AuthProvider';

// This is a re-export of the useAuth hook from AuthProvider
// to maintain compatibility with existing imports
export { useAuth } from '@/components/Auth/AuthProvider';