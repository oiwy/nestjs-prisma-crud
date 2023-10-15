import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { PrismaModule } from './prisma/prisma.module';
import { PostModule } from './post/post.module';

@Module({
  imports: [UsersModule, PrismaModule, PostModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
