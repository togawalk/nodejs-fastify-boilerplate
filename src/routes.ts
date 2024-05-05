import { FastifyInstance } from 'fastify'
import { indexController } from './index/index.controller'

export default async function routes(fastify: FastifyInstance) {
  fastify.register(indexController, { prefix: '/' })
}
