import { User } from "./user.entity";

export class Tweet {

    private user : User
    private tweet: string

    constructor(user:User, tweet: string){
        user = this.user
        tweet = this.tweet
    }
}