import fastify from 'fastify'
import { loggerConfiguration } from './configuration/loggerConfiguration'
import routes from './routes'

const server = fastify({
  logger: loggerConfiguration,
})

server.register(routes)

export default server
