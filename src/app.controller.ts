import { Body, Controller, Get, HttpCode, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { UserDTO } from './dtos/user.dtos';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) { }

  @Post("/sign-up")
  @HttpCode(200)
  signUP(@Body() body: UserDTO) {
    return this.appService.signUP(body)
  }

  }
