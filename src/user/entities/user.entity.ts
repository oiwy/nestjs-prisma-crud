import { Post } from '@prisma/client';

export class User {
  id: number;
  createdAt: Date | string;
  updatedAt: Date | string;
  name: string;
  email: string;
  password: string;
  posts: Post[];
}
