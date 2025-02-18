import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DynastyModule } from './dynasty/dynasty.module';
import { PrismaModule } from './prisma/prisma.module';

@Module({
  imports: [PrismaModule, DynastyModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
