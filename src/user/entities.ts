import { subscribe } from "diagnostics_channel";
import { Posts } from "src/posts/entities";
import { Subscriber } from "src/subcribes/entities";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";


@Entity()
export class User {
      @PrimaryGeneratedColumn()
      id:number;


      @Column()
      firstName:string;


      @Column()
      lastName:string;


      @Column()
      email:string;

     @OneToMany(() => Posts, (posts) => posts.id)
      posts:Posts[]

      @OneToMany(() => Subscriber, (subscriber) => subscriber.id)
      subscriber:Subscriber[]

}
