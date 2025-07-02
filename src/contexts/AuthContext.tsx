import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

interface User {
  ID: number;
  Name: string;
  Email: string;
  CreateTime: string;
}

interface AuthContextType {
  user: User | null;
  isLoading: boolean;
  login: (email: string, password: string) => Promise<string | null>;
  register: (email: string, password: string) => Promise<string | null>;
  logout: () => Promise<void>;
  sendResetEmail: (email: string) => Promise<string | null>;
  resetPassword: (token: string, password: string) => Promise<string | null>;
  checkAuthStatus: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  const checkAuthStatus = async () => {
    try {
      const { data, error } = await window.ezsite.apis.getUserInfo();
      if (error) {
        setUser(null);
      } else {
        setUser(data);
      }
    } catch (error) {
      console.error('Error checking auth status:', error);
      setUser(null);
    } finally {
      setIsLoading(false);
    }
  };

  const login = async (email: string, password: string): Promise<string | null> => {
    try {
      const { error } = await window.ezsite.apis.login({ email, password });
      if (error) {
        return error;
      }
      await checkAuthStatus();
      return null;
    } catch (error) {
      console.error('Login error:', error);
      return 'An unexpected error occurred';
    }
  };

  const register = async (email: string, password: string): Promise<string | null> => {
    try {
      const { error } = await window.ezsite.apis.register({ email, password });
      if (error) {
        return error;
      }
      return null;
    } catch (error) {
      console.error('Registration error:', error);
      return 'An unexpected error occurred';
    }
  };

  const logout = async (): Promise<void> => {
    try {
      await window.ezsite.apis.logout();
      setUser(null);
    } catch (error) {
      console.error('Logout error:', error);
    }
  };

  const sendResetEmail = async (email: string): Promise<string | null> => {
    try {
      const { error } = await window.ezsite.apis.sendResetPwdEmail({ email });
      if (error) {
        return error;
      }
      return null;
    } catch (error) {
      console.error('Reset email error:', error);
      return 'An unexpected error occurred';
    }
  };

  const resetPassword = async (token: string, password: string): Promise<string | null> => {
    try {
      const { error } = await window.ezsite.apis.resetPassword({ token, password });
      if (error) {
        return error;
      }
      return null;
    } catch (error) {
      console.error('Reset password error:', error);
      return 'An unexpected error occurred';
    }
  };

  useEffect(() => {
    checkAuthStatus();
  }, []);

  const value: AuthContextType = {
    user,
    isLoading,
    login,
    register,
    logout,
    sendResetEmail,
    resetPassword,
    checkAuthStatus
  };

  return <AuthContext.Provider value={value} data-id="02fqiecrh" data-path="src/contexts/AuthContext.tsx">{children}</AuthContext.Provider>;
};