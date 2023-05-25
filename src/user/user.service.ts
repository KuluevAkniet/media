import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './entities';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/user.dto';
import { MailerService } from '@nestjs-modules/mailer';
import axios from 'axios';



@Injectable()
export class UserService {
    constructor(@InjectRepository(User) private readonly userRepo: Repository<User>,){}

    async CreateUser(dto:CreateUserDto){
           return await this.userRepo.save(dto)
    } 

    
    async  UserByEmail(email:string){
        return await this.userRepo.findOne({where:{email:email}})
    }

    async subscribeByEmail(email: string): Promise<void> {
        // Perform your subscription logic here, such as saving the email to a database, sending confirmation emails, etc.
    }

}
