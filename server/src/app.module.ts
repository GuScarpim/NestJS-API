import { Module, NestModule, MiddlewareConsumer } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { QuotesModule } from './quotes/quotes.module';
import { LoggerMiddleware } from './shared/middlwares/logger.middleware';

// mongodb://localhost/quotes
// imports: [MongooseModule.forRoot('mongodb+srv://scarpim:12345@cluster0-yhxii.mongodb.net/test?authSource=admin&replicaSet=Cluster0-shard-0&w=majority&readPreference=primary&appname=MongoDB%20Compass%20Community&retryWrites=true&ssl=true')],
@Module({
  imports: [
    MongooseModule.forRoot(process.env.MONGO_URI, { 
      useNewUrlParser: true,
    }),
    QuotesModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
// Implementando o meu middleware
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer){ //configurando middleware
    consumer.apply(LoggerMiddleware).forRoutes('quotes'); //consumindo os loggs do meu middleware para todas as rotas 'quotes'
  }
}
