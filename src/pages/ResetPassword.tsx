import React, { useState, useEffect } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { useAuth } from '@/contexts/AuthContext';
import { useToast } from '@/hooks/use-toast';
import { Lock, Eye, EyeOff, CheckCircle } from 'lucide-react';

const ResetPassword: React.FC = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const { resetPassword } = useAuth();
  const { toast } = useToast();

  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSuccess, setIsSuccess] = useState(false);

  const token = searchParams.get('token');

  useEffect(() => {
    if (!token) {
      toast({
        title: 'Invalid Reset Link',
        description: 'The password reset link is invalid or expired.',
        variant: 'destructive'
      });
      navigate('/auth');
    }
  }, [token, navigate, toast]);

  const validatePassword = (password: string): boolean => {
    return password.length >= 6;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrors({});

    // Validation
    const newErrors: Record<string, string> = {};

    if (!password) {
      newErrors.password = 'Password is required';
    } else if (!validatePassword(password)) {
      newErrors.password = 'Password must be at least 6 characters';
    }

    if (!confirmPassword) {
      newErrors.confirmPassword = 'Please confirm your password';
    } else if (password !== confirmPassword) {
      newErrors.confirmPassword = 'Passwords do not match';
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    if (!token) {
      setErrors({ general: 'Invalid reset token' });
      return;
    }

    setIsLoading(true);
    try {
      const error = await resetPassword(token, password);
      if (error) {
        setErrors({ general: error });
      } else {
        setIsSuccess(true);
        toast({
          title: 'Password Reset Successfully!',
          description: 'Your password has been updated. You can now sign in with your new password.'
        });

        // Redirect to login after 3 seconds
        setTimeout(() => {
          navigate('/auth');
        }, 3000);
      }
    } catch (error) {
      setErrors({ general: 'An unexpected error occurred' });
    } finally {
      setIsLoading(false);
    }
  };

  if (isSuccess) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-green-50 via-white to-blue-50 p-4" data-id="xzjfrqpsy" data-path="src/pages/ResetPassword.tsx">
        <Card className="w-full max-w-md text-center" data-id="spqfcyiox" data-path="src/pages/ResetPassword.tsx">
          <CardHeader data-id="0v8q44en8" data-path="src/pages/ResetPassword.tsx">
            <div className="flex justify-center mb-4" data-id="x7sxyxqmg" data-path="src/pages/ResetPassword.tsx">
              <CheckCircle className="h-16 w-16 text-green-500" data-id="xi9lmyffc" data-path="src/pages/ResetPassword.tsx" />
            </div>
            <CardTitle className="text-2xl font-bold text-green-700" data-id="zvwaeeqrs" data-path="src/pages/ResetPassword.tsx">
              Password Reset Successfully!
            </CardTitle>
            <CardDescription data-id="llxufzls7" data-path="src/pages/ResetPassword.tsx">
              Your password has been updated. You can now sign in with your new password.
            </CardDescription>
          </CardHeader>
          <CardContent data-id="3aqjnfgfm" data-path="src/pages/ResetPassword.tsx">
            <p className="text-sm text-gray-600 mb-4" data-id="l0uq4vs5g" data-path="src/pages/ResetPassword.tsx">
              Redirecting to login page in a few seconds...
            </p>
            <Button onClick={() => navigate('/auth')} className="w-full" data-id="y8cixmulv" data-path="src/pages/ResetPassword.tsx">
              Go to Login
            </Button>
          </CardContent>
        </Card>
      </div>);

  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-purple-50 p-4" data-id="m0clmmubu" data-path="src/pages/ResetPassword.tsx">
      <Card className="w-full max-w-md" data-id="vzl70pobc" data-path="src/pages/ResetPassword.tsx">
        <CardHeader data-id="xynk3ljnx" data-path="src/pages/ResetPassword.tsx">
          <CardTitle className="text-2xl font-bold text-center" data-id="bw0xpntk1" data-path="src/pages/ResetPassword.tsx">Reset Password</CardTitle>
          <CardDescription className="text-center" data-id="cjec7vgwc" data-path="src/pages/ResetPassword.tsx">
            Enter your new password below
          </CardDescription>
        </CardHeader>
        
        <form onSubmit={handleSubmit} data-id="aqbqr738k" data-path="src/pages/ResetPassword.tsx">
          <CardContent className="space-y-4" data-id="3qovozuvj" data-path="src/pages/ResetPassword.tsx">
            {errors.general &&
            <Alert className="border-red-200 bg-red-50" data-id="1s1nvzx1r" data-path="src/pages/ResetPassword.tsx">
                <AlertDescription className="text-red-800" data-id="q73sp5n03" data-path="src/pages/ResetPassword.tsx">
                  {errors.general}
                </AlertDescription>
              </Alert>
            }
            
            <div className="space-y-2" data-id="hojotfk1c" data-path="src/pages/ResetPassword.tsx">
              <Label htmlFor="password" data-id="k4bf0fe7q" data-path="src/pages/ResetPassword.tsx">New Password</Label>
              <div className="relative" data-id="re6sz7vo8" data-path="src/pages/ResetPassword.tsx">
                <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" data-id="gmvjfv8g9" data-path="src/pages/ResetPassword.tsx" />
                <Input
                  id="password"
                  type={showPassword ? 'text' : 'password'}
                  placeholder="Enter your new password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className={`pl-10 pr-10 ${errors.password ? 'border-red-300' : ''}`}
                  disabled={isLoading} data-id="4ctar36vp" data-path="src/pages/ResetPassword.tsx" />

                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600" data-id="5xoklisu8" data-path="src/pages/ResetPassword.tsx">

                  {showPassword ? <EyeOff className="h-4 w-4" data-id="klt61z9m9" data-path="src/pages/ResetPassword.tsx" /> : <Eye className="h-4 w-4" data-id="zcyero53g" data-path="src/pages/ResetPassword.tsx" />}
                </button>
              </div>
              {errors.password &&
              <p className="text-sm text-red-600" data-id="o0lzz8xpq" data-path="src/pages/ResetPassword.tsx">{errors.password}</p>
              }
            </div>
            
            <div className="space-y-2" data-id="pndrijvjz" data-path="src/pages/ResetPassword.tsx">
              <Label htmlFor="confirmPassword" data-id="1k5gaok7b" data-path="src/pages/ResetPassword.tsx">Confirm New Password</Label>
              <div className="relative" data-id="1ldy0z22z" data-path="src/pages/ResetPassword.tsx">
                <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" data-id="we7egeh9o" data-path="src/pages/ResetPassword.tsx" />
                <Input
                  id="confirmPassword"
                  type={showConfirmPassword ? 'text' : 'password'}
                  placeholder="Confirm your new password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  className={`pl-10 pr-10 ${errors.confirmPassword ? 'border-red-300' : ''}`}
                  disabled={isLoading} data-id="4dq959wiw" data-path="src/pages/ResetPassword.tsx" />

                <button
                  type="button"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600" data-id="8yvsx8cn8" data-path="src/pages/ResetPassword.tsx">

                  {showConfirmPassword ? <EyeOff className="h-4 w-4" data-id="w1b8kxvic" data-path="src/pages/ResetPassword.tsx" /> : <Eye className="h-4 w-4" data-id="pic8n99nc" data-path="src/pages/ResetPassword.tsx" />}
                </button>
              </div>
              {errors.confirmPassword &&
              <p className="text-sm text-red-600" data-id="t68xhwtpt" data-path="src/pages/ResetPassword.tsx">{errors.confirmPassword}</p>
              }
            </div>
            
            <div className="text-sm text-gray-600" data-id="wq2kqgu7f" data-path="src/pages/ResetPassword.tsx">
              <p data-id="m4qkrdvxl" data-path="src/pages/ResetPassword.tsx">Password requirements:</p>
              <ul className="list-disc list-inside mt-1 text-xs" data-id="80ukvnsxy" data-path="src/pages/ResetPassword.tsx">
                <li data-id="kvhwx87yu" data-path="src/pages/ResetPassword.tsx">At least 6 characters long</li>
                <li data-id="nj99v9hnc" data-path="src/pages/ResetPassword.tsx">Passwords must match</li>
              </ul>
            </div>
          </CardContent>
          
          <CardContent className="pt-0" data-id="yzghqtjfa" data-path="src/pages/ResetPassword.tsx">
            <Button type="submit" className="w-full" disabled={isLoading} data-id="zuyydh6yy" data-path="src/pages/ResetPassword.tsx">
              {isLoading ? 'Updating Password...' : 'Update Password'}
            </Button>
            
            <div className="text-center mt-4" data-id="m50o58oce" data-path="src/pages/ResetPassword.tsx">
              <Button
                type="button"
                variant="ghost"
                onClick={() => navigate('/auth')}
                className="text-sm" data-id="4z22dtxma" data-path="src/pages/ResetPassword.tsx">

                Back to Login
              </Button>
            </div>
          </CardContent>
        </form>
      </Card>
    </div>);

};

export default ResetPassword;