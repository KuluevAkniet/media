import { User } from "src/user/entities";
import { Column,  Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Posts {
      @PrimaryGeneratedColumn()
      id:number;


      @Column()
      content:string;

      
      @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
      createdAt: Date;
      

      @ManyToOne(() => User, (user) => user.id)
      user: User

}