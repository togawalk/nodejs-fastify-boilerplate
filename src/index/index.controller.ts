import { FastifyInstance, FastifyRequest, FastifyReply } from 'fastify'

export async function indexController(fastify: FastifyInstance) {
  fastify.get(
    '/checkhealth',
    async function (_request: FastifyRequest, reply: FastifyReply) {
      return reply.send('Alive')
    }
  )
}
