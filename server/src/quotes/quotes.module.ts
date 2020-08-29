import { Module } from '@nestjs/common';
import { QuotesController } from './quotes.controller';
import { QuotesService } from './quotes.service';
import { QuoteSchema } from './schemas/quotes.schema';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
    imports: [
        MongooseModule.forFeature([{ name: 'Quote', schema: QuoteSchema }]),
    ],
    controllers: [QuotesController],
    providers: [QuotesService],
})
export class QuotesModule {}
