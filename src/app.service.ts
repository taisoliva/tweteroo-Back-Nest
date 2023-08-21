import { Injectable } from '@nestjs/common';
import { User } from './entities/user.entity';
import { UserDTO } from './dtos/user.dtos';

@Injectable()
export class AppService {

  private users: User[]

  constructor(){
    this.users = []
  }
  
  signUP(body: UserDTO){
    const user = new User(body.username, body.avatar)
    return this.users.push(user)
  }
}
