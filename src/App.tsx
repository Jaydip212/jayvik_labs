import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "@/contexts/AuthContext";
import HomePage from "./pages/HomePage";
import AuthPage from "./pages/AuthPage";
import OnAuthSuccess from "./pages/OnAuthSuccess";
import ResetPassword from "./pages/ResetPassword";
import NotFound from "./pages/NotFound";



import VerifyAccount from './pages/VerifyAccount';

<Routes>
  {/* Baaki routes */}
  <Route path="/verify" element={<VerifyAccount />} />
</Routes>


const queryClient = new QueryClient();

const App = () =>
<QueryClientProvider client={queryClient} data-id="jhvtwbvye" data-path="src/App.tsx">
    <TooltipProvider data-id="pxo4kf2p7" data-path="src/App.tsx">
      <AuthProvider data-id="femwlo7qm" data-path="src/App.tsx">
        <Toaster data-id="2e928amyr" data-path="src/App.tsx" />
        <BrowserRouter data-id="gn5i098k2" data-path="src/App.tsx">
          <Routes data-id="js8naan1b" data-path="src/App.tsx">
            <Route path="/" element={<HomePage data-id="njgdp5ang" data-path="src/App.tsx" />} data-id="kvvu4xjo2" data-path="src/App.tsx" />
            <Route path="/auth" element={<AuthPage data-id="2y5zbkody" data-path="src/App.tsx" />} data-id="4bonejna8" data-path="src/App.tsx" />
            <Route path="/onauthsuccess" element={<OnAuthSuccess data-id="h2kvul5ro" data-path="src/App.tsx" />} data-id="xc6yxr9fy" data-path="src/App.tsx" />
            <Route path="/resetpassword" element={<ResetPassword data-id="139oklbm9" data-path="src/App.tsx" />} data-id="nbgown0yx" data-path="src/App.tsx" />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound data-id="mzxa7mxym" data-path="src/App.tsx" />} data-id="o0nmhzda3" data-path="src/App.tsx" />
          </Routes>
        </BrowserRouter>
      </AuthProvider>
    </TooltipProvider>
  </QueryClientProvider>;


export default App;