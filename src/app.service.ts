import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  appDisabled(appId: any): void {
    console.log(appId)
  }
}
