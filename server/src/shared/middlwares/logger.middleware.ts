import { Injectable, NestMiddleware, Logger } from '@nestjs/common';

//Middleware
@Injectable()
export class LoggerMiddleware implements NestMiddleware {
  use(req: any, res: any, next: () => void) {
    Logger.log('New Quotes API request' + req.baseUrl + req.url); //baseUrl = 'quotes'
    next();
  }
}
