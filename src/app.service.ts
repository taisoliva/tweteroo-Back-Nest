import { Injectable } from '@nestjs/common';
import { User } from './entities/user.entity';
import { UserDTO } from './dtos/user.dtos';
import { Tweet } from './entities/tweet.entity';
import { TweetDTO } from './dtos/tweet.dtos';

@Injectable()
export class AppService {

  private users: User[]
  private tweets: Tweet[]

  constructor(){
    this.users = []
    this.tweets = []
  }

  
  signUP(body: UserDTO){
    const user = new User(body.username, body.avatar)
    return this.users.push(user)
  }

  getHealth() :string {
    return "I'm okay!"
  }

  findUserByUsername(username: string): User | undefined {
    return this.users.find(user => user.getUsername() === username);
  }

  postTweet(body: TweetDTO){
    const checkUsername = this.findUserByUsername(body.username)
    if(checkUsername === undefined){
      throw new Error('UNAUTHORIZED')
    }

    const tweet = new Tweet(checkUsername, body.tweet)
    return this.tweets.push(tweet)
    
  }
}
