import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { LoggerModule } from './modules/logger/logger.module';
import { AppsModule } from './modules/apps/apps.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.env',
    }),
    TypeOrmModule.forRootAsync({
      useFactory: () => ({
        type: 'mongodb',
        url: process.env.MONGODB_URI,
        database: process.env.MONGODB_DB,
        entities: [__dirname + '/**/*.entity{.ts,.js}'],
        subscribers: [__dirname + "/**/subscriber/*.subscriber{.ts,.js}"]
      }),
    }),
    LoggerModule,
    AppsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
