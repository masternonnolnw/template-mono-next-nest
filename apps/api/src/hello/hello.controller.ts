import { Controller } from '@nestjs/common'
import { HelloService } from './hello.service'
import { tsRestHandler, TsRestHandler } from '@ts-rest/nest'
import { makeResponse } from 'src/common/utils/ts-rest'

import { helloContract } from 'api-contract'

@Controller()
export class HelloController {
  constructor(private readonly helloService: HelloService) {}

  @TsRestHandler(helloContract)
  async handler() {
    return tsRestHandler(helloContract, {
      getHello: async () => {
        const response = this.helloService.getHello()

        return makeResponse(response)
      },
      postHello: async ({ body }) => {
        const response = this.helloService.postHello(body.name)

        return makeResponse(response)
      },
    })
  }
}
