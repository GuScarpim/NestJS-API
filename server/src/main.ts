import 'dotenv/config';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.enableCors();
  
  const options = new DocumentBuilder()
  .setTitle('Api v1')
  .setDescription('Quotes API description')
  .setVersion('0.1')
  .addTag('quotes')
  .build();

  const document = SwaggerModule.createDocument(app, options);

  SwaggerModule.setup('api', app, document);
  await app.listen(3000);
}
bootstrap();
