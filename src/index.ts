import app from './app'
import { configuration } from './configuration'

app.listen({ port: configuration.PORT }, (err, address) => {
  if (err) {
    app.log.error(err)
    process.exit(1)
  }
  app.log.info(`Server listening at ${address}`)
})
