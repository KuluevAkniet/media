import { IsDate, IsString, IsNumber, IsNotEmpty } from "class-validator";

export class CreatePostsDto {
    
    @IsNotEmpty()
    @IsNumber({},{message:'should be a number'})
    id:number;
    
    @IsNotEmpty()
    @IsString({message:'should be a string'})
    content:string;

    @IsNotEmpty()
    @IsDate({message:'should be a date'})
    date:Date;
}