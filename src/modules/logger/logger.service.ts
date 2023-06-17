import { Injectable } from '@nestjs/common';
import { CreateLoggerDto } from './dto/create-logger.dto';
import { UpdateLoggerDto } from './dto/update-logger.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { LoggerEntity } from './entities/logger.entity';
import { Repository } from 'typeorm';

@Injectable()
export class LoggerService {

  constructor(@InjectRepository(LoggerEntity) private readonly repository: Repository<LoggerEntity>,) { }

  public async create(createLoggerDto: CreateLoggerDto) {
   return await this.repository.save(createLoggerDto);
  }

  findAll() {
    return `This action returns all logger`;
  }

  findOne(id: number) {
    return `This action returns a #${id} logger`;
  }

  update(id: number, updateLoggerDto: UpdateLoggerDto) {
    return `This action updates a #${id} logger`;
  }

  remove(id: number) {
    return `This action removes a #${id} logger`;
  }
}
