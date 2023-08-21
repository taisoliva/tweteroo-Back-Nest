import { IsString } from "class-validator";

export class TweetDTO{

    @IsString()
    username: string
    tweet:string
}