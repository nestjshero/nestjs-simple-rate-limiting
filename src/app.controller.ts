import { Controller, Get, UseGuards } from '@nestjs/common';
import { ThrottlerGuard } from '@nestjs/throttler';

@Controller()
@UseGuards(ThrottlerGuard)
export class AppController {
  
  @Get('greet')
  greet() {
    return { message: 'Hello! This is a rate-limited greeting.' };
  }
}