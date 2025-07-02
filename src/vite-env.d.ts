/// <reference types="vite/client" />

declare global {
  interface Window {
    ezsite: {
      apis: {
        tableCreate: (tableId: string, data: any) => Promise<{data?: any;error?: string;}>;
        tableUpdate: (tableId: string, data: any) => Promise<{data?: any;error?: string;}>;
        tableDelete: (tableId: string, data: any) => Promise<{data?: any;error?: string;}>;
        tablePage: (tableId: string, params: any) => Promise<{data?: any;error?: string;}>;
        upload: (fileInfo: any) => Promise<{data?: any;error?: string;}>;
        register: (credentials: any) => Promise<{error?: string;}>;
        login: (credentials: any) => Promise<{error?: string;}>;
        logout: () => Promise<{error?: string;}>;
        getUserInfo: () => Promise<{data?: any;error?: string;}>;
        sendResetPwdEmail: (email: any) => Promise<{error?: string;}>;
        resetPassword: (resetInfo: any) => Promise<{error?: string;}>;
        sendEmail: (emailData: any) => Promise<{error?: string;}>;
      };
    };
  }
}