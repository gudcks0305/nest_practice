import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule } from '@nestjs/swagger';
import { swagger_config } from './common/swagger.config';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const document = SwaggerModule.createDocument(app, swagger_config);
  SwaggerModule.setup('docs', app, document);
  await app.listen(3000);
}
bootstrap();
