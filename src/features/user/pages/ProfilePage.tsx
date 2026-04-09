// src/features/user/pages/ProfilePage.tsx
import { Card, CardContent, CardHeader, CardTitle } from '../../../components/ui/card';
import { Button } from '../../../components/ui/button';
import { Input } from '../../../components/ui/input';
import { Label } from '../../../components/ui/label';
import { Textarea } from '../../../components/ui/textarea';
import { USER_LABELS } from '../constants/user.constants';
import { useAuthStore } from '../../../store/auth.store';
import { User, Mail, Phone, MapPin } from 'lucide-react';

const ProfilePage = () => {
  const { user } = useAuthStore();

  return (
    <div className="container mx-auto max-w-2xl py-8 px-4 animate-fade-in">
      <h1 className="text-3xl font-bold font-display text-foreground mb-8">
        {USER_LABELS.PROFILE_TITLE}
      </h1>
      <Card className="shadow-elevated">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <User className="h-5 w-5 text-primary" />
            {USER_LABELS.EDIT_PROFILE}
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="space-y-2">
            <Label>{USER_LABELS.NAME_LABEL}</Label>
            <Input defaultValue={user?.name || ''} placeholder={USER_LABELS.NAME_LABEL} />
          </div>
          <div className="space-y-2">
            <Label className="flex items-center gap-1">
              <Mail className="h-3.5 w-3.5" /> {USER_LABELS.EMAIL_LABEL}
            </Label>
            <Input defaultValue={user?.email || ''} disabled className="bg-muted" />
          </div>
          <div className="space-y-2">
            <Label className="flex items-center gap-1">
              <Phone className="h-3.5 w-3.5" /> {USER_LABELS.PHONE_LABEL}
            </Label>
            <Input placeholder={USER_LABELS.PHONE_LABEL} />
          </div>
          <div className="space-y-2">
            <Label className="flex items-center gap-1">
              <MapPin className="h-3.5 w-3.5" /> {USER_LABELS.ADDRESS_LABEL}
            </Label>
            <Input placeholder={USER_LABELS.ADDRESS_LABEL} />
          </div>
          <div className="space-y-2">
            <Label>{USER_LABELS.BIO_LABEL}</Label>
            <Textarea placeholder="Tell us about yourself..." rows={3} />
          </div>
          <Button className="w-full">{USER_LABELS.SAVE_CHANGES}</Button>
        </CardContent>
      </Card>
    </div>
  );
};

export default ProfilePage;
