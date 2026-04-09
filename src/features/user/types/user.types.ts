// src/features/user/types/user.types.ts
export interface UserProfile {
  id: string;
  name: string;
  email: string;
  phone?: string;
  avatar?: string;
  bio?: string;
  address?: string;
  createdAt: string;
}

export interface UpdateProfileRequest {
  name?: string;
  phone?: string;
  bio?: string;
  address?: string;
}
