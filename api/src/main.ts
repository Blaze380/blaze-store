import "./instrument";
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Logger, VersioningType } from "@nestjs/common";

async function bootstrap () {
  const API_PORT = process.env.API_PORT ?? 8999;
  const app = await NestFactory.create(AppModule, {
     // Don't worry, the library will automatically re-add the default body parsers.
    bodyParser: false, // Required for Better Auth
  });

  app.enableVersioning({
    type: VersioningType.URI,
    prefix: 'v',
  },
  );
  await app.listen(API_PORT);
  new Logger('NestApplication').log(`Application is running on port ${ API_PORT }`);
}
bootstrap();
