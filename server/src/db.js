const mongoose = require('mongoose')
const config = require('./config')

export default (cb) => {

  mongoose.Promise = global.Promise
  const options = {
    server: {
      socketOptions: {
        keepAlive: 300000,
        connectTimeoutMS: 30000
      }
    },
    replset: {
      socketOptions: {
        keepAlive: 300000,
        connectTimeoutMS : 30000
      }
    }
  }

  mongoose.connect(`mongodb://localhost:27017`, options)

  const db = mongoose.connection

  db.on('error',  console.error.bind(console, 'Database connection error:'))
  db.once('open', () => {
    console.log('===> Database connection established')
    if (cb) cb()
  })
  if(__DEV__) mongoose.set('debug', true)

  return db
}
