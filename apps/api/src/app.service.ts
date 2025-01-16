import { Injectable } from '@nestjs/common'

@Injectable()
export class AppService {
  getHello(): string {
    return 'Welcome to Herbarium API🌿 to see the API documentation go to <a href="/api">/api</a> or <a href="/swagger">/swagger</a>'
  }
}
