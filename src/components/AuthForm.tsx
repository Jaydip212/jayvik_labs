import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { useAuth } from '@/contexts/AuthContext';
import { useToast } from '@/hooks/use-toast';
import { Eye, EyeOff, Mail, Lock, User, ArrowRight } from 'lucide-react';

const AuthForm: React.FC = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [activeTab, setActiveTab] = useState('login');

  const { login, register, sendResetEmail } = useAuth();
  const { toast } = useToast();

  // Login form state
  const [loginData, setLoginData] = useState({
    email: '',
    password: ''
  });

  // Register form state
  const [registerData, setRegisterData] = useState({
    email: '',
    password: '',
    confirmPassword: ''
  });

  // Reset password state
  const [resetEmail, setResetEmail] = useState('');
  const [showResetForm, setShowResetForm] = useState(false);

  const validateEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validatePassword = (password: string): boolean => {
    return password.length >= 6;
  };

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrors({});

    // Validation
    const newErrors: Record<string, string> = {};
    if (!loginData.email) {
      newErrors.email = 'Email is required';
    } else if (!validateEmail(loginData.email)) {
      newErrors.email = 'Please enter a valid email';
    }

    if (!loginData.password) {
      newErrors.password = 'Password is required';
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setIsLoading(true);
    try {
      const error = await login(loginData.email, loginData.password);
      if (error) {
        setErrors({ general: error });
      } else {
        toast({
          title: 'Success!',
          description: 'You have been logged in successfully.'
        });
        // Navigate to home or dashboard
        window.location.href = '/';
      }
    } catch (error) {
      setErrors({ general: 'An unexpected error occurred' });
    } finally {
      setIsLoading(false);
    }
  };

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrors({});

    // Validation
    const newErrors: Record<string, string> = {};
    if (!registerData.email) {
      newErrors.email = 'Email is required';
    } else if (!validateEmail(registerData.email)) {
      newErrors.email = 'Please enter a valid email';
    }

    if (!registerData.password) {
      newErrors.password = 'Password is required';
    } else if (!validatePassword(registerData.password)) {
      newErrors.password = 'Password must be at least 6 characters';
    }

    if (!registerData.confirmPassword) {
      newErrors.confirmPassword = 'Please confirm your password';
    } else if (registerData.password !== registerData.confirmPassword) {
      newErrors.confirmPassword = 'Passwords do not match';
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setIsLoading(true);
    try {
      const error = await register(registerData.email, registerData.password);
      if (error) {
        setErrors({ general: error });
      } else {
        toast({
          title: 'Registration Successful!',
          description: 'Please check your email to verify your account.'
        });
        // Clear form
        setRegisterData({ email: '', password: '', confirmPassword: '' });
      }
    } catch (error) {
      setErrors({ general: 'An unexpected error occurred' });
    } finally {
      setIsLoading(false);
    }
  };

  const handleResetPassword = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrors({});

    if (!resetEmail) {
      setErrors({ resetEmail: 'Email is required' });
      return;
    }

    if (!validateEmail(resetEmail)) {
      setErrors({ resetEmail: 'Please enter a valid email' });
      return;
    }

    setIsLoading(true);
    try {
      const error = await sendResetEmail(resetEmail);
      if (error) {
        setErrors({ resetEmail: error });
      } else {
        toast({
          title: 'Reset Email Sent!',
          description: 'Please check your email for password reset instructions.'
        });
        setShowResetForm(false);
        setResetEmail('');
      }
    } catch (error) {
      setErrors({ resetEmail: 'An unexpected error occurred' });
    } finally {
      setIsLoading(false);
    }
  };

  if (showResetForm) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-purple-50 p-4" data-id="0rl0847sa" data-path="src/components/AuthForm.tsx">
        <Card className="w-full max-w-md" data-id="egtnp10yz" data-path="src/components/AuthForm.tsx">
          <CardHeader className="text-center" data-id="w1nyg1wmc" data-path="src/components/AuthForm.tsx">
            <CardTitle className="text-2xl font-bold" data-id="csuk7jfbk" data-path="src/components/AuthForm.tsx">Reset Password</CardTitle>
            <CardDescription data-id="9zl2tdwrj" data-path="src/components/AuthForm.tsx">
              Enter your email address and we'll send you a link to reset your password.
            </CardDescription>
          </CardHeader>
          <form onSubmit={handleResetPassword} data-id="cn7c8ltfj" data-path="src/components/AuthForm.tsx">
            <CardContent className="space-y-4" data-id="71wt6n4bf" data-path="src/components/AuthForm.tsx">
              {errors.general &&
              <Alert className="border-red-200 bg-red-50" data-id="yhmog6rs0" data-path="src/components/AuthForm.tsx">
                  <AlertDescription className="text-red-800" data-id="1xmij55po" data-path="src/components/AuthForm.tsx">
                    {errors.general}
                  </AlertDescription>
                </Alert>
              }
              
              <div className="space-y-2" data-id="k578c8zgh" data-path="src/components/AuthForm.tsx">
                <Label htmlFor="resetEmail" data-id="snfqxshj6" data-path="src/components/AuthForm.tsx">Email</Label>
                <div className="relative" data-id="u522ko318" data-path="src/components/AuthForm.tsx">
                  <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" data-id="whtzdgo4u" data-path="src/components/AuthForm.tsx" />
                  <Input
                    id="resetEmail"
                    type="email"
                    placeholder="Enter your email"
                    value={resetEmail}
                    onChange={(e) => setResetEmail(e.target.value)}
                    className={`pl-10 ${errors.resetEmail ? 'border-red-300' : ''}`}
                    disabled={isLoading} data-id="9iow0exic" data-path="src/components/AuthForm.tsx" />

                </div>
                {errors.resetEmail &&
                <p className="text-sm text-red-600" data-id="rd1sr6xb0" data-path="src/components/AuthForm.tsx">{errors.resetEmail}</p>
                }
              </div>
            </CardContent>
            <CardFooter className="flex flex-col space-y-3" data-id="v7cxx2zhe" data-path="src/components/AuthForm.tsx">
              <Button type="submit" className="w-full" disabled={isLoading} data-id="x71pmi715" data-path="src/components/AuthForm.tsx">
                {isLoading ? 'Sending...' : 'Send Reset Email'}
              </Button>
              <Button
                type="button"
                variant="ghost"
                onClick={() => setShowResetForm(false)}
                className="w-full" data-id="fth1gsqgj" data-path="src/components/AuthForm.tsx">

                Back to Login
              </Button>
            </CardFooter>
          </form>
        </Card>
      </div>);

  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-purple-50 p-4" data-id="k7imncby2" data-path="src/components/AuthForm.tsx">
      <Card className="w-full max-w-md" data-id="lkyozn9cf" data-path="src/components/AuthForm.tsx">
        <CardHeader className="text-center" data-id="8bz74dibm" data-path="src/components/AuthForm.tsx">
          <CardTitle className="text-2xl font-bold" data-id="8w3u14qm5" data-path="src/components/AuthForm.tsx">Welcome</CardTitle>
          <CardDescription data-id="ms2m1w9zz" data-path="src/components/AuthForm.tsx">
            Sign in to your account or create a new one
          </CardDescription>
        </CardHeader>
        
        <Tabs value={activeTab} onValueChange={setActiveTab} className="px-6" data-id="jfv0mgmtf" data-path="src/components/AuthForm.tsx">
          <TabsList className="grid w-full grid-cols-2" data-id="b157lhz8g" data-path="src/components/AuthForm.tsx">
            <TabsTrigger value="login" data-id="m2kvxgy2m" data-path="src/components/AuthForm.tsx">Login</TabsTrigger>
            <TabsTrigger value="register" data-id="lxm221ihj" data-path="src/components/AuthForm.tsx">Sign Up</TabsTrigger>
          </TabsList>
          
          <TabsContent value="login" className="mt-6" data-id="mju7maepw" data-path="src/components/AuthForm.tsx">
            <form onSubmit={handleLogin} data-id="bwkhjdolc" data-path="src/components/AuthForm.tsx">
              <CardContent className="space-y-4 p-0" data-id="e6xtd7r44" data-path="src/components/AuthForm.tsx">
                {errors.general &&
                <Alert className="border-red-200 bg-red-50" data-id="mg7w4u9dr" data-path="src/components/AuthForm.tsx">
                    <AlertDescription className="text-red-800" data-id="lwhsftw1i" data-path="src/components/AuthForm.tsx">
                      {errors.general}
                    </AlertDescription>
                  </Alert>
                }
                
                <div className="space-y-2" data-id="mue58tce0" data-path="src/components/AuthForm.tsx">
                  <Label htmlFor="loginEmail" data-id="35foulb6g" data-path="src/components/AuthForm.tsx">Email</Label>
                  <div className="relative" data-id="rcqpx25yp" data-path="src/components/AuthForm.tsx">
                    <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" data-id="t7ww8eifa" data-path="src/components/AuthForm.tsx" />
                    <Input
                      id="loginEmail"
                      type="email"
                      placeholder="Enter your email"
                      value={loginData.email}
                      onChange={(e) => setLoginData((prev) => ({ ...prev, email: e.target.value }))}
                      className={`pl-10 ${errors.email ? 'border-red-300' : ''}`}
                      disabled={isLoading} data-id="c9vusamrk" data-path="src/components/AuthForm.tsx" />

                  </div>
                  {errors.email &&
                  <p className="text-sm text-red-600" data-id="2cymhwtr6" data-path="src/components/AuthForm.tsx">{errors.email}</p>
                  }
                </div>
                
                <div className="space-y-2" data-id="lj17nuskf" data-path="src/components/AuthForm.tsx">
                  <Label htmlFor="loginPassword" data-id="1zerad9iz" data-path="src/components/AuthForm.tsx">Password</Label>
                  <div className="relative" data-id="ewrxtgu95" data-path="src/components/AuthForm.tsx">
                    <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" data-id="tlc6dlir0" data-path="src/components/AuthForm.tsx" />
                    <Input
                      id="loginPassword"
                      type={showPassword ? 'text' : 'password'}
                      placeholder="Enter your password"
                      value={loginData.password}
                      onChange={(e) => setLoginData((prev) => ({ ...prev, password: e.target.value }))}
                      className={`pl-10 pr-10 ${errors.password ? 'border-red-300' : ''}`}
                      disabled={isLoading} data-id="5vrkghgn7" data-path="src/components/AuthForm.tsx" />

                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600" data-id="ygl80l9xd" data-path="src/components/AuthForm.tsx">

                      {showPassword ? <EyeOff className="h-4 w-4" data-id="l3p1xe3m5" data-path="src/components/AuthForm.tsx" /> : <Eye className="h-4 w-4" data-id="65mytxkbi" data-path="src/components/AuthForm.tsx" />}
                    </button>
                  </div>
                  {errors.password &&
                  <p className="text-sm text-red-600" data-id="0cs1tultl" data-path="src/components/AuthForm.tsx">{errors.password}</p>
                  }
                </div>
                
                <div className="text-right" data-id="0rh4zw7i2" data-path="src/components/AuthForm.tsx">
                  <button
                    type="button"
                    onClick={() => setShowResetForm(true)}
                    className="text-sm text-blue-600 hover:text-blue-800" data-id="xazsdy95p" data-path="src/components/AuthForm.tsx">

                    Forgot password?
                  </button>
                </div>
              </CardContent>
              
              <CardFooter className="flex flex-col space-y-3 p-0 pt-6" data-id="ksyp2s122" data-path="src/components/AuthForm.tsx">
                <Button type="submit" className="w-full" disabled={isLoading} data-id="ney0xda6g" data-path="src/components/AuthForm.tsx">
                  {isLoading ? 'Signing in...' : 'Sign In'}
                  <ArrowRight className="ml-2 h-4 w-4" data-id="6za2wncsj" data-path="src/components/AuthForm.tsx" />
                </Button>
              </CardFooter>
            </form>
          </TabsContent>
          
          <TabsContent value="register" className="mt-6" data-id="cepi4m5s1" data-path="src/components/AuthForm.tsx">
            <form onSubmit={handleRegister} data-id="k5n9h7ft6" data-path="src/components/AuthForm.tsx">
              <CardContent className="space-y-4 p-0" data-id="ewqyq94y3" data-path="src/components/AuthForm.tsx">
                {errors.general &&
                <Alert className="border-red-200 bg-red-50" data-id="2l4wxlq97" data-path="src/components/AuthForm.tsx">
                    <AlertDescription className="text-red-800" data-id="rtl4lgovb" data-path="src/components/AuthForm.tsx">
                      {errors.general}
                    </AlertDescription>
                  </Alert>
                }
                
                <div className="space-y-2" data-id="gqphpyk14" data-path="src/components/AuthForm.tsx">
                  <Label htmlFor="registerEmail" data-id="pry8ezxdw" data-path="src/components/AuthForm.tsx">Email</Label>
                  <div className="relative" data-id="q4m1m4pz5" data-path="src/components/AuthForm.tsx">
                    <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" data-id="v0u6vn24n" data-path="src/components/AuthForm.tsx" />
                    <Input
                      id="registerEmail"
                      type="email"
                      placeholder="Enter your email"
                      value={registerData.email}
                      onChange={(e) => setRegisterData((prev) => ({ ...prev, email: e.target.value }))}
                      className={`pl-10 ${errors.email ? 'border-red-300' : ''}`}
                      disabled={isLoading} data-id="plaunlij3" data-path="src/components/AuthForm.tsx" />

                  </div>
                  {errors.email &&
                  <p className="text-sm text-red-600" data-id="gf4dokhxz" data-path="src/components/AuthForm.tsx">{errors.email}</p>
                  }
                </div>
                
                <div className="space-y-2" data-id="ovlxmjvrb" data-path="src/components/AuthForm.tsx">
                  <Label htmlFor="registerPassword" data-id="raw8lr250" data-path="src/components/AuthForm.tsx">Password</Label>
                  <div className="relative" data-id="qxnmy6g53" data-path="src/components/AuthForm.tsx">
                    <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" data-id="50my46qmk" data-path="src/components/AuthForm.tsx" />
                    <Input
                      id="registerPassword"
                      type={showPassword ? 'text' : 'password'}
                      placeholder="Create a password"
                      value={registerData.password}
                      onChange={(e) => setRegisterData((prev) => ({ ...prev, password: e.target.value }))}
                      className={`pl-10 pr-10 ${errors.password ? 'border-red-300' : ''}`}
                      disabled={isLoading} data-id="mofefyzwl" data-path="src/components/AuthForm.tsx" />

                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600" data-id="nfa49y7dh" data-path="src/components/AuthForm.tsx">

                      {showPassword ? <EyeOff className="h-4 w-4" data-id="xhydk7drk" data-path="src/components/AuthForm.tsx" /> : <Eye className="h-4 w-4" data-id="nlu6f44ge" data-path="src/components/AuthForm.tsx" />}
                    </button>
                  </div>
                  {errors.password &&
                  <p className="text-sm text-red-600" data-id="mmz0un0dl" data-path="src/components/AuthForm.tsx">{errors.password}</p>
                  }
                </div>
                
                <div className="space-y-2" data-id="yc0rbes21" data-path="src/components/AuthForm.tsx">
                  <Label htmlFor="confirmPassword" data-id="xmcgcdhm7" data-path="src/components/AuthForm.tsx">Confirm Password</Label>
                  <div className="relative" data-id="88rjez9y3" data-path="src/components/AuthForm.tsx">
                    <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" data-id="gaop3sx8h" data-path="src/components/AuthForm.tsx" />
                    <Input
                      id="confirmPassword"
                      type={showConfirmPassword ? 'text' : 'password'}
                      placeholder="Confirm your password"
                      value={registerData.confirmPassword}
                      onChange={(e) => setRegisterData((prev) => ({ ...prev, confirmPassword: e.target.value }))}
                      className={`pl-10 pr-10 ${errors.confirmPassword ? 'border-red-300' : ''}`}
                      disabled={isLoading} data-id="hoht0ufwn" data-path="src/components/AuthForm.tsx" />

                    <button
                      type="button"
                      onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                      className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600" data-id="aiky1cf7s" data-path="src/components/AuthForm.tsx">

                      {showConfirmPassword ? <EyeOff className="h-4 w-4" data-id="7tu2kfa4m" data-path="src/components/AuthForm.tsx" /> : <Eye className="h-4 w-4" data-id="8mwii7svz" data-path="src/components/AuthForm.tsx" />}
                    </button>
                  </div>
                  {errors.confirmPassword &&
                  <p className="text-sm text-red-600" data-id="g8d9vsxg4" data-path="src/components/AuthForm.tsx">{errors.confirmPassword}</p>
                  }
                </div>
              </CardContent>
              
              <CardFooter className="flex flex-col space-y-3 p-0 pt-6" data-id="faw8hisf9" data-path="src/components/AuthForm.tsx">
                <Button type="submit" className="w-full" disabled={isLoading} data-id="zs5zbprmp" data-path="src/components/AuthForm.tsx">
                  {isLoading ? 'Creating Account...' : 'Create Account'}
                  <User className="ml-2 h-4 w-4" data-id="i4crzaafa" data-path="src/components/AuthForm.tsx" />
                </Button>
              </CardFooter>
            </form>
          </TabsContent>
        </Tabs>
        
        <CardFooter className="text-center text-sm text-gray-600" data-id="m7ezi94q8" data-path="src/components/AuthForm.tsx">
          <Link to="/" className="text-blue-600 hover:text-blue-800" data-id="avymek1y0" data-path="src/components/AuthForm.tsx">
            ← Back to Home
          </Link>
        </CardFooter>
      </Card>
    </div>);

};

export default AuthForm;