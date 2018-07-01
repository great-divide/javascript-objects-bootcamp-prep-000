var playlist = { 
  artistName: 'songTitle'
}

function updatePlaylist(playlist, artistName, songTitle) {
  playlist[artistName] = songTitle
  
}

function removeFromPlaylist(songTitle, artistName) {
delete playlist.artistName
return playlist
}