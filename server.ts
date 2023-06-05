import mongoose from 'mongoose'
import app from './src/app'
import config from './src/config'

async function bootstrap() {
  try {
    await mongoose.connect(config.database_url as string)
    console.log('database is connected successfully')
    app.listen(config.port, () => {
      console.log(`Example app listening on port ${config.port}`)
    })
  } catch (err) {
    console.log('Failed to connect DB', err)
  }
}

bootstrap()
