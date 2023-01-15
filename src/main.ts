import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';
import { NestExpressApplication } from '@nestjs/platform-express';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { runSeeders } from 'typeorm-extension';
import { postgresDataSource } from './appDataSource';
import { AppModule } from './app.module';

const PORT = Number(process.env.API_PORT) || 4000;

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
  .then(async () => {
    console.log('Postgres Data Source has been initialized');
    await runSeeders(postgresDataSource);
    bootstrap();
  })
  .catch((error) => console.error(error));
