import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Toastmasters backend server is up and running!!';
  }
}
