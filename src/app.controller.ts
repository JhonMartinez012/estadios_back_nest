import { Controller, Get, Request, Post, UseGuards, Body } from '@nestjs/common';
// import { AppService } from './app.service';
import { AuthGuard } from '@nestjs/passport';
import { LocalAuthGuard } from './auth/local-auth.guard';

@Controller()
export class AppController {
  // constructor(private readonly appService: AppService) {}

  // @Get()
  // getHello(): string {
  //   return this.appService.getHello();
  // }
  @UseGuards(LocalAuthGuard)
  @Post('login')
  async login(@Body() req){
    return req.user;
  }
}
