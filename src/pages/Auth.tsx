
import { useState } from 'react';
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { Github, Mail } from "lucide-react";

const Auth = () => {
  const [loading, setLoading] = useState(false);
  const { toast } = useToast();

  const handleOAuthLogin = async (provider: 'google' | 'github') => {
    try {
      setLoading(true);
      const { error } = await supabase.auth.signInWithOAuth({
        provider,
        options: {
          redirectTo: `${window.location.origin}/`,
        },
      });
      if (error) throw error;
    } catch (error) {
      const message = error instanceof Error ? error.message : 'Authentication failed. Please try again.';
      toast({ title: 'Sign in failed', description: message, variant: 'destructive' });
    } finally {
      setLoading(false);
    }
  };

  const handleGoogleLogin = () => handleOAuthLogin('google');
  const handleGithubLogin = () => handleOAuthLogin('github');

  return (
    <div className="min-h-screen flex items-center justify-center bg-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-grid opacity-10" />
      <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-background to-background" />
      
      <div className="relative w-full max-w-md p-8">
        <div className="backdrop-blur-xl bg-background/30 rounded-3xl border border-primary/10 shadow-2xl p-8 space-y-8">
          <div className="text-center space-y-2">
            <h2 className="text-4xl font-bold tracking-tight bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
              Welcome back
            </h2>
            <p className="text-sm text-muted-foreground">
              Sign in to your account to continue
            </p>
          </div>

          <div className="space-y-4">
            <Button
              variant="outline"
              size="lg"
              className="w-full relative overflow-hidden group transition-all hover:border-primary/50"
              onClick={handleGoogleLogin}
              disabled={loading}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <Mail className="mr-2 h-5 w-5" />
              <span className="text-base">Continue with Google</span>
            </Button>

            <Button
              variant="outline"
              size="lg"
              className="w-full relative overflow-hidden group transition-all hover:border-primary/50"
              onClick={handleGithubLogin}
              disabled={loading}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <Github className="mr-2 h-5 w-5" />
              <span className="text-base">Continue with GitHub</span>
            </Button>
          </div>

          <div className="pt-4 text-center">
            <p className="text-sm text-muted-foreground">
              By continuing, you agree to our{' '}
              <a href="#" className="text-primary hover:underline">Terms of Service</a>
              {' '}and{' '}
              <a href="#" className="text-primary hover:underline">Privacy Policy</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Auth;
