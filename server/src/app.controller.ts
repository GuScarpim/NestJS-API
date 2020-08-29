import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

// Minhas rotas
@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
// rota = /quotes
  // @Get('quotes')
  // getQuotes(): { message: string } {
  //   return { message: 'Quotes' };
  // }
}
