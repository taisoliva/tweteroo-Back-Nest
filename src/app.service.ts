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

  AllTweets(){
    const tweets = this.tweets.map(item => ({
      username: item.getUser().getUsername(),
      avatar: item.getUser().getAvatar(),
      tweet: item.getTweet()
    }))

    return tweets
  }

  getTweets(page:string){

    if(page !== undefined && isNaN(parseInt(page)) || parseInt(page)<1){
      throw new Error('Bad Request')
    }

    const tweets = this.AllTweets()

    if(page === undefined){
      return tweets.slice(-15)
    }

    const limit = 15
    const start = (parseInt(page) - 1) * limit
    const end = (parseInt(page)) * limit

    return tweets.slice(start,end)
  }

  getTweetsByUser(username: string){
    const tweets = this.AllTweets()

    const tweetsUser = tweets.filter(item => item.username === username)

    return tweetsUser
  }
}
