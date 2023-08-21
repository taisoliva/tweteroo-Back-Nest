import { IsNotEmpty, IsString, IsUrl } from "class-validator";

export class UserDTO {

    @IsString()
    username: string

    @IsUrl()
    @IsNotEmpty({
        message:"All fields are required!"
    })
    avatar:string
}