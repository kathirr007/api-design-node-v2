import { Playlist } from './playlist.model'

const getPlaylist = (_, {id}) => {
  return Playlist.findById(id).exec()
}

const allPlaylists = () => {
  return Playlist.find({}).exec()
}

const newPlaylist = () => {
  return Playlist.create(input)
}

const updatePlaylist = (_, {input}) => {
  const {id, ...update} = input // This removes the "id" from "input" and create two variables, ie: 1. "id" & 2. "update" from the obj "input"

  return Playlist.findByIdAndUpdate(id, update, {new: true, upsert: true}).exec()
}

export const playlistResolvers = {
  Query: {
    allPlaylists,
    Playlist: getPlaylist,
  },

  Mutation: {
    Playlist: newPlaylist,
    updatePlaylist
  }
}
