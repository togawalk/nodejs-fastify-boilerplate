import app from './app'
import { configuration } from './configuration'

app.listen({ port: configuration.PORT }, (err, address) => {
  const sucessMessage = `Server listening at ${address}`
  if (err) {
    app.log.error(err)
    process.exit(1)
  }
  app.log.info(sucessMessage)
  if (configuration.logger.LOG_TO_TERM === false) {
    console.info(sucessMessage)
  }
})
