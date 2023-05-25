import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Posts } from './entities';
import { Repository, Between } from 'typeorm';
import { CreatePostsDto } from './dto/posts.dto';




@Injectable()
export class PostsService {
    constructor(@InjectRepository(Posts) private readonly postRepo: Repository<Posts>){}


    async CreateUser(dto:CreatePostsDto){
        return await this.postRepo.save(dto)
    } 

    

    async getPosts(page: number, limit: number): Promise<Posts[]> {
        const skip = (page - 1) * limit;
    
        return await this.postRepo
        .createQueryBuilder('post')
        .orderBy('post.id', 'DESC')
        .skip(skip)
        .take(limit)
        .getMany();
    
    }


    async getPostsByDate(date: string) {
    const startDate = new Date(date);
    startDate.setHours(0, 0, 0, 0);

    const endDate = new Date(date);
    endDate.setHours(23, 59, 59, 999);

    return  await this.postRepo.find({
      where: {
        createdAt: Between(startDate, endDate),
      },
    });
  }


    
}
