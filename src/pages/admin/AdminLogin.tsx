import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { authService } from '@/lib/authService';
import { useAuthStore } from '@/stores/authStore';
import { toast } from 'sonner';
import { GraduationCap } from 'lucide-react';
import { Link } from 'react-router-dom';

export function AdminLogin() {
  const [step, setStep] = useState<'email' | 'otp' | 'password'>('email');
  const [email, setEmail] = useState('');
  const [otp, setOtp] = useState('');
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');
  const [isLogin, setIsLogin] = useState(true);
  const [loading, setLoading] = useState(false);
  const { login } = useAuthStore();
  const navigate = useNavigate();

  const handleSendOtp = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      await authService.sendOtp(email);
      setStep('otp');
      toast.success('OTP sent to your email');
      setLoading(false);
    } catch (error: any) {
      toast.error(error.message);
      setLoading(false);
    }
  };

  const handleVerifyOtp = async (e: React.FormEvent) => {
    e.preventDefault();
    if (isLogin) {
      setStep('password');
      setLoading(false);
    } else {
      setStep('password');
      setLoading(false);
    }
  };

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      const user = await authService.signInWithPassword(email, password);
      login(authService.mapUser(user!));
      navigate('/admin');
    } catch (error: any) {
      toast.error(error.message);
      setLoading(false);
    }
  };

  const handleSignup = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      const user = await authService.verifyOtpAndSetPassword(email, otp, password, username);
      login(authService.mapUser(user!));
      navigate('/admin');
    } catch (error: any) {
      toast.error(error.message);
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center py-12 px-4">
      <div className="w-full max-w-md">
        <Link to="/" className="flex items-center justify-center space-x-3 mb-8">
          <div className="bg-primary-900 p-2 rounded-lg">
            <GraduationCap className="h-8 w-8 text-accent-500" />
          </div>
          <div className="flex flex-col">
            <span className="font-serif font-bold text-xl text-primary-900">Excellence</span>
            <span className="text-xs text-muted-foreground -mt-1">High School</span>
          </div>
        </Link>

        <Card className="shadow-lg">
          <CardHeader>
            <CardTitle className="text-2xl text-center font-serif">Admin Access</CardTitle>
          </CardHeader>
          <CardContent>
            {step === 'email' && (
              <form onSubmit={handleSendOtp} className="space-y-4">
                <div>
                  <Label htmlFor="email">Email Address</Label>
                  <Input
                    id="email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    placeholder="admin@excellencehighschool.ac.ug"
                  />
                </div>
                <Button type="submit" className="w-full" disabled={loading}>
                  {loading ? 'Sending...' : 'Continue'}
                </Button>
                <p className="text-sm text-center text-gray-600">
                  {isLogin ? "Don't have an account? " : 'Already have an account? '}
                  <button
                    type="button"
                    onClick={() => setIsLogin(!isLogin)}
                    className="text-primary-900 font-medium hover:underline"
                  >
                    {isLogin ? 'Sign up' : 'Login'}
                  </button>
                </p>
              </form>
            )}

            {step === 'otp' && !isLogin && (
              <form onSubmit={handleVerifyOtp} className="space-y-4">
                <div>
                  <Label htmlFor="otp">Enter OTP</Label>
                  <Input
                    id="otp"
                    type="text"
                    value={otp}
                    onChange={(e) => setOtp(e.target.value)}
                    required
                    placeholder="Enter 4-digit code"
                    maxLength={4}
                  />
                  <p className="text-sm text-gray-600 mt-1">Check your email for the code</p>
                </div>
                <Button type="submit" className="w-full" disabled={loading}>
                  Verify OTP
                </Button>
              </form>
            )}

            {step === 'password' && (
              <form onSubmit={isLogin ? handleLogin : handleSignup} className="space-y-4">
                {!isLogin && (
                  <div>
                    <Label htmlFor="username">Username</Label>
                    <Input
                      id="username"
                      type="text"
                      value={username}
                      onChange={(e) => setUsername(e.target.value)}
                      required
                      placeholder="Choose a username"
                    />
                  </div>
                )}
                <div>
                  <Label htmlFor="password">Password</Label>
                  <Input
                    id="password"
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    placeholder={isLogin ? 'Enter your password' : 'Create a password'}
                  />
                </div>
                <Button type="submit" className="w-full" disabled={loading}>
                  {loading ? 'Processing...' : isLogin ? 'Login' : 'Complete Registration'}
                </Button>
              </form>
            )}

            <div className="mt-6 text-center">
              <Link to="/" className="text-sm text-primary-900 hover:underline">
                Back to Home
              </Link>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
