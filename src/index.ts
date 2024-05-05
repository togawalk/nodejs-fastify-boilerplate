import app from './app'
import { configuration } from './configuration'

app.listen({ port: configuration.PORT }, (err, address) => {
  if (err) {
    // eslint-disable-next-line no-console
    console.error(err)
    process.exit(1)
  }
  // eslint-disable-next-line no-console
  console.log(`Server listening at ${address}`)
})
