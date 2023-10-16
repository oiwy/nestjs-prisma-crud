import { Module } from '@nestjs/common';
import { UserModule } from './user/user.module';
import { PrismaModule } from './prisma/prisma.module';
import { PostModule } from './post/post.module';

@Module({
  imports: [UserModule, PrismaModule, PostModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
