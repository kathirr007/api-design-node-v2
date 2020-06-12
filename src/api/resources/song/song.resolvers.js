import { Song } from './song.model'
// import merge from 'lodash.merge'

const getOneSong = async (_, {id}) => {
  const song = await Song.findById(id).exec()
  if(!song) {
    throw new Error(`Cannot find song with the ${id}`)
  }
  return song
}

const allSongs = () => {
  return Song.find({}).exec()
}

export const songResolvers = {
  Query: {
    Song: getOneSong,
    allSongs
  }
}
