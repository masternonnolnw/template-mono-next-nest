import { Injectable } from '@nestjs/common'
import { ok } from 'src/common/utils/ts-rest'

@Injectable()
export class HelloService {
  getHello() {
    return ok({ message: 'Hello, world!' })
  }

  postHello(text: string) {
    return ok({ message: `Hello, ${text}!` })
  }
}
