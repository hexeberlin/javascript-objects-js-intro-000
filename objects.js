let playlist = {Queen: 'We are the champions'}
function updatePlaylist(playlist, name, song){
  playlist.name = song;
  return playlist;
}
function removeFromPlaylist(playlist, name){
  delete playlist.name;
  return playlist;
}