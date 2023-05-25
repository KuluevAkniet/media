import { IsNotEmpty, IsNumber, IsString } from "class-validator";

export class CreateUserDto {
    
    @IsNotEmpty()
    @IsNumber({},{message:'should be a number'})
    id:number;

    @IsNotEmpty()
    @IsString({message:'should be a string'})
    firstName:string;

    @IsNotEmpty()
    @IsString({message:'should be a string'})
    lastName:string;

    @IsNotEmpty()
    @IsString({message:'should be a string'})
    email:string;
    
    @IsNotEmpty()
    @IsString({message:'should be a string'})
    targetEmail: string;

}