import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // リクエストのバリデーションを有効化する
  app.useGlobalPipes(new ValidationPipe());
  await app.listen(3000);
  app.enableCors();
}
bootstrap();
