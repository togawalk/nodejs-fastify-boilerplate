import fastify from 'fastify'
import routes from './routes'
import { loggerConfiguration } from './configuration/loggerConfiguration'

const server = fastify({
  logger: loggerConfiguration,
})

server.register(routes)

export default server
