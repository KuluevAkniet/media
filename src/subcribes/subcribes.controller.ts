import { Controller, Post, Body } from '@nestjs/common';
import { SubcribesService } from './subcribes.service';
import { SubscriptionDto } from './dto/subscribes.dto';

@Controller('subcribes')
export class SubcribesController {
    constructor(private readonly subs:SubcribesService){}

    @Post('subscribe')
    async subscribeByEmail(@Body() subsDto: SubscriptionDto) {
        return await this.subs.subscribeByEmail(subsDto)
    }

  }
