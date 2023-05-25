import { Controller, Post, Body, Query, Get, Param } from '@nestjs/common';
import { PostsService } from './posts.service';
import { CreatePostsDto } from './dto/posts.dto';



@Controller('posts')
export class PostsController {
     constructor(private readonly postsService:PostsService){}

    @Post('create')
    async  CreateUsers(@Body() dto:CreatePostsDto){ 
        return await this.postsService.CreateUser(dto)
    }


    @Get('pages')
    async getPosts(@Query('page') page: number = 1, @Query('limit') limit: number = 20,){
        const posts = await this.postsService.getPosts(page, limit);
        return posts;
      }


   
    @Get()
    async getPostsByDate(@Query('date') date: string) {
        return await this.postsService.getPostsByDate(date);
    }
  
}
