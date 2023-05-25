import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Subscriber } from './entities';
import { Repository } from 'typeorm';
import { SubscriptionDto } from './dto/subscribes.dto';

@Injectable()
export class SubcribesService {
    constructor(@InjectRepository(Subscriber)  private readonly subs:Repository<Subscriber>){}

    async subscribeByEmail(dto:SubscriptionDto): Promise<Subscriber> { 
        return await this.subs.save(dto)
     }
}
