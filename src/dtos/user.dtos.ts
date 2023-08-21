import { IsString, IsUrl } from "class-validator";
import { User } from "src/entities/user.entity";

export class UserDTO {

    @IsString()
    username: string

    @IsUrl()
    avatar:string
}