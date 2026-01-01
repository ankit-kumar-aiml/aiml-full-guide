import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { authAPI, setAuthToken, removeAuthToken, isAuthenticated } from '../utils/api';

interface User {
  id: string;
  name: string;
  email: string;
  college?: string;
  currentDay: number;
  streak: number;
  totalStudyTime: number;
}

interface AuthContextType {
  user: User | null;
  loading: boolean;
  login: (email: string, password: string) => Promise<void>;
  register: (name: string, email: string, password: string, college?: string) => Promise<void>;
  logout: () => void;
  updateUser: (data: Partial<User>) => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const initAuth = async () => {
      if (isAuthenticated()) {
        try {
          const { user } = await authAPI.getMe();
          setUser(user);
        } catch (error) {
          removeAuthToken();
        }
      }
      setLoading(false);
    };
    initAuth();
  }, []);

  const login = async (email: string, password: string) => {
    const { user, token } = await authAPI.login({ email, password });
    setAuthToken(token);
    setUser(user);
  };

  const register = async (name: string, email: string, password: string, college?: string) => {
    const { user, token } = await authAPI.register({ name, email, password, college });
    setAuthToken(token);
    setUser(user);
  };

  const logout = () => {
    removeAuthToken();
    setUser(null);
  };

  const updateUser = (data: Partial<User>) => {
    if (user) {
      setUser({ ...user, ...data });
    }
  };

  return (
    <AuthContext.Provider value={{ user, loading, login, register, logout, updateUser }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
