// AuthContext.tsx (Top declaration to support custom window API)
declare const window: Window & {
  ezsite?: {
    apis?: {
      sendResetPwdEmail?: (data: { email: string }) => Promise<{ error?: string }>;
      resetPassword?: (data: { token: string; password: string }) => Promise<{ error?: string }>;
      logout?: () => Promise<void>;
      getUserInfo?: () => Promise<{ data?: any; error?: string }>;
      login?: (data: { email: string; password: string }) => Promise<{ error?: string }>;
      register?: (data: { email: string; password: string }) => Promise<{ error?: string }>;
    };
  };
};

export {}; // Needed to make global declarations work

// Extend global Window type (TypeScript support)
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
      };
    };
  }
}

import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from "react";

// -------------------- Interfaces --------------------

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

// -------------------- Create Context --------------------

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) throw new Error("useAuth must be used within an AuthProvider");
  return context;
};

interface AuthProviderProps {
  children: ReactNode;
}

// -------------------- AuthProvider Component --------------------

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  const checkAuthStatus = async () => {
    try {
      const { data, error } = await (
        window.ezsite?.apis?.getUserInfo?.() ?? Promise.resolve({ data: null, error: "API not available" })
      );

      if (error) {
        setUser(null);
      } else {
        setUser(data as User);
      }
    } catch (error) {
      console.error("Auth check error:", error);
      setUser(null);
    } finally {
      setIsLoading(false);
    }
  };

  const login = async (email: string, password: string): Promise<string | null> => {
    try {
      const { error } = await (
        window.ezsite?.apis?.login?.({ email, password }) ??
        Promise.resolve({ error: "Login API not available" })
      );

      if (error) return error;

      await checkAuthStatus();
      return null;
    } catch (err) {
      console.error("Login error:", err);
      return "Unexpected error during login";
    }
  };

  const register = async (email: string, password: string): Promise<string | null> => {
    try {
      const { error } = await (
        window.ezsite?.apis?.register?.({ email, password }) ??
        Promise.resolve({ error: "Register API not available" })
      );

      return error ?? null;
    } catch (err) {
      console.error("Register error:", err);
      return "Unexpected error during registration";
    }
  };

  const logout = async (): Promise<void> => {
    try {
      await (window.ezsite?.apis?.logout?.() ?? Promise.resolve());
      setUser(null);
    } catch (err) {
      console.error("Logout error:", err);
    }
  };

  const sendResetEmail = async (email: string): Promise<string | null> => {
    try {
      const { error } = await (
        window.ezsite?.apis?.sendResetPwdEmail?.({ email }) ??
        Promise.resolve({ error: "Reset email API not available" })
      );

      return error ?? null;
    } catch (err) {
      console.error("Send reset email error:", err);
      return "Unexpected error sending reset email";
    }
  };

  const resetPassword = async (token: string, password: string): Promise<string | null> => {
    try {
      const { error } = await (
        window.ezsite?.apis?.resetPassword?.({ token, password }) ??
        Promise.resolve({ error: "Reset password API not available" })
      );

      return error ?? null;
    } catch (err) {
      console.error("Reset password error:", err);
      return "Unexpected error resetting password";
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
    checkAuthStatus,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
