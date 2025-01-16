// src/main.ts

import { HttpAdapterHost, NestFactory, Reflector } from '@nestjs/core'
import { AppModule } from './app.module'
import { SwaggerModule } from '@nestjs/swagger'
import {
  ClassSerializerInterceptor,
  Logger,
  ValidationPipe,
} from '@nestjs/common'

import { PrismaClientExceptionFilter } from 'prisma/prisma-client-exception/prisma-client-exception.filter'
import { generateOpenApi } from '@ts-rest/open-api'
import { helloContract } from 'api-contract'

import { apiReference } from '@scalar/nestjs-api-reference'

async function bootstrap() {
  const app = await NestFactory.create(AppModule)

  app.enableCors()

  app.useGlobalPipes(new ValidationPipe())

  app.useGlobalInterceptors(new ClassSerializerInterceptor(app.get(Reflector)))

  const { httpAdapter } = app.get(HttpAdapterHost)
  app.useGlobalFilters(new PrismaClientExceptionFilter(httpAdapter))

  const document = generateOpenApi(helloContract, {
    info: {
      title: 'herbarium API',
      version: '1.0.0',
      description: 'herbarium API',
    },
  })

  SwaggerModule.setup('api', app, document)

  app.use(
    '/swagger',
    apiReference({
      spec: {
        content: document,
      },
    }),
  )

  const port = process.env.PORT || 5000

  Logger.log(`Listening on port ${port}`, 'Bootstrap')

  await app.listen(port)
}
bootstrap()
