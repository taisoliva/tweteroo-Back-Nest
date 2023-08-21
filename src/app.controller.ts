import { Body, Controller, Get, HttpCode, HttpException, HttpStatus, Param, ParseIntPipe, Post, Query } from '@nestjs/common';
import { AppService } from './app.service';
import { UserDTO } from './dtos/user.dtos';
import { TweetDTO } from './dtos/tweet.dtos';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) { }

  @Post("/sign-up")
  @HttpCode(200)
  signUP(@Body() body: UserDTO) {
    return this.appService.signUP(body)
  }

  @Get("/")
  getHealth():string {
    return this.appService.getHealth();
  }
  

  @Post("/tweets")
  postTweet(@Body() body: TweetDTO){

    try {
      return this.appService.postTweet(body)
    } catch (error) {
      throw new HttpException('UNAUTHORIZED', HttpStatus.UNAUTHORIZED)
    }
  }

  @Get("/tweets")
  getTweets(@Query('page') page:string){
    try {
      return this.appService.getTweets(page)
    } catch (error) { 
      throw new HttpException('Informe uma página válida!', HttpStatus.BAD_REQUEST)
    }
  }

  @Get("/tweets/:username")
  getTweetsByUser(@Param('username') username:string){
   return this.appService.getTweetsByUser(username)
  }

  }
