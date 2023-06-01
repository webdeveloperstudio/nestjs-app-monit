import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';

const MSM_HOST: string = process.env.host || 'localhost';
const MSM_PORT: number = parseInt(process.env.host) || 3001;

async function bootstrap() {

  const app = await NestFactory.createMicroservice<MicroserviceOptions>(AppModule, {
    transport: Transport.TCP,
    options: {
      host: MSM_HOST,
      port: MSM_PORT
    }
  });
  await app.listen();
}
bootstrap().then(() => console.log(`Microservice is listening on: ${MSM_HOST}:${MSM_PORT}`));
