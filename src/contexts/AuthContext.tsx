// AuthContext.tsx के सबसे ऊपर
declare const window: {
  ezsite?: {
    apis?: {
      sendResetPwdEmail?: (data: { email: string }) => Promise<{ error?: string }>;
      resetPassword?: (data: { token: string; password: string }) => Promise<{ error?: string }>;
      logout?: () => Promise<void>;
      // अन्य API मेथड्स यहाँ जोड़ें
    };
  };
} & Window;


// AuthContext.tsx
// AuthContext.tsx
// ✅ Fixed: Declare global window types (only this part is changed)
export {};

declare global {
  interface Window {
    ezsite?: {
      apis?: {
        sendResetPwdEmail?: (data: { email: string }) => Promise<{ error?: string }>;
        resetPassword?: (data: { token: string; password: string }) => Promise<{ error?: string }>;
        logout?: () => Promise<void>;
        getUserInfo?: () => Promise<{ data?: any; error?: string }>;
        login?: (data: { email: string; password: string }) => Promise<{ error?: string }>;
        register?: (data: { email: string; password: string }) => Promise<{ error?: string }>;
        // अन्य API मेथड्स यहाँ जोड़ें
      };
    };
  }
}

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
      const { data, error } = await (window.ezsite?.apis?.getUserInfo?.() ||
        Promise.resolve({ data: null, error: "API not available" }));

      if (error) {
        setUser(null);
      } else {
        setUser(data as User | null);
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
      const { error } = await (window.ezsite?.apis?.login?.({ email, password }) ||
        Promise.resolve({ error: "Login API not available" }));

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
      const { error } = await (window.ezsite?.apis?.register?.({ email, password }) ||
        Promise.resolve({ error: "Registration API not available" }));

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
      await (window.ezsite?.apis?.logout?.() || Promise.resolve());
      setUser(null);
    } catch (error) {
      console.error('Logout error:', error);
    }
  };

  const sendResetEmail = async (email: string): Promise<string | null> => {
    try {
      const { error } = await (window.ezsite?.apis?.sendResetPwdEmail?.({ email }) ||
        Promise.resolve({ error: "Reset email API not available" }));

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
      const { error } = await (window.ezsite?.apis?.resetPassword?.({ token, password }) ||
        Promise.resolve({ error: "Reset password API not available" }));

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

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
