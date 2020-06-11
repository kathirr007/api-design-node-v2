import mongoose from 'mongoose'
mongoose.Promise = global.Promise

import appConfig from './config'

export const connect = (config = appConfig) => {
  return mongoose.connect(config.db.url, {
    useMongoClient: true
  })
}
