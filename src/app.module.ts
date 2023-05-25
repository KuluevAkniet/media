import { Module } from '@nestjs/common';
import { UserModule } from './user/user.module';
import { PostsModule } from './posts/posts.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import {  User } from './user/entities';
import { Posts } from './posts/entities';
import { SubcribesModule } from './subcribes/subcribes.module';
import { Subscriber } from './subcribes/entities';



@Module({
  imports: [UserModule, PostsModule, TypeOrmModule.forRoot({
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'postgres',
    password: 'postgres',
    database: 'media',
    entities: [User,Posts, Subscriber],
    synchronize: true,
  }), SubcribesModule,],
  controllers: [],
  providers: [],
})
export class AppModule {}
