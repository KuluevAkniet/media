import { IsEmail, IsNumber } from 'class-validator';

export class SubscriptionDto {

  @IsNumber()
   id:number;

  @IsEmail()
  email: string;
}
