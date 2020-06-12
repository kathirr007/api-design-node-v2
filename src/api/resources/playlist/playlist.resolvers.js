import { Playlist } from './playlist.model'
import merge from 'lodash.merge'

const getPlaylist = (_, {id}) => {
  return Playlist.findById(id).exec()
}

const allPlaylists = () => {
  return Playlist.find({}).exec()
}

export const songResolvers = {
  Query: {
    Playlist: getPlaylist,
    allPlaylists
  }
}
