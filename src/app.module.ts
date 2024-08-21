import { Module } from '@nestjs/common';
import { ThrottlerModule } from '@nestjs/throttler';
import { AppController } from './app.controller';

@Module({
  imports: [
    ThrottlerModule.forRoot([{
      ttl: 60000, // 1 minute
      limit: 5, // 5 requests per minute
    }]),
  ],
  controllers: [AppController],
})
export class AppModule {}