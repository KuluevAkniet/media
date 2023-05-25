import { Controller, Post, Body, Get, Param } from '@nestjs/common';
import { CreateUserDto } from './dto/user.dto';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
    constructor(private readonly userService:UserService){}
    @Post('create')
    async  CreateUsers(@Body() dto:CreateUserDto){ 
        return await this.userService.CreateUser(dto)
    }


    @Post('subscribe')
     async subscribeByEmail(@Body('email') email: string): Promise<void> {
        return await this.userService.subscribeByEmail(email);
    }

 
    @Get('')
     async  UserByEmail(@Param('email') email:string){
         return await this.userService.UserByEmail(email)
    }
}
