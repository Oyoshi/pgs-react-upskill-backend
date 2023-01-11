import { NestFactory } from '@nestjs/core';
import { NestExpressApplication } from '@nestjs/platform-express';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  console.log('dupa', process.env.API_PORT);
  await app.listen(Number(process.env.API_PORT));
}
bootstrap();
