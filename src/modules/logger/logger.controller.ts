import { Controller } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { LoggerService } from './logger.service';
import { CreateLoggerDto } from './dto/create-logger.dto';
import { UpdateLoggerDto } from './dto/update-logger.dto';

@Controller('logger')
export class LoggerController {
  constructor(private readonly loggerService: LoggerService) {}

  @MessagePattern('create_log')
  create(@Payload() createLoggerDto: CreateLoggerDto) {
    return this.loggerService.create(createLoggerDto);
  }

  @MessagePattern('findAllLogger')
  findAll() {
    return this.loggerService.findAll();
  }

  @MessagePattern('findOneLogger')
  findOne(@Payload() id: number) {
    return this.loggerService.findOne(id);
  }

  @MessagePattern('updateLogger')
  update(@Payload() updateLoggerDto: UpdateLoggerDto) {
    return this.loggerService.update(updateLoggerDto.id, updateLoggerDto);
  }

  @MessagePattern('removeLogger')
  remove(@Payload() id: number) {
    return this.loggerService.remove(id);
  }
}
