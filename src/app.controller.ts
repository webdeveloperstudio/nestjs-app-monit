import { Controller } from '@nestjs/common';
import { AppService } from './app.service';
import { Ctx, EventPattern, NatsContext, Payload } from '@nestjs/microservices';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @EventPattern('app.shutdown')
  appShutdown(@Payload() message: any, @Ctx() context: NatsContext): void {
    console.log('app.shutdown');
    console.log(message);
    console.log(context);
    this.appService.appDisabled(message);
  }
}
