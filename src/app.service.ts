import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getPoetryApi(): string {
    return 'thank you for request my poetry-api!!!';
  }
}
