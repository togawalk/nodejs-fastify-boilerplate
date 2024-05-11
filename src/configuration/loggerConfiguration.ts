import type { FastifyRequest } from 'fastify'
import { configuration } from '.'

const logtailPinoTarget = {
  target: '@logtail/pino',
  options: {
    sourceToken: configuration.logger.BETTER_STACK_SOURCE_TOKEN,
  },
}

const pinoFileTarget = {
  target: 'pino/file',
  options: {
    destination: './server.log',
  },
}

const pinoPrettyTarget = {
  target: 'pino-pretty',
  options: {
    translateTime: 'HH:MM:ss Z',
    colorize: true,
    ignore: 'pid,hostname',
  },
}

export const loggerConfiguration = {
  level: 'info',
  serializers: {
    req(request: FastifyRequest) {
      return {
        url: request.url,
      }
    },
  },
  transport: {
    targets: [
      ...(configuration.logger.BETTER_STACK_INTEGRATION
        ? [logtailPinoTarget]
        : []),
      ...(configuration.logger.LOG_TO_FILE ? [pinoFileTarget] : []),
      ...(configuration.logger.LOG_TO_TERM ? [pinoPrettyTarget] : []),
    ],
  },
}
