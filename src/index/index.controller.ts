import type { FastifyInstance, FastifyReply, FastifyRequest } from 'fastify'

export async function indexController(fastify: FastifyInstance) {
  fastify.get(
    '/checkhealth',
    async (_request: FastifyRequest, reply: FastifyReply) =>
      reply.send('Alive'),
  )
}
