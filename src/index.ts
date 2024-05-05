import app from './app'
import { configuration } from './configuration'

app.listen({ port: configuration.PORT }, (err, address) => {
  if (err) {
    console.error(err)
    process.exit(1)
  }
  console.log(`Server listening at ${address}`)
})
