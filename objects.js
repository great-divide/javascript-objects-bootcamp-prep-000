var playlist = { 
  name: "songTitle"
}

function updatePlaylist(playlist, name, songTitle) {
  playlist[name] = songTitle
  
}

function removeFromPlaylist(playlist, name) {
  delete playlist.name;
  return playlist
  
}