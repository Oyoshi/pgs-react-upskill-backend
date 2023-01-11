import { NestFactory } from '@nestjs/core';
import { NestExpressApplication } from '@nestjs/platform-express';
import { AppDataSource } from './appDataSource';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  await app.listen(Number(process.env.API_PORT));
}

AppDataSource.initialize()
  .then(() => {})
  .catch((error) => console.log(error));
bootstrap();
