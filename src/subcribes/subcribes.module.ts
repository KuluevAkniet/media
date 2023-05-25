import { Module } from '@nestjs/common';
import { SubcribesController } from './subcribes.controller';
import { SubcribesService } from './subcribes.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Subscriber } from './entities';


@Module({
  imports:[TypeOrmModule.forFeature([Subscriber])],
  controllers: [SubcribesController],
  providers: [SubcribesService]
})
export class SubcribesModule {}
