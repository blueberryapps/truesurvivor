const io = require('socket.io-client')
var socket = io.connect('http://localhost:9000');
const diff = (Math.floor(Math.random() * 1000)).toString()


socket.emit('auth', diff);
socket.emit('update_character', {
  name: 'hello' + diff
})

socket.emit('find_fight')

socket.on('game_state_update', state => {
  console.log('new state voe', diff, state);
})

socket.on('game_result', won => {
  console.log('game ent',diff, won);
})


/*
  auth -> uid
  update_character -> character_object
  find_fight -> ()
  skill -> skill_key
*/
