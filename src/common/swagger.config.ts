import { DocumentBuilder } from '@nestjs/swagger';

const config = new DocumentBuilder()
  .setTitle('Nest practice API')
  .setDescription('The nest practice API description')
  .setVersion('1.0')
  .build();
export const swagger_config = config;
