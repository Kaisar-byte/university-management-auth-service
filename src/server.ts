import mongoose from 'mongoose'

async function main() {
  try {
    await mongoose.connect('')
    console.log('DB connected')
  } catch (err) {
    console.log('DB Connection failed', err)
  }
}
main()
