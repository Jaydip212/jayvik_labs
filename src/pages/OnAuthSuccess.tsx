import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { CheckCircle, ArrowRight } from 'lucide-react';

const OnAuthSuccess: React.FC = () => {
  const [countdown, setCountdown] = useState(5);
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setInterval(() => {
      setCountdown((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          navigate('/auth');
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [navigate]);

  const handleGoToLogin = () => {
    navigate('/auth');
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-green-50 via-white to-blue-50 p-4" data-id="2wb45jai0" data-path="src/pages/OnAuthSuccess.tsx">
      <Card className="w-full max-w-md text-center" data-id="ne4hnoblr" data-path="src/pages/OnAuthSuccess.tsx">
        <CardHeader data-id="syn05k51w" data-path="src/pages/OnAuthSuccess.tsx">
          <div className="flex justify-center mb-4" data-id="m28srgmdl" data-path="src/pages/OnAuthSuccess.tsx">
            <CheckCircle className="h-16 w-16 text-green-500" data-id="l9e3js4o6" data-path="src/pages/OnAuthSuccess.tsx" />
          </div>
          <CardTitle className="text-2xl font-bold text-green-700" data-id="2nmo05hca" data-path="src/pages/OnAuthSuccess.tsx">
            Registration Successful!
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4" data-id="6uo6pitli" data-path="src/pages/OnAuthSuccess.tsx">
          <p className="text-gray-600" data-id="6jmru9rep" data-path="src/pages/OnAuthSuccess.tsx">
            Your account has been successfully verified. You can now sign in to access your account.
          </p>
          
          <div className="bg-blue-50 p-4 rounded-lg" data-id="2tx6l8d73" data-path="src/pages/OnAuthSuccess.tsx">
            <p className="text-sm text-blue-800" data-id="niifakc5a" data-path="src/pages/OnAuthSuccess.tsx">
              You will be redirected to the login page in{' '}
              <span className="font-bold text-blue-900" data-id="f142xinkq" data-path="src/pages/OnAuthSuccess.tsx">{countdown}</span> seconds.
            </p>
          </div>
          
          <Button
            onClick={handleGoToLogin}
            className="w-full" data-id="5kxevvm2z" data-path="src/pages/OnAuthSuccess.tsx">

            Go to Login Now
            <ArrowRight className="ml-2 h-4 w-4" data-id="ncsym0mxc" data-path="src/pages/OnAuthSuccess.tsx" />
          </Button>
        </CardContent>
      </Card>
    </div>);

};

export default OnAuthSuccess;