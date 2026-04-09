// src/features/auth/components/RegisterForm.tsx
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../../../components/ui/button';
import { Input } from '../../../components/ui/input';
import { Label } from '../../../components/ui/label';
import { useRegister } from '../lib/useAuth';
import { AUTH_LABELS } from '../constants/auth.constants';
import { ROUTE_PATHS } from '../../../core/constants/routes';
import { Loader2, Mail, Lock, User } from 'lucide-react';

export const RegisterForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const registerMutation = useRegister();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    registerMutation.mutate({ name, email, password });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="space-y-2">
        <Label htmlFor="name">{AUTH_LABELS.NAME_PLACEHOLDER}</Label>
        <div className="relative">
          <User className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <Input
            id="name"
            type="text"
            placeholder={AUTH_LABELS.NAME_PLACEHOLDER}
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="pl-10"
            required
          />
        </div>
      </div>
      <div className="space-y-2">
        <Label htmlFor="reg-email">{AUTH_LABELS.EMAIL_PLACEHOLDER}</Label>
        <div className="relative">
          <Mail className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <Input
            id="reg-email"
            type="email"
            placeholder={AUTH_LABELS.EMAIL_PLACEHOLDER}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="pl-10"
            required
          />
        </div>
      </div>
      <div className="space-y-2">
        <Label htmlFor="reg-password">{AUTH_LABELS.PASSWORD_PLACEHOLDER}</Label>
        <div className="relative">
          <Lock className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <Input
            id="reg-password"
            type="password"
            placeholder={AUTH_LABELS.PASSWORD_PLACEHOLDER}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="pl-10"
            required
          />
        </div>
      </div>
      <Button type="submit" className="w-full" disabled={registerMutation.isPending}>
        {registerMutation.isPending ? (
          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
        ) : null}
        {AUTH_LABELS.REGISTER_BUTTON}
      </Button>
      <p className="text-center text-sm text-muted-foreground">
        {AUTH_LABELS.HAS_ACCOUNT}{' '}
        <Link to={ROUTE_PATHS.LOGIN} className="text-primary font-medium hover:underline">
          {AUTH_LABELS.LOGIN_BUTTON}
        </Link>
      </p>
    </form>
  );
};
