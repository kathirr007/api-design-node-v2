import mongoose from 'mongoose'
mongoose.set('useNewUrlParser', true);
mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex', true);
mongoose.set('useUnifiedTopology', true);
mongoose.Promise = global.Promise

export const connect = () => {
  return mongoose.connect('mongodb://localhost/jams')
}
