import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';
import { NestExpressApplication } from '@nestjs/platform-express';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { postgresDataSource } from './appDataSource';
import { AppModule } from './app.module';

const PORT = Number(process.env.API_PORT) || 4000;
const SEED_N = Number(process.env.SEED_N) || 0;

async function bootstrap(): Promise<void> {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);

  app.enableCors();
  app.useGlobalPipes(new ValidationPipe({ transform: true }));

  const config = new DocumentBuilder()
    .setTitle('React Upskill API')
    .setDescription('The invoices API description')
    .setVersion('1.0')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  await app.listen(PORT);
}

postgresDataSource
  .initialize()
  .then(() => {
    console.log('Postgres Data Source has been initialized');
    bootstrap();
  })
  .catch((error) => console.log(error));

// https://radanfolio.vercel.app/posts/seed-database-with-typeorm-in-2023
